import { InlineKeyboard } from "grammy";
import { selectionHelper, SelectOption } from "../helpers/selection.helper";

const menuButtons = {
  vip: { id: "vip", name: "💎 VIP" },
  telemetry: { id: "telemetry", name: "📈 Телеметрия (Карта)" },
  findRace: { id: "find_race", name: "🚀 Найти гонку" },
  top: { id: "top", name: "📊 Топ игроков" },
  profile: { id: "profile", name: "👤 Профиль" },
  settings: { id: "settings", name: "⚙️ Настройки" },
  help: { id: "help", name: "📚 Помощь" },
};

const allMenuOptions: SelectOption<string>[] = [
  {
    id: menuButtons.findRace.id,
    label: menuButtons.findRace.name,
    value: "find_race",
  },
  { id: menuButtons.top.id, label: menuButtons.top.name, value: "top" },
  {
    id: menuButtons.telemetry.id,
    label: menuButtons.telemetry.name,
    value: "telemetry",
  },
  {
    id: menuButtons.profile.id,
    label: menuButtons.profile.name,
    value: "profile",
  },
  { id: menuButtons.vip.id, label: menuButtons.vip.name, value: "vip" },
  {
    id: menuButtons.settings.id,
    label: menuButtons.settings.name,
    value: "settings",
  },
  { id: menuButtons.help.id, label: menuButtons.help.name, value: "help" },
];

const developerMenuOption: SelectOption<string> = {
  id: "developer",
  label: "🤖 Для разработчиков",
  value: "developer",
};

export const menuKeyboard = {
  main({ isDeveloper, isVip }: { isDeveloper?: boolean; isVip?: boolean }) {
    const gridItems = allMenuOptions.filter((i) => i.id !== menuButtons.vip.id);

    if (isDeveloper) {
      gridItems.push(developerMenuOption);
    }

    return selectionHelper.createKeyboard<string>(gridItems, "menu", false, {
      label: menuButtons.vip.name,
      id: menuButtons.vip.id,
    });
  },
};
