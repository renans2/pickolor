import { useColorPicker } from "../../context/ColorPickerProvider";
import { useEffect, useRef, useState } from "react";
import chroma, { type Color } from "chroma-js";
import {
  S_Container,
  S_NoColorsSaved,
  S_OptionsButton,
  S_SaveButton,
  S_SavedColorItem,
  S_SavedColorOptions,
  S_SavedColorsList,
  S_SmallColorPreview,
} from "./styles";
import { Check, Pencil, Trash2, X } from "lucide-react";
import { useTheme } from "styled-components";
import type { SavedColor } from "../../types/SavedColor";
import { AnimatePresence } from "motion/react";
import useLocalStorage from "../../hooks/useLocalStorage";

const ICON_SETTINGS = {
  size: 18,
  strokeWidth: 2,
};

export default function SavedColors() {
  const { color, setColor } = useColorPicker();
  const [savedColors, setSavedColors] = useLocalStorage<SavedColor[]>("savedColors", []);
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
  };

  const handleSaveNewColor = () => {
    setEditingColorId(undefined);

    setSavedColors((prev) => {
      const copy = [...prev];
      copy.unshift({
        color: color.hex(),
        id: Math.floor(performance.now()),
      });
      return copy;
    });

    scrollTop();
  };

  const handleRemoveSavedColor = (id: number) => {
    setSavedColors((prev) => prev.filter((savedColor) => savedColor.id !== id));
  };

  const handleSetAsCurrentColor = (color: Color) => {
    setColor(color);
  };

  const handleEditColor = (savedColor: SavedColor) => {
    setColor(chroma(savedColor.color));
    setEditingColorId(savedColor.id);
  };

  const handleSaveEditedColor = () => {
    setSavedColors((prev) => {
      const copy = prev.filter(
        (savedColor) => editingColorId !== savedColor.id
      );

      copy.unshift({
        color: color.hex(),
        id: editingColorId!,
      });

      return copy;
    });

    scrollTop();
    setEditingColorId(undefined);
  };

  useEffect(() => {
    const stopEditingColor = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setEditingColorId(undefined);
      }
    };

    window.addEventListener("keydown", stopEditingColor);
    return () => window.removeEventListener("keypress", stopEditingColor);
  }, []);

  const disableButtons = editingColorId !== undefined;

  return (
    <S_Container>
      <S_SaveButton
        $color={color}
        onClick={handleSaveNewColor}
      >
        Save color
      </S_SaveButton>

      {savedColors.length === 0 ? (
        <S_NoColorsSaved>
          Empty!
        </S_NoColorsSaved>
      ) : (
        <S_SavedColorsList ref={ulRef}>
          <AnimatePresence mode="popLayout">
            {savedColors.map((savedColor) => (
              <S_SavedColorItem
                key={savedColor.id}
                layout
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                $isEditingThisColorItem={
                  !editingColorId ? undefined : editingColorId === savedColor.id
                }
              >
                <S_SavedColorOptions>
                  {editingColorId === savedColor.id ? (
                    <>
                      <S_OptionsButton
                        title="Cancel"
                        onClick={() => setEditingColorId(undefined)}
                      >
                        <X {...ICON_SETTINGS} color={iconColor} />
                      </S_OptionsButton>

                      <S_OptionsButton
                        title="Save"
                        onClick={() => handleSaveEditedColor()}
                      >
                        <Check {...ICON_SETTINGS} color={iconColor} />
                      </S_OptionsButton>
                    </>
                  ) : (
                    <>
                      <S_OptionsButton
                        disabled={disableButtons}
                        title="Delete"
                        onClick={() => handleRemoveSavedColor(savedColor.id)}
                      >
                        <Trash2 {...ICON_SETTINGS} color={iconColor} />
                      </S_OptionsButton>

                      <S_OptionsButton
                        disabled={disableButtons}
                        title="Edit"
                        onClick={() => handleEditColor(savedColor)}
                      >
                        <Pencil {...ICON_SETTINGS} color={iconColor} />
                      </S_OptionsButton>
                    </>
                  )}
                </S_SavedColorOptions>

                <S_SmallColorPreview
                  $clickable={editingColorId === undefined}
                  $color={
                    editingColorId === savedColor.id ? color.hex() : savedColor.color
                  }
                  onClick={() => {
                    if (!editingColorId)
                      handleSetAsCurrentColor(chroma(savedColor.color));
                  }}
                />
              </S_SavedColorItem>
            ))}
          </AnimatePresence>
        </S_SavedColorsList>
      )}

    </S_Container>
  );
}
