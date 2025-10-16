import { SquareArrowOutUpRight } from "lucide-react";
import { S_Header, S_RepoButton, S_Title } from "./styles";

export default function Header() {
  return (
    <S_Header>
      <S_Title>Pickolor</S_Title>
      <S_RepoButton href="https://github.com/renans2/pickolor" target="_blank">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
        <span>Github Repo</span>
        <SquareArrowOutUpRight size={18} strokeWidth={2.5} />
      </S_RepoButton>
    </S_Header>
  );
}
