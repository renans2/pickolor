import { useSelectedColor } from "../../context/SelectedColorProvider";
import { useEffect, useRef, useState } from "react";
import type { Color } from "chroma-js";
import { S_Container, S_OptionsButton, S_SaveButton, S_SavedColorItem, S_SavedColorOptions, S_SavedColorsList, S_SmallColorPreview } from "./styles";
import { Pencil, Save, Trash2 } from "lucide-react";
import { useTheme } from "styled-components";
import type { SavedColor } from "../../types/SavedColor";
import { AnimatePresence } from "motion/react";

const ICON_SETTINGS = {
  size: 18,
  strokeWidth: 2,
}

export default function SavedColors() {
  const { color, setColor } = useSelectedColor();
  const [savedColors, setSavedColors] = useState<SavedColor[]>([]);
  const [editingColorId, setEditingColorId] = useState<number>();
  const { colors: { textPrimary: iconColor } } = useTheme();
  const ulRef = useRef<HTMLUListElement>(null);

  const scrollTop = () => {
    if (ulRef.current) {
      ulRef.current.scroll({
        behavior: "smooth",
        top: 0,
      });
    }
  }

  const handleSaveNewColor = () => {
    setSavedColors(prev => {
      const copy = [...prev];
      copy.unshift({
        color,
        id: Math.floor(performance.now())
      });
      return copy;
    });

    scrollTop();
  }

  const handleRemoveSavedColor = (id: number) => {
    setSavedColors(prev => prev.filter((savedColor) => savedColor.id !== id));
  }

  const handleSetAsCurrentColor = (color: Color) => {
    setColor(color);
  }

  const handleEditColor = (savedColor: SavedColor) => {
    setColor(savedColor.color);
    setEditingColorId(savedColor.id);
  }

  const handleSaveEditedColor = () => {
    setSavedColors(prev => {
      const copy = prev.filter((savedColor) => editingColorId !== savedColor.id);
      
      copy.unshift({
        color,
        id: editingColorId!
      });

      return copy;
    });

    scrollTop();
    setEditingColorId(undefined);
  }

  useEffect(() => {
    const stopEditingColor = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setEditingColorId(undefined);
      }
    }

    window.addEventListener("keydown", stopEditingColor);
    return () => window.removeEventListener("keypress", stopEditingColor);
  }, []);

  const disableButtons = editingColorId !== undefined;
  const disableSaveNewColorButton = color.css() === savedColors[0]?.color.css();

  return (
    <S_Container>
      <S_SaveButton
        title={disableSaveNewColorButton ? "You just saved this color" : ""}
        disabled={disableButtons || disableSaveNewColorButton}
        onClick={handleSaveNewColor}
      >
        <span>Save color</span>
        <S_SmallColorPreview $color={color} />
      </S_SaveButton>

      <S_SavedColorsList ref={ulRef}>
        <AnimatePresence mode="popLayout">
          {savedColors.map((savedColor) => (
            <S_SavedColorItem 
              key={savedColor.id}
              layout
              initial={{ scale: .5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: .5, opacity: 0 }}
              $isEditingThisColorItem={
                !editingColorId ? undefined : editingColorId === savedColor.id
              }
            >
              <S_SavedColorOptions>
                <S_OptionsButton
                  disabled={disableButtons}
                  title="Delete"
                  onClick={() => handleRemoveSavedColor(savedColor.id)}
                >
                  <Trash2 {...ICON_SETTINGS} color={iconColor} />
                </S_OptionsButton>

                {editingColorId === savedColor.id ? (
                  <S_OptionsButton
                    title="Save"
                    onClick={() => handleSaveEditedColor()}
                  >
                    <Save {...ICON_SETTINGS} color={iconColor} />
                  </S_OptionsButton>
                ) : (
                  <S_OptionsButton
                    disabled={disableButtons}
                    title="Edit"
                    onClick={() => handleEditColor(savedColor)}
                  >
                    <Pencil {...ICON_SETTINGS} color={iconColor} />
                  </S_OptionsButton>
                )}
              </S_SavedColorOptions>

              <S_SmallColorPreview
                $clickable={editingColorId === undefined}
                $color={
                  editingColorId === savedColor.id ? color : savedColor.color
                }
                onClick={() => {
                  if (!editingColorId)
                    handleSetAsCurrentColor(savedColor.color);
                }}
              />
            </S_SavedColorItem>
          ))}
        </AnimatePresence>
      </S_SavedColorsList>
    </S_Container>
  );
}
