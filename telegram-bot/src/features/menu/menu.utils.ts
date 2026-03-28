import { menuMessages } from "../../resources/menu.messages";
import { menuKeyboard } from "../../keyboards/menu.keyboard";
import { userService } from "../../service/user.service";

/**
 * Получает актуальный текст и клавиатуру главного меню
 * в зависимости от статуса VIP и роли разработчика.
 */
export async function getMainMenuContent(userId: number) {
  const vip = await userService.isVip({ telegramId: userId });

  const isDeveloper = userId == Number(process.env.DEVELOPER_ID);

  const keyboard = menuKeyboard.main({
    isVip: vip.status === 200 ? vip.data.isVip : false,
    isDeveloper,
  });

  if (vip.status === 200) {
    return {
      text: menuMessages.mainMenu(),
      keyboard,
      isVip: vip.data.isVip,
    };
  }

  return {
    text: menuMessages.error(),
    isVip: vip.data.isVip,
  };
}
