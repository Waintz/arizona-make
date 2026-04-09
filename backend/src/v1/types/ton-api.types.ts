// 1. Объект одной транзакции (внутри массива result)
export interface TonTransaction {
  "@type": "ext.transaction";
  address: TonAccountAddress;
  account: string;           // Hex-адрес аккаунта
  utime: number;             // Unix timestamp
  data: string;              // Base64-строка сырых данных транзакции
  transaction_id: TonTransactionId;
  fee: string;               // Все суммы в этом API обычно приходят строками (нанотонны)
  storage_fee: string;
  other_fee: string;
  
  // Входящее сообщение
  in_msg: TonMessage;
  
  // Массив исходящих сообщений
  out_msgs: TonMessage[];
}

// 2. Идентификатор транзакции
export interface TonTransactionId {
  "@type": "internal.transactionId";
  lt: string;                // Здесь Logical Time приходит строкой
  hash: string;              // Хеш транзакции (Base64)
}

// 3. Сообщение (входящее или исходящее)
export interface TonMessage {
  "@type": "ext.message";
  hash: string;
  source: string;            // Ссылка на адрес отправителя (EQ...)
  destination: string;       // Ссылка на адрес получателя
  value: string;             // Сумма в нанотонах (строкой!)
  fwd_fee: string;
  ihr_fee: string;
  created_lt: string;
  body_hash: string;
  msg_data: TonMsgData;      // Данные сообщения (текст или raw)
  message: string;           // Текст комментария (если это текстовое сообщение)
}

// 4. Данные сообщения (может быть текстом или бинарными данными)
export interface TonMsgData {
  "@type": "msg.dataText" | "msg.dataRaw";
  text?: string;             // Base64 закодированный текст (например "VklQLUM0MzFCOQ==")
  body?: string;             // Base64 закодированное тело (если dataRaw)
  init_state?: string;
}

// 5. Вспомогательный объект адреса
export interface TonAccountAddress {
  "@type": "accountAddress";
  account_address: string;   // Тот самый адрес в формате EQC...
}