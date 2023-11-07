


interface ITabProps {
  num: number;
  activeTab: number;
  onClick: (num: number) => void;
}

export function Tab({ num, activeTab, onClick }: ITabProps) {
  return (
    <button
      className={activeTab === num ? "tab active" : "tab"}
      onClick={() => onClick(num)}
    >
      Tab {num + 1}
    </button>
  );
}