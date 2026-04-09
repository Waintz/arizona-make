export function parseFieldsToPrisma(fields: string[]) {
  const result: any = {};

  // Сортируем: сначала короткие (родители), потом длинные (дети)
  // Это важно, чтобы мы сначала увидели 'user', а потом 'user.game_accounts'
  const sortedFields = fields.sort((a, b) => a.length - b.length);

  sortedFields.forEach((field) => {
    const parts = field.split('.');
    let currentLevel = result;

    parts.forEach((part, index) => {
      const isLast = index === parts.length - 1;

      if (isLast) {
        // Если это конечное поле (например 'user' или 'game_accounts')
        // Просто ставим true, чтобы забрать объект целиком
        currentLevel[part] = true;
      } else {
        // ЭТО ВЛОЖЕННОСТЬ (мы идем сквозь 'user' к 'game_accounts')
        
        // Если этого ключа еще нет -> начинаем select (точечная выборка)
        if (!currentLevel[part]) {
          currentLevel[part] = { select: {} };
        }

        // ВАЖНЫЙ МОМЕНТ:
        // Если там было true (значит мы хотели весь объект), но теперь лезем внутрь...
        // ...мы должны превратить это в INCLUDE, чтобы старые поля не исчезли!
        if (currentLevel[part] === true) {
          currentLevel[part] = { include: {} };
        }

        // Определяем, куда проваливаться дальше: в select или в include
        if (currentLevel[part].select) {
          currentLevel = currentLevel[part].select;
        } else if (currentLevel[part].include) {
          currentLevel = currentLevel[part].include;
        }
      }
    });
  });

  return result;
}