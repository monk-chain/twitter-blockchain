import { IconType } from 'react-icons';

const style = {
  ulContainer: `hover:bg-primary-navi_hover duration-2 flex transform items-center rounded-full py-3 pl-3 pr-8 transition-colors hover:bg-opacity-70`,
  textGeneral: `cursor-pointer sidebar-text font-regular ml-4 font-medium`,
  textActive: `cursor-pointer sidebar-text font-regular ml-4 font-bold`,
};

interface Props {
  text: string;
  selected: string;
  url?: string;
  Icon: IconType;
}

function SideberItem({ text, selected, url, Icon }: Props) {
  const isActive = text === selected ? true : false;

  return (
    <a href={url}>
      <div className={style.ulContainer}>
        <Icon />
        <li className={`${isActive ? style.textActive : style.textGeneral}`}>
          {text}
        </li>
      </div>
    </a>
  );
}

export default SideberItem;
