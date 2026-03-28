
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model VerificationCodes
 * 
 */
export type VerificationCodes = $Result.DefaultSelection<Prisma.$VerificationCodesPayload>
/**
 * Model UserSettings
 * 
 */
export type UserSettings = $Result.DefaultSelection<Prisma.$UserSettingsPayload>
/**
 * Model PromoCode
 * 
 */
export type PromoCode = $Result.DefaultSelection<Prisma.$PromoCodePayload>
/**
 * Model GameAccount
 * 
 */
export type GameAccount = $Result.DefaultSelection<Prisma.$GameAccountPayload>
/**
 * Model Location
 * 
 */
export type Location = $Result.DefaultSelection<Prisma.$LocationPayload>
/**
 * Model Race
 * 
 */
export type Race = $Result.DefaultSelection<Prisma.$RacePayload>
/**
 * Model RaceParticipant
 * 
 */
export type RaceParticipant = $Result.DefaultSelection<Prisma.$RaceParticipantPayload>
/**
 * Model RaceWitness
 * 
 */
export type RaceWitness = $Result.DefaultSelection<Prisma.$RaceWitnessPayload>
/**
 * Model RaceTelemetry
 * 
 */
export type RaceTelemetry = $Result.DefaultSelection<Prisma.$RaceTelemetryPayload>
/**
 * Model Transactions
 * 
 */
export type Transactions = $Result.DefaultSelection<Prisma.$TransactionsPayload>
/**
 * Model WithdrawalRequest
 * 
 */
export type WithdrawalRequest = $Result.DefaultSelection<Prisma.$WithdrawalRequestPayload>
/**
 * Model Tokens
 * 
 */
export type Tokens = $Result.DefaultSelection<Prisma.$TokensPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PromoType: {
  VIP_DAYS: 'VIP_DAYS',
  BALANCE: 'BALANCE'
};

export type PromoType = (typeof PromoType)[keyof typeof PromoType]


export const RaceStatus: {
  WAITING: 'WAITING',
  STARTED: 'STARTED',
  FINISHED: 'FINISHED',
  CANCELLED: 'CANCELLED'
};

export type RaceStatus = (typeof RaceStatus)[keyof typeof RaceStatus]


export const PaymentStatus: {
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const WithdrawalStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type WithdrawalStatus = (typeof WithdrawalStatus)[keyof typeof WithdrawalStatus]


export const VerificationCodeType: {
  WEB_LOGIN: 'WEB_LOGIN',
  PASSWORD_RESET: 'PASSWORD_RESET',
  GAME_LOGIN: 'GAME_LOGIN'
};

export type VerificationCodeType = (typeof VerificationCodeType)[keyof typeof VerificationCodeType]

}

export type PromoType = $Enums.PromoType

export const PromoType: typeof $Enums.PromoType

export type RaceStatus = $Enums.RaceStatus

export const RaceStatus: typeof $Enums.RaceStatus

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type WithdrawalStatus = $Enums.WithdrawalStatus

export const WithdrawalStatus: typeof $Enums.WithdrawalStatus

export type VerificationCodeType = $Enums.VerificationCodeType

export const VerificationCodeType: typeof $Enums.VerificationCodeType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationCodes`: Exposes CRUD operations for the **VerificationCodes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationCodes
    * const verificationCodes = await prisma.verificationCodes.findMany()
    * ```
    */
  get verificationCodes(): Prisma.VerificationCodesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userSettings`: Exposes CRUD operations for the **UserSettings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSettings
    * const userSettings = await prisma.userSettings.findMany()
    * ```
    */
  get userSettings(): Prisma.UserSettingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.promoCode`: Exposes CRUD operations for the **PromoCode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PromoCodes
    * const promoCodes = await prisma.promoCode.findMany()
    * ```
    */
  get promoCode(): Prisma.PromoCodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gameAccount`: Exposes CRUD operations for the **GameAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GameAccounts
    * const gameAccounts = await prisma.gameAccount.findMany()
    * ```
    */
  get gameAccount(): Prisma.GameAccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.location`: Exposes CRUD operations for the **Location** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Locations
    * const locations = await prisma.location.findMany()
    * ```
    */
  get location(): Prisma.LocationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.race`: Exposes CRUD operations for the **Race** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Races
    * const races = await prisma.race.findMany()
    * ```
    */
  get race(): Prisma.RaceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.raceParticipant`: Exposes CRUD operations for the **RaceParticipant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RaceParticipants
    * const raceParticipants = await prisma.raceParticipant.findMany()
    * ```
    */
  get raceParticipant(): Prisma.RaceParticipantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.raceWitness`: Exposes CRUD operations for the **RaceWitness** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RaceWitnesses
    * const raceWitnesses = await prisma.raceWitness.findMany()
    * ```
    */
  get raceWitness(): Prisma.RaceWitnessDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.raceTelemetry`: Exposes CRUD operations for the **RaceTelemetry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RaceTelemetries
    * const raceTelemetries = await prisma.raceTelemetry.findMany()
    * ```
    */
  get raceTelemetry(): Prisma.RaceTelemetryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transactions`: Exposes CRUD operations for the **Transactions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transactions.findMany()
    * ```
    */
  get transactions(): Prisma.TransactionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.withdrawalRequest`: Exposes CRUD operations for the **WithdrawalRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WithdrawalRequests
    * const withdrawalRequests = await prisma.withdrawalRequest.findMany()
    * ```
    */
  get withdrawalRequest(): Prisma.WithdrawalRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tokens`: Exposes CRUD operations for the **Tokens** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tokens
    * const tokens = await prisma.tokens.findMany()
    * ```
    */
  get tokens(): Prisma.TokensDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    VerificationCodes: 'VerificationCodes',
    UserSettings: 'UserSettings',
    PromoCode: 'PromoCode',
    GameAccount: 'GameAccount',
    Location: 'Location',
    Race: 'Race',
    RaceParticipant: 'RaceParticipant',
    RaceWitness: 'RaceWitness',
    RaceTelemetry: 'RaceTelemetry',
    Transactions: 'Transactions',
    WithdrawalRequest: 'WithdrawalRequest',
    Tokens: 'Tokens'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "verificationCodes" | "userSettings" | "promoCode" | "gameAccount" | "location" | "race" | "raceParticipant" | "raceWitness" | "raceTelemetry" | "transactions" | "withdrawalRequest" | "tokens"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      VerificationCodes: {
        payload: Prisma.$VerificationCodesPayload<ExtArgs>
        fields: Prisma.VerificationCodesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationCodesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationCodesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodesPayload>
          }
          findFirst: {
            args: Prisma.VerificationCodesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationCodesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodesPayload>
          }
          findMany: {
            args: Prisma.VerificationCodesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodesPayload>[]
          }
          create: {
            args: Prisma.VerificationCodesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodesPayload>
          }
          createMany: {
            args: Prisma.VerificationCodesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationCodesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodesPayload>[]
          }
          delete: {
            args: Prisma.VerificationCodesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodesPayload>
          }
          update: {
            args: Prisma.VerificationCodesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodesPayload>
          }
          deleteMany: {
            args: Prisma.VerificationCodesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationCodesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationCodesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodesPayload>[]
          }
          upsert: {
            args: Prisma.VerificationCodesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodesPayload>
          }
          aggregate: {
            args: Prisma.VerificationCodesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationCodes>
          }
          groupBy: {
            args: Prisma.VerificationCodesGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationCodesGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationCodesCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationCodesCountAggregateOutputType> | number
          }
        }
      }
      UserSettings: {
        payload: Prisma.$UserSettingsPayload<ExtArgs>
        fields: Prisma.UserSettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserSettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserSettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          findFirst: {
            args: Prisma.UserSettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserSettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          findMany: {
            args: Prisma.UserSettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>[]
          }
          create: {
            args: Prisma.UserSettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          createMany: {
            args: Prisma.UserSettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserSettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>[]
          }
          delete: {
            args: Prisma.UserSettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          update: {
            args: Prisma.UserSettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          deleteMany: {
            args: Prisma.UserSettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserSettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserSettingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>[]
          }
          upsert: {
            args: Prisma.UserSettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          aggregate: {
            args: Prisma.UserSettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSettings>
          }
          groupBy: {
            args: Prisma.UserSettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserSettingsCountArgs<ExtArgs>
            result: $Utils.Optional<UserSettingsCountAggregateOutputType> | number
          }
        }
      }
      PromoCode: {
        payload: Prisma.$PromoCodePayload<ExtArgs>
        fields: Prisma.PromoCodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PromoCodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoCodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PromoCodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoCodePayload>
          }
          findFirst: {
            args: Prisma.PromoCodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoCodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PromoCodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoCodePayload>
          }
          findMany: {
            args: Prisma.PromoCodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoCodePayload>[]
          }
          create: {
            args: Prisma.PromoCodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoCodePayload>
          }
          createMany: {
            args: Prisma.PromoCodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PromoCodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoCodePayload>[]
          }
          delete: {
            args: Prisma.PromoCodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoCodePayload>
          }
          update: {
            args: Prisma.PromoCodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoCodePayload>
          }
          deleteMany: {
            args: Prisma.PromoCodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PromoCodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PromoCodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoCodePayload>[]
          }
          upsert: {
            args: Prisma.PromoCodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoCodePayload>
          }
          aggregate: {
            args: Prisma.PromoCodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePromoCode>
          }
          groupBy: {
            args: Prisma.PromoCodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<PromoCodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.PromoCodeCountArgs<ExtArgs>
            result: $Utils.Optional<PromoCodeCountAggregateOutputType> | number
          }
        }
      }
      GameAccount: {
        payload: Prisma.$GameAccountPayload<ExtArgs>
        fields: Prisma.GameAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameAccountPayload>
          }
          findFirst: {
            args: Prisma.GameAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameAccountPayload>
          }
          findMany: {
            args: Prisma.GameAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameAccountPayload>[]
          }
          create: {
            args: Prisma.GameAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameAccountPayload>
          }
          createMany: {
            args: Prisma.GameAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameAccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameAccountPayload>[]
          }
          delete: {
            args: Prisma.GameAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameAccountPayload>
          }
          update: {
            args: Prisma.GameAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameAccountPayload>
          }
          deleteMany: {
            args: Prisma.GameAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GameAccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameAccountPayload>[]
          }
          upsert: {
            args: Prisma.GameAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameAccountPayload>
          }
          aggregate: {
            args: Prisma.GameAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGameAccount>
          }
          groupBy: {
            args: Prisma.GameAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameAccountCountArgs<ExtArgs>
            result: $Utils.Optional<GameAccountCountAggregateOutputType> | number
          }
        }
      }
      Location: {
        payload: Prisma.$LocationPayload<ExtArgs>
        fields: Prisma.LocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findFirst: {
            args: Prisma.LocationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findMany: {
            args: Prisma.LocationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          create: {
            args: Prisma.LocationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          createMany: {
            args: Prisma.LocationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LocationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          delete: {
            args: Prisma.LocationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          update: {
            args: Prisma.LocationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          deleteMany: {
            args: Prisma.LocationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LocationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          upsert: {
            args: Prisma.LocationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          aggregate: {
            args: Prisma.LocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocation>
          }
          groupBy: {
            args: Prisma.LocationGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocationCountArgs<ExtArgs>
            result: $Utils.Optional<LocationCountAggregateOutputType> | number
          }
        }
      }
      Race: {
        payload: Prisma.$RacePayload<ExtArgs>
        fields: Prisma.RaceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RaceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RaceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>
          }
          findFirst: {
            args: Prisma.RaceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RaceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>
          }
          findMany: {
            args: Prisma.RaceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>[]
          }
          create: {
            args: Prisma.RaceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>
          }
          createMany: {
            args: Prisma.RaceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RaceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>[]
          }
          delete: {
            args: Prisma.RaceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>
          }
          update: {
            args: Prisma.RaceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>
          }
          deleteMany: {
            args: Prisma.RaceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RaceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RaceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>[]
          }
          upsert: {
            args: Prisma.RaceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>
          }
          aggregate: {
            args: Prisma.RaceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRace>
          }
          groupBy: {
            args: Prisma.RaceGroupByArgs<ExtArgs>
            result: $Utils.Optional<RaceGroupByOutputType>[]
          }
          count: {
            args: Prisma.RaceCountArgs<ExtArgs>
            result: $Utils.Optional<RaceCountAggregateOutputType> | number
          }
        }
      }
      RaceParticipant: {
        payload: Prisma.$RaceParticipantPayload<ExtArgs>
        fields: Prisma.RaceParticipantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RaceParticipantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceParticipantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RaceParticipantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceParticipantPayload>
          }
          findFirst: {
            args: Prisma.RaceParticipantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceParticipantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RaceParticipantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceParticipantPayload>
          }
          findMany: {
            args: Prisma.RaceParticipantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceParticipantPayload>[]
          }
          create: {
            args: Prisma.RaceParticipantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceParticipantPayload>
          }
          createMany: {
            args: Prisma.RaceParticipantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RaceParticipantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceParticipantPayload>[]
          }
          delete: {
            args: Prisma.RaceParticipantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceParticipantPayload>
          }
          update: {
            args: Prisma.RaceParticipantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceParticipantPayload>
          }
          deleteMany: {
            args: Prisma.RaceParticipantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RaceParticipantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RaceParticipantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceParticipantPayload>[]
          }
          upsert: {
            args: Prisma.RaceParticipantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceParticipantPayload>
          }
          aggregate: {
            args: Prisma.RaceParticipantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRaceParticipant>
          }
          groupBy: {
            args: Prisma.RaceParticipantGroupByArgs<ExtArgs>
            result: $Utils.Optional<RaceParticipantGroupByOutputType>[]
          }
          count: {
            args: Prisma.RaceParticipantCountArgs<ExtArgs>
            result: $Utils.Optional<RaceParticipantCountAggregateOutputType> | number
          }
        }
      }
      RaceWitness: {
        payload: Prisma.$RaceWitnessPayload<ExtArgs>
        fields: Prisma.RaceWitnessFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RaceWitnessFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceWitnessPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RaceWitnessFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceWitnessPayload>
          }
          findFirst: {
            args: Prisma.RaceWitnessFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceWitnessPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RaceWitnessFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceWitnessPayload>
          }
          findMany: {
            args: Prisma.RaceWitnessFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceWitnessPayload>[]
          }
          create: {
            args: Prisma.RaceWitnessCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceWitnessPayload>
          }
          createMany: {
            args: Prisma.RaceWitnessCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RaceWitnessCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceWitnessPayload>[]
          }
          delete: {
            args: Prisma.RaceWitnessDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceWitnessPayload>
          }
          update: {
            args: Prisma.RaceWitnessUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceWitnessPayload>
          }
          deleteMany: {
            args: Prisma.RaceWitnessDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RaceWitnessUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RaceWitnessUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceWitnessPayload>[]
          }
          upsert: {
            args: Prisma.RaceWitnessUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceWitnessPayload>
          }
          aggregate: {
            args: Prisma.RaceWitnessAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRaceWitness>
          }
          groupBy: {
            args: Prisma.RaceWitnessGroupByArgs<ExtArgs>
            result: $Utils.Optional<RaceWitnessGroupByOutputType>[]
          }
          count: {
            args: Prisma.RaceWitnessCountArgs<ExtArgs>
            result: $Utils.Optional<RaceWitnessCountAggregateOutputType> | number
          }
        }
      }
      RaceTelemetry: {
        payload: Prisma.$RaceTelemetryPayload<ExtArgs>
        fields: Prisma.RaceTelemetryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RaceTelemetryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceTelemetryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RaceTelemetryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceTelemetryPayload>
          }
          findFirst: {
            args: Prisma.RaceTelemetryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceTelemetryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RaceTelemetryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceTelemetryPayload>
          }
          findMany: {
            args: Prisma.RaceTelemetryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceTelemetryPayload>[]
          }
          create: {
            args: Prisma.RaceTelemetryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceTelemetryPayload>
          }
          createMany: {
            args: Prisma.RaceTelemetryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RaceTelemetryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceTelemetryPayload>[]
          }
          delete: {
            args: Prisma.RaceTelemetryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceTelemetryPayload>
          }
          update: {
            args: Prisma.RaceTelemetryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceTelemetryPayload>
          }
          deleteMany: {
            args: Prisma.RaceTelemetryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RaceTelemetryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RaceTelemetryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceTelemetryPayload>[]
          }
          upsert: {
            args: Prisma.RaceTelemetryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceTelemetryPayload>
          }
          aggregate: {
            args: Prisma.RaceTelemetryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRaceTelemetry>
          }
          groupBy: {
            args: Prisma.RaceTelemetryGroupByArgs<ExtArgs>
            result: $Utils.Optional<RaceTelemetryGroupByOutputType>[]
          }
          count: {
            args: Prisma.RaceTelemetryCountArgs<ExtArgs>
            result: $Utils.Optional<RaceTelemetryCountAggregateOutputType> | number
          }
        }
      }
      Transactions: {
        payload: Prisma.$TransactionsPayload<ExtArgs>
        fields: Prisma.TransactionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          findFirst: {
            args: Prisma.TransactionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          findMany: {
            args: Prisma.TransactionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>[]
          }
          create: {
            args: Prisma.TransactionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          createMany: {
            args: Prisma.TransactionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>[]
          }
          delete: {
            args: Prisma.TransactionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          update: {
            args: Prisma.TransactionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          deleteMany: {
            args: Prisma.TransactionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>[]
          }
          upsert: {
            args: Prisma.TransactionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          aggregate: {
            args: Prisma.TransactionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransactions>
          }
          groupBy: {
            args: Prisma.TransactionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionsCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionsCountAggregateOutputType> | number
          }
        }
      }
      WithdrawalRequest: {
        payload: Prisma.$WithdrawalRequestPayload<ExtArgs>
        fields: Prisma.WithdrawalRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WithdrawalRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WithdrawalRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalRequestPayload>
          }
          findFirst: {
            args: Prisma.WithdrawalRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WithdrawalRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalRequestPayload>
          }
          findMany: {
            args: Prisma.WithdrawalRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalRequestPayload>[]
          }
          create: {
            args: Prisma.WithdrawalRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalRequestPayload>
          }
          createMany: {
            args: Prisma.WithdrawalRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WithdrawalRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalRequestPayload>[]
          }
          delete: {
            args: Prisma.WithdrawalRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalRequestPayload>
          }
          update: {
            args: Prisma.WithdrawalRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalRequestPayload>
          }
          deleteMany: {
            args: Prisma.WithdrawalRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WithdrawalRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WithdrawalRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalRequestPayload>[]
          }
          upsert: {
            args: Prisma.WithdrawalRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalRequestPayload>
          }
          aggregate: {
            args: Prisma.WithdrawalRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWithdrawalRequest>
          }
          groupBy: {
            args: Prisma.WithdrawalRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<WithdrawalRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.WithdrawalRequestCountArgs<ExtArgs>
            result: $Utils.Optional<WithdrawalRequestCountAggregateOutputType> | number
          }
        }
      }
      Tokens: {
        payload: Prisma.$TokensPayload<ExtArgs>
        fields: Prisma.TokensFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TokensFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TokensFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>
          }
          findFirst: {
            args: Prisma.TokensFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TokensFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>
          }
          findMany: {
            args: Prisma.TokensFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>[]
          }
          create: {
            args: Prisma.TokensCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>
          }
          createMany: {
            args: Prisma.TokensCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TokensCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>[]
          }
          delete: {
            args: Prisma.TokensDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>
          }
          update: {
            args: Prisma.TokensUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>
          }
          deleteMany: {
            args: Prisma.TokensDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TokensUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TokensUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>[]
          }
          upsert: {
            args: Prisma.TokensUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokensPayload>
          }
          aggregate: {
            args: Prisma.TokensAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTokens>
          }
          groupBy: {
            args: Prisma.TokensGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokensGroupByOutputType>[]
          }
          count: {
            args: Prisma.TokensCountArgs<ExtArgs>
            result: $Utils.Optional<TokensCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    verificationCodes?: VerificationCodesOmit
    userSettings?: UserSettingsOmit
    promoCode?: PromoCodeOmit
    gameAccount?: GameAccountOmit
    location?: LocationOmit
    race?: RaceOmit
    raceParticipant?: RaceParticipantOmit
    raceWitness?: RaceWitnessOmit
    raceTelemetry?: RaceTelemetryOmit
    transactions?: TransactionsOmit
    withdrawalRequest?: WithdrawalRequestOmit
    tokens?: TokensOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    withdrawals: number
    activated_promos: number
    game_accounts: number
    created_races: number
    transactions: number
    tokens: number
    verification_codes: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    withdrawals?: boolean | UserCountOutputTypeCountWithdrawalsArgs
    activated_promos?: boolean | UserCountOutputTypeCountActivated_promosArgs
    game_accounts?: boolean | UserCountOutputTypeCountGame_accountsArgs
    created_races?: boolean | UserCountOutputTypeCountCreated_racesArgs
    transactions?: boolean | UserCountOutputTypeCountTransactionsArgs
    tokens?: boolean | UserCountOutputTypeCountTokensArgs
    verification_codes?: boolean | UserCountOutputTypeCountVerification_codesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWithdrawalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WithdrawalRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountActivated_promosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromoCodeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGame_accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameAccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreated_racesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RaceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokensWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVerification_codesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationCodesWhereInput
  }


  /**
   * Count Type GameAccountCountOutputType
   */

  export type GameAccountCountOutputType = {
    races_won: number
    participations: number
    sightings_observed: number
    sightings_suspect: number
  }

  export type GameAccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    races_won?: boolean | GameAccountCountOutputTypeCountRaces_wonArgs
    participations?: boolean | GameAccountCountOutputTypeCountParticipationsArgs
    sightings_observed?: boolean | GameAccountCountOutputTypeCountSightings_observedArgs
    sightings_suspect?: boolean | GameAccountCountOutputTypeCountSightings_suspectArgs
  }

  // Custom InputTypes
  /**
   * GameAccountCountOutputType without action
   */
  export type GameAccountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameAccountCountOutputType
     */
    select?: GameAccountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GameAccountCountOutputType without action
   */
  export type GameAccountCountOutputTypeCountRaces_wonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RaceWhereInput
  }

  /**
   * GameAccountCountOutputType without action
   */
  export type GameAccountCountOutputTypeCountParticipationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RaceParticipantWhereInput
  }

  /**
   * GameAccountCountOutputType without action
   */
  export type GameAccountCountOutputTypeCountSightings_observedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RaceWitnessWhereInput
  }

  /**
   * GameAccountCountOutputType without action
   */
  export type GameAccountCountOutputTypeCountSightings_suspectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RaceWitnessWhereInput
  }


  /**
   * Count Type LocationCountOutputType
   */

  export type LocationCountOutputType = {
    races: number
  }

  export type LocationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    races?: boolean | LocationCountOutputTypeCountRacesArgs
  }

  // Custom InputTypes
  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationCountOutputType
     */
    select?: LocationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountRacesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RaceWhereInput
  }


  /**
   * Count Type RaceCountOutputType
   */

  export type RaceCountOutputType = {
    participants: number
    witnesses: number
  }

  export type RaceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participants?: boolean | RaceCountOutputTypeCountParticipantsArgs
    witnesses?: boolean | RaceCountOutputTypeCountWitnessesArgs
  }

  // Custom InputTypes
  /**
   * RaceCountOutputType without action
   */
  export type RaceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceCountOutputType
     */
    select?: RaceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RaceCountOutputType without action
   */
  export type RaceCountOutputTypeCountParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RaceParticipantWhereInput
  }

  /**
   * RaceCountOutputType without action
   */
  export type RaceCountOutputTypeCountWitnessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RaceWitnessWhereInput
  }


  /**
   * Count Type RaceParticipantCountOutputType
   */

  export type RaceParticipantCountOutputType = {
    telemetry: number
  }

  export type RaceParticipantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    telemetry?: boolean | RaceParticipantCountOutputTypeCountTelemetryArgs
  }

  // Custom InputTypes
  /**
   * RaceParticipantCountOutputType without action
   */
  export type RaceParticipantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceParticipantCountOutputType
     */
    select?: RaceParticipantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RaceParticipantCountOutputType without action
   */
  export type RaceParticipantCountOutputTypeCountTelemetryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RaceTelemetryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    telegram_id: number | null
    balance: number | null
    frozen_balance: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    telegram_id: bigint | null
    balance: number | null
    frozen_balance: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    telegram_id: bigint | null
    username: string | null
    created_at: Date | null
    vip_expires_at: Date | null
    balance: number | null
    frozen_balance: number | null
    connect_code: string | null
    connect_code_expires_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    telegram_id: bigint | null
    username: string | null
    created_at: Date | null
    vip_expires_at: Date | null
    balance: number | null
    frozen_balance: number | null
    connect_code: string | null
    connect_code_expires_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    telegram_id: number
    username: number
    created_at: number
    vip_expires_at: number
    balance: number
    frozen_balance: number
    connect_code: number
    connect_code_expires_at: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    telegram_id?: true
    balance?: true
    frozen_balance?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    telegram_id?: true
    balance?: true
    frozen_balance?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    telegram_id?: true
    username?: true
    created_at?: true
    vip_expires_at?: true
    balance?: true
    frozen_balance?: true
    connect_code?: true
    connect_code_expires_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    telegram_id?: true
    username?: true
    created_at?: true
    vip_expires_at?: true
    balance?: true
    frozen_balance?: true
    connect_code?: true
    connect_code_expires_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    telegram_id?: true
    username?: true
    created_at?: true
    vip_expires_at?: true
    balance?: true
    frozen_balance?: true
    connect_code?: true
    connect_code_expires_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    telegram_id: bigint
    username: string | null
    created_at: Date
    vip_expires_at: Date | null
    balance: number
    frozen_balance: number
    connect_code: string | null
    connect_code_expires_at: Date | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    telegram_id?: boolean
    username?: boolean
    created_at?: boolean
    vip_expires_at?: boolean
    balance?: boolean
    frozen_balance?: boolean
    connect_code?: boolean
    connect_code_expires_at?: boolean
    withdrawals?: boolean | User$withdrawalsArgs<ExtArgs>
    activated_promos?: boolean | User$activated_promosArgs<ExtArgs>
    game_accounts?: boolean | User$game_accountsArgs<ExtArgs>
    created_races?: boolean | User$created_racesArgs<ExtArgs>
    settings?: boolean | User$settingsArgs<ExtArgs>
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    tokens?: boolean | User$tokensArgs<ExtArgs>
    verification_codes?: boolean | User$verification_codesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    telegram_id?: boolean
    username?: boolean
    created_at?: boolean
    vip_expires_at?: boolean
    balance?: boolean
    frozen_balance?: boolean
    connect_code?: boolean
    connect_code_expires_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    telegram_id?: boolean
    username?: boolean
    created_at?: boolean
    vip_expires_at?: boolean
    balance?: boolean
    frozen_balance?: boolean
    connect_code?: boolean
    connect_code_expires_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    telegram_id?: boolean
    username?: boolean
    created_at?: boolean
    vip_expires_at?: boolean
    balance?: boolean
    frozen_balance?: boolean
    connect_code?: boolean
    connect_code_expires_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "telegram_id" | "username" | "created_at" | "vip_expires_at" | "balance" | "frozen_balance" | "connect_code" | "connect_code_expires_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    withdrawals?: boolean | User$withdrawalsArgs<ExtArgs>
    activated_promos?: boolean | User$activated_promosArgs<ExtArgs>
    game_accounts?: boolean | User$game_accountsArgs<ExtArgs>
    created_races?: boolean | User$created_racesArgs<ExtArgs>
    settings?: boolean | User$settingsArgs<ExtArgs>
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    tokens?: boolean | User$tokensArgs<ExtArgs>
    verification_codes?: boolean | User$verification_codesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      withdrawals: Prisma.$WithdrawalRequestPayload<ExtArgs>[]
      activated_promos: Prisma.$PromoCodePayload<ExtArgs>[]
      game_accounts: Prisma.$GameAccountPayload<ExtArgs>[]
      created_races: Prisma.$RacePayload<ExtArgs>[]
      settings: Prisma.$UserSettingsPayload<ExtArgs> | null
      transactions: Prisma.$TransactionsPayload<ExtArgs>[]
      tokens: Prisma.$TokensPayload<ExtArgs>[]
      verification_codes: Prisma.$VerificationCodesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      telegram_id: bigint
      username: string | null
      created_at: Date
      vip_expires_at: Date | null
      balance: number
      frozen_balance: number
      connect_code: string | null
      connect_code_expires_at: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    withdrawals<T extends User$withdrawalsArgs<ExtArgs> = {}>(args?: Subset<T, User$withdrawalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WithdrawalRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    activated_promos<T extends User$activated_promosArgs<ExtArgs> = {}>(args?: Subset<T, User$activated_promosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromoCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    game_accounts<T extends User$game_accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$game_accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    created_races<T extends User$created_racesArgs<ExtArgs> = {}>(args?: Subset<T, User$created_racesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    settings<T extends User$settingsArgs<ExtArgs> = {}>(args?: Subset<T, User$settingsArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    transactions<T extends User$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tokens<T extends User$tokensArgs<ExtArgs> = {}>(args?: Subset<T, User$tokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    verification_codes<T extends User$verification_codesArgs<ExtArgs> = {}>(args?: Subset<T, User$verification_codesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationCodesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly telegram_id: FieldRef<"User", 'BigInt'>
    readonly username: FieldRef<"User", 'String'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly vip_expires_at: FieldRef<"User", 'DateTime'>
    readonly balance: FieldRef<"User", 'Float'>
    readonly frozen_balance: FieldRef<"User", 'Float'>
    readonly connect_code: FieldRef<"User", 'String'>
    readonly connect_code_expires_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.withdrawals
   */
  export type User$withdrawalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawalRequest
     */
    select?: WithdrawalRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WithdrawalRequest
     */
    omit?: WithdrawalRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalRequestInclude<ExtArgs> | null
    where?: WithdrawalRequestWhereInput
    orderBy?: WithdrawalRequestOrderByWithRelationInput | WithdrawalRequestOrderByWithRelationInput[]
    cursor?: WithdrawalRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WithdrawalRequestScalarFieldEnum | WithdrawalRequestScalarFieldEnum[]
  }

  /**
   * User.activated_promos
   */
  export type User$activated_promosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromoCode
     */
    select?: PromoCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromoCode
     */
    omit?: PromoCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromoCodeInclude<ExtArgs> | null
    where?: PromoCodeWhereInput
    orderBy?: PromoCodeOrderByWithRelationInput | PromoCodeOrderByWithRelationInput[]
    cursor?: PromoCodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PromoCodeScalarFieldEnum | PromoCodeScalarFieldEnum[]
  }

  /**
   * User.game_accounts
   */
  export type User$game_accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameAccount
     */
    select?: GameAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameAccount
     */
    omit?: GameAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameAccountInclude<ExtArgs> | null
    where?: GameAccountWhereInput
    orderBy?: GameAccountOrderByWithRelationInput | GameAccountOrderByWithRelationInput[]
    cursor?: GameAccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameAccountScalarFieldEnum | GameAccountScalarFieldEnum[]
  }

  /**
   * User.created_races
   */
  export type User$created_racesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    where?: RaceWhereInput
    orderBy?: RaceOrderByWithRelationInput | RaceOrderByWithRelationInput[]
    cursor?: RaceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RaceScalarFieldEnum | RaceScalarFieldEnum[]
  }

  /**
   * User.settings
   */
  export type User$settingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    where?: UserSettingsWhereInput
  }

  /**
   * User.transactions
   */
  export type User$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    where?: TransactionsWhereInput
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    cursor?: TransactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * User.tokens
   */
  export type User$tokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokensInclude<ExtArgs> | null
    where?: TokensWhereInput
    orderBy?: TokensOrderByWithRelationInput | TokensOrderByWithRelationInput[]
    cursor?: TokensWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TokensScalarFieldEnum | TokensScalarFieldEnum[]
  }

  /**
   * User.verification_codes
   */
  export type User$verification_codesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCodes
     */
    select?: VerificationCodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCodes
     */
    omit?: VerificationCodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodesInclude<ExtArgs> | null
    where?: VerificationCodesWhereInput
    orderBy?: VerificationCodesOrderByWithRelationInput | VerificationCodesOrderByWithRelationInput[]
    cursor?: VerificationCodesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VerificationCodesScalarFieldEnum | VerificationCodesScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model VerificationCodes
   */

  export type AggregateVerificationCodes = {
    _count: VerificationCodesCountAggregateOutputType | null
    _avg: VerificationCodesAvgAggregateOutputType | null
    _sum: VerificationCodesSumAggregateOutputType | null
    _min: VerificationCodesMinAggregateOutputType | null
    _max: VerificationCodesMaxAggregateOutputType | null
  }

  export type VerificationCodesAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type VerificationCodesSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type VerificationCodesMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    code: string | null
    type: $Enums.VerificationCodeType | null
    expires_at: Date | null
  }

  export type VerificationCodesMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    code: string | null
    type: $Enums.VerificationCodeType | null
    expires_at: Date | null
  }

  export type VerificationCodesCountAggregateOutputType = {
    id: number
    user_id: number
    code: number
    type: number
    expires_at: number
    _all: number
  }


  export type VerificationCodesAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type VerificationCodesSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type VerificationCodesMinAggregateInputType = {
    id?: true
    user_id?: true
    code?: true
    type?: true
    expires_at?: true
  }

  export type VerificationCodesMaxAggregateInputType = {
    id?: true
    user_id?: true
    code?: true
    type?: true
    expires_at?: true
  }

  export type VerificationCodesCountAggregateInputType = {
    id?: true
    user_id?: true
    code?: true
    type?: true
    expires_at?: true
    _all?: true
  }

  export type VerificationCodesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationCodes to aggregate.
     */
    where?: VerificationCodesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationCodes to fetch.
     */
    orderBy?: VerificationCodesOrderByWithRelationInput | VerificationCodesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationCodesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationCodes
    **/
    _count?: true | VerificationCodesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VerificationCodesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VerificationCodesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationCodesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationCodesMaxAggregateInputType
  }

  export type GetVerificationCodesAggregateType<T extends VerificationCodesAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationCodes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationCodes[P]>
      : GetScalarType<T[P], AggregateVerificationCodes[P]>
  }




  export type VerificationCodesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationCodesWhereInput
    orderBy?: VerificationCodesOrderByWithAggregationInput | VerificationCodesOrderByWithAggregationInput[]
    by: VerificationCodesScalarFieldEnum[] | VerificationCodesScalarFieldEnum
    having?: VerificationCodesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationCodesCountAggregateInputType | true
    _avg?: VerificationCodesAvgAggregateInputType
    _sum?: VerificationCodesSumAggregateInputType
    _min?: VerificationCodesMinAggregateInputType
    _max?: VerificationCodesMaxAggregateInputType
  }

  export type VerificationCodesGroupByOutputType = {
    id: number
    user_id: number
    code: string
    type: $Enums.VerificationCodeType
    expires_at: Date
    _count: VerificationCodesCountAggregateOutputType | null
    _avg: VerificationCodesAvgAggregateOutputType | null
    _sum: VerificationCodesSumAggregateOutputType | null
    _min: VerificationCodesMinAggregateOutputType | null
    _max: VerificationCodesMaxAggregateOutputType | null
  }

  type GetVerificationCodesGroupByPayload<T extends VerificationCodesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationCodesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationCodesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationCodesGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationCodesGroupByOutputType[P]>
        }
      >
    >


  export type VerificationCodesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    code?: boolean
    type?: boolean
    expires_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["verificationCodes"]>

  export type VerificationCodesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    code?: boolean
    type?: boolean
    expires_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["verificationCodes"]>

  export type VerificationCodesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    code?: boolean
    type?: boolean
    expires_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["verificationCodes"]>

  export type VerificationCodesSelectScalar = {
    id?: boolean
    user_id?: boolean
    code?: boolean
    type?: boolean
    expires_at?: boolean
  }

  export type VerificationCodesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "code" | "type" | "expires_at", ExtArgs["result"]["verificationCodes"]>
  export type VerificationCodesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VerificationCodesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VerificationCodesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $VerificationCodesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationCodes"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      code: string
      type: $Enums.VerificationCodeType
      expires_at: Date
    }, ExtArgs["result"]["verificationCodes"]>
    composites: {}
  }

  type VerificationCodesGetPayload<S extends boolean | null | undefined | VerificationCodesDefaultArgs> = $Result.GetResult<Prisma.$VerificationCodesPayload, S>

  type VerificationCodesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationCodesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationCodesCountAggregateInputType | true
    }

  export interface VerificationCodesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationCodes'], meta: { name: 'VerificationCodes' } }
    /**
     * Find zero or one VerificationCodes that matches the filter.
     * @param {VerificationCodesFindUniqueArgs} args - Arguments to find a VerificationCodes
     * @example
     * // Get one VerificationCodes
     * const verificationCodes = await prisma.verificationCodes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationCodesFindUniqueArgs>(args: SelectSubset<T, VerificationCodesFindUniqueArgs<ExtArgs>>): Prisma__VerificationCodesClient<$Result.GetResult<Prisma.$VerificationCodesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationCodes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationCodesFindUniqueOrThrowArgs} args - Arguments to find a VerificationCodes
     * @example
     * // Get one VerificationCodes
     * const verificationCodes = await prisma.verificationCodes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationCodesFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationCodesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationCodesClient<$Result.GetResult<Prisma.$VerificationCodesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodesFindFirstArgs} args - Arguments to find a VerificationCodes
     * @example
     * // Get one VerificationCodes
     * const verificationCodes = await prisma.verificationCodes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationCodesFindFirstArgs>(args?: SelectSubset<T, VerificationCodesFindFirstArgs<ExtArgs>>): Prisma__VerificationCodesClient<$Result.GetResult<Prisma.$VerificationCodesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationCodes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodesFindFirstOrThrowArgs} args - Arguments to find a VerificationCodes
     * @example
     * // Get one VerificationCodes
     * const verificationCodes = await prisma.verificationCodes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationCodesFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationCodesFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationCodesClient<$Result.GetResult<Prisma.$VerificationCodesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationCodes
     * const verificationCodes = await prisma.verificationCodes.findMany()
     * 
     * // Get first 10 VerificationCodes
     * const verificationCodes = await prisma.verificationCodes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationCodesWithIdOnly = await prisma.verificationCodes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationCodesFindManyArgs>(args?: SelectSubset<T, VerificationCodesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationCodesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationCodes.
     * @param {VerificationCodesCreateArgs} args - Arguments to create a VerificationCodes.
     * @example
     * // Create one VerificationCodes
     * const VerificationCodes = await prisma.verificationCodes.create({
     *   data: {
     *     // ... data to create a VerificationCodes
     *   }
     * })
     * 
     */
    create<T extends VerificationCodesCreateArgs>(args: SelectSubset<T, VerificationCodesCreateArgs<ExtArgs>>): Prisma__VerificationCodesClient<$Result.GetResult<Prisma.$VerificationCodesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationCodes.
     * @param {VerificationCodesCreateManyArgs} args - Arguments to create many VerificationCodes.
     * @example
     * // Create many VerificationCodes
     * const verificationCodes = await prisma.verificationCodes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationCodesCreateManyArgs>(args?: SelectSubset<T, VerificationCodesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationCodes and returns the data saved in the database.
     * @param {VerificationCodesCreateManyAndReturnArgs} args - Arguments to create many VerificationCodes.
     * @example
     * // Create many VerificationCodes
     * const verificationCodes = await prisma.verificationCodes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationCodes and only return the `id`
     * const verificationCodesWithIdOnly = await prisma.verificationCodes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationCodesCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationCodesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationCodesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationCodes.
     * @param {VerificationCodesDeleteArgs} args - Arguments to delete one VerificationCodes.
     * @example
     * // Delete one VerificationCodes
     * const VerificationCodes = await prisma.verificationCodes.delete({
     *   where: {
     *     // ... filter to delete one VerificationCodes
     *   }
     * })
     * 
     */
    delete<T extends VerificationCodesDeleteArgs>(args: SelectSubset<T, VerificationCodesDeleteArgs<ExtArgs>>): Prisma__VerificationCodesClient<$Result.GetResult<Prisma.$VerificationCodesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationCodes.
     * @param {VerificationCodesUpdateArgs} args - Arguments to update one VerificationCodes.
     * @example
     * // Update one VerificationCodes
     * const verificationCodes = await prisma.verificationCodes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationCodesUpdateArgs>(args: SelectSubset<T, VerificationCodesUpdateArgs<ExtArgs>>): Prisma__VerificationCodesClient<$Result.GetResult<Prisma.$VerificationCodesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationCodes.
     * @param {VerificationCodesDeleteManyArgs} args - Arguments to filter VerificationCodes to delete.
     * @example
     * // Delete a few VerificationCodes
     * const { count } = await prisma.verificationCodes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationCodesDeleteManyArgs>(args?: SelectSubset<T, VerificationCodesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationCodes
     * const verificationCodes = await prisma.verificationCodes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationCodesUpdateManyArgs>(args: SelectSubset<T, VerificationCodesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationCodes and returns the data updated in the database.
     * @param {VerificationCodesUpdateManyAndReturnArgs} args - Arguments to update many VerificationCodes.
     * @example
     * // Update many VerificationCodes
     * const verificationCodes = await prisma.verificationCodes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationCodes and only return the `id`
     * const verificationCodesWithIdOnly = await prisma.verificationCodes.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationCodesUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationCodesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationCodesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationCodes.
     * @param {VerificationCodesUpsertArgs} args - Arguments to update or create a VerificationCodes.
     * @example
     * // Update or create a VerificationCodes
     * const verificationCodes = await prisma.verificationCodes.upsert({
     *   create: {
     *     // ... data to create a VerificationCodes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationCodes we want to update
     *   }
     * })
     */
    upsert<T extends VerificationCodesUpsertArgs>(args: SelectSubset<T, VerificationCodesUpsertArgs<ExtArgs>>): Prisma__VerificationCodesClient<$Result.GetResult<Prisma.$VerificationCodesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodesCountArgs} args - Arguments to filter VerificationCodes to count.
     * @example
     * // Count the number of VerificationCodes
     * const count = await prisma.verificationCodes.count({
     *   where: {
     *     // ... the filter for the VerificationCodes we want to count
     *   }
     * })
    **/
    count<T extends VerificationCodesCountArgs>(
      args?: Subset<T, VerificationCodesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationCodesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationCodesAggregateArgs>(args: Subset<T, VerificationCodesAggregateArgs>): Prisma.PrismaPromise<GetVerificationCodesAggregateType<T>>

    /**
     * Group by VerificationCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationCodesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationCodesGroupByArgs['orderBy'] }
        : { orderBy?: VerificationCodesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationCodesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationCodesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationCodes model
   */
  readonly fields: VerificationCodesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationCodes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationCodesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VerificationCodes model
   */
  interface VerificationCodesFieldRefs {
    readonly id: FieldRef<"VerificationCodes", 'Int'>
    readonly user_id: FieldRef<"VerificationCodes", 'Int'>
    readonly code: FieldRef<"VerificationCodes", 'String'>
    readonly type: FieldRef<"VerificationCodes", 'VerificationCodeType'>
    readonly expires_at: FieldRef<"VerificationCodes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationCodes findUnique
   */
  export type VerificationCodesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCodes
     */
    select?: VerificationCodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCodes
     */
    omit?: VerificationCodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodesInclude<ExtArgs> | null
    /**
     * Filter, which VerificationCodes to fetch.
     */
    where: VerificationCodesWhereUniqueInput
  }

  /**
   * VerificationCodes findUniqueOrThrow
   */
  export type VerificationCodesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCodes
     */
    select?: VerificationCodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCodes
     */
    omit?: VerificationCodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodesInclude<ExtArgs> | null
    /**
     * Filter, which VerificationCodes to fetch.
     */
    where: VerificationCodesWhereUniqueInput
  }

  /**
   * VerificationCodes findFirst
   */
  export type VerificationCodesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCodes
     */
    select?: VerificationCodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCodes
     */
    omit?: VerificationCodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodesInclude<ExtArgs> | null
    /**
     * Filter, which VerificationCodes to fetch.
     */
    where?: VerificationCodesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationCodes to fetch.
     */
    orderBy?: VerificationCodesOrderByWithRelationInput | VerificationCodesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationCodes.
     */
    cursor?: VerificationCodesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationCodes.
     */
    distinct?: VerificationCodesScalarFieldEnum | VerificationCodesScalarFieldEnum[]
  }

  /**
   * VerificationCodes findFirstOrThrow
   */
  export type VerificationCodesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCodes
     */
    select?: VerificationCodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCodes
     */
    omit?: VerificationCodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodesInclude<ExtArgs> | null
    /**
     * Filter, which VerificationCodes to fetch.
     */
    where?: VerificationCodesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationCodes to fetch.
     */
    orderBy?: VerificationCodesOrderByWithRelationInput | VerificationCodesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationCodes.
     */
    cursor?: VerificationCodesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationCodes.
     */
    distinct?: VerificationCodesScalarFieldEnum | VerificationCodesScalarFieldEnum[]
  }

  /**
   * VerificationCodes findMany
   */
  export type VerificationCodesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCodes
     */
    select?: VerificationCodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCodes
     */
    omit?: VerificationCodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodesInclude<ExtArgs> | null
    /**
     * Filter, which VerificationCodes to fetch.
     */
    where?: VerificationCodesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationCodes to fetch.
     */
    orderBy?: VerificationCodesOrderByWithRelationInput | VerificationCodesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationCodes.
     */
    cursor?: VerificationCodesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationCodes.
     */
    skip?: number
    distinct?: VerificationCodesScalarFieldEnum | VerificationCodesScalarFieldEnum[]
  }

  /**
   * VerificationCodes create
   */
  export type VerificationCodesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCodes
     */
    select?: VerificationCodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCodes
     */
    omit?: VerificationCodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodesInclude<ExtArgs> | null
    /**
     * The data needed to create a VerificationCodes.
     */
    data: XOR<VerificationCodesCreateInput, VerificationCodesUncheckedCreateInput>
  }

  /**
   * VerificationCodes createMany
   */
  export type VerificationCodesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationCodes.
     */
    data: VerificationCodesCreateManyInput | VerificationCodesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationCodes createManyAndReturn
   */
  export type VerificationCodesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCodes
     */
    select?: VerificationCodesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCodes
     */
    omit?: VerificationCodesOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationCodes.
     */
    data: VerificationCodesCreateManyInput | VerificationCodesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VerificationCodes update
   */
  export type VerificationCodesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCodes
     */
    select?: VerificationCodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCodes
     */
    omit?: VerificationCodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodesInclude<ExtArgs> | null
    /**
     * The data needed to update a VerificationCodes.
     */
    data: XOR<VerificationCodesUpdateInput, VerificationCodesUncheckedUpdateInput>
    /**
     * Choose, which VerificationCodes to update.
     */
    where: VerificationCodesWhereUniqueInput
  }

  /**
   * VerificationCodes updateMany
   */
  export type VerificationCodesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationCodes.
     */
    data: XOR<VerificationCodesUpdateManyMutationInput, VerificationCodesUncheckedUpdateManyInput>
    /**
     * Filter which VerificationCodes to update
     */
    where?: VerificationCodesWhereInput
    /**
     * Limit how many VerificationCodes to update.
     */
    limit?: number
  }

  /**
   * VerificationCodes updateManyAndReturn
   */
  export type VerificationCodesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCodes
     */
    select?: VerificationCodesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCodes
     */
    omit?: VerificationCodesOmit<ExtArgs> | null
    /**
     * The data used to update VerificationCodes.
     */
    data: XOR<VerificationCodesUpdateManyMutationInput, VerificationCodesUncheckedUpdateManyInput>
    /**
     * Filter which VerificationCodes to update
     */
    where?: VerificationCodesWhereInput
    /**
     * Limit how many VerificationCodes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VerificationCodes upsert
   */
  export type VerificationCodesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCodes
     */
    select?: VerificationCodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCodes
     */
    omit?: VerificationCodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodesInclude<ExtArgs> | null
    /**
     * The filter to search for the VerificationCodes to update in case it exists.
     */
    where: VerificationCodesWhereUniqueInput
    /**
     * In case the VerificationCodes found by the `where` argument doesn't exist, create a new VerificationCodes with this data.
     */
    create: XOR<VerificationCodesCreateInput, VerificationCodesUncheckedCreateInput>
    /**
     * In case the VerificationCodes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationCodesUpdateInput, VerificationCodesUncheckedUpdateInput>
  }

  /**
   * VerificationCodes delete
   */
  export type VerificationCodesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCodes
     */
    select?: VerificationCodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCodes
     */
    omit?: VerificationCodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodesInclude<ExtArgs> | null
    /**
     * Filter which VerificationCodes to delete.
     */
    where: VerificationCodesWhereUniqueInput
  }

  /**
   * VerificationCodes deleteMany
   */
  export type VerificationCodesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationCodes to delete
     */
    where?: VerificationCodesWhereInput
    /**
     * Limit how many VerificationCodes to delete.
     */
    limit?: number
  }

  /**
   * VerificationCodes without action
   */
  export type VerificationCodesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCodes
     */
    select?: VerificationCodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCodes
     */
    omit?: VerificationCodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodesInclude<ExtArgs> | null
  }


  /**
   * Model UserSettings
   */

  export type AggregateUserSettings = {
    _count: UserSettingsCountAggregateOutputType | null
    _avg: UserSettingsAvgAggregateOutputType | null
    _sum: UserSettingsSumAggregateOutputType | null
    _min: UserSettingsMinAggregateOutputType | null
    _max: UserSettingsMaxAggregateOutputType | null
  }

  export type UserSettingsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    timezone: number | null
  }

  export type UserSettingsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    timezone: number | null
  }

  export type UserSettingsMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    language: string | null
    currency: string | null
    timezone: number | null
    notify_news: boolean | null
    notify_payments: boolean | null
    is_stealth: boolean | null
    updated_at: Date | null
  }

  export type UserSettingsMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    language: string | null
    currency: string | null
    timezone: number | null
    notify_news: boolean | null
    notify_payments: boolean | null
    is_stealth: boolean | null
    updated_at: Date | null
  }

  export type UserSettingsCountAggregateOutputType = {
    id: number
    user_id: number
    language: number
    currency: number
    timezone: number
    notify_news: number
    notify_payments: number
    is_stealth: number
    updated_at: number
    _all: number
  }


  export type UserSettingsAvgAggregateInputType = {
    id?: true
    user_id?: true
    timezone?: true
  }

  export type UserSettingsSumAggregateInputType = {
    id?: true
    user_id?: true
    timezone?: true
  }

  export type UserSettingsMinAggregateInputType = {
    id?: true
    user_id?: true
    language?: true
    currency?: true
    timezone?: true
    notify_news?: true
    notify_payments?: true
    is_stealth?: true
    updated_at?: true
  }

  export type UserSettingsMaxAggregateInputType = {
    id?: true
    user_id?: true
    language?: true
    currency?: true
    timezone?: true
    notify_news?: true
    notify_payments?: true
    is_stealth?: true
    updated_at?: true
  }

  export type UserSettingsCountAggregateInputType = {
    id?: true
    user_id?: true
    language?: true
    currency?: true
    timezone?: true
    notify_news?: true
    notify_payments?: true
    is_stealth?: true
    updated_at?: true
    _all?: true
  }

  export type UserSettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSettings to aggregate.
     */
    where?: UserSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSettings to fetch.
     */
    orderBy?: UserSettingsOrderByWithRelationInput | UserSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserSettings
    **/
    _count?: true | UserSettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserSettingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSettingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserSettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserSettingsMaxAggregateInputType
  }

  export type GetUserSettingsAggregateType<T extends UserSettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSettings[P]>
      : GetScalarType<T[P], AggregateUserSettings[P]>
  }




  export type UserSettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSettingsWhereInput
    orderBy?: UserSettingsOrderByWithAggregationInput | UserSettingsOrderByWithAggregationInput[]
    by: UserSettingsScalarFieldEnum[] | UserSettingsScalarFieldEnum
    having?: UserSettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSettingsCountAggregateInputType | true
    _avg?: UserSettingsAvgAggregateInputType
    _sum?: UserSettingsSumAggregateInputType
    _min?: UserSettingsMinAggregateInputType
    _max?: UserSettingsMaxAggregateInputType
  }

  export type UserSettingsGroupByOutputType = {
    id: number
    user_id: number
    language: string
    currency: string
    timezone: number
    notify_news: boolean
    notify_payments: boolean
    is_stealth: boolean
    updated_at: Date
    _count: UserSettingsCountAggregateOutputType | null
    _avg: UserSettingsAvgAggregateOutputType | null
    _sum: UserSettingsSumAggregateOutputType | null
    _min: UserSettingsMinAggregateOutputType | null
    _max: UserSettingsMaxAggregateOutputType | null
  }

  type GetUserSettingsGroupByPayload<T extends UserSettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSettingsGroupByOutputType[P]>
            : GetScalarType<T[P], UserSettingsGroupByOutputType[P]>
        }
      >
    >


  export type UserSettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    language?: boolean
    currency?: boolean
    timezone?: boolean
    notify_news?: boolean
    notify_payments?: boolean
    is_stealth?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSettings"]>

  export type UserSettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    language?: boolean
    currency?: boolean
    timezone?: boolean
    notify_news?: boolean
    notify_payments?: boolean
    is_stealth?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSettings"]>

  export type UserSettingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    language?: boolean
    currency?: boolean
    timezone?: boolean
    notify_news?: boolean
    notify_payments?: boolean
    is_stealth?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSettings"]>

  export type UserSettingsSelectScalar = {
    id?: boolean
    user_id?: boolean
    language?: boolean
    currency?: boolean
    timezone?: boolean
    notify_news?: boolean
    notify_payments?: boolean
    is_stealth?: boolean
    updated_at?: boolean
  }

  export type UserSettingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "language" | "currency" | "timezone" | "notify_news" | "notify_payments" | "is_stealth" | "updated_at", ExtArgs["result"]["userSettings"]>
  export type UserSettingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserSettingsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserSettingsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserSettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSettings"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      language: string
      currency: string
      timezone: number
      notify_news: boolean
      notify_payments: boolean
      is_stealth: boolean
      updated_at: Date
    }, ExtArgs["result"]["userSettings"]>
    composites: {}
  }

  type UserSettingsGetPayload<S extends boolean | null | undefined | UserSettingsDefaultArgs> = $Result.GetResult<Prisma.$UserSettingsPayload, S>

  type UserSettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserSettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserSettingsCountAggregateInputType | true
    }

  export interface UserSettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserSettings'], meta: { name: 'UserSettings' } }
    /**
     * Find zero or one UserSettings that matches the filter.
     * @param {UserSettingsFindUniqueArgs} args - Arguments to find a UserSettings
     * @example
     * // Get one UserSettings
     * const userSettings = await prisma.userSettings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserSettingsFindUniqueArgs>(args: SelectSubset<T, UserSettingsFindUniqueArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserSettings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserSettingsFindUniqueOrThrowArgs} args - Arguments to find a UserSettings
     * @example
     * // Get one UserSettings
     * const userSettings = await prisma.userSettings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserSettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, UserSettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsFindFirstArgs} args - Arguments to find a UserSettings
     * @example
     * // Get one UserSettings
     * const userSettings = await prisma.userSettings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserSettingsFindFirstArgs>(args?: SelectSubset<T, UserSettingsFindFirstArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSettings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsFindFirstOrThrowArgs} args - Arguments to find a UserSettings
     * @example
     * // Get one UserSettings
     * const userSettings = await prisma.userSettings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserSettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, UserSettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSettings
     * const userSettings = await prisma.userSettings.findMany()
     * 
     * // Get first 10 UserSettings
     * const userSettings = await prisma.userSettings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userSettingsWithIdOnly = await prisma.userSettings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserSettingsFindManyArgs>(args?: SelectSubset<T, UserSettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserSettings.
     * @param {UserSettingsCreateArgs} args - Arguments to create a UserSettings.
     * @example
     * // Create one UserSettings
     * const UserSettings = await prisma.userSettings.create({
     *   data: {
     *     // ... data to create a UserSettings
     *   }
     * })
     * 
     */
    create<T extends UserSettingsCreateArgs>(args: SelectSubset<T, UserSettingsCreateArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserSettings.
     * @param {UserSettingsCreateManyArgs} args - Arguments to create many UserSettings.
     * @example
     * // Create many UserSettings
     * const userSettings = await prisma.userSettings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserSettingsCreateManyArgs>(args?: SelectSubset<T, UserSettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserSettings and returns the data saved in the database.
     * @param {UserSettingsCreateManyAndReturnArgs} args - Arguments to create many UserSettings.
     * @example
     * // Create many UserSettings
     * const userSettings = await prisma.userSettings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserSettings and only return the `id`
     * const userSettingsWithIdOnly = await prisma.userSettings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserSettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, UserSettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserSettings.
     * @param {UserSettingsDeleteArgs} args - Arguments to delete one UserSettings.
     * @example
     * // Delete one UserSettings
     * const UserSettings = await prisma.userSettings.delete({
     *   where: {
     *     // ... filter to delete one UserSettings
     *   }
     * })
     * 
     */
    delete<T extends UserSettingsDeleteArgs>(args: SelectSubset<T, UserSettingsDeleteArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserSettings.
     * @param {UserSettingsUpdateArgs} args - Arguments to update one UserSettings.
     * @example
     * // Update one UserSettings
     * const userSettings = await prisma.userSettings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserSettingsUpdateArgs>(args: SelectSubset<T, UserSettingsUpdateArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserSettings.
     * @param {UserSettingsDeleteManyArgs} args - Arguments to filter UserSettings to delete.
     * @example
     * // Delete a few UserSettings
     * const { count } = await prisma.userSettings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserSettingsDeleteManyArgs>(args?: SelectSubset<T, UserSettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSettings
     * const userSettings = await prisma.userSettings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserSettingsUpdateManyArgs>(args: SelectSubset<T, UserSettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSettings and returns the data updated in the database.
     * @param {UserSettingsUpdateManyAndReturnArgs} args - Arguments to update many UserSettings.
     * @example
     * // Update many UserSettings
     * const userSettings = await prisma.userSettings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserSettings and only return the `id`
     * const userSettingsWithIdOnly = await prisma.userSettings.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserSettingsUpdateManyAndReturnArgs>(args: SelectSubset<T, UserSettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserSettings.
     * @param {UserSettingsUpsertArgs} args - Arguments to update or create a UserSettings.
     * @example
     * // Update or create a UserSettings
     * const userSettings = await prisma.userSettings.upsert({
     *   create: {
     *     // ... data to create a UserSettings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSettings we want to update
     *   }
     * })
     */
    upsert<T extends UserSettingsUpsertArgs>(args: SelectSubset<T, UserSettingsUpsertArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsCountArgs} args - Arguments to filter UserSettings to count.
     * @example
     * // Count the number of UserSettings
     * const count = await prisma.userSettings.count({
     *   where: {
     *     // ... the filter for the UserSettings we want to count
     *   }
     * })
    **/
    count<T extends UserSettingsCountArgs>(
      args?: Subset<T, UserSettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserSettingsAggregateArgs>(args: Subset<T, UserSettingsAggregateArgs>): Prisma.PrismaPromise<GetUserSettingsAggregateType<T>>

    /**
     * Group by UserSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserSettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSettingsGroupByArgs['orderBy'] }
        : { orderBy?: UserSettingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserSettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserSettings model
   */
  readonly fields: UserSettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSettings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserSettings model
   */
  interface UserSettingsFieldRefs {
    readonly id: FieldRef<"UserSettings", 'Int'>
    readonly user_id: FieldRef<"UserSettings", 'Int'>
    readonly language: FieldRef<"UserSettings", 'String'>
    readonly currency: FieldRef<"UserSettings", 'String'>
    readonly timezone: FieldRef<"UserSettings", 'Int'>
    readonly notify_news: FieldRef<"UserSettings", 'Boolean'>
    readonly notify_payments: FieldRef<"UserSettings", 'Boolean'>
    readonly is_stealth: FieldRef<"UserSettings", 'Boolean'>
    readonly updated_at: FieldRef<"UserSettings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserSettings findUnique
   */
  export type UserSettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * Filter, which UserSettings to fetch.
     */
    where: UserSettingsWhereUniqueInput
  }

  /**
   * UserSettings findUniqueOrThrow
   */
  export type UserSettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * Filter, which UserSettings to fetch.
     */
    where: UserSettingsWhereUniqueInput
  }

  /**
   * UserSettings findFirst
   */
  export type UserSettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * Filter, which UserSettings to fetch.
     */
    where?: UserSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSettings to fetch.
     */
    orderBy?: UserSettingsOrderByWithRelationInput | UserSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSettings.
     */
    cursor?: UserSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSettings.
     */
    distinct?: UserSettingsScalarFieldEnum | UserSettingsScalarFieldEnum[]
  }

  /**
   * UserSettings findFirstOrThrow
   */
  export type UserSettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * Filter, which UserSettings to fetch.
     */
    where?: UserSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSettings to fetch.
     */
    orderBy?: UserSettingsOrderByWithRelationInput | UserSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSettings.
     */
    cursor?: UserSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSettings.
     */
    distinct?: UserSettingsScalarFieldEnum | UserSettingsScalarFieldEnum[]
  }

  /**
   * UserSettings findMany
   */
  export type UserSettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * Filter, which UserSettings to fetch.
     */
    where?: UserSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSettings to fetch.
     */
    orderBy?: UserSettingsOrderByWithRelationInput | UserSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSettings.
     */
    cursor?: UserSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSettings.
     */
    skip?: number
    distinct?: UserSettingsScalarFieldEnum | UserSettingsScalarFieldEnum[]
  }

  /**
   * UserSettings create
   */
  export type UserSettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * The data needed to create a UserSettings.
     */
    data: XOR<UserSettingsCreateInput, UserSettingsUncheckedCreateInput>
  }

  /**
   * UserSettings createMany
   */
  export type UserSettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserSettings.
     */
    data: UserSettingsCreateManyInput | UserSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSettings createManyAndReturn
   */
  export type UserSettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * The data used to create many UserSettings.
     */
    data: UserSettingsCreateManyInput | UserSettingsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSettings update
   */
  export type UserSettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * The data needed to update a UserSettings.
     */
    data: XOR<UserSettingsUpdateInput, UserSettingsUncheckedUpdateInput>
    /**
     * Choose, which UserSettings to update.
     */
    where: UserSettingsWhereUniqueInput
  }

  /**
   * UserSettings updateMany
   */
  export type UserSettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserSettings.
     */
    data: XOR<UserSettingsUpdateManyMutationInput, UserSettingsUncheckedUpdateManyInput>
    /**
     * Filter which UserSettings to update
     */
    where?: UserSettingsWhereInput
    /**
     * Limit how many UserSettings to update.
     */
    limit?: number
  }

  /**
   * UserSettings updateManyAndReturn
   */
  export type UserSettingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * The data used to update UserSettings.
     */
    data: XOR<UserSettingsUpdateManyMutationInput, UserSettingsUncheckedUpdateManyInput>
    /**
     * Filter which UserSettings to update
     */
    where?: UserSettingsWhereInput
    /**
     * Limit how many UserSettings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSettings upsert
   */
  export type UserSettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * The filter to search for the UserSettings to update in case it exists.
     */
    where: UserSettingsWhereUniqueInput
    /**
     * In case the UserSettings found by the `where` argument doesn't exist, create a new UserSettings with this data.
     */
    create: XOR<UserSettingsCreateInput, UserSettingsUncheckedCreateInput>
    /**
     * In case the UserSettings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSettingsUpdateInput, UserSettingsUncheckedUpdateInput>
  }

  /**
   * UserSettings delete
   */
  export type UserSettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * Filter which UserSettings to delete.
     */
    where: UserSettingsWhereUniqueInput
  }

  /**
   * UserSettings deleteMany
   */
  export type UserSettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSettings to delete
     */
    where?: UserSettingsWhereInput
    /**
     * Limit how many UserSettings to delete.
     */
    limit?: number
  }

  /**
   * UserSettings without action
   */
  export type UserSettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
  }


  /**
   * Model PromoCode
   */

  export type AggregatePromoCode = {
    _count: PromoCodeCountAggregateOutputType | null
    _avg: PromoCodeAvgAggregateOutputType | null
    _sum: PromoCodeSumAggregateOutputType | null
    _min: PromoCodeMinAggregateOutputType | null
    _max: PromoCodeMaxAggregateOutputType | null
  }

  export type PromoCodeAvgAggregateOutputType = {
    id: number | null
    value: number | null
    user_id: number | null
  }

  export type PromoCodeSumAggregateOutputType = {
    id: number | null
    value: number | null
    user_id: number | null
  }

  export type PromoCodeMinAggregateOutputType = {
    id: number | null
    code: string | null
    type: $Enums.PromoType | null
    value: number | null
    is_used: boolean | null
    used_at: Date | null
    user_id: number | null
    created_at: Date | null
  }

  export type PromoCodeMaxAggregateOutputType = {
    id: number | null
    code: string | null
    type: $Enums.PromoType | null
    value: number | null
    is_used: boolean | null
    used_at: Date | null
    user_id: number | null
    created_at: Date | null
  }

  export type PromoCodeCountAggregateOutputType = {
    id: number
    code: number
    type: number
    value: number
    is_used: number
    used_at: number
    user_id: number
    created_at: number
    _all: number
  }


  export type PromoCodeAvgAggregateInputType = {
    id?: true
    value?: true
    user_id?: true
  }

  export type PromoCodeSumAggregateInputType = {
    id?: true
    value?: true
    user_id?: true
  }

  export type PromoCodeMinAggregateInputType = {
    id?: true
    code?: true
    type?: true
    value?: true
    is_used?: true
    used_at?: true
    user_id?: true
    created_at?: true
  }

  export type PromoCodeMaxAggregateInputType = {
    id?: true
    code?: true
    type?: true
    value?: true
    is_used?: true
    used_at?: true
    user_id?: true
    created_at?: true
  }

  export type PromoCodeCountAggregateInputType = {
    id?: true
    code?: true
    type?: true
    value?: true
    is_used?: true
    used_at?: true
    user_id?: true
    created_at?: true
    _all?: true
  }

  export type PromoCodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PromoCode to aggregate.
     */
    where?: PromoCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromoCodes to fetch.
     */
    orderBy?: PromoCodeOrderByWithRelationInput | PromoCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PromoCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromoCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromoCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PromoCodes
    **/
    _count?: true | PromoCodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PromoCodeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PromoCodeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PromoCodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PromoCodeMaxAggregateInputType
  }

  export type GetPromoCodeAggregateType<T extends PromoCodeAggregateArgs> = {
        [P in keyof T & keyof AggregatePromoCode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePromoCode[P]>
      : GetScalarType<T[P], AggregatePromoCode[P]>
  }




  export type PromoCodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromoCodeWhereInput
    orderBy?: PromoCodeOrderByWithAggregationInput | PromoCodeOrderByWithAggregationInput[]
    by: PromoCodeScalarFieldEnum[] | PromoCodeScalarFieldEnum
    having?: PromoCodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PromoCodeCountAggregateInputType | true
    _avg?: PromoCodeAvgAggregateInputType
    _sum?: PromoCodeSumAggregateInputType
    _min?: PromoCodeMinAggregateInputType
    _max?: PromoCodeMaxAggregateInputType
  }

  export type PromoCodeGroupByOutputType = {
    id: number
    code: string
    type: $Enums.PromoType
    value: number
    is_used: boolean
    used_at: Date | null
    user_id: number | null
    created_at: Date
    _count: PromoCodeCountAggregateOutputType | null
    _avg: PromoCodeAvgAggregateOutputType | null
    _sum: PromoCodeSumAggregateOutputType | null
    _min: PromoCodeMinAggregateOutputType | null
    _max: PromoCodeMaxAggregateOutputType | null
  }

  type GetPromoCodeGroupByPayload<T extends PromoCodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PromoCodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PromoCodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PromoCodeGroupByOutputType[P]>
            : GetScalarType<T[P], PromoCodeGroupByOutputType[P]>
        }
      >
    >


  export type PromoCodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    type?: boolean
    value?: boolean
    is_used?: boolean
    used_at?: boolean
    user_id?: boolean
    created_at?: boolean
    user?: boolean | PromoCode$userArgs<ExtArgs>
  }, ExtArgs["result"]["promoCode"]>

  export type PromoCodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    type?: boolean
    value?: boolean
    is_used?: boolean
    used_at?: boolean
    user_id?: boolean
    created_at?: boolean
    user?: boolean | PromoCode$userArgs<ExtArgs>
  }, ExtArgs["result"]["promoCode"]>

  export type PromoCodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    type?: boolean
    value?: boolean
    is_used?: boolean
    used_at?: boolean
    user_id?: boolean
    created_at?: boolean
    user?: boolean | PromoCode$userArgs<ExtArgs>
  }, ExtArgs["result"]["promoCode"]>

  export type PromoCodeSelectScalar = {
    id?: boolean
    code?: boolean
    type?: boolean
    value?: boolean
    is_used?: boolean
    used_at?: boolean
    user_id?: boolean
    created_at?: boolean
  }

  export type PromoCodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "type" | "value" | "is_used" | "used_at" | "user_id" | "created_at", ExtArgs["result"]["promoCode"]>
  export type PromoCodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | PromoCode$userArgs<ExtArgs>
  }
  export type PromoCodeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | PromoCode$userArgs<ExtArgs>
  }
  export type PromoCodeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | PromoCode$userArgs<ExtArgs>
  }

  export type $PromoCodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PromoCode"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      type: $Enums.PromoType
      value: number
      is_used: boolean
      used_at: Date | null
      user_id: number | null
      created_at: Date
    }, ExtArgs["result"]["promoCode"]>
    composites: {}
  }

  type PromoCodeGetPayload<S extends boolean | null | undefined | PromoCodeDefaultArgs> = $Result.GetResult<Prisma.$PromoCodePayload, S>

  type PromoCodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PromoCodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PromoCodeCountAggregateInputType | true
    }

  export interface PromoCodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PromoCode'], meta: { name: 'PromoCode' } }
    /**
     * Find zero or one PromoCode that matches the filter.
     * @param {PromoCodeFindUniqueArgs} args - Arguments to find a PromoCode
     * @example
     * // Get one PromoCode
     * const promoCode = await prisma.promoCode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PromoCodeFindUniqueArgs>(args: SelectSubset<T, PromoCodeFindUniqueArgs<ExtArgs>>): Prisma__PromoCodeClient<$Result.GetResult<Prisma.$PromoCodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PromoCode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PromoCodeFindUniqueOrThrowArgs} args - Arguments to find a PromoCode
     * @example
     * // Get one PromoCode
     * const promoCode = await prisma.promoCode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PromoCodeFindUniqueOrThrowArgs>(args: SelectSubset<T, PromoCodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PromoCodeClient<$Result.GetResult<Prisma.$PromoCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PromoCode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromoCodeFindFirstArgs} args - Arguments to find a PromoCode
     * @example
     * // Get one PromoCode
     * const promoCode = await prisma.promoCode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PromoCodeFindFirstArgs>(args?: SelectSubset<T, PromoCodeFindFirstArgs<ExtArgs>>): Prisma__PromoCodeClient<$Result.GetResult<Prisma.$PromoCodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PromoCode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromoCodeFindFirstOrThrowArgs} args - Arguments to find a PromoCode
     * @example
     * // Get one PromoCode
     * const promoCode = await prisma.promoCode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PromoCodeFindFirstOrThrowArgs>(args?: SelectSubset<T, PromoCodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__PromoCodeClient<$Result.GetResult<Prisma.$PromoCodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PromoCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromoCodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PromoCodes
     * const promoCodes = await prisma.promoCode.findMany()
     * 
     * // Get first 10 PromoCodes
     * const promoCodes = await prisma.promoCode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const promoCodeWithIdOnly = await prisma.promoCode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PromoCodeFindManyArgs>(args?: SelectSubset<T, PromoCodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromoCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PromoCode.
     * @param {PromoCodeCreateArgs} args - Arguments to create a PromoCode.
     * @example
     * // Create one PromoCode
     * const PromoCode = await prisma.promoCode.create({
     *   data: {
     *     // ... data to create a PromoCode
     *   }
     * })
     * 
     */
    create<T extends PromoCodeCreateArgs>(args: SelectSubset<T, PromoCodeCreateArgs<ExtArgs>>): Prisma__PromoCodeClient<$Result.GetResult<Prisma.$PromoCodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PromoCodes.
     * @param {PromoCodeCreateManyArgs} args - Arguments to create many PromoCodes.
     * @example
     * // Create many PromoCodes
     * const promoCode = await prisma.promoCode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PromoCodeCreateManyArgs>(args?: SelectSubset<T, PromoCodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PromoCodes and returns the data saved in the database.
     * @param {PromoCodeCreateManyAndReturnArgs} args - Arguments to create many PromoCodes.
     * @example
     * // Create many PromoCodes
     * const promoCode = await prisma.promoCode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PromoCodes and only return the `id`
     * const promoCodeWithIdOnly = await prisma.promoCode.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PromoCodeCreateManyAndReturnArgs>(args?: SelectSubset<T, PromoCodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromoCodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PromoCode.
     * @param {PromoCodeDeleteArgs} args - Arguments to delete one PromoCode.
     * @example
     * // Delete one PromoCode
     * const PromoCode = await prisma.promoCode.delete({
     *   where: {
     *     // ... filter to delete one PromoCode
     *   }
     * })
     * 
     */
    delete<T extends PromoCodeDeleteArgs>(args: SelectSubset<T, PromoCodeDeleteArgs<ExtArgs>>): Prisma__PromoCodeClient<$Result.GetResult<Prisma.$PromoCodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PromoCode.
     * @param {PromoCodeUpdateArgs} args - Arguments to update one PromoCode.
     * @example
     * // Update one PromoCode
     * const promoCode = await prisma.promoCode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PromoCodeUpdateArgs>(args: SelectSubset<T, PromoCodeUpdateArgs<ExtArgs>>): Prisma__PromoCodeClient<$Result.GetResult<Prisma.$PromoCodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PromoCodes.
     * @param {PromoCodeDeleteManyArgs} args - Arguments to filter PromoCodes to delete.
     * @example
     * // Delete a few PromoCodes
     * const { count } = await prisma.promoCode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PromoCodeDeleteManyArgs>(args?: SelectSubset<T, PromoCodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PromoCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromoCodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PromoCodes
     * const promoCode = await prisma.promoCode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PromoCodeUpdateManyArgs>(args: SelectSubset<T, PromoCodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PromoCodes and returns the data updated in the database.
     * @param {PromoCodeUpdateManyAndReturnArgs} args - Arguments to update many PromoCodes.
     * @example
     * // Update many PromoCodes
     * const promoCode = await prisma.promoCode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PromoCodes and only return the `id`
     * const promoCodeWithIdOnly = await prisma.promoCode.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PromoCodeUpdateManyAndReturnArgs>(args: SelectSubset<T, PromoCodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromoCodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PromoCode.
     * @param {PromoCodeUpsertArgs} args - Arguments to update or create a PromoCode.
     * @example
     * // Update or create a PromoCode
     * const promoCode = await prisma.promoCode.upsert({
     *   create: {
     *     // ... data to create a PromoCode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PromoCode we want to update
     *   }
     * })
     */
    upsert<T extends PromoCodeUpsertArgs>(args: SelectSubset<T, PromoCodeUpsertArgs<ExtArgs>>): Prisma__PromoCodeClient<$Result.GetResult<Prisma.$PromoCodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PromoCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromoCodeCountArgs} args - Arguments to filter PromoCodes to count.
     * @example
     * // Count the number of PromoCodes
     * const count = await prisma.promoCode.count({
     *   where: {
     *     // ... the filter for the PromoCodes we want to count
     *   }
     * })
    **/
    count<T extends PromoCodeCountArgs>(
      args?: Subset<T, PromoCodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PromoCodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PromoCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromoCodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PromoCodeAggregateArgs>(args: Subset<T, PromoCodeAggregateArgs>): Prisma.PrismaPromise<GetPromoCodeAggregateType<T>>

    /**
     * Group by PromoCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromoCodeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PromoCodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PromoCodeGroupByArgs['orderBy'] }
        : { orderBy?: PromoCodeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PromoCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPromoCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PromoCode model
   */
  readonly fields: PromoCodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PromoCode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PromoCodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends PromoCode$userArgs<ExtArgs> = {}>(args?: Subset<T, PromoCode$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PromoCode model
   */
  interface PromoCodeFieldRefs {
    readonly id: FieldRef<"PromoCode", 'Int'>
    readonly code: FieldRef<"PromoCode", 'String'>
    readonly type: FieldRef<"PromoCode", 'PromoType'>
    readonly value: FieldRef<"PromoCode", 'Int'>
    readonly is_used: FieldRef<"PromoCode", 'Boolean'>
    readonly used_at: FieldRef<"PromoCode", 'DateTime'>
    readonly user_id: FieldRef<"PromoCode", 'Int'>
    readonly created_at: FieldRef<"PromoCode", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PromoCode findUnique
   */
  export type PromoCodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromoCode
     */
    select?: PromoCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromoCode
     */
    omit?: PromoCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromoCodeInclude<ExtArgs> | null
    /**
     * Filter, which PromoCode to fetch.
     */
    where: PromoCodeWhereUniqueInput
  }

  /**
   * PromoCode findUniqueOrThrow
   */
  export type PromoCodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromoCode
     */
    select?: PromoCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromoCode
     */
    omit?: PromoCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromoCodeInclude<ExtArgs> | null
    /**
     * Filter, which PromoCode to fetch.
     */
    where: PromoCodeWhereUniqueInput
  }

  /**
   * PromoCode findFirst
   */
  export type PromoCodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromoCode
     */
    select?: PromoCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromoCode
     */
    omit?: PromoCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromoCodeInclude<ExtArgs> | null
    /**
     * Filter, which PromoCode to fetch.
     */
    where?: PromoCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromoCodes to fetch.
     */
    orderBy?: PromoCodeOrderByWithRelationInput | PromoCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PromoCodes.
     */
    cursor?: PromoCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromoCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromoCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PromoCodes.
     */
    distinct?: PromoCodeScalarFieldEnum | PromoCodeScalarFieldEnum[]
  }

  /**
   * PromoCode findFirstOrThrow
   */
  export type PromoCodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromoCode
     */
    select?: PromoCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromoCode
     */
    omit?: PromoCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromoCodeInclude<ExtArgs> | null
    /**
     * Filter, which PromoCode to fetch.
     */
    where?: PromoCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromoCodes to fetch.
     */
    orderBy?: PromoCodeOrderByWithRelationInput | PromoCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PromoCodes.
     */
    cursor?: PromoCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromoCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromoCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PromoCodes.
     */
    distinct?: PromoCodeScalarFieldEnum | PromoCodeScalarFieldEnum[]
  }

  /**
   * PromoCode findMany
   */
  export type PromoCodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromoCode
     */
    select?: PromoCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromoCode
     */
    omit?: PromoCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromoCodeInclude<ExtArgs> | null
    /**
     * Filter, which PromoCodes to fetch.
     */
    where?: PromoCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromoCodes to fetch.
     */
    orderBy?: PromoCodeOrderByWithRelationInput | PromoCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PromoCodes.
     */
    cursor?: PromoCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromoCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromoCodes.
     */
    skip?: number
    distinct?: PromoCodeScalarFieldEnum | PromoCodeScalarFieldEnum[]
  }

  /**
   * PromoCode create
   */
  export type PromoCodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromoCode
     */
    select?: PromoCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromoCode
     */
    omit?: PromoCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromoCodeInclude<ExtArgs> | null
    /**
     * The data needed to create a PromoCode.
     */
    data: XOR<PromoCodeCreateInput, PromoCodeUncheckedCreateInput>
  }

  /**
   * PromoCode createMany
   */
  export type PromoCodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PromoCodes.
     */
    data: PromoCodeCreateManyInput | PromoCodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PromoCode createManyAndReturn
   */
  export type PromoCodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromoCode
     */
    select?: PromoCodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PromoCode
     */
    omit?: PromoCodeOmit<ExtArgs> | null
    /**
     * The data used to create many PromoCodes.
     */
    data: PromoCodeCreateManyInput | PromoCodeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromoCodeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PromoCode update
   */
  export type PromoCodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromoCode
     */
    select?: PromoCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromoCode
     */
    omit?: PromoCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromoCodeInclude<ExtArgs> | null
    /**
     * The data needed to update a PromoCode.
     */
    data: XOR<PromoCodeUpdateInput, PromoCodeUncheckedUpdateInput>
    /**
     * Choose, which PromoCode to update.
     */
    where: PromoCodeWhereUniqueInput
  }

  /**
   * PromoCode updateMany
   */
  export type PromoCodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PromoCodes.
     */
    data: XOR<PromoCodeUpdateManyMutationInput, PromoCodeUncheckedUpdateManyInput>
    /**
     * Filter which PromoCodes to update
     */
    where?: PromoCodeWhereInput
    /**
     * Limit how many PromoCodes to update.
     */
    limit?: number
  }

  /**
   * PromoCode updateManyAndReturn
   */
  export type PromoCodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromoCode
     */
    select?: PromoCodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PromoCode
     */
    omit?: PromoCodeOmit<ExtArgs> | null
    /**
     * The data used to update PromoCodes.
     */
    data: XOR<PromoCodeUpdateManyMutationInput, PromoCodeUncheckedUpdateManyInput>
    /**
     * Filter which PromoCodes to update
     */
    where?: PromoCodeWhereInput
    /**
     * Limit how many PromoCodes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromoCodeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PromoCode upsert
   */
  export type PromoCodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromoCode
     */
    select?: PromoCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromoCode
     */
    omit?: PromoCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromoCodeInclude<ExtArgs> | null
    /**
     * The filter to search for the PromoCode to update in case it exists.
     */
    where: PromoCodeWhereUniqueInput
    /**
     * In case the PromoCode found by the `where` argument doesn't exist, create a new PromoCode with this data.
     */
    create: XOR<PromoCodeCreateInput, PromoCodeUncheckedCreateInput>
    /**
     * In case the PromoCode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PromoCodeUpdateInput, PromoCodeUncheckedUpdateInput>
  }

  /**
   * PromoCode delete
   */
  export type PromoCodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromoCode
     */
    select?: PromoCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromoCode
     */
    omit?: PromoCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromoCodeInclude<ExtArgs> | null
    /**
     * Filter which PromoCode to delete.
     */
    where: PromoCodeWhereUniqueInput
  }

  /**
   * PromoCode deleteMany
   */
  export type PromoCodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PromoCodes to delete
     */
    where?: PromoCodeWhereInput
    /**
     * Limit how many PromoCodes to delete.
     */
    limit?: number
  }

  /**
   * PromoCode.user
   */
  export type PromoCode$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * PromoCode without action
   */
  export type PromoCodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromoCode
     */
    select?: PromoCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromoCode
     */
    omit?: PromoCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromoCodeInclude<ExtArgs> | null
  }


  /**
   * Model GameAccount
   */

  export type AggregateGameAccount = {
    _count: GameAccountCountAggregateOutputType | null
    _avg: GameAccountAvgAggregateOutputType | null
    _sum: GameAccountSumAggregateOutputType | null
    _min: GameAccountMinAggregateOutputType | null
    _max: GameAccountMaxAggregateOutputType | null
  }

  export type GameAccountAvgAggregateOutputType = {
    id: number | null
    server: number | null
    wins: number | null
    user_id: number | null
  }

  export type GameAccountSumAggregateOutputType = {
    id: number | null
    server: number | null
    wins: number | null
    user_id: number | null
  }

  export type GameAccountMinAggregateOutputType = {
    id: number | null
    nickname: string | null
    server: number | null
    verified: boolean | null
    wins: number | null
    user_id: number | null
  }

  export type GameAccountMaxAggregateOutputType = {
    id: number | null
    nickname: string | null
    server: number | null
    verified: boolean | null
    wins: number | null
    user_id: number | null
  }

  export type GameAccountCountAggregateOutputType = {
    id: number
    nickname: number
    server: number
    verified: number
    wins: number
    user_id: number
    _all: number
  }


  export type GameAccountAvgAggregateInputType = {
    id?: true
    server?: true
    wins?: true
    user_id?: true
  }

  export type GameAccountSumAggregateInputType = {
    id?: true
    server?: true
    wins?: true
    user_id?: true
  }

  export type GameAccountMinAggregateInputType = {
    id?: true
    nickname?: true
    server?: true
    verified?: true
    wins?: true
    user_id?: true
  }

  export type GameAccountMaxAggregateInputType = {
    id?: true
    nickname?: true
    server?: true
    verified?: true
    wins?: true
    user_id?: true
  }

  export type GameAccountCountAggregateInputType = {
    id?: true
    nickname?: true
    server?: true
    verified?: true
    wins?: true
    user_id?: true
    _all?: true
  }

  export type GameAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameAccount to aggregate.
     */
    where?: GameAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameAccounts to fetch.
     */
    orderBy?: GameAccountOrderByWithRelationInput | GameAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GameAccounts
    **/
    _count?: true | GameAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameAccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameAccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameAccountMaxAggregateInputType
  }

  export type GetGameAccountAggregateType<T extends GameAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateGameAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGameAccount[P]>
      : GetScalarType<T[P], AggregateGameAccount[P]>
  }




  export type GameAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameAccountWhereInput
    orderBy?: GameAccountOrderByWithAggregationInput | GameAccountOrderByWithAggregationInput[]
    by: GameAccountScalarFieldEnum[] | GameAccountScalarFieldEnum
    having?: GameAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameAccountCountAggregateInputType | true
    _avg?: GameAccountAvgAggregateInputType
    _sum?: GameAccountSumAggregateInputType
    _min?: GameAccountMinAggregateInputType
    _max?: GameAccountMaxAggregateInputType
  }

  export type GameAccountGroupByOutputType = {
    id: number
    nickname: string
    server: number
    verified: boolean
    wins: number
    user_id: number
    _count: GameAccountCountAggregateOutputType | null
    _avg: GameAccountAvgAggregateOutputType | null
    _sum: GameAccountSumAggregateOutputType | null
    _min: GameAccountMinAggregateOutputType | null
    _max: GameAccountMaxAggregateOutputType | null
  }

  type GetGameAccountGroupByPayload<T extends GameAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameAccountGroupByOutputType[P]>
            : GetScalarType<T[P], GameAccountGroupByOutputType[P]>
        }
      >
    >


  export type GameAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nickname?: boolean
    server?: boolean
    verified?: boolean
    wins?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    races_won?: boolean | GameAccount$races_wonArgs<ExtArgs>
    participations?: boolean | GameAccount$participationsArgs<ExtArgs>
    sightings_observed?: boolean | GameAccount$sightings_observedArgs<ExtArgs>
    sightings_suspect?: boolean | GameAccount$sightings_suspectArgs<ExtArgs>
    _count?: boolean | GameAccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameAccount"]>

  export type GameAccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nickname?: boolean
    server?: boolean
    verified?: boolean
    wins?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameAccount"]>

  export type GameAccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nickname?: boolean
    server?: boolean
    verified?: boolean
    wins?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameAccount"]>

  export type GameAccountSelectScalar = {
    id?: boolean
    nickname?: boolean
    server?: boolean
    verified?: boolean
    wins?: boolean
    user_id?: boolean
  }

  export type GameAccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nickname" | "server" | "verified" | "wins" | "user_id", ExtArgs["result"]["gameAccount"]>
  export type GameAccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    races_won?: boolean | GameAccount$races_wonArgs<ExtArgs>
    participations?: boolean | GameAccount$participationsArgs<ExtArgs>
    sightings_observed?: boolean | GameAccount$sightings_observedArgs<ExtArgs>
    sightings_suspect?: boolean | GameAccount$sightings_suspectArgs<ExtArgs>
    _count?: boolean | GameAccountCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GameAccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GameAccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GameAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GameAccount"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      races_won: Prisma.$RacePayload<ExtArgs>[]
      participations: Prisma.$RaceParticipantPayload<ExtArgs>[]
      sightings_observed: Prisma.$RaceWitnessPayload<ExtArgs>[]
      sightings_suspect: Prisma.$RaceWitnessPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nickname: string
      server: number
      verified: boolean
      wins: number
      user_id: number
    }, ExtArgs["result"]["gameAccount"]>
    composites: {}
  }

  type GameAccountGetPayload<S extends boolean | null | undefined | GameAccountDefaultArgs> = $Result.GetResult<Prisma.$GameAccountPayload, S>

  type GameAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GameAccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GameAccountCountAggregateInputType | true
    }

  export interface GameAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GameAccount'], meta: { name: 'GameAccount' } }
    /**
     * Find zero or one GameAccount that matches the filter.
     * @param {GameAccountFindUniqueArgs} args - Arguments to find a GameAccount
     * @example
     * // Get one GameAccount
     * const gameAccount = await prisma.gameAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameAccountFindUniqueArgs>(args: SelectSubset<T, GameAccountFindUniqueArgs<ExtArgs>>): Prisma__GameAccountClient<$Result.GetResult<Prisma.$GameAccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GameAccount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GameAccountFindUniqueOrThrowArgs} args - Arguments to find a GameAccount
     * @example
     * // Get one GameAccount
     * const gameAccount = await prisma.gameAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, GameAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameAccountClient<$Result.GetResult<Prisma.$GameAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameAccountFindFirstArgs} args - Arguments to find a GameAccount
     * @example
     * // Get one GameAccount
     * const gameAccount = await prisma.gameAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameAccountFindFirstArgs>(args?: SelectSubset<T, GameAccountFindFirstArgs<ExtArgs>>): Prisma__GameAccountClient<$Result.GetResult<Prisma.$GameAccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameAccountFindFirstOrThrowArgs} args - Arguments to find a GameAccount
     * @example
     * // Get one GameAccount
     * const gameAccount = await prisma.gameAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, GameAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameAccountClient<$Result.GetResult<Prisma.$GameAccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GameAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GameAccounts
     * const gameAccounts = await prisma.gameAccount.findMany()
     * 
     * // Get first 10 GameAccounts
     * const gameAccounts = await prisma.gameAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameAccountWithIdOnly = await prisma.gameAccount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameAccountFindManyArgs>(args?: SelectSubset<T, GameAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GameAccount.
     * @param {GameAccountCreateArgs} args - Arguments to create a GameAccount.
     * @example
     * // Create one GameAccount
     * const GameAccount = await prisma.gameAccount.create({
     *   data: {
     *     // ... data to create a GameAccount
     *   }
     * })
     * 
     */
    create<T extends GameAccountCreateArgs>(args: SelectSubset<T, GameAccountCreateArgs<ExtArgs>>): Prisma__GameAccountClient<$Result.GetResult<Prisma.$GameAccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GameAccounts.
     * @param {GameAccountCreateManyArgs} args - Arguments to create many GameAccounts.
     * @example
     * // Create many GameAccounts
     * const gameAccount = await prisma.gameAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameAccountCreateManyArgs>(args?: SelectSubset<T, GameAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GameAccounts and returns the data saved in the database.
     * @param {GameAccountCreateManyAndReturnArgs} args - Arguments to create many GameAccounts.
     * @example
     * // Create many GameAccounts
     * const gameAccount = await prisma.gameAccount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GameAccounts and only return the `id`
     * const gameAccountWithIdOnly = await prisma.gameAccount.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameAccountCreateManyAndReturnArgs>(args?: SelectSubset<T, GameAccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameAccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GameAccount.
     * @param {GameAccountDeleteArgs} args - Arguments to delete one GameAccount.
     * @example
     * // Delete one GameAccount
     * const GameAccount = await prisma.gameAccount.delete({
     *   where: {
     *     // ... filter to delete one GameAccount
     *   }
     * })
     * 
     */
    delete<T extends GameAccountDeleteArgs>(args: SelectSubset<T, GameAccountDeleteArgs<ExtArgs>>): Prisma__GameAccountClient<$Result.GetResult<Prisma.$GameAccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GameAccount.
     * @param {GameAccountUpdateArgs} args - Arguments to update one GameAccount.
     * @example
     * // Update one GameAccount
     * const gameAccount = await prisma.gameAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameAccountUpdateArgs>(args: SelectSubset<T, GameAccountUpdateArgs<ExtArgs>>): Prisma__GameAccountClient<$Result.GetResult<Prisma.$GameAccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GameAccounts.
     * @param {GameAccountDeleteManyArgs} args - Arguments to filter GameAccounts to delete.
     * @example
     * // Delete a few GameAccounts
     * const { count } = await prisma.gameAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameAccountDeleteManyArgs>(args?: SelectSubset<T, GameAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GameAccounts
     * const gameAccount = await prisma.gameAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameAccountUpdateManyArgs>(args: SelectSubset<T, GameAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameAccounts and returns the data updated in the database.
     * @param {GameAccountUpdateManyAndReturnArgs} args - Arguments to update many GameAccounts.
     * @example
     * // Update many GameAccounts
     * const gameAccount = await prisma.gameAccount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GameAccounts and only return the `id`
     * const gameAccountWithIdOnly = await prisma.gameAccount.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GameAccountUpdateManyAndReturnArgs>(args: SelectSubset<T, GameAccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameAccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GameAccount.
     * @param {GameAccountUpsertArgs} args - Arguments to update or create a GameAccount.
     * @example
     * // Update or create a GameAccount
     * const gameAccount = await prisma.gameAccount.upsert({
     *   create: {
     *     // ... data to create a GameAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GameAccount we want to update
     *   }
     * })
     */
    upsert<T extends GameAccountUpsertArgs>(args: SelectSubset<T, GameAccountUpsertArgs<ExtArgs>>): Prisma__GameAccountClient<$Result.GetResult<Prisma.$GameAccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GameAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameAccountCountArgs} args - Arguments to filter GameAccounts to count.
     * @example
     * // Count the number of GameAccounts
     * const count = await prisma.gameAccount.count({
     *   where: {
     *     // ... the filter for the GameAccounts we want to count
     *   }
     * })
    **/
    count<T extends GameAccountCountArgs>(
      args?: Subset<T, GameAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GameAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GameAccountAggregateArgs>(args: Subset<T, GameAccountAggregateArgs>): Prisma.PrismaPromise<GetGameAccountAggregateType<T>>

    /**
     * Group by GameAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameAccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GameAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameAccountGroupByArgs['orderBy'] }
        : { orderBy?: GameAccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GameAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GameAccount model
   */
  readonly fields: GameAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GameAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    races_won<T extends GameAccount$races_wonArgs<ExtArgs> = {}>(args?: Subset<T, GameAccount$races_wonArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    participations<T extends GameAccount$participationsArgs<ExtArgs> = {}>(args?: Subset<T, GameAccount$participationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaceParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sightings_observed<T extends GameAccount$sightings_observedArgs<ExtArgs> = {}>(args?: Subset<T, GameAccount$sightings_observedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaceWitnessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sightings_suspect<T extends GameAccount$sightings_suspectArgs<ExtArgs> = {}>(args?: Subset<T, GameAccount$sightings_suspectArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaceWitnessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GameAccount model
   */
  interface GameAccountFieldRefs {
    readonly id: FieldRef<"GameAccount", 'Int'>
    readonly nickname: FieldRef<"GameAccount", 'String'>
    readonly server: FieldRef<"GameAccount", 'Int'>
    readonly verified: FieldRef<"GameAccount", 'Boolean'>
    readonly wins: FieldRef<"GameAccount", 'Int'>
    readonly user_id: FieldRef<"GameAccount", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * GameAccount findUnique
   */
  export type GameAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameAccount
     */
    select?: GameAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameAccount
     */
    omit?: GameAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameAccountInclude<ExtArgs> | null
    /**
     * Filter, which GameAccount to fetch.
     */
    where: GameAccountWhereUniqueInput
  }

  /**
   * GameAccount findUniqueOrThrow
   */
  export type GameAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameAccount
     */
    select?: GameAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameAccount
     */
    omit?: GameAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameAccountInclude<ExtArgs> | null
    /**
     * Filter, which GameAccount to fetch.
     */
    where: GameAccountWhereUniqueInput
  }

  /**
   * GameAccount findFirst
   */
  export type GameAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameAccount
     */
    select?: GameAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameAccount
     */
    omit?: GameAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameAccountInclude<ExtArgs> | null
    /**
     * Filter, which GameAccount to fetch.
     */
    where?: GameAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameAccounts to fetch.
     */
    orderBy?: GameAccountOrderByWithRelationInput | GameAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameAccounts.
     */
    cursor?: GameAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameAccounts.
     */
    distinct?: GameAccountScalarFieldEnum | GameAccountScalarFieldEnum[]
  }

  /**
   * GameAccount findFirstOrThrow
   */
  export type GameAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameAccount
     */
    select?: GameAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameAccount
     */
    omit?: GameAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameAccountInclude<ExtArgs> | null
    /**
     * Filter, which GameAccount to fetch.
     */
    where?: GameAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameAccounts to fetch.
     */
    orderBy?: GameAccountOrderByWithRelationInput | GameAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameAccounts.
     */
    cursor?: GameAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameAccounts.
     */
    distinct?: GameAccountScalarFieldEnum | GameAccountScalarFieldEnum[]
  }

  /**
   * GameAccount findMany
   */
  export type GameAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameAccount
     */
    select?: GameAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameAccount
     */
    omit?: GameAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameAccountInclude<ExtArgs> | null
    /**
     * Filter, which GameAccounts to fetch.
     */
    where?: GameAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameAccounts to fetch.
     */
    orderBy?: GameAccountOrderByWithRelationInput | GameAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GameAccounts.
     */
    cursor?: GameAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameAccounts.
     */
    skip?: number
    distinct?: GameAccountScalarFieldEnum | GameAccountScalarFieldEnum[]
  }

  /**
   * GameAccount create
   */
  export type GameAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameAccount
     */
    select?: GameAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameAccount
     */
    omit?: GameAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameAccountInclude<ExtArgs> | null
    /**
     * The data needed to create a GameAccount.
     */
    data: XOR<GameAccountCreateInput, GameAccountUncheckedCreateInput>
  }

  /**
   * GameAccount createMany
   */
  export type GameAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GameAccounts.
     */
    data: GameAccountCreateManyInput | GameAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GameAccount createManyAndReturn
   */
  export type GameAccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameAccount
     */
    select?: GameAccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GameAccount
     */
    omit?: GameAccountOmit<ExtArgs> | null
    /**
     * The data used to create many GameAccounts.
     */
    data: GameAccountCreateManyInput | GameAccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameAccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GameAccount update
   */
  export type GameAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameAccount
     */
    select?: GameAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameAccount
     */
    omit?: GameAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameAccountInclude<ExtArgs> | null
    /**
     * The data needed to update a GameAccount.
     */
    data: XOR<GameAccountUpdateInput, GameAccountUncheckedUpdateInput>
    /**
     * Choose, which GameAccount to update.
     */
    where: GameAccountWhereUniqueInput
  }

  /**
   * GameAccount updateMany
   */
  export type GameAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GameAccounts.
     */
    data: XOR<GameAccountUpdateManyMutationInput, GameAccountUncheckedUpdateManyInput>
    /**
     * Filter which GameAccounts to update
     */
    where?: GameAccountWhereInput
    /**
     * Limit how many GameAccounts to update.
     */
    limit?: number
  }

  /**
   * GameAccount updateManyAndReturn
   */
  export type GameAccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameAccount
     */
    select?: GameAccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GameAccount
     */
    omit?: GameAccountOmit<ExtArgs> | null
    /**
     * The data used to update GameAccounts.
     */
    data: XOR<GameAccountUpdateManyMutationInput, GameAccountUncheckedUpdateManyInput>
    /**
     * Filter which GameAccounts to update
     */
    where?: GameAccountWhereInput
    /**
     * Limit how many GameAccounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameAccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GameAccount upsert
   */
  export type GameAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameAccount
     */
    select?: GameAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameAccount
     */
    omit?: GameAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameAccountInclude<ExtArgs> | null
    /**
     * The filter to search for the GameAccount to update in case it exists.
     */
    where: GameAccountWhereUniqueInput
    /**
     * In case the GameAccount found by the `where` argument doesn't exist, create a new GameAccount with this data.
     */
    create: XOR<GameAccountCreateInput, GameAccountUncheckedCreateInput>
    /**
     * In case the GameAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameAccountUpdateInput, GameAccountUncheckedUpdateInput>
  }

  /**
   * GameAccount delete
   */
  export type GameAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameAccount
     */
    select?: GameAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameAccount
     */
    omit?: GameAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameAccountInclude<ExtArgs> | null
    /**
     * Filter which GameAccount to delete.
     */
    where: GameAccountWhereUniqueInput
  }

  /**
   * GameAccount deleteMany
   */
  export type GameAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameAccounts to delete
     */
    where?: GameAccountWhereInput
    /**
     * Limit how many GameAccounts to delete.
     */
    limit?: number
  }

  /**
   * GameAccount.races_won
   */
  export type GameAccount$races_wonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    where?: RaceWhereInput
    orderBy?: RaceOrderByWithRelationInput | RaceOrderByWithRelationInput[]
    cursor?: RaceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RaceScalarFieldEnum | RaceScalarFieldEnum[]
  }

  /**
   * GameAccount.participations
   */
  export type GameAccount$participationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceParticipant
     */
    select?: RaceParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceParticipant
     */
    omit?: RaceParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceParticipantInclude<ExtArgs> | null
    where?: RaceParticipantWhereInput
    orderBy?: RaceParticipantOrderByWithRelationInput | RaceParticipantOrderByWithRelationInput[]
    cursor?: RaceParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RaceParticipantScalarFieldEnum | RaceParticipantScalarFieldEnum[]
  }

  /**
   * GameAccount.sightings_observed
   */
  export type GameAccount$sightings_observedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceWitness
     */
    select?: RaceWitnessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceWitness
     */
    omit?: RaceWitnessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceWitnessInclude<ExtArgs> | null
    where?: RaceWitnessWhereInput
    orderBy?: RaceWitnessOrderByWithRelationInput | RaceWitnessOrderByWithRelationInput[]
    cursor?: RaceWitnessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RaceWitnessScalarFieldEnum | RaceWitnessScalarFieldEnum[]
  }

  /**
   * GameAccount.sightings_suspect
   */
  export type GameAccount$sightings_suspectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceWitness
     */
    select?: RaceWitnessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceWitness
     */
    omit?: RaceWitnessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceWitnessInclude<ExtArgs> | null
    where?: RaceWitnessWhereInput
    orderBy?: RaceWitnessOrderByWithRelationInput | RaceWitnessOrderByWithRelationInput[]
    cursor?: RaceWitnessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RaceWitnessScalarFieldEnum | RaceWitnessScalarFieldEnum[]
  }

  /**
   * GameAccount without action
   */
  export type GameAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameAccount
     */
    select?: GameAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameAccount
     */
    omit?: GameAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameAccountInclude<ExtArgs> | null
  }


  /**
   * Model Location
   */

  export type AggregateLocation = {
    _count: LocationCountAggregateOutputType | null
    _avg: LocationAvgAggregateOutputType | null
    _sum: LocationSumAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  export type LocationAvgAggregateOutputType = {
    id: number | null
    pos_one_x: number | null
    pos_one_y: number | null
    pos_one_z: number | null
    pos_two_x: number | null
    pos_two_y: number | null
    pos_two_z: number | null
  }

  export type LocationSumAggregateOutputType = {
    id: number | null
    pos_one_x: number | null
    pos_one_y: number | null
    pos_one_z: number | null
    pos_two_x: number | null
    pos_two_y: number | null
    pos_two_z: number | null
  }

  export type LocationMinAggregateOutputType = {
    id: number | null
    name: string | null
    file_id: string | null
    pos_one_x: number | null
    pos_one_y: number | null
    pos_one_z: number | null
    pos_two_x: number | null
    pos_two_y: number | null
    pos_two_z: number | null
  }

  export type LocationMaxAggregateOutputType = {
    id: number | null
    name: string | null
    file_id: string | null
    pos_one_x: number | null
    pos_one_y: number | null
    pos_one_z: number | null
    pos_two_x: number | null
    pos_two_y: number | null
    pos_two_z: number | null
  }

  export type LocationCountAggregateOutputType = {
    id: number
    name: number
    file_id: number
    pos_one_x: number
    pos_one_y: number
    pos_one_z: number
    pos_two_x: number
    pos_two_y: number
    pos_two_z: number
    _all: number
  }


  export type LocationAvgAggregateInputType = {
    id?: true
    pos_one_x?: true
    pos_one_y?: true
    pos_one_z?: true
    pos_two_x?: true
    pos_two_y?: true
    pos_two_z?: true
  }

  export type LocationSumAggregateInputType = {
    id?: true
    pos_one_x?: true
    pos_one_y?: true
    pos_one_z?: true
    pos_two_x?: true
    pos_two_y?: true
    pos_two_z?: true
  }

  export type LocationMinAggregateInputType = {
    id?: true
    name?: true
    file_id?: true
    pos_one_x?: true
    pos_one_y?: true
    pos_one_z?: true
    pos_two_x?: true
    pos_two_y?: true
    pos_two_z?: true
  }

  export type LocationMaxAggregateInputType = {
    id?: true
    name?: true
    file_id?: true
    pos_one_x?: true
    pos_one_y?: true
    pos_one_z?: true
    pos_two_x?: true
    pos_two_y?: true
    pos_two_z?: true
  }

  export type LocationCountAggregateInputType = {
    id?: true
    name?: true
    file_id?: true
    pos_one_x?: true
    pos_one_y?: true
    pos_one_z?: true
    pos_two_x?: true
    pos_two_y?: true
    pos_two_z?: true
    _all?: true
  }

  export type LocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Location to aggregate.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Locations
    **/
    _count?: true | LocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LocationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LocationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationMaxAggregateInputType
  }

  export type GetLocationAggregateType<T extends LocationAggregateArgs> = {
        [P in keyof T & keyof AggregateLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocation[P]>
      : GetScalarType<T[P], AggregateLocation[P]>
  }




  export type LocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationWhereInput
    orderBy?: LocationOrderByWithAggregationInput | LocationOrderByWithAggregationInput[]
    by: LocationScalarFieldEnum[] | LocationScalarFieldEnum
    having?: LocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationCountAggregateInputType | true
    _avg?: LocationAvgAggregateInputType
    _sum?: LocationSumAggregateInputType
    _min?: LocationMinAggregateInputType
    _max?: LocationMaxAggregateInputType
  }

  export type LocationGroupByOutputType = {
    id: number
    name: string
    file_id: string
    pos_one_x: number
    pos_one_y: number
    pos_one_z: number
    pos_two_x: number
    pos_two_y: number
    pos_two_z: number
    _count: LocationCountAggregateOutputType | null
    _avg: LocationAvgAggregateOutputType | null
    _sum: LocationSumAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  type GetLocationGroupByPayload<T extends LocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationGroupByOutputType[P]>
            : GetScalarType<T[P], LocationGroupByOutputType[P]>
        }
      >
    >


  export type LocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    file_id?: boolean
    pos_one_x?: boolean
    pos_one_y?: boolean
    pos_one_z?: boolean
    pos_two_x?: boolean
    pos_two_y?: boolean
    pos_two_z?: boolean
    races?: boolean | Location$racesArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["location"]>

  export type LocationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    file_id?: boolean
    pos_one_x?: boolean
    pos_one_y?: boolean
    pos_one_z?: boolean
    pos_two_x?: boolean
    pos_two_y?: boolean
    pos_two_z?: boolean
  }, ExtArgs["result"]["location"]>

  export type LocationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    file_id?: boolean
    pos_one_x?: boolean
    pos_one_y?: boolean
    pos_one_z?: boolean
    pos_two_x?: boolean
    pos_two_y?: boolean
    pos_two_z?: boolean
  }, ExtArgs["result"]["location"]>

  export type LocationSelectScalar = {
    id?: boolean
    name?: boolean
    file_id?: boolean
    pos_one_x?: boolean
    pos_one_y?: boolean
    pos_one_z?: boolean
    pos_two_x?: boolean
    pos_two_y?: boolean
    pos_two_z?: boolean
  }

  export type LocationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "file_id" | "pos_one_x" | "pos_one_y" | "pos_one_z" | "pos_two_x" | "pos_two_y" | "pos_two_z", ExtArgs["result"]["location"]>
  export type LocationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    races?: boolean | Location$racesArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LocationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LocationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Location"
    objects: {
      races: Prisma.$RacePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      file_id: string
      pos_one_x: number
      pos_one_y: number
      pos_one_z: number
      pos_two_x: number
      pos_two_y: number
      pos_two_z: number
    }, ExtArgs["result"]["location"]>
    composites: {}
  }

  type LocationGetPayload<S extends boolean | null | undefined | LocationDefaultArgs> = $Result.GetResult<Prisma.$LocationPayload, S>

  type LocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocationCountAggregateInputType | true
    }

  export interface LocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Location'], meta: { name: 'Location' } }
    /**
     * Find zero or one Location that matches the filter.
     * @param {LocationFindUniqueArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocationFindUniqueArgs>(args: SelectSubset<T, LocationFindUniqueArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Location that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocationFindUniqueOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocationFindUniqueOrThrowArgs>(args: SelectSubset<T, LocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocationFindFirstArgs>(args?: SelectSubset<T, LocationFindFirstArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocationFindFirstOrThrowArgs>(args?: SelectSubset<T, LocationFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locations
     * const locations = await prisma.location.findMany()
     * 
     * // Get first 10 Locations
     * const locations = await prisma.location.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locationWithIdOnly = await prisma.location.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LocationFindManyArgs>(args?: SelectSubset<T, LocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Location.
     * @param {LocationCreateArgs} args - Arguments to create a Location.
     * @example
     * // Create one Location
     * const Location = await prisma.location.create({
     *   data: {
     *     // ... data to create a Location
     *   }
     * })
     * 
     */
    create<T extends LocationCreateArgs>(args: SelectSubset<T, LocationCreateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Locations.
     * @param {LocationCreateManyArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const location = await prisma.location.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LocationCreateManyArgs>(args?: SelectSubset<T, LocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Locations and returns the data saved in the database.
     * @param {LocationCreateManyAndReturnArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const location = await prisma.location.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Locations and only return the `id`
     * const locationWithIdOnly = await prisma.location.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LocationCreateManyAndReturnArgs>(args?: SelectSubset<T, LocationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Location.
     * @param {LocationDeleteArgs} args - Arguments to delete one Location.
     * @example
     * // Delete one Location
     * const Location = await prisma.location.delete({
     *   where: {
     *     // ... filter to delete one Location
     *   }
     * })
     * 
     */
    delete<T extends LocationDeleteArgs>(args: SelectSubset<T, LocationDeleteArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Location.
     * @param {LocationUpdateArgs} args - Arguments to update one Location.
     * @example
     * // Update one Location
     * const location = await prisma.location.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocationUpdateArgs>(args: SelectSubset<T, LocationUpdateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Locations.
     * @param {LocationDeleteManyArgs} args - Arguments to filter Locations to delete.
     * @example
     * // Delete a few Locations
     * const { count } = await prisma.location.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocationDeleteManyArgs>(args?: SelectSubset<T, LocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocationUpdateManyArgs>(args: SelectSubset<T, LocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations and returns the data updated in the database.
     * @param {LocationUpdateManyAndReturnArgs} args - Arguments to update many Locations.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Locations and only return the `id`
     * const locationWithIdOnly = await prisma.location.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LocationUpdateManyAndReturnArgs>(args: SelectSubset<T, LocationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Location.
     * @param {LocationUpsertArgs} args - Arguments to update or create a Location.
     * @example
     * // Update or create a Location
     * const location = await prisma.location.upsert({
     *   create: {
     *     // ... data to create a Location
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Location we want to update
     *   }
     * })
     */
    upsert<T extends LocationUpsertArgs>(args: SelectSubset<T, LocationUpsertArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationCountArgs} args - Arguments to filter Locations to count.
     * @example
     * // Count the number of Locations
     * const count = await prisma.location.count({
     *   where: {
     *     // ... the filter for the Locations we want to count
     *   }
     * })
    **/
    count<T extends LocationCountArgs>(
      args?: Subset<T, LocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LocationAggregateArgs>(args: Subset<T, LocationAggregateArgs>): Prisma.PrismaPromise<GetLocationAggregateType<T>>

    /**
     * Group by Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocationGroupByArgs['orderBy'] }
        : { orderBy?: LocationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Location model
   */
  readonly fields: LocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Location.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    races<T extends Location$racesArgs<ExtArgs> = {}>(args?: Subset<T, Location$racesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Location model
   */
  interface LocationFieldRefs {
    readonly id: FieldRef<"Location", 'Int'>
    readonly name: FieldRef<"Location", 'String'>
    readonly file_id: FieldRef<"Location", 'String'>
    readonly pos_one_x: FieldRef<"Location", 'Float'>
    readonly pos_one_y: FieldRef<"Location", 'Float'>
    readonly pos_one_z: FieldRef<"Location", 'Float'>
    readonly pos_two_x: FieldRef<"Location", 'Float'>
    readonly pos_two_y: FieldRef<"Location", 'Float'>
    readonly pos_two_z: FieldRef<"Location", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Location findUnique
   */
  export type LocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findUniqueOrThrow
   */
  export type LocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findFirst
   */
  export type LocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findFirstOrThrow
   */
  export type LocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findMany
   */
  export type LocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Locations to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location create
   */
  export type LocationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to create a Location.
     */
    data: XOR<LocationCreateInput, LocationUncheckedCreateInput>
  }

  /**
   * Location createMany
   */
  export type LocationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Locations.
     */
    data: LocationCreateManyInput | LocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Location createManyAndReturn
   */
  export type LocationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * The data used to create many Locations.
     */
    data: LocationCreateManyInput | LocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Location update
   */
  export type LocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to update a Location.
     */
    data: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
    /**
     * Choose, which Location to update.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location updateMany
   */
  export type LocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
  }

  /**
   * Location updateManyAndReturn
   */
  export type LocationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
  }

  /**
   * Location upsert
   */
  export type LocationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The filter to search for the Location to update in case it exists.
     */
    where: LocationWhereUniqueInput
    /**
     * In case the Location found by the `where` argument doesn't exist, create a new Location with this data.
     */
    create: XOR<LocationCreateInput, LocationUncheckedCreateInput>
    /**
     * In case the Location was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
  }

  /**
   * Location delete
   */
  export type LocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter which Location to delete.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location deleteMany
   */
  export type LocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Locations to delete
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to delete.
     */
    limit?: number
  }

  /**
   * Location.races
   */
  export type Location$racesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    where?: RaceWhereInput
    orderBy?: RaceOrderByWithRelationInput | RaceOrderByWithRelationInput[]
    cursor?: RaceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RaceScalarFieldEnum | RaceScalarFieldEnum[]
  }

  /**
   * Location without action
   */
  export type LocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
  }


  /**
   * Model Race
   */

  export type AggregateRace = {
    _count: RaceCountAggregateOutputType | null
    _avg: RaceAvgAggregateOutputType | null
    _sum: RaceSumAggregateOutputType | null
    _min: RaceMinAggregateOutputType | null
    _max: RaceMaxAggregateOutputType | null
  }

  export type RaceAvgAggregateOutputType = {
    id: number | null
    location_id: number | null
    winner_id: number | null
    creator_id: number | null
  }

  export type RaceSumAggregateOutputType = {
    id: number | null
    location_id: number | null
    winner_id: number | null
    creator_id: number | null
  }

  export type RaceMinAggregateOutputType = {
    id: number | null
    secret_code: string | null
    is_vip: boolean | null
    status: $Enums.RaceStatus | null
    location_id: number | null
    winner_id: number | null
    prize: string | null
    start_at: Date | null
    server_start_time: Date | null
    creator_id: number | null
    created_at: Date | null
  }

  export type RaceMaxAggregateOutputType = {
    id: number | null
    secret_code: string | null
    is_vip: boolean | null
    status: $Enums.RaceStatus | null
    location_id: number | null
    winner_id: number | null
    prize: string | null
    start_at: Date | null
    server_start_time: Date | null
    creator_id: number | null
    created_at: Date | null
  }

  export type RaceCountAggregateOutputType = {
    id: number
    secret_code: number
    is_vip: number
    status: number
    location_id: number
    winner_id: number
    winner_path: number
    prize: number
    start_at: number
    server_start_time: number
    creator_id: number
    created_at: number
    _all: number
  }


  export type RaceAvgAggregateInputType = {
    id?: true
    location_id?: true
    winner_id?: true
    creator_id?: true
  }

  export type RaceSumAggregateInputType = {
    id?: true
    location_id?: true
    winner_id?: true
    creator_id?: true
  }

  export type RaceMinAggregateInputType = {
    id?: true
    secret_code?: true
    is_vip?: true
    status?: true
    location_id?: true
    winner_id?: true
    prize?: true
    start_at?: true
    server_start_time?: true
    creator_id?: true
    created_at?: true
  }

  export type RaceMaxAggregateInputType = {
    id?: true
    secret_code?: true
    is_vip?: true
    status?: true
    location_id?: true
    winner_id?: true
    prize?: true
    start_at?: true
    server_start_time?: true
    creator_id?: true
    created_at?: true
  }

  export type RaceCountAggregateInputType = {
    id?: true
    secret_code?: true
    is_vip?: true
    status?: true
    location_id?: true
    winner_id?: true
    winner_path?: true
    prize?: true
    start_at?: true
    server_start_time?: true
    creator_id?: true
    created_at?: true
    _all?: true
  }

  export type RaceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Race to aggregate.
     */
    where?: RaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Races to fetch.
     */
    orderBy?: RaceOrderByWithRelationInput | RaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Races from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Races.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Races
    **/
    _count?: true | RaceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RaceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RaceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RaceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RaceMaxAggregateInputType
  }

  export type GetRaceAggregateType<T extends RaceAggregateArgs> = {
        [P in keyof T & keyof AggregateRace]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRace[P]>
      : GetScalarType<T[P], AggregateRace[P]>
  }




  export type RaceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RaceWhereInput
    orderBy?: RaceOrderByWithAggregationInput | RaceOrderByWithAggregationInput[]
    by: RaceScalarFieldEnum[] | RaceScalarFieldEnum
    having?: RaceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RaceCountAggregateInputType | true
    _avg?: RaceAvgAggregateInputType
    _sum?: RaceSumAggregateInputType
    _min?: RaceMinAggregateInputType
    _max?: RaceMaxAggregateInputType
  }

  export type RaceGroupByOutputType = {
    id: number
    secret_code: string
    is_vip: boolean
    status: $Enums.RaceStatus
    location_id: number
    winner_id: number | null
    winner_path: JsonValue | null
    prize: string
    start_at: Date
    server_start_time: Date | null
    creator_id: number | null
    created_at: Date
    _count: RaceCountAggregateOutputType | null
    _avg: RaceAvgAggregateOutputType | null
    _sum: RaceSumAggregateOutputType | null
    _min: RaceMinAggregateOutputType | null
    _max: RaceMaxAggregateOutputType | null
  }

  type GetRaceGroupByPayload<T extends RaceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RaceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RaceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RaceGroupByOutputType[P]>
            : GetScalarType<T[P], RaceGroupByOutputType[P]>
        }
      >
    >


  export type RaceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    secret_code?: boolean
    is_vip?: boolean
    status?: boolean
    location_id?: boolean
    winner_id?: boolean
    winner_path?: boolean
    prize?: boolean
    start_at?: boolean
    server_start_time?: boolean
    creator_id?: boolean
    created_at?: boolean
    location?: boolean | LocationDefaultArgs<ExtArgs>
    winner?: boolean | Race$winnerArgs<ExtArgs>
    creator?: boolean | Race$creatorArgs<ExtArgs>
    participants?: boolean | Race$participantsArgs<ExtArgs>
    witnesses?: boolean | Race$witnessesArgs<ExtArgs>
    _count?: boolean | RaceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["race"]>

  export type RaceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    secret_code?: boolean
    is_vip?: boolean
    status?: boolean
    location_id?: boolean
    winner_id?: boolean
    winner_path?: boolean
    prize?: boolean
    start_at?: boolean
    server_start_time?: boolean
    creator_id?: boolean
    created_at?: boolean
    location?: boolean | LocationDefaultArgs<ExtArgs>
    winner?: boolean | Race$winnerArgs<ExtArgs>
    creator?: boolean | Race$creatorArgs<ExtArgs>
  }, ExtArgs["result"]["race"]>

  export type RaceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    secret_code?: boolean
    is_vip?: boolean
    status?: boolean
    location_id?: boolean
    winner_id?: boolean
    winner_path?: boolean
    prize?: boolean
    start_at?: boolean
    server_start_time?: boolean
    creator_id?: boolean
    created_at?: boolean
    location?: boolean | LocationDefaultArgs<ExtArgs>
    winner?: boolean | Race$winnerArgs<ExtArgs>
    creator?: boolean | Race$creatorArgs<ExtArgs>
  }, ExtArgs["result"]["race"]>

  export type RaceSelectScalar = {
    id?: boolean
    secret_code?: boolean
    is_vip?: boolean
    status?: boolean
    location_id?: boolean
    winner_id?: boolean
    winner_path?: boolean
    prize?: boolean
    start_at?: boolean
    server_start_time?: boolean
    creator_id?: boolean
    created_at?: boolean
  }

  export type RaceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "secret_code" | "is_vip" | "status" | "location_id" | "winner_id" | "winner_path" | "prize" | "start_at" | "server_start_time" | "creator_id" | "created_at", ExtArgs["result"]["race"]>
  export type RaceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | LocationDefaultArgs<ExtArgs>
    winner?: boolean | Race$winnerArgs<ExtArgs>
    creator?: boolean | Race$creatorArgs<ExtArgs>
    participants?: boolean | Race$participantsArgs<ExtArgs>
    witnesses?: boolean | Race$witnessesArgs<ExtArgs>
    _count?: boolean | RaceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RaceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | LocationDefaultArgs<ExtArgs>
    winner?: boolean | Race$winnerArgs<ExtArgs>
    creator?: boolean | Race$creatorArgs<ExtArgs>
  }
  export type RaceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | LocationDefaultArgs<ExtArgs>
    winner?: boolean | Race$winnerArgs<ExtArgs>
    creator?: boolean | Race$creatorArgs<ExtArgs>
  }

  export type $RacePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Race"
    objects: {
      location: Prisma.$LocationPayload<ExtArgs>
      winner: Prisma.$GameAccountPayload<ExtArgs> | null
      creator: Prisma.$UserPayload<ExtArgs> | null
      participants: Prisma.$RaceParticipantPayload<ExtArgs>[]
      witnesses: Prisma.$RaceWitnessPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      secret_code: string
      is_vip: boolean
      status: $Enums.RaceStatus
      location_id: number
      winner_id: number | null
      winner_path: Prisma.JsonValue | null
      prize: string
      start_at: Date
      server_start_time: Date | null
      creator_id: number | null
      created_at: Date
    }, ExtArgs["result"]["race"]>
    composites: {}
  }

  type RaceGetPayload<S extends boolean | null | undefined | RaceDefaultArgs> = $Result.GetResult<Prisma.$RacePayload, S>

  type RaceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RaceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RaceCountAggregateInputType | true
    }

  export interface RaceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Race'], meta: { name: 'Race' } }
    /**
     * Find zero or one Race that matches the filter.
     * @param {RaceFindUniqueArgs} args - Arguments to find a Race
     * @example
     * // Get one Race
     * const race = await prisma.race.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RaceFindUniqueArgs>(args: SelectSubset<T, RaceFindUniqueArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Race that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RaceFindUniqueOrThrowArgs} args - Arguments to find a Race
     * @example
     * // Get one Race
     * const race = await prisma.race.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RaceFindUniqueOrThrowArgs>(args: SelectSubset<T, RaceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Race that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceFindFirstArgs} args - Arguments to find a Race
     * @example
     * // Get one Race
     * const race = await prisma.race.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RaceFindFirstArgs>(args?: SelectSubset<T, RaceFindFirstArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Race that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceFindFirstOrThrowArgs} args - Arguments to find a Race
     * @example
     * // Get one Race
     * const race = await prisma.race.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RaceFindFirstOrThrowArgs>(args?: SelectSubset<T, RaceFindFirstOrThrowArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Races that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Races
     * const races = await prisma.race.findMany()
     * 
     * // Get first 10 Races
     * const races = await prisma.race.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const raceWithIdOnly = await prisma.race.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RaceFindManyArgs>(args?: SelectSubset<T, RaceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Race.
     * @param {RaceCreateArgs} args - Arguments to create a Race.
     * @example
     * // Create one Race
     * const Race = await prisma.race.create({
     *   data: {
     *     // ... data to create a Race
     *   }
     * })
     * 
     */
    create<T extends RaceCreateArgs>(args: SelectSubset<T, RaceCreateArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Races.
     * @param {RaceCreateManyArgs} args - Arguments to create many Races.
     * @example
     * // Create many Races
     * const race = await prisma.race.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RaceCreateManyArgs>(args?: SelectSubset<T, RaceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Races and returns the data saved in the database.
     * @param {RaceCreateManyAndReturnArgs} args - Arguments to create many Races.
     * @example
     * // Create many Races
     * const race = await prisma.race.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Races and only return the `id`
     * const raceWithIdOnly = await prisma.race.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RaceCreateManyAndReturnArgs>(args?: SelectSubset<T, RaceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Race.
     * @param {RaceDeleteArgs} args - Arguments to delete one Race.
     * @example
     * // Delete one Race
     * const Race = await prisma.race.delete({
     *   where: {
     *     // ... filter to delete one Race
     *   }
     * })
     * 
     */
    delete<T extends RaceDeleteArgs>(args: SelectSubset<T, RaceDeleteArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Race.
     * @param {RaceUpdateArgs} args - Arguments to update one Race.
     * @example
     * // Update one Race
     * const race = await prisma.race.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RaceUpdateArgs>(args: SelectSubset<T, RaceUpdateArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Races.
     * @param {RaceDeleteManyArgs} args - Arguments to filter Races to delete.
     * @example
     * // Delete a few Races
     * const { count } = await prisma.race.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RaceDeleteManyArgs>(args?: SelectSubset<T, RaceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Races.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Races
     * const race = await prisma.race.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RaceUpdateManyArgs>(args: SelectSubset<T, RaceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Races and returns the data updated in the database.
     * @param {RaceUpdateManyAndReturnArgs} args - Arguments to update many Races.
     * @example
     * // Update many Races
     * const race = await prisma.race.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Races and only return the `id`
     * const raceWithIdOnly = await prisma.race.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RaceUpdateManyAndReturnArgs>(args: SelectSubset<T, RaceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Race.
     * @param {RaceUpsertArgs} args - Arguments to update or create a Race.
     * @example
     * // Update or create a Race
     * const race = await prisma.race.upsert({
     *   create: {
     *     // ... data to create a Race
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Race we want to update
     *   }
     * })
     */
    upsert<T extends RaceUpsertArgs>(args: SelectSubset<T, RaceUpsertArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Races.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceCountArgs} args - Arguments to filter Races to count.
     * @example
     * // Count the number of Races
     * const count = await prisma.race.count({
     *   where: {
     *     // ... the filter for the Races we want to count
     *   }
     * })
    **/
    count<T extends RaceCountArgs>(
      args?: Subset<T, RaceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RaceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Race.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RaceAggregateArgs>(args: Subset<T, RaceAggregateArgs>): Prisma.PrismaPromise<GetRaceAggregateType<T>>

    /**
     * Group by Race.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RaceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RaceGroupByArgs['orderBy'] }
        : { orderBy?: RaceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RaceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRaceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Race model
   */
  readonly fields: RaceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Race.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RaceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    location<T extends LocationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LocationDefaultArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    winner<T extends Race$winnerArgs<ExtArgs> = {}>(args?: Subset<T, Race$winnerArgs<ExtArgs>>): Prisma__GameAccountClient<$Result.GetResult<Prisma.$GameAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    creator<T extends Race$creatorArgs<ExtArgs> = {}>(args?: Subset<T, Race$creatorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    participants<T extends Race$participantsArgs<ExtArgs> = {}>(args?: Subset<T, Race$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaceParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    witnesses<T extends Race$witnessesArgs<ExtArgs> = {}>(args?: Subset<T, Race$witnessesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaceWitnessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Race model
   */
  interface RaceFieldRefs {
    readonly id: FieldRef<"Race", 'Int'>
    readonly secret_code: FieldRef<"Race", 'String'>
    readonly is_vip: FieldRef<"Race", 'Boolean'>
    readonly status: FieldRef<"Race", 'RaceStatus'>
    readonly location_id: FieldRef<"Race", 'Int'>
    readonly winner_id: FieldRef<"Race", 'Int'>
    readonly winner_path: FieldRef<"Race", 'Json'>
    readonly prize: FieldRef<"Race", 'String'>
    readonly start_at: FieldRef<"Race", 'DateTime'>
    readonly server_start_time: FieldRef<"Race", 'DateTime'>
    readonly creator_id: FieldRef<"Race", 'Int'>
    readonly created_at: FieldRef<"Race", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Race findUnique
   */
  export type RaceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * Filter, which Race to fetch.
     */
    where: RaceWhereUniqueInput
  }

  /**
   * Race findUniqueOrThrow
   */
  export type RaceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * Filter, which Race to fetch.
     */
    where: RaceWhereUniqueInput
  }

  /**
   * Race findFirst
   */
  export type RaceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * Filter, which Race to fetch.
     */
    where?: RaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Races to fetch.
     */
    orderBy?: RaceOrderByWithRelationInput | RaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Races.
     */
    cursor?: RaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Races from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Races.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Races.
     */
    distinct?: RaceScalarFieldEnum | RaceScalarFieldEnum[]
  }

  /**
   * Race findFirstOrThrow
   */
  export type RaceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * Filter, which Race to fetch.
     */
    where?: RaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Races to fetch.
     */
    orderBy?: RaceOrderByWithRelationInput | RaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Races.
     */
    cursor?: RaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Races from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Races.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Races.
     */
    distinct?: RaceScalarFieldEnum | RaceScalarFieldEnum[]
  }

  /**
   * Race findMany
   */
  export type RaceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * Filter, which Races to fetch.
     */
    where?: RaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Races to fetch.
     */
    orderBy?: RaceOrderByWithRelationInput | RaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Races.
     */
    cursor?: RaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Races from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Races.
     */
    skip?: number
    distinct?: RaceScalarFieldEnum | RaceScalarFieldEnum[]
  }

  /**
   * Race create
   */
  export type RaceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * The data needed to create a Race.
     */
    data: XOR<RaceCreateInput, RaceUncheckedCreateInput>
  }

  /**
   * Race createMany
   */
  export type RaceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Races.
     */
    data: RaceCreateManyInput | RaceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Race createManyAndReturn
   */
  export type RaceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * The data used to create many Races.
     */
    data: RaceCreateManyInput | RaceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Race update
   */
  export type RaceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * The data needed to update a Race.
     */
    data: XOR<RaceUpdateInput, RaceUncheckedUpdateInput>
    /**
     * Choose, which Race to update.
     */
    where: RaceWhereUniqueInput
  }

  /**
   * Race updateMany
   */
  export type RaceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Races.
     */
    data: XOR<RaceUpdateManyMutationInput, RaceUncheckedUpdateManyInput>
    /**
     * Filter which Races to update
     */
    where?: RaceWhereInput
    /**
     * Limit how many Races to update.
     */
    limit?: number
  }

  /**
   * Race updateManyAndReturn
   */
  export type RaceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * The data used to update Races.
     */
    data: XOR<RaceUpdateManyMutationInput, RaceUncheckedUpdateManyInput>
    /**
     * Filter which Races to update
     */
    where?: RaceWhereInput
    /**
     * Limit how many Races to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Race upsert
   */
  export type RaceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * The filter to search for the Race to update in case it exists.
     */
    where: RaceWhereUniqueInput
    /**
     * In case the Race found by the `where` argument doesn't exist, create a new Race with this data.
     */
    create: XOR<RaceCreateInput, RaceUncheckedCreateInput>
    /**
     * In case the Race was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RaceUpdateInput, RaceUncheckedUpdateInput>
  }

  /**
   * Race delete
   */
  export type RaceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * Filter which Race to delete.
     */
    where: RaceWhereUniqueInput
  }

  /**
   * Race deleteMany
   */
  export type RaceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Races to delete
     */
    where?: RaceWhereInput
    /**
     * Limit how many Races to delete.
     */
    limit?: number
  }

  /**
   * Race.winner
   */
  export type Race$winnerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameAccount
     */
    select?: GameAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameAccount
     */
    omit?: GameAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameAccountInclude<ExtArgs> | null
    where?: GameAccountWhereInput
  }

  /**
   * Race.creator
   */
  export type Race$creatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Race.participants
   */
  export type Race$participantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceParticipant
     */
    select?: RaceParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceParticipant
     */
    omit?: RaceParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceParticipantInclude<ExtArgs> | null
    where?: RaceParticipantWhereInput
    orderBy?: RaceParticipantOrderByWithRelationInput | RaceParticipantOrderByWithRelationInput[]
    cursor?: RaceParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RaceParticipantScalarFieldEnum | RaceParticipantScalarFieldEnum[]
  }

  /**
   * Race.witnesses
   */
  export type Race$witnessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceWitness
     */
    select?: RaceWitnessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceWitness
     */
    omit?: RaceWitnessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceWitnessInclude<ExtArgs> | null
    where?: RaceWitnessWhereInput
    orderBy?: RaceWitnessOrderByWithRelationInput | RaceWitnessOrderByWithRelationInput[]
    cursor?: RaceWitnessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RaceWitnessScalarFieldEnum | RaceWitnessScalarFieldEnum[]
  }

  /**
   * Race without action
   */
  export type RaceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
  }


  /**
   * Model RaceParticipant
   */

  export type AggregateRaceParticipant = {
    _count: RaceParticipantCountAggregateOutputType | null
    _avg: RaceParticipantAvgAggregateOutputType | null
    _sum: RaceParticipantSumAggregateOutputType | null
    _min: RaceParticipantMinAggregateOutputType | null
    _max: RaceParticipantMaxAggregateOutputType | null
  }

  export type RaceParticipantAvgAggregateOutputType = {
    id: number | null
    race_id: number | null
    game_account_id: number | null
    client_time_ms: number | null
  }

  export type RaceParticipantSumAggregateOutputType = {
    id: number | null
    race_id: number | null
    game_account_id: number | null
    client_time_ms: number | null
  }

  export type RaceParticipantMinAggregateOutputType = {
    id: number | null
    race_id: number | null
    game_account_id: number | null
    finished: boolean | null
    server_finish_at: Date | null
    client_time_ms: number | null
    is_disqualified: boolean | null
    suspicion_reason: string | null
  }

  export type RaceParticipantMaxAggregateOutputType = {
    id: number | null
    race_id: number | null
    game_account_id: number | null
    finished: boolean | null
    server_finish_at: Date | null
    client_time_ms: number | null
    is_disqualified: boolean | null
    suspicion_reason: string | null
  }

  export type RaceParticipantCountAggregateOutputType = {
    id: number
    race_id: number
    game_account_id: number
    finished: number
    server_finish_at: number
    client_time_ms: number
    is_disqualified: number
    suspicion_reason: number
    _all: number
  }


  export type RaceParticipantAvgAggregateInputType = {
    id?: true
    race_id?: true
    game_account_id?: true
    client_time_ms?: true
  }

  export type RaceParticipantSumAggregateInputType = {
    id?: true
    race_id?: true
    game_account_id?: true
    client_time_ms?: true
  }

  export type RaceParticipantMinAggregateInputType = {
    id?: true
    race_id?: true
    game_account_id?: true
    finished?: true
    server_finish_at?: true
    client_time_ms?: true
    is_disqualified?: true
    suspicion_reason?: true
  }

  export type RaceParticipantMaxAggregateInputType = {
    id?: true
    race_id?: true
    game_account_id?: true
    finished?: true
    server_finish_at?: true
    client_time_ms?: true
    is_disqualified?: true
    suspicion_reason?: true
  }

  export type RaceParticipantCountAggregateInputType = {
    id?: true
    race_id?: true
    game_account_id?: true
    finished?: true
    server_finish_at?: true
    client_time_ms?: true
    is_disqualified?: true
    suspicion_reason?: true
    _all?: true
  }

  export type RaceParticipantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RaceParticipant to aggregate.
     */
    where?: RaceParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RaceParticipants to fetch.
     */
    orderBy?: RaceParticipantOrderByWithRelationInput | RaceParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RaceParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RaceParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RaceParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RaceParticipants
    **/
    _count?: true | RaceParticipantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RaceParticipantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RaceParticipantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RaceParticipantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RaceParticipantMaxAggregateInputType
  }

  export type GetRaceParticipantAggregateType<T extends RaceParticipantAggregateArgs> = {
        [P in keyof T & keyof AggregateRaceParticipant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRaceParticipant[P]>
      : GetScalarType<T[P], AggregateRaceParticipant[P]>
  }




  export type RaceParticipantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RaceParticipantWhereInput
    orderBy?: RaceParticipantOrderByWithAggregationInput | RaceParticipantOrderByWithAggregationInput[]
    by: RaceParticipantScalarFieldEnum[] | RaceParticipantScalarFieldEnum
    having?: RaceParticipantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RaceParticipantCountAggregateInputType | true
    _avg?: RaceParticipantAvgAggregateInputType
    _sum?: RaceParticipantSumAggregateInputType
    _min?: RaceParticipantMinAggregateInputType
    _max?: RaceParticipantMaxAggregateInputType
  }

  export type RaceParticipantGroupByOutputType = {
    id: number
    race_id: number
    game_account_id: number
    finished: boolean
    server_finish_at: Date | null
    client_time_ms: number | null
    is_disqualified: boolean
    suspicion_reason: string | null
    _count: RaceParticipantCountAggregateOutputType | null
    _avg: RaceParticipantAvgAggregateOutputType | null
    _sum: RaceParticipantSumAggregateOutputType | null
    _min: RaceParticipantMinAggregateOutputType | null
    _max: RaceParticipantMaxAggregateOutputType | null
  }

  type GetRaceParticipantGroupByPayload<T extends RaceParticipantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RaceParticipantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RaceParticipantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RaceParticipantGroupByOutputType[P]>
            : GetScalarType<T[P], RaceParticipantGroupByOutputType[P]>
        }
      >
    >


  export type RaceParticipantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    race_id?: boolean
    game_account_id?: boolean
    finished?: boolean
    server_finish_at?: boolean
    client_time_ms?: boolean
    is_disqualified?: boolean
    suspicion_reason?: boolean
    race?: boolean | RaceDefaultArgs<ExtArgs>
    game_account?: boolean | GameAccountDefaultArgs<ExtArgs>
    telemetry?: boolean | RaceParticipant$telemetryArgs<ExtArgs>
    _count?: boolean | RaceParticipantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["raceParticipant"]>

  export type RaceParticipantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    race_id?: boolean
    game_account_id?: boolean
    finished?: boolean
    server_finish_at?: boolean
    client_time_ms?: boolean
    is_disqualified?: boolean
    suspicion_reason?: boolean
    race?: boolean | RaceDefaultArgs<ExtArgs>
    game_account?: boolean | GameAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["raceParticipant"]>

  export type RaceParticipantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    race_id?: boolean
    game_account_id?: boolean
    finished?: boolean
    server_finish_at?: boolean
    client_time_ms?: boolean
    is_disqualified?: boolean
    suspicion_reason?: boolean
    race?: boolean | RaceDefaultArgs<ExtArgs>
    game_account?: boolean | GameAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["raceParticipant"]>

  export type RaceParticipantSelectScalar = {
    id?: boolean
    race_id?: boolean
    game_account_id?: boolean
    finished?: boolean
    server_finish_at?: boolean
    client_time_ms?: boolean
    is_disqualified?: boolean
    suspicion_reason?: boolean
  }

  export type RaceParticipantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "race_id" | "game_account_id" | "finished" | "server_finish_at" | "client_time_ms" | "is_disqualified" | "suspicion_reason", ExtArgs["result"]["raceParticipant"]>
  export type RaceParticipantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    race?: boolean | RaceDefaultArgs<ExtArgs>
    game_account?: boolean | GameAccountDefaultArgs<ExtArgs>
    telemetry?: boolean | RaceParticipant$telemetryArgs<ExtArgs>
    _count?: boolean | RaceParticipantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RaceParticipantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    race?: boolean | RaceDefaultArgs<ExtArgs>
    game_account?: boolean | GameAccountDefaultArgs<ExtArgs>
  }
  export type RaceParticipantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    race?: boolean | RaceDefaultArgs<ExtArgs>
    game_account?: boolean | GameAccountDefaultArgs<ExtArgs>
  }

  export type $RaceParticipantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RaceParticipant"
    objects: {
      race: Prisma.$RacePayload<ExtArgs>
      game_account: Prisma.$GameAccountPayload<ExtArgs>
      telemetry: Prisma.$RaceTelemetryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      race_id: number
      game_account_id: number
      finished: boolean
      server_finish_at: Date | null
      client_time_ms: number | null
      is_disqualified: boolean
      suspicion_reason: string | null
    }, ExtArgs["result"]["raceParticipant"]>
    composites: {}
  }

  type RaceParticipantGetPayload<S extends boolean | null | undefined | RaceParticipantDefaultArgs> = $Result.GetResult<Prisma.$RaceParticipantPayload, S>

  type RaceParticipantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RaceParticipantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RaceParticipantCountAggregateInputType | true
    }

  export interface RaceParticipantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RaceParticipant'], meta: { name: 'RaceParticipant' } }
    /**
     * Find zero or one RaceParticipant that matches the filter.
     * @param {RaceParticipantFindUniqueArgs} args - Arguments to find a RaceParticipant
     * @example
     * // Get one RaceParticipant
     * const raceParticipant = await prisma.raceParticipant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RaceParticipantFindUniqueArgs>(args: SelectSubset<T, RaceParticipantFindUniqueArgs<ExtArgs>>): Prisma__RaceParticipantClient<$Result.GetResult<Prisma.$RaceParticipantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RaceParticipant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RaceParticipantFindUniqueOrThrowArgs} args - Arguments to find a RaceParticipant
     * @example
     * // Get one RaceParticipant
     * const raceParticipant = await prisma.raceParticipant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RaceParticipantFindUniqueOrThrowArgs>(args: SelectSubset<T, RaceParticipantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RaceParticipantClient<$Result.GetResult<Prisma.$RaceParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RaceParticipant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceParticipantFindFirstArgs} args - Arguments to find a RaceParticipant
     * @example
     * // Get one RaceParticipant
     * const raceParticipant = await prisma.raceParticipant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RaceParticipantFindFirstArgs>(args?: SelectSubset<T, RaceParticipantFindFirstArgs<ExtArgs>>): Prisma__RaceParticipantClient<$Result.GetResult<Prisma.$RaceParticipantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RaceParticipant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceParticipantFindFirstOrThrowArgs} args - Arguments to find a RaceParticipant
     * @example
     * // Get one RaceParticipant
     * const raceParticipant = await prisma.raceParticipant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RaceParticipantFindFirstOrThrowArgs>(args?: SelectSubset<T, RaceParticipantFindFirstOrThrowArgs<ExtArgs>>): Prisma__RaceParticipantClient<$Result.GetResult<Prisma.$RaceParticipantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RaceParticipants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceParticipantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RaceParticipants
     * const raceParticipants = await prisma.raceParticipant.findMany()
     * 
     * // Get first 10 RaceParticipants
     * const raceParticipants = await prisma.raceParticipant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const raceParticipantWithIdOnly = await prisma.raceParticipant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RaceParticipantFindManyArgs>(args?: SelectSubset<T, RaceParticipantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaceParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RaceParticipant.
     * @param {RaceParticipantCreateArgs} args - Arguments to create a RaceParticipant.
     * @example
     * // Create one RaceParticipant
     * const RaceParticipant = await prisma.raceParticipant.create({
     *   data: {
     *     // ... data to create a RaceParticipant
     *   }
     * })
     * 
     */
    create<T extends RaceParticipantCreateArgs>(args: SelectSubset<T, RaceParticipantCreateArgs<ExtArgs>>): Prisma__RaceParticipantClient<$Result.GetResult<Prisma.$RaceParticipantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RaceParticipants.
     * @param {RaceParticipantCreateManyArgs} args - Arguments to create many RaceParticipants.
     * @example
     * // Create many RaceParticipants
     * const raceParticipant = await prisma.raceParticipant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RaceParticipantCreateManyArgs>(args?: SelectSubset<T, RaceParticipantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RaceParticipants and returns the data saved in the database.
     * @param {RaceParticipantCreateManyAndReturnArgs} args - Arguments to create many RaceParticipants.
     * @example
     * // Create many RaceParticipants
     * const raceParticipant = await prisma.raceParticipant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RaceParticipants and only return the `id`
     * const raceParticipantWithIdOnly = await prisma.raceParticipant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RaceParticipantCreateManyAndReturnArgs>(args?: SelectSubset<T, RaceParticipantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaceParticipantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RaceParticipant.
     * @param {RaceParticipantDeleteArgs} args - Arguments to delete one RaceParticipant.
     * @example
     * // Delete one RaceParticipant
     * const RaceParticipant = await prisma.raceParticipant.delete({
     *   where: {
     *     // ... filter to delete one RaceParticipant
     *   }
     * })
     * 
     */
    delete<T extends RaceParticipantDeleteArgs>(args: SelectSubset<T, RaceParticipantDeleteArgs<ExtArgs>>): Prisma__RaceParticipantClient<$Result.GetResult<Prisma.$RaceParticipantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RaceParticipant.
     * @param {RaceParticipantUpdateArgs} args - Arguments to update one RaceParticipant.
     * @example
     * // Update one RaceParticipant
     * const raceParticipant = await prisma.raceParticipant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RaceParticipantUpdateArgs>(args: SelectSubset<T, RaceParticipantUpdateArgs<ExtArgs>>): Prisma__RaceParticipantClient<$Result.GetResult<Prisma.$RaceParticipantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RaceParticipants.
     * @param {RaceParticipantDeleteManyArgs} args - Arguments to filter RaceParticipants to delete.
     * @example
     * // Delete a few RaceParticipants
     * const { count } = await prisma.raceParticipant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RaceParticipantDeleteManyArgs>(args?: SelectSubset<T, RaceParticipantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RaceParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceParticipantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RaceParticipants
     * const raceParticipant = await prisma.raceParticipant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RaceParticipantUpdateManyArgs>(args: SelectSubset<T, RaceParticipantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RaceParticipants and returns the data updated in the database.
     * @param {RaceParticipantUpdateManyAndReturnArgs} args - Arguments to update many RaceParticipants.
     * @example
     * // Update many RaceParticipants
     * const raceParticipant = await prisma.raceParticipant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RaceParticipants and only return the `id`
     * const raceParticipantWithIdOnly = await prisma.raceParticipant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RaceParticipantUpdateManyAndReturnArgs>(args: SelectSubset<T, RaceParticipantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaceParticipantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RaceParticipant.
     * @param {RaceParticipantUpsertArgs} args - Arguments to update or create a RaceParticipant.
     * @example
     * // Update or create a RaceParticipant
     * const raceParticipant = await prisma.raceParticipant.upsert({
     *   create: {
     *     // ... data to create a RaceParticipant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RaceParticipant we want to update
     *   }
     * })
     */
    upsert<T extends RaceParticipantUpsertArgs>(args: SelectSubset<T, RaceParticipantUpsertArgs<ExtArgs>>): Prisma__RaceParticipantClient<$Result.GetResult<Prisma.$RaceParticipantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RaceParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceParticipantCountArgs} args - Arguments to filter RaceParticipants to count.
     * @example
     * // Count the number of RaceParticipants
     * const count = await prisma.raceParticipant.count({
     *   where: {
     *     // ... the filter for the RaceParticipants we want to count
     *   }
     * })
    **/
    count<T extends RaceParticipantCountArgs>(
      args?: Subset<T, RaceParticipantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RaceParticipantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RaceParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceParticipantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RaceParticipantAggregateArgs>(args: Subset<T, RaceParticipantAggregateArgs>): Prisma.PrismaPromise<GetRaceParticipantAggregateType<T>>

    /**
     * Group by RaceParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceParticipantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RaceParticipantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RaceParticipantGroupByArgs['orderBy'] }
        : { orderBy?: RaceParticipantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RaceParticipantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRaceParticipantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RaceParticipant model
   */
  readonly fields: RaceParticipantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RaceParticipant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RaceParticipantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    race<T extends RaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RaceDefaultArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    game_account<T extends GameAccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameAccountDefaultArgs<ExtArgs>>): Prisma__GameAccountClient<$Result.GetResult<Prisma.$GameAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    telemetry<T extends RaceParticipant$telemetryArgs<ExtArgs> = {}>(args?: Subset<T, RaceParticipant$telemetryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaceTelemetryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RaceParticipant model
   */
  interface RaceParticipantFieldRefs {
    readonly id: FieldRef<"RaceParticipant", 'Int'>
    readonly race_id: FieldRef<"RaceParticipant", 'Int'>
    readonly game_account_id: FieldRef<"RaceParticipant", 'Int'>
    readonly finished: FieldRef<"RaceParticipant", 'Boolean'>
    readonly server_finish_at: FieldRef<"RaceParticipant", 'DateTime'>
    readonly client_time_ms: FieldRef<"RaceParticipant", 'Int'>
    readonly is_disqualified: FieldRef<"RaceParticipant", 'Boolean'>
    readonly suspicion_reason: FieldRef<"RaceParticipant", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RaceParticipant findUnique
   */
  export type RaceParticipantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceParticipant
     */
    select?: RaceParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceParticipant
     */
    omit?: RaceParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceParticipantInclude<ExtArgs> | null
    /**
     * Filter, which RaceParticipant to fetch.
     */
    where: RaceParticipantWhereUniqueInput
  }

  /**
   * RaceParticipant findUniqueOrThrow
   */
  export type RaceParticipantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceParticipant
     */
    select?: RaceParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceParticipant
     */
    omit?: RaceParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceParticipantInclude<ExtArgs> | null
    /**
     * Filter, which RaceParticipant to fetch.
     */
    where: RaceParticipantWhereUniqueInput
  }

  /**
   * RaceParticipant findFirst
   */
  export type RaceParticipantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceParticipant
     */
    select?: RaceParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceParticipant
     */
    omit?: RaceParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceParticipantInclude<ExtArgs> | null
    /**
     * Filter, which RaceParticipant to fetch.
     */
    where?: RaceParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RaceParticipants to fetch.
     */
    orderBy?: RaceParticipantOrderByWithRelationInput | RaceParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RaceParticipants.
     */
    cursor?: RaceParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RaceParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RaceParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RaceParticipants.
     */
    distinct?: RaceParticipantScalarFieldEnum | RaceParticipantScalarFieldEnum[]
  }

  /**
   * RaceParticipant findFirstOrThrow
   */
  export type RaceParticipantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceParticipant
     */
    select?: RaceParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceParticipant
     */
    omit?: RaceParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceParticipantInclude<ExtArgs> | null
    /**
     * Filter, which RaceParticipant to fetch.
     */
    where?: RaceParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RaceParticipants to fetch.
     */
    orderBy?: RaceParticipantOrderByWithRelationInput | RaceParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RaceParticipants.
     */
    cursor?: RaceParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RaceParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RaceParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RaceParticipants.
     */
    distinct?: RaceParticipantScalarFieldEnum | RaceParticipantScalarFieldEnum[]
  }

  /**
   * RaceParticipant findMany
   */
  export type RaceParticipantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceParticipant
     */
    select?: RaceParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceParticipant
     */
    omit?: RaceParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceParticipantInclude<ExtArgs> | null
    /**
     * Filter, which RaceParticipants to fetch.
     */
    where?: RaceParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RaceParticipants to fetch.
     */
    orderBy?: RaceParticipantOrderByWithRelationInput | RaceParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RaceParticipants.
     */
    cursor?: RaceParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RaceParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RaceParticipants.
     */
    skip?: number
    distinct?: RaceParticipantScalarFieldEnum | RaceParticipantScalarFieldEnum[]
  }

  /**
   * RaceParticipant create
   */
  export type RaceParticipantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceParticipant
     */
    select?: RaceParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceParticipant
     */
    omit?: RaceParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceParticipantInclude<ExtArgs> | null
    /**
     * The data needed to create a RaceParticipant.
     */
    data: XOR<RaceParticipantCreateInput, RaceParticipantUncheckedCreateInput>
  }

  /**
   * RaceParticipant createMany
   */
  export type RaceParticipantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RaceParticipants.
     */
    data: RaceParticipantCreateManyInput | RaceParticipantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RaceParticipant createManyAndReturn
   */
  export type RaceParticipantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceParticipant
     */
    select?: RaceParticipantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RaceParticipant
     */
    omit?: RaceParticipantOmit<ExtArgs> | null
    /**
     * The data used to create many RaceParticipants.
     */
    data: RaceParticipantCreateManyInput | RaceParticipantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceParticipantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RaceParticipant update
   */
  export type RaceParticipantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceParticipant
     */
    select?: RaceParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceParticipant
     */
    omit?: RaceParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceParticipantInclude<ExtArgs> | null
    /**
     * The data needed to update a RaceParticipant.
     */
    data: XOR<RaceParticipantUpdateInput, RaceParticipantUncheckedUpdateInput>
    /**
     * Choose, which RaceParticipant to update.
     */
    where: RaceParticipantWhereUniqueInput
  }

  /**
   * RaceParticipant updateMany
   */
  export type RaceParticipantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RaceParticipants.
     */
    data: XOR<RaceParticipantUpdateManyMutationInput, RaceParticipantUncheckedUpdateManyInput>
    /**
     * Filter which RaceParticipants to update
     */
    where?: RaceParticipantWhereInput
    /**
     * Limit how many RaceParticipants to update.
     */
    limit?: number
  }

  /**
   * RaceParticipant updateManyAndReturn
   */
  export type RaceParticipantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceParticipant
     */
    select?: RaceParticipantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RaceParticipant
     */
    omit?: RaceParticipantOmit<ExtArgs> | null
    /**
     * The data used to update RaceParticipants.
     */
    data: XOR<RaceParticipantUpdateManyMutationInput, RaceParticipantUncheckedUpdateManyInput>
    /**
     * Filter which RaceParticipants to update
     */
    where?: RaceParticipantWhereInput
    /**
     * Limit how many RaceParticipants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceParticipantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RaceParticipant upsert
   */
  export type RaceParticipantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceParticipant
     */
    select?: RaceParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceParticipant
     */
    omit?: RaceParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceParticipantInclude<ExtArgs> | null
    /**
     * The filter to search for the RaceParticipant to update in case it exists.
     */
    where: RaceParticipantWhereUniqueInput
    /**
     * In case the RaceParticipant found by the `where` argument doesn't exist, create a new RaceParticipant with this data.
     */
    create: XOR<RaceParticipantCreateInput, RaceParticipantUncheckedCreateInput>
    /**
     * In case the RaceParticipant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RaceParticipantUpdateInput, RaceParticipantUncheckedUpdateInput>
  }

  /**
   * RaceParticipant delete
   */
  export type RaceParticipantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceParticipant
     */
    select?: RaceParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceParticipant
     */
    omit?: RaceParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceParticipantInclude<ExtArgs> | null
    /**
     * Filter which RaceParticipant to delete.
     */
    where: RaceParticipantWhereUniqueInput
  }

  /**
   * RaceParticipant deleteMany
   */
  export type RaceParticipantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RaceParticipants to delete
     */
    where?: RaceParticipantWhereInput
    /**
     * Limit how many RaceParticipants to delete.
     */
    limit?: number
  }

  /**
   * RaceParticipant.telemetry
   */
  export type RaceParticipant$telemetryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceTelemetry
     */
    select?: RaceTelemetrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceTelemetry
     */
    omit?: RaceTelemetryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceTelemetryInclude<ExtArgs> | null
    where?: RaceTelemetryWhereInput
    orderBy?: RaceTelemetryOrderByWithRelationInput | RaceTelemetryOrderByWithRelationInput[]
    cursor?: RaceTelemetryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RaceTelemetryScalarFieldEnum | RaceTelemetryScalarFieldEnum[]
  }

  /**
   * RaceParticipant without action
   */
  export type RaceParticipantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceParticipant
     */
    select?: RaceParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceParticipant
     */
    omit?: RaceParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceParticipantInclude<ExtArgs> | null
  }


  /**
   * Model RaceWitness
   */

  export type AggregateRaceWitness = {
    _count: RaceWitnessCountAggregateOutputType | null
    _avg: RaceWitnessAvgAggregateOutputType | null
    _sum: RaceWitnessSumAggregateOutputType | null
    _min: RaceWitnessMinAggregateOutputType | null
    _max: RaceWitnessMaxAggregateOutputType | null
  }

  export type RaceWitnessAvgAggregateOutputType = {
    id: number | null
    race_id: number | null
    observer_id: number | null
    suspect_server: number | null
  }

  export type RaceWitnessSumAggregateOutputType = {
    id: number | null
    race_id: number | null
    observer_id: number | null
    suspect_server: number | null
  }

  export type RaceWitnessMinAggregateOutputType = {
    id: number | null
    race_id: number | null
    observer_id: number | null
    suspect_nickname: string | null
    suspect_server: number | null
    server_time: Date | null
  }

  export type RaceWitnessMaxAggregateOutputType = {
    id: number | null
    race_id: number | null
    observer_id: number | null
    suspect_nickname: string | null
    suspect_server: number | null
    server_time: Date | null
  }

  export type RaceWitnessCountAggregateOutputType = {
    id: number
    race_id: number
    observer_id: number
    suspect_nickname: number
    suspect_server: number
    server_time: number
    _all: number
  }


  export type RaceWitnessAvgAggregateInputType = {
    id?: true
    race_id?: true
    observer_id?: true
    suspect_server?: true
  }

  export type RaceWitnessSumAggregateInputType = {
    id?: true
    race_id?: true
    observer_id?: true
    suspect_server?: true
  }

  export type RaceWitnessMinAggregateInputType = {
    id?: true
    race_id?: true
    observer_id?: true
    suspect_nickname?: true
    suspect_server?: true
    server_time?: true
  }

  export type RaceWitnessMaxAggregateInputType = {
    id?: true
    race_id?: true
    observer_id?: true
    suspect_nickname?: true
    suspect_server?: true
    server_time?: true
  }

  export type RaceWitnessCountAggregateInputType = {
    id?: true
    race_id?: true
    observer_id?: true
    suspect_nickname?: true
    suspect_server?: true
    server_time?: true
    _all?: true
  }

  export type RaceWitnessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RaceWitness to aggregate.
     */
    where?: RaceWitnessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RaceWitnesses to fetch.
     */
    orderBy?: RaceWitnessOrderByWithRelationInput | RaceWitnessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RaceWitnessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RaceWitnesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RaceWitnesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RaceWitnesses
    **/
    _count?: true | RaceWitnessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RaceWitnessAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RaceWitnessSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RaceWitnessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RaceWitnessMaxAggregateInputType
  }

  export type GetRaceWitnessAggregateType<T extends RaceWitnessAggregateArgs> = {
        [P in keyof T & keyof AggregateRaceWitness]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRaceWitness[P]>
      : GetScalarType<T[P], AggregateRaceWitness[P]>
  }




  export type RaceWitnessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RaceWitnessWhereInput
    orderBy?: RaceWitnessOrderByWithAggregationInput | RaceWitnessOrderByWithAggregationInput[]
    by: RaceWitnessScalarFieldEnum[] | RaceWitnessScalarFieldEnum
    having?: RaceWitnessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RaceWitnessCountAggregateInputType | true
    _avg?: RaceWitnessAvgAggregateInputType
    _sum?: RaceWitnessSumAggregateInputType
    _min?: RaceWitnessMinAggregateInputType
    _max?: RaceWitnessMaxAggregateInputType
  }

  export type RaceWitnessGroupByOutputType = {
    id: number
    race_id: number
    observer_id: number
    suspect_nickname: string
    suspect_server: number
    server_time: Date
    _count: RaceWitnessCountAggregateOutputType | null
    _avg: RaceWitnessAvgAggregateOutputType | null
    _sum: RaceWitnessSumAggregateOutputType | null
    _min: RaceWitnessMinAggregateOutputType | null
    _max: RaceWitnessMaxAggregateOutputType | null
  }

  type GetRaceWitnessGroupByPayload<T extends RaceWitnessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RaceWitnessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RaceWitnessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RaceWitnessGroupByOutputType[P]>
            : GetScalarType<T[P], RaceWitnessGroupByOutputType[P]>
        }
      >
    >


  export type RaceWitnessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    race_id?: boolean
    observer_id?: boolean
    suspect_nickname?: boolean
    suspect_server?: boolean
    server_time?: boolean
    race?: boolean | RaceDefaultArgs<ExtArgs>
    observer?: boolean | GameAccountDefaultArgs<ExtArgs>
    suspect?: boolean | GameAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["raceWitness"]>

  export type RaceWitnessSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    race_id?: boolean
    observer_id?: boolean
    suspect_nickname?: boolean
    suspect_server?: boolean
    server_time?: boolean
    race?: boolean | RaceDefaultArgs<ExtArgs>
    observer?: boolean | GameAccountDefaultArgs<ExtArgs>
    suspect?: boolean | GameAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["raceWitness"]>

  export type RaceWitnessSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    race_id?: boolean
    observer_id?: boolean
    suspect_nickname?: boolean
    suspect_server?: boolean
    server_time?: boolean
    race?: boolean | RaceDefaultArgs<ExtArgs>
    observer?: boolean | GameAccountDefaultArgs<ExtArgs>
    suspect?: boolean | GameAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["raceWitness"]>

  export type RaceWitnessSelectScalar = {
    id?: boolean
    race_id?: boolean
    observer_id?: boolean
    suspect_nickname?: boolean
    suspect_server?: boolean
    server_time?: boolean
  }

  export type RaceWitnessOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "race_id" | "observer_id" | "suspect_nickname" | "suspect_server" | "server_time", ExtArgs["result"]["raceWitness"]>
  export type RaceWitnessInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    race?: boolean | RaceDefaultArgs<ExtArgs>
    observer?: boolean | GameAccountDefaultArgs<ExtArgs>
    suspect?: boolean | GameAccountDefaultArgs<ExtArgs>
  }
  export type RaceWitnessIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    race?: boolean | RaceDefaultArgs<ExtArgs>
    observer?: boolean | GameAccountDefaultArgs<ExtArgs>
    suspect?: boolean | GameAccountDefaultArgs<ExtArgs>
  }
  export type RaceWitnessIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    race?: boolean | RaceDefaultArgs<ExtArgs>
    observer?: boolean | GameAccountDefaultArgs<ExtArgs>
    suspect?: boolean | GameAccountDefaultArgs<ExtArgs>
  }

  export type $RaceWitnessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RaceWitness"
    objects: {
      race: Prisma.$RacePayload<ExtArgs>
      observer: Prisma.$GameAccountPayload<ExtArgs>
      suspect: Prisma.$GameAccountPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      race_id: number
      observer_id: number
      suspect_nickname: string
      suspect_server: number
      server_time: Date
    }, ExtArgs["result"]["raceWitness"]>
    composites: {}
  }

  type RaceWitnessGetPayload<S extends boolean | null | undefined | RaceWitnessDefaultArgs> = $Result.GetResult<Prisma.$RaceWitnessPayload, S>

  type RaceWitnessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RaceWitnessFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RaceWitnessCountAggregateInputType | true
    }

  export interface RaceWitnessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RaceWitness'], meta: { name: 'RaceWitness' } }
    /**
     * Find zero or one RaceWitness that matches the filter.
     * @param {RaceWitnessFindUniqueArgs} args - Arguments to find a RaceWitness
     * @example
     * // Get one RaceWitness
     * const raceWitness = await prisma.raceWitness.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RaceWitnessFindUniqueArgs>(args: SelectSubset<T, RaceWitnessFindUniqueArgs<ExtArgs>>): Prisma__RaceWitnessClient<$Result.GetResult<Prisma.$RaceWitnessPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RaceWitness that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RaceWitnessFindUniqueOrThrowArgs} args - Arguments to find a RaceWitness
     * @example
     * // Get one RaceWitness
     * const raceWitness = await prisma.raceWitness.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RaceWitnessFindUniqueOrThrowArgs>(args: SelectSubset<T, RaceWitnessFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RaceWitnessClient<$Result.GetResult<Prisma.$RaceWitnessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RaceWitness that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceWitnessFindFirstArgs} args - Arguments to find a RaceWitness
     * @example
     * // Get one RaceWitness
     * const raceWitness = await prisma.raceWitness.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RaceWitnessFindFirstArgs>(args?: SelectSubset<T, RaceWitnessFindFirstArgs<ExtArgs>>): Prisma__RaceWitnessClient<$Result.GetResult<Prisma.$RaceWitnessPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RaceWitness that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceWitnessFindFirstOrThrowArgs} args - Arguments to find a RaceWitness
     * @example
     * // Get one RaceWitness
     * const raceWitness = await prisma.raceWitness.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RaceWitnessFindFirstOrThrowArgs>(args?: SelectSubset<T, RaceWitnessFindFirstOrThrowArgs<ExtArgs>>): Prisma__RaceWitnessClient<$Result.GetResult<Prisma.$RaceWitnessPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RaceWitnesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceWitnessFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RaceWitnesses
     * const raceWitnesses = await prisma.raceWitness.findMany()
     * 
     * // Get first 10 RaceWitnesses
     * const raceWitnesses = await prisma.raceWitness.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const raceWitnessWithIdOnly = await prisma.raceWitness.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RaceWitnessFindManyArgs>(args?: SelectSubset<T, RaceWitnessFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaceWitnessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RaceWitness.
     * @param {RaceWitnessCreateArgs} args - Arguments to create a RaceWitness.
     * @example
     * // Create one RaceWitness
     * const RaceWitness = await prisma.raceWitness.create({
     *   data: {
     *     // ... data to create a RaceWitness
     *   }
     * })
     * 
     */
    create<T extends RaceWitnessCreateArgs>(args: SelectSubset<T, RaceWitnessCreateArgs<ExtArgs>>): Prisma__RaceWitnessClient<$Result.GetResult<Prisma.$RaceWitnessPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RaceWitnesses.
     * @param {RaceWitnessCreateManyArgs} args - Arguments to create many RaceWitnesses.
     * @example
     * // Create many RaceWitnesses
     * const raceWitness = await prisma.raceWitness.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RaceWitnessCreateManyArgs>(args?: SelectSubset<T, RaceWitnessCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RaceWitnesses and returns the data saved in the database.
     * @param {RaceWitnessCreateManyAndReturnArgs} args - Arguments to create many RaceWitnesses.
     * @example
     * // Create many RaceWitnesses
     * const raceWitness = await prisma.raceWitness.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RaceWitnesses and only return the `id`
     * const raceWitnessWithIdOnly = await prisma.raceWitness.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RaceWitnessCreateManyAndReturnArgs>(args?: SelectSubset<T, RaceWitnessCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaceWitnessPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RaceWitness.
     * @param {RaceWitnessDeleteArgs} args - Arguments to delete one RaceWitness.
     * @example
     * // Delete one RaceWitness
     * const RaceWitness = await prisma.raceWitness.delete({
     *   where: {
     *     // ... filter to delete one RaceWitness
     *   }
     * })
     * 
     */
    delete<T extends RaceWitnessDeleteArgs>(args: SelectSubset<T, RaceWitnessDeleteArgs<ExtArgs>>): Prisma__RaceWitnessClient<$Result.GetResult<Prisma.$RaceWitnessPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RaceWitness.
     * @param {RaceWitnessUpdateArgs} args - Arguments to update one RaceWitness.
     * @example
     * // Update one RaceWitness
     * const raceWitness = await prisma.raceWitness.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RaceWitnessUpdateArgs>(args: SelectSubset<T, RaceWitnessUpdateArgs<ExtArgs>>): Prisma__RaceWitnessClient<$Result.GetResult<Prisma.$RaceWitnessPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RaceWitnesses.
     * @param {RaceWitnessDeleteManyArgs} args - Arguments to filter RaceWitnesses to delete.
     * @example
     * // Delete a few RaceWitnesses
     * const { count } = await prisma.raceWitness.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RaceWitnessDeleteManyArgs>(args?: SelectSubset<T, RaceWitnessDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RaceWitnesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceWitnessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RaceWitnesses
     * const raceWitness = await prisma.raceWitness.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RaceWitnessUpdateManyArgs>(args: SelectSubset<T, RaceWitnessUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RaceWitnesses and returns the data updated in the database.
     * @param {RaceWitnessUpdateManyAndReturnArgs} args - Arguments to update many RaceWitnesses.
     * @example
     * // Update many RaceWitnesses
     * const raceWitness = await prisma.raceWitness.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RaceWitnesses and only return the `id`
     * const raceWitnessWithIdOnly = await prisma.raceWitness.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RaceWitnessUpdateManyAndReturnArgs>(args: SelectSubset<T, RaceWitnessUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaceWitnessPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RaceWitness.
     * @param {RaceWitnessUpsertArgs} args - Arguments to update or create a RaceWitness.
     * @example
     * // Update or create a RaceWitness
     * const raceWitness = await prisma.raceWitness.upsert({
     *   create: {
     *     // ... data to create a RaceWitness
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RaceWitness we want to update
     *   }
     * })
     */
    upsert<T extends RaceWitnessUpsertArgs>(args: SelectSubset<T, RaceWitnessUpsertArgs<ExtArgs>>): Prisma__RaceWitnessClient<$Result.GetResult<Prisma.$RaceWitnessPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RaceWitnesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceWitnessCountArgs} args - Arguments to filter RaceWitnesses to count.
     * @example
     * // Count the number of RaceWitnesses
     * const count = await prisma.raceWitness.count({
     *   where: {
     *     // ... the filter for the RaceWitnesses we want to count
     *   }
     * })
    **/
    count<T extends RaceWitnessCountArgs>(
      args?: Subset<T, RaceWitnessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RaceWitnessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RaceWitness.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceWitnessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RaceWitnessAggregateArgs>(args: Subset<T, RaceWitnessAggregateArgs>): Prisma.PrismaPromise<GetRaceWitnessAggregateType<T>>

    /**
     * Group by RaceWitness.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceWitnessGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RaceWitnessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RaceWitnessGroupByArgs['orderBy'] }
        : { orderBy?: RaceWitnessGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RaceWitnessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRaceWitnessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RaceWitness model
   */
  readonly fields: RaceWitnessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RaceWitness.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RaceWitnessClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    race<T extends RaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RaceDefaultArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    observer<T extends GameAccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameAccountDefaultArgs<ExtArgs>>): Prisma__GameAccountClient<$Result.GetResult<Prisma.$GameAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    suspect<T extends GameAccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameAccountDefaultArgs<ExtArgs>>): Prisma__GameAccountClient<$Result.GetResult<Prisma.$GameAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RaceWitness model
   */
  interface RaceWitnessFieldRefs {
    readonly id: FieldRef<"RaceWitness", 'Int'>
    readonly race_id: FieldRef<"RaceWitness", 'Int'>
    readonly observer_id: FieldRef<"RaceWitness", 'Int'>
    readonly suspect_nickname: FieldRef<"RaceWitness", 'String'>
    readonly suspect_server: FieldRef<"RaceWitness", 'Int'>
    readonly server_time: FieldRef<"RaceWitness", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RaceWitness findUnique
   */
  export type RaceWitnessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceWitness
     */
    select?: RaceWitnessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceWitness
     */
    omit?: RaceWitnessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceWitnessInclude<ExtArgs> | null
    /**
     * Filter, which RaceWitness to fetch.
     */
    where: RaceWitnessWhereUniqueInput
  }

  /**
   * RaceWitness findUniqueOrThrow
   */
  export type RaceWitnessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceWitness
     */
    select?: RaceWitnessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceWitness
     */
    omit?: RaceWitnessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceWitnessInclude<ExtArgs> | null
    /**
     * Filter, which RaceWitness to fetch.
     */
    where: RaceWitnessWhereUniqueInput
  }

  /**
   * RaceWitness findFirst
   */
  export type RaceWitnessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceWitness
     */
    select?: RaceWitnessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceWitness
     */
    omit?: RaceWitnessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceWitnessInclude<ExtArgs> | null
    /**
     * Filter, which RaceWitness to fetch.
     */
    where?: RaceWitnessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RaceWitnesses to fetch.
     */
    orderBy?: RaceWitnessOrderByWithRelationInput | RaceWitnessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RaceWitnesses.
     */
    cursor?: RaceWitnessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RaceWitnesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RaceWitnesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RaceWitnesses.
     */
    distinct?: RaceWitnessScalarFieldEnum | RaceWitnessScalarFieldEnum[]
  }

  /**
   * RaceWitness findFirstOrThrow
   */
  export type RaceWitnessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceWitness
     */
    select?: RaceWitnessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceWitness
     */
    omit?: RaceWitnessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceWitnessInclude<ExtArgs> | null
    /**
     * Filter, which RaceWitness to fetch.
     */
    where?: RaceWitnessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RaceWitnesses to fetch.
     */
    orderBy?: RaceWitnessOrderByWithRelationInput | RaceWitnessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RaceWitnesses.
     */
    cursor?: RaceWitnessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RaceWitnesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RaceWitnesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RaceWitnesses.
     */
    distinct?: RaceWitnessScalarFieldEnum | RaceWitnessScalarFieldEnum[]
  }

  /**
   * RaceWitness findMany
   */
  export type RaceWitnessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceWitness
     */
    select?: RaceWitnessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceWitness
     */
    omit?: RaceWitnessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceWitnessInclude<ExtArgs> | null
    /**
     * Filter, which RaceWitnesses to fetch.
     */
    where?: RaceWitnessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RaceWitnesses to fetch.
     */
    orderBy?: RaceWitnessOrderByWithRelationInput | RaceWitnessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RaceWitnesses.
     */
    cursor?: RaceWitnessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RaceWitnesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RaceWitnesses.
     */
    skip?: number
    distinct?: RaceWitnessScalarFieldEnum | RaceWitnessScalarFieldEnum[]
  }

  /**
   * RaceWitness create
   */
  export type RaceWitnessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceWitness
     */
    select?: RaceWitnessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceWitness
     */
    omit?: RaceWitnessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceWitnessInclude<ExtArgs> | null
    /**
     * The data needed to create a RaceWitness.
     */
    data: XOR<RaceWitnessCreateInput, RaceWitnessUncheckedCreateInput>
  }

  /**
   * RaceWitness createMany
   */
  export type RaceWitnessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RaceWitnesses.
     */
    data: RaceWitnessCreateManyInput | RaceWitnessCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RaceWitness createManyAndReturn
   */
  export type RaceWitnessCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceWitness
     */
    select?: RaceWitnessSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RaceWitness
     */
    omit?: RaceWitnessOmit<ExtArgs> | null
    /**
     * The data used to create many RaceWitnesses.
     */
    data: RaceWitnessCreateManyInput | RaceWitnessCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceWitnessIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RaceWitness update
   */
  export type RaceWitnessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceWitness
     */
    select?: RaceWitnessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceWitness
     */
    omit?: RaceWitnessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceWitnessInclude<ExtArgs> | null
    /**
     * The data needed to update a RaceWitness.
     */
    data: XOR<RaceWitnessUpdateInput, RaceWitnessUncheckedUpdateInput>
    /**
     * Choose, which RaceWitness to update.
     */
    where: RaceWitnessWhereUniqueInput
  }

  /**
   * RaceWitness updateMany
   */
  export type RaceWitnessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RaceWitnesses.
     */
    data: XOR<RaceWitnessUpdateManyMutationInput, RaceWitnessUncheckedUpdateManyInput>
    /**
     * Filter which RaceWitnesses to update
     */
    where?: RaceWitnessWhereInput
    /**
     * Limit how many RaceWitnesses to update.
     */
    limit?: number
  }

  /**
   * RaceWitness updateManyAndReturn
   */
  export type RaceWitnessUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceWitness
     */
    select?: RaceWitnessSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RaceWitness
     */
    omit?: RaceWitnessOmit<ExtArgs> | null
    /**
     * The data used to update RaceWitnesses.
     */
    data: XOR<RaceWitnessUpdateManyMutationInput, RaceWitnessUncheckedUpdateManyInput>
    /**
     * Filter which RaceWitnesses to update
     */
    where?: RaceWitnessWhereInput
    /**
     * Limit how many RaceWitnesses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceWitnessIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RaceWitness upsert
   */
  export type RaceWitnessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceWitness
     */
    select?: RaceWitnessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceWitness
     */
    omit?: RaceWitnessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceWitnessInclude<ExtArgs> | null
    /**
     * The filter to search for the RaceWitness to update in case it exists.
     */
    where: RaceWitnessWhereUniqueInput
    /**
     * In case the RaceWitness found by the `where` argument doesn't exist, create a new RaceWitness with this data.
     */
    create: XOR<RaceWitnessCreateInput, RaceWitnessUncheckedCreateInput>
    /**
     * In case the RaceWitness was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RaceWitnessUpdateInput, RaceWitnessUncheckedUpdateInput>
  }

  /**
   * RaceWitness delete
   */
  export type RaceWitnessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceWitness
     */
    select?: RaceWitnessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceWitness
     */
    omit?: RaceWitnessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceWitnessInclude<ExtArgs> | null
    /**
     * Filter which RaceWitness to delete.
     */
    where: RaceWitnessWhereUniqueInput
  }

  /**
   * RaceWitness deleteMany
   */
  export type RaceWitnessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RaceWitnesses to delete
     */
    where?: RaceWitnessWhereInput
    /**
     * Limit how many RaceWitnesses to delete.
     */
    limit?: number
  }

  /**
   * RaceWitness without action
   */
  export type RaceWitnessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceWitness
     */
    select?: RaceWitnessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceWitness
     */
    omit?: RaceWitnessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceWitnessInclude<ExtArgs> | null
  }


  /**
   * Model RaceTelemetry
   */

  export type AggregateRaceTelemetry = {
    _count: RaceTelemetryCountAggregateOutputType | null
    _avg: RaceTelemetryAvgAggregateOutputType | null
    _sum: RaceTelemetrySumAggregateOutputType | null
    _min: RaceTelemetryMinAggregateOutputType | null
    _max: RaceTelemetryMaxAggregateOutputType | null
  }

  export type RaceTelemetryAvgAggregateOutputType = {
    id: number | null
    participant_id: number | null
    x: number | null
    y: number | null
    z: number | null
    speed: number | null
    client_timestamp: number | null
  }

  export type RaceTelemetrySumAggregateOutputType = {
    id: number | null
    participant_id: number | null
    x: number | null
    y: number | null
    z: number | null
    speed: number | null
    client_timestamp: bigint | null
  }

  export type RaceTelemetryMinAggregateOutputType = {
    id: number | null
    participant_id: number | null
    x: number | null
    y: number | null
    z: number | null
    speed: number | null
    client_timestamp: bigint | null
    created_at: Date | null
  }

  export type RaceTelemetryMaxAggregateOutputType = {
    id: number | null
    participant_id: number | null
    x: number | null
    y: number | null
    z: number | null
    speed: number | null
    client_timestamp: bigint | null
    created_at: Date | null
  }

  export type RaceTelemetryCountAggregateOutputType = {
    id: number
    participant_id: number
    x: number
    y: number
    z: number
    speed: number
    client_timestamp: number
    created_at: number
    _all: number
  }


  export type RaceTelemetryAvgAggregateInputType = {
    id?: true
    participant_id?: true
    x?: true
    y?: true
    z?: true
    speed?: true
    client_timestamp?: true
  }

  export type RaceTelemetrySumAggregateInputType = {
    id?: true
    participant_id?: true
    x?: true
    y?: true
    z?: true
    speed?: true
    client_timestamp?: true
  }

  export type RaceTelemetryMinAggregateInputType = {
    id?: true
    participant_id?: true
    x?: true
    y?: true
    z?: true
    speed?: true
    client_timestamp?: true
    created_at?: true
  }

  export type RaceTelemetryMaxAggregateInputType = {
    id?: true
    participant_id?: true
    x?: true
    y?: true
    z?: true
    speed?: true
    client_timestamp?: true
    created_at?: true
  }

  export type RaceTelemetryCountAggregateInputType = {
    id?: true
    participant_id?: true
    x?: true
    y?: true
    z?: true
    speed?: true
    client_timestamp?: true
    created_at?: true
    _all?: true
  }

  export type RaceTelemetryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RaceTelemetry to aggregate.
     */
    where?: RaceTelemetryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RaceTelemetries to fetch.
     */
    orderBy?: RaceTelemetryOrderByWithRelationInput | RaceTelemetryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RaceTelemetryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RaceTelemetries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RaceTelemetries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RaceTelemetries
    **/
    _count?: true | RaceTelemetryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RaceTelemetryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RaceTelemetrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RaceTelemetryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RaceTelemetryMaxAggregateInputType
  }

  export type GetRaceTelemetryAggregateType<T extends RaceTelemetryAggregateArgs> = {
        [P in keyof T & keyof AggregateRaceTelemetry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRaceTelemetry[P]>
      : GetScalarType<T[P], AggregateRaceTelemetry[P]>
  }




  export type RaceTelemetryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RaceTelemetryWhereInput
    orderBy?: RaceTelemetryOrderByWithAggregationInput | RaceTelemetryOrderByWithAggregationInput[]
    by: RaceTelemetryScalarFieldEnum[] | RaceTelemetryScalarFieldEnum
    having?: RaceTelemetryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RaceTelemetryCountAggregateInputType | true
    _avg?: RaceTelemetryAvgAggregateInputType
    _sum?: RaceTelemetrySumAggregateInputType
    _min?: RaceTelemetryMinAggregateInputType
    _max?: RaceTelemetryMaxAggregateInputType
  }

  export type RaceTelemetryGroupByOutputType = {
    id: number
    participant_id: number
    x: number
    y: number
    z: number
    speed: number
    client_timestamp: bigint
    created_at: Date
    _count: RaceTelemetryCountAggregateOutputType | null
    _avg: RaceTelemetryAvgAggregateOutputType | null
    _sum: RaceTelemetrySumAggregateOutputType | null
    _min: RaceTelemetryMinAggregateOutputType | null
    _max: RaceTelemetryMaxAggregateOutputType | null
  }

  type GetRaceTelemetryGroupByPayload<T extends RaceTelemetryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RaceTelemetryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RaceTelemetryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RaceTelemetryGroupByOutputType[P]>
            : GetScalarType<T[P], RaceTelemetryGroupByOutputType[P]>
        }
      >
    >


  export type RaceTelemetrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    participant_id?: boolean
    x?: boolean
    y?: boolean
    z?: boolean
    speed?: boolean
    client_timestamp?: boolean
    created_at?: boolean
    participant?: boolean | RaceParticipantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["raceTelemetry"]>

  export type RaceTelemetrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    participant_id?: boolean
    x?: boolean
    y?: boolean
    z?: boolean
    speed?: boolean
    client_timestamp?: boolean
    created_at?: boolean
    participant?: boolean | RaceParticipantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["raceTelemetry"]>

  export type RaceTelemetrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    participant_id?: boolean
    x?: boolean
    y?: boolean
    z?: boolean
    speed?: boolean
    client_timestamp?: boolean
    created_at?: boolean
    participant?: boolean | RaceParticipantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["raceTelemetry"]>

  export type RaceTelemetrySelectScalar = {
    id?: boolean
    participant_id?: boolean
    x?: boolean
    y?: boolean
    z?: boolean
    speed?: boolean
    client_timestamp?: boolean
    created_at?: boolean
  }

  export type RaceTelemetryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "participant_id" | "x" | "y" | "z" | "speed" | "client_timestamp" | "created_at", ExtArgs["result"]["raceTelemetry"]>
  export type RaceTelemetryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participant?: boolean | RaceParticipantDefaultArgs<ExtArgs>
  }
  export type RaceTelemetryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participant?: boolean | RaceParticipantDefaultArgs<ExtArgs>
  }
  export type RaceTelemetryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participant?: boolean | RaceParticipantDefaultArgs<ExtArgs>
  }

  export type $RaceTelemetryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RaceTelemetry"
    objects: {
      participant: Prisma.$RaceParticipantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      participant_id: number
      x: number
      y: number
      z: number
      speed: number
      client_timestamp: bigint
      created_at: Date
    }, ExtArgs["result"]["raceTelemetry"]>
    composites: {}
  }

  type RaceTelemetryGetPayload<S extends boolean | null | undefined | RaceTelemetryDefaultArgs> = $Result.GetResult<Prisma.$RaceTelemetryPayload, S>

  type RaceTelemetryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RaceTelemetryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RaceTelemetryCountAggregateInputType | true
    }

  export interface RaceTelemetryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RaceTelemetry'], meta: { name: 'RaceTelemetry' } }
    /**
     * Find zero or one RaceTelemetry that matches the filter.
     * @param {RaceTelemetryFindUniqueArgs} args - Arguments to find a RaceTelemetry
     * @example
     * // Get one RaceTelemetry
     * const raceTelemetry = await prisma.raceTelemetry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RaceTelemetryFindUniqueArgs>(args: SelectSubset<T, RaceTelemetryFindUniqueArgs<ExtArgs>>): Prisma__RaceTelemetryClient<$Result.GetResult<Prisma.$RaceTelemetryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RaceTelemetry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RaceTelemetryFindUniqueOrThrowArgs} args - Arguments to find a RaceTelemetry
     * @example
     * // Get one RaceTelemetry
     * const raceTelemetry = await prisma.raceTelemetry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RaceTelemetryFindUniqueOrThrowArgs>(args: SelectSubset<T, RaceTelemetryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RaceTelemetryClient<$Result.GetResult<Prisma.$RaceTelemetryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RaceTelemetry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceTelemetryFindFirstArgs} args - Arguments to find a RaceTelemetry
     * @example
     * // Get one RaceTelemetry
     * const raceTelemetry = await prisma.raceTelemetry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RaceTelemetryFindFirstArgs>(args?: SelectSubset<T, RaceTelemetryFindFirstArgs<ExtArgs>>): Prisma__RaceTelemetryClient<$Result.GetResult<Prisma.$RaceTelemetryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RaceTelemetry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceTelemetryFindFirstOrThrowArgs} args - Arguments to find a RaceTelemetry
     * @example
     * // Get one RaceTelemetry
     * const raceTelemetry = await prisma.raceTelemetry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RaceTelemetryFindFirstOrThrowArgs>(args?: SelectSubset<T, RaceTelemetryFindFirstOrThrowArgs<ExtArgs>>): Prisma__RaceTelemetryClient<$Result.GetResult<Prisma.$RaceTelemetryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RaceTelemetries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceTelemetryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RaceTelemetries
     * const raceTelemetries = await prisma.raceTelemetry.findMany()
     * 
     * // Get first 10 RaceTelemetries
     * const raceTelemetries = await prisma.raceTelemetry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const raceTelemetryWithIdOnly = await prisma.raceTelemetry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RaceTelemetryFindManyArgs>(args?: SelectSubset<T, RaceTelemetryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaceTelemetryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RaceTelemetry.
     * @param {RaceTelemetryCreateArgs} args - Arguments to create a RaceTelemetry.
     * @example
     * // Create one RaceTelemetry
     * const RaceTelemetry = await prisma.raceTelemetry.create({
     *   data: {
     *     // ... data to create a RaceTelemetry
     *   }
     * })
     * 
     */
    create<T extends RaceTelemetryCreateArgs>(args: SelectSubset<T, RaceTelemetryCreateArgs<ExtArgs>>): Prisma__RaceTelemetryClient<$Result.GetResult<Prisma.$RaceTelemetryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RaceTelemetries.
     * @param {RaceTelemetryCreateManyArgs} args - Arguments to create many RaceTelemetries.
     * @example
     * // Create many RaceTelemetries
     * const raceTelemetry = await prisma.raceTelemetry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RaceTelemetryCreateManyArgs>(args?: SelectSubset<T, RaceTelemetryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RaceTelemetries and returns the data saved in the database.
     * @param {RaceTelemetryCreateManyAndReturnArgs} args - Arguments to create many RaceTelemetries.
     * @example
     * // Create many RaceTelemetries
     * const raceTelemetry = await prisma.raceTelemetry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RaceTelemetries and only return the `id`
     * const raceTelemetryWithIdOnly = await prisma.raceTelemetry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RaceTelemetryCreateManyAndReturnArgs>(args?: SelectSubset<T, RaceTelemetryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaceTelemetryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RaceTelemetry.
     * @param {RaceTelemetryDeleteArgs} args - Arguments to delete one RaceTelemetry.
     * @example
     * // Delete one RaceTelemetry
     * const RaceTelemetry = await prisma.raceTelemetry.delete({
     *   where: {
     *     // ... filter to delete one RaceTelemetry
     *   }
     * })
     * 
     */
    delete<T extends RaceTelemetryDeleteArgs>(args: SelectSubset<T, RaceTelemetryDeleteArgs<ExtArgs>>): Prisma__RaceTelemetryClient<$Result.GetResult<Prisma.$RaceTelemetryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RaceTelemetry.
     * @param {RaceTelemetryUpdateArgs} args - Arguments to update one RaceTelemetry.
     * @example
     * // Update one RaceTelemetry
     * const raceTelemetry = await prisma.raceTelemetry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RaceTelemetryUpdateArgs>(args: SelectSubset<T, RaceTelemetryUpdateArgs<ExtArgs>>): Prisma__RaceTelemetryClient<$Result.GetResult<Prisma.$RaceTelemetryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RaceTelemetries.
     * @param {RaceTelemetryDeleteManyArgs} args - Arguments to filter RaceTelemetries to delete.
     * @example
     * // Delete a few RaceTelemetries
     * const { count } = await prisma.raceTelemetry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RaceTelemetryDeleteManyArgs>(args?: SelectSubset<T, RaceTelemetryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RaceTelemetries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceTelemetryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RaceTelemetries
     * const raceTelemetry = await prisma.raceTelemetry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RaceTelemetryUpdateManyArgs>(args: SelectSubset<T, RaceTelemetryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RaceTelemetries and returns the data updated in the database.
     * @param {RaceTelemetryUpdateManyAndReturnArgs} args - Arguments to update many RaceTelemetries.
     * @example
     * // Update many RaceTelemetries
     * const raceTelemetry = await prisma.raceTelemetry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RaceTelemetries and only return the `id`
     * const raceTelemetryWithIdOnly = await prisma.raceTelemetry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RaceTelemetryUpdateManyAndReturnArgs>(args: SelectSubset<T, RaceTelemetryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaceTelemetryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RaceTelemetry.
     * @param {RaceTelemetryUpsertArgs} args - Arguments to update or create a RaceTelemetry.
     * @example
     * // Update or create a RaceTelemetry
     * const raceTelemetry = await prisma.raceTelemetry.upsert({
     *   create: {
     *     // ... data to create a RaceTelemetry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RaceTelemetry we want to update
     *   }
     * })
     */
    upsert<T extends RaceTelemetryUpsertArgs>(args: SelectSubset<T, RaceTelemetryUpsertArgs<ExtArgs>>): Prisma__RaceTelemetryClient<$Result.GetResult<Prisma.$RaceTelemetryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RaceTelemetries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceTelemetryCountArgs} args - Arguments to filter RaceTelemetries to count.
     * @example
     * // Count the number of RaceTelemetries
     * const count = await prisma.raceTelemetry.count({
     *   where: {
     *     // ... the filter for the RaceTelemetries we want to count
     *   }
     * })
    **/
    count<T extends RaceTelemetryCountArgs>(
      args?: Subset<T, RaceTelemetryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RaceTelemetryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RaceTelemetry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceTelemetryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RaceTelemetryAggregateArgs>(args: Subset<T, RaceTelemetryAggregateArgs>): Prisma.PrismaPromise<GetRaceTelemetryAggregateType<T>>

    /**
     * Group by RaceTelemetry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceTelemetryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RaceTelemetryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RaceTelemetryGroupByArgs['orderBy'] }
        : { orderBy?: RaceTelemetryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RaceTelemetryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRaceTelemetryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RaceTelemetry model
   */
  readonly fields: RaceTelemetryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RaceTelemetry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RaceTelemetryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    participant<T extends RaceParticipantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RaceParticipantDefaultArgs<ExtArgs>>): Prisma__RaceParticipantClient<$Result.GetResult<Prisma.$RaceParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RaceTelemetry model
   */
  interface RaceTelemetryFieldRefs {
    readonly id: FieldRef<"RaceTelemetry", 'Int'>
    readonly participant_id: FieldRef<"RaceTelemetry", 'Int'>
    readonly x: FieldRef<"RaceTelemetry", 'Float'>
    readonly y: FieldRef<"RaceTelemetry", 'Float'>
    readonly z: FieldRef<"RaceTelemetry", 'Float'>
    readonly speed: FieldRef<"RaceTelemetry", 'Float'>
    readonly client_timestamp: FieldRef<"RaceTelemetry", 'BigInt'>
    readonly created_at: FieldRef<"RaceTelemetry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RaceTelemetry findUnique
   */
  export type RaceTelemetryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceTelemetry
     */
    select?: RaceTelemetrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceTelemetry
     */
    omit?: RaceTelemetryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceTelemetryInclude<ExtArgs> | null
    /**
     * Filter, which RaceTelemetry to fetch.
     */
    where: RaceTelemetryWhereUniqueInput
  }

  /**
   * RaceTelemetry findUniqueOrThrow
   */
  export type RaceTelemetryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceTelemetry
     */
    select?: RaceTelemetrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceTelemetry
     */
    omit?: RaceTelemetryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceTelemetryInclude<ExtArgs> | null
    /**
     * Filter, which RaceTelemetry to fetch.
     */
    where: RaceTelemetryWhereUniqueInput
  }

  /**
   * RaceTelemetry findFirst
   */
  export type RaceTelemetryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceTelemetry
     */
    select?: RaceTelemetrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceTelemetry
     */
    omit?: RaceTelemetryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceTelemetryInclude<ExtArgs> | null
    /**
     * Filter, which RaceTelemetry to fetch.
     */
    where?: RaceTelemetryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RaceTelemetries to fetch.
     */
    orderBy?: RaceTelemetryOrderByWithRelationInput | RaceTelemetryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RaceTelemetries.
     */
    cursor?: RaceTelemetryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RaceTelemetries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RaceTelemetries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RaceTelemetries.
     */
    distinct?: RaceTelemetryScalarFieldEnum | RaceTelemetryScalarFieldEnum[]
  }

  /**
   * RaceTelemetry findFirstOrThrow
   */
  export type RaceTelemetryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceTelemetry
     */
    select?: RaceTelemetrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceTelemetry
     */
    omit?: RaceTelemetryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceTelemetryInclude<ExtArgs> | null
    /**
     * Filter, which RaceTelemetry to fetch.
     */
    where?: RaceTelemetryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RaceTelemetries to fetch.
     */
    orderBy?: RaceTelemetryOrderByWithRelationInput | RaceTelemetryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RaceTelemetries.
     */
    cursor?: RaceTelemetryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RaceTelemetries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RaceTelemetries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RaceTelemetries.
     */
    distinct?: RaceTelemetryScalarFieldEnum | RaceTelemetryScalarFieldEnum[]
  }

  /**
   * RaceTelemetry findMany
   */
  export type RaceTelemetryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceTelemetry
     */
    select?: RaceTelemetrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceTelemetry
     */
    omit?: RaceTelemetryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceTelemetryInclude<ExtArgs> | null
    /**
     * Filter, which RaceTelemetries to fetch.
     */
    where?: RaceTelemetryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RaceTelemetries to fetch.
     */
    orderBy?: RaceTelemetryOrderByWithRelationInput | RaceTelemetryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RaceTelemetries.
     */
    cursor?: RaceTelemetryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RaceTelemetries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RaceTelemetries.
     */
    skip?: number
    distinct?: RaceTelemetryScalarFieldEnum | RaceTelemetryScalarFieldEnum[]
  }

  /**
   * RaceTelemetry create
   */
  export type RaceTelemetryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceTelemetry
     */
    select?: RaceTelemetrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceTelemetry
     */
    omit?: RaceTelemetryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceTelemetryInclude<ExtArgs> | null
    /**
     * The data needed to create a RaceTelemetry.
     */
    data: XOR<RaceTelemetryCreateInput, RaceTelemetryUncheckedCreateInput>
  }

  /**
   * RaceTelemetry createMany
   */
  export type RaceTelemetryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RaceTelemetries.
     */
    data: RaceTelemetryCreateManyInput | RaceTelemetryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RaceTelemetry createManyAndReturn
   */
  export type RaceTelemetryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceTelemetry
     */
    select?: RaceTelemetrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RaceTelemetry
     */
    omit?: RaceTelemetryOmit<ExtArgs> | null
    /**
     * The data used to create many RaceTelemetries.
     */
    data: RaceTelemetryCreateManyInput | RaceTelemetryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceTelemetryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RaceTelemetry update
   */
  export type RaceTelemetryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceTelemetry
     */
    select?: RaceTelemetrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceTelemetry
     */
    omit?: RaceTelemetryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceTelemetryInclude<ExtArgs> | null
    /**
     * The data needed to update a RaceTelemetry.
     */
    data: XOR<RaceTelemetryUpdateInput, RaceTelemetryUncheckedUpdateInput>
    /**
     * Choose, which RaceTelemetry to update.
     */
    where: RaceTelemetryWhereUniqueInput
  }

  /**
   * RaceTelemetry updateMany
   */
  export type RaceTelemetryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RaceTelemetries.
     */
    data: XOR<RaceTelemetryUpdateManyMutationInput, RaceTelemetryUncheckedUpdateManyInput>
    /**
     * Filter which RaceTelemetries to update
     */
    where?: RaceTelemetryWhereInput
    /**
     * Limit how many RaceTelemetries to update.
     */
    limit?: number
  }

  /**
   * RaceTelemetry updateManyAndReturn
   */
  export type RaceTelemetryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceTelemetry
     */
    select?: RaceTelemetrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RaceTelemetry
     */
    omit?: RaceTelemetryOmit<ExtArgs> | null
    /**
     * The data used to update RaceTelemetries.
     */
    data: XOR<RaceTelemetryUpdateManyMutationInput, RaceTelemetryUncheckedUpdateManyInput>
    /**
     * Filter which RaceTelemetries to update
     */
    where?: RaceTelemetryWhereInput
    /**
     * Limit how many RaceTelemetries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceTelemetryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RaceTelemetry upsert
   */
  export type RaceTelemetryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceTelemetry
     */
    select?: RaceTelemetrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceTelemetry
     */
    omit?: RaceTelemetryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceTelemetryInclude<ExtArgs> | null
    /**
     * The filter to search for the RaceTelemetry to update in case it exists.
     */
    where: RaceTelemetryWhereUniqueInput
    /**
     * In case the RaceTelemetry found by the `where` argument doesn't exist, create a new RaceTelemetry with this data.
     */
    create: XOR<RaceTelemetryCreateInput, RaceTelemetryUncheckedCreateInput>
    /**
     * In case the RaceTelemetry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RaceTelemetryUpdateInput, RaceTelemetryUncheckedUpdateInput>
  }

  /**
   * RaceTelemetry delete
   */
  export type RaceTelemetryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceTelemetry
     */
    select?: RaceTelemetrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceTelemetry
     */
    omit?: RaceTelemetryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceTelemetryInclude<ExtArgs> | null
    /**
     * Filter which RaceTelemetry to delete.
     */
    where: RaceTelemetryWhereUniqueInput
  }

  /**
   * RaceTelemetry deleteMany
   */
  export type RaceTelemetryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RaceTelemetries to delete
     */
    where?: RaceTelemetryWhereInput
    /**
     * Limit how many RaceTelemetries to delete.
     */
    limit?: number
  }

  /**
   * RaceTelemetry without action
   */
  export type RaceTelemetryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceTelemetry
     */
    select?: RaceTelemetrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceTelemetry
     */
    omit?: RaceTelemetryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceTelemetryInclude<ExtArgs> | null
  }


  /**
   * Model Transactions
   */

  export type AggregateTransactions = {
    _count: TransactionsCountAggregateOutputType | null
    _avg: TransactionsAvgAggregateOutputType | null
    _sum: TransactionsSumAggregateOutputType | null
    _min: TransactionsMinAggregateOutputType | null
    _max: TransactionsMaxAggregateOutputType | null
  }

  export type TransactionsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    amount: number | null
  }

  export type TransactionsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    amount: bigint | null
  }

  export type TransactionsMinAggregateOutputType = {
    id: number | null
    hash: string | null
    user_id: number | null
    amount: bigint | null
    comment: string | null
    status: $Enums.PaymentStatus | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TransactionsMaxAggregateOutputType = {
    id: number | null
    hash: string | null
    user_id: number | null
    amount: bigint | null
    comment: string | null
    status: $Enums.PaymentStatus | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TransactionsCountAggregateOutputType = {
    id: number
    hash: number
    user_id: number
    amount: number
    comment: number
    status: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type TransactionsAvgAggregateInputType = {
    id?: true
    user_id?: true
    amount?: true
  }

  export type TransactionsSumAggregateInputType = {
    id?: true
    user_id?: true
    amount?: true
  }

  export type TransactionsMinAggregateInputType = {
    id?: true
    hash?: true
    user_id?: true
    amount?: true
    comment?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type TransactionsMaxAggregateInputType = {
    id?: true
    hash?: true
    user_id?: true
    amount?: true
    comment?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type TransactionsCountAggregateInputType = {
    id?: true
    hash?: true
    user_id?: true
    amount?: true
    comment?: true
    status?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type TransactionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to aggregate.
     */
    where?: TransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionsMaxAggregateInputType
  }

  export type GetTransactionsAggregateType<T extends TransactionsAggregateArgs> = {
        [P in keyof T & keyof AggregateTransactions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransactions[P]>
      : GetScalarType<T[P], AggregateTransactions[P]>
  }




  export type TransactionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionsWhereInput
    orderBy?: TransactionsOrderByWithAggregationInput | TransactionsOrderByWithAggregationInput[]
    by: TransactionsScalarFieldEnum[] | TransactionsScalarFieldEnum
    having?: TransactionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionsCountAggregateInputType | true
    _avg?: TransactionsAvgAggregateInputType
    _sum?: TransactionsSumAggregateInputType
    _min?: TransactionsMinAggregateInputType
    _max?: TransactionsMaxAggregateInputType
  }

  export type TransactionsGroupByOutputType = {
    id: number
    hash: string | null
    user_id: number
    amount: bigint
    comment: string
    status: $Enums.PaymentStatus
    created_at: Date
    updated_at: Date
    _count: TransactionsCountAggregateOutputType | null
    _avg: TransactionsAvgAggregateOutputType | null
    _sum: TransactionsSumAggregateOutputType | null
    _min: TransactionsMinAggregateOutputType | null
    _max: TransactionsMaxAggregateOutputType | null
  }

  type GetTransactionsGroupByPayload<T extends TransactionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionsGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionsGroupByOutputType[P]>
        }
      >
    >


  export type TransactionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hash?: boolean
    user_id?: boolean
    amount?: boolean
    comment?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactions"]>

  export type TransactionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hash?: boolean
    user_id?: boolean
    amount?: boolean
    comment?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactions"]>

  export type TransactionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hash?: boolean
    user_id?: boolean
    amount?: boolean
    comment?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactions"]>

  export type TransactionsSelectScalar = {
    id?: boolean
    hash?: boolean
    user_id?: boolean
    amount?: boolean
    comment?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type TransactionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "hash" | "user_id" | "amount" | "comment" | "status" | "created_at" | "updated_at", ExtArgs["result"]["transactions"]>
  export type TransactionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TransactionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TransactionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TransactionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transactions"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      hash: string | null
      user_id: number
      amount: bigint
      comment: string
      status: $Enums.PaymentStatus
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["transactions"]>
    composites: {}
  }

  type TransactionsGetPayload<S extends boolean | null | undefined | TransactionsDefaultArgs> = $Result.GetResult<Prisma.$TransactionsPayload, S>

  type TransactionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionsCountAggregateInputType | true
    }

  export interface TransactionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transactions'], meta: { name: 'Transactions' } }
    /**
     * Find zero or one Transactions that matches the filter.
     * @param {TransactionsFindUniqueArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionsFindUniqueArgs>(args: SelectSubset<T, TransactionsFindUniqueArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transactions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionsFindUniqueOrThrowArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionsFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsFindFirstArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionsFindFirstArgs>(args?: SelectSubset<T, TransactionsFindFirstArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transactions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsFindFirstOrThrowArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionsFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transactions.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transactions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionsWithIdOnly = await prisma.transactions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionsFindManyArgs>(args?: SelectSubset<T, TransactionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transactions.
     * @param {TransactionsCreateArgs} args - Arguments to create a Transactions.
     * @example
     * // Create one Transactions
     * const Transactions = await prisma.transactions.create({
     *   data: {
     *     // ... data to create a Transactions
     *   }
     * })
     * 
     */
    create<T extends TransactionsCreateArgs>(args: SelectSubset<T, TransactionsCreateArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionsCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transactions = await prisma.transactions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionsCreateManyArgs>(args?: SelectSubset<T, TransactionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionsCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transactions = await prisma.transactions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionsWithIdOnly = await prisma.transactions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionsCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transactions.
     * @param {TransactionsDeleteArgs} args - Arguments to delete one Transactions.
     * @example
     * // Delete one Transactions
     * const Transactions = await prisma.transactions.delete({
     *   where: {
     *     // ... filter to delete one Transactions
     *   }
     * })
     * 
     */
    delete<T extends TransactionsDeleteArgs>(args: SelectSubset<T, TransactionsDeleteArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transactions.
     * @param {TransactionsUpdateArgs} args - Arguments to update one Transactions.
     * @example
     * // Update one Transactions
     * const transactions = await prisma.transactions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionsUpdateArgs>(args: SelectSubset<T, TransactionsUpdateArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionsDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transactions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionsDeleteManyArgs>(args?: SelectSubset<T, TransactionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transactions = await prisma.transactions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionsUpdateManyArgs>(args: SelectSubset<T, TransactionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionsUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transactions = await prisma.transactions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionsWithIdOnly = await prisma.transactions.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TransactionsUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transactions.
     * @param {TransactionsUpsertArgs} args - Arguments to update or create a Transactions.
     * @example
     * // Update or create a Transactions
     * const transactions = await prisma.transactions.upsert({
     *   create: {
     *     // ... data to create a Transactions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transactions we want to update
     *   }
     * })
     */
    upsert<T extends TransactionsUpsertArgs>(args: SelectSubset<T, TransactionsUpsertArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transactions.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionsCountArgs>(
      args?: Subset<T, TransactionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionsAggregateArgs>(args: Subset<T, TransactionsAggregateArgs>): Prisma.PrismaPromise<GetTransactionsAggregateType<T>>

    /**
     * Group by Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransactionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionsGroupByArgs['orderBy'] }
        : { orderBy?: TransactionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransactionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transactions model
   */
  readonly fields: TransactionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transactions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Transactions model
   */
  interface TransactionsFieldRefs {
    readonly id: FieldRef<"Transactions", 'Int'>
    readonly hash: FieldRef<"Transactions", 'String'>
    readonly user_id: FieldRef<"Transactions", 'Int'>
    readonly amount: FieldRef<"Transactions", 'BigInt'>
    readonly comment: FieldRef<"Transactions", 'String'>
    readonly status: FieldRef<"Transactions", 'PaymentStatus'>
    readonly created_at: FieldRef<"Transactions", 'DateTime'>
    readonly updated_at: FieldRef<"Transactions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transactions findUnique
   */
  export type TransactionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where: TransactionsWhereUniqueInput
  }

  /**
   * Transactions findUniqueOrThrow
   */
  export type TransactionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where: TransactionsWhereUniqueInput
  }

  /**
   * Transactions findFirst
   */
  export type TransactionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * Transactions findFirstOrThrow
   */
  export type TransactionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * Transactions findMany
   */
  export type TransactionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * Transactions create
   */
  export type TransactionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * The data needed to create a Transactions.
     */
    data: XOR<TransactionsCreateInput, TransactionsUncheckedCreateInput>
  }

  /**
   * Transactions createMany
   */
  export type TransactionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionsCreateManyInput | TransactionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transactions createManyAndReturn
   */
  export type TransactionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionsCreateManyInput | TransactionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transactions update
   */
  export type TransactionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * The data needed to update a Transactions.
     */
    data: XOR<TransactionsUpdateInput, TransactionsUncheckedUpdateInput>
    /**
     * Choose, which Transactions to update.
     */
    where: TransactionsWhereUniqueInput
  }

  /**
   * Transactions updateMany
   */
  export type TransactionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionsUpdateManyMutationInput, TransactionsUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionsWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transactions updateManyAndReturn
   */
  export type TransactionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionsUpdateManyMutationInput, TransactionsUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionsWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transactions upsert
   */
  export type TransactionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * The filter to search for the Transactions to update in case it exists.
     */
    where: TransactionsWhereUniqueInput
    /**
     * In case the Transactions found by the `where` argument doesn't exist, create a new Transactions with this data.
     */
    create: XOR<TransactionsCreateInput, TransactionsUncheckedCreateInput>
    /**
     * In case the Transactions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionsUpdateInput, TransactionsUncheckedUpdateInput>
  }

  /**
   * Transactions delete
   */
  export type TransactionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter which Transactions to delete.
     */
    where: TransactionsWhereUniqueInput
  }

  /**
   * Transactions deleteMany
   */
  export type TransactionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionsWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transactions without action
   */
  export type TransactionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
  }


  /**
   * Model WithdrawalRequest
   */

  export type AggregateWithdrawalRequest = {
    _count: WithdrawalRequestCountAggregateOutputType | null
    _avg: WithdrawalRequestAvgAggregateOutputType | null
    _sum: WithdrawalRequestSumAggregateOutputType | null
    _min: WithdrawalRequestMinAggregateOutputType | null
    _max: WithdrawalRequestMaxAggregateOutputType | null
  }

  export type WithdrawalRequestAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    amount: number | null
  }

  export type WithdrawalRequestSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    amount: number | null
  }

  export type WithdrawalRequestMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    amount: number | null
    currency: string | null
    wallet_address: string | null
    status: $Enums.WithdrawalStatus | null
    rejection_reason: string | null
    admin_comment: string | null
    tx_hash: string | null
    processed_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type WithdrawalRequestMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    amount: number | null
    currency: string | null
    wallet_address: string | null
    status: $Enums.WithdrawalStatus | null
    rejection_reason: string | null
    admin_comment: string | null
    tx_hash: string | null
    processed_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type WithdrawalRequestCountAggregateOutputType = {
    id: number
    user_id: number
    amount: number
    currency: number
    wallet_address: number
    status: number
    rejection_reason: number
    admin_comment: number
    tx_hash: number
    processed_at: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type WithdrawalRequestAvgAggregateInputType = {
    id?: true
    user_id?: true
    amount?: true
  }

  export type WithdrawalRequestSumAggregateInputType = {
    id?: true
    user_id?: true
    amount?: true
  }

  export type WithdrawalRequestMinAggregateInputType = {
    id?: true
    user_id?: true
    amount?: true
    currency?: true
    wallet_address?: true
    status?: true
    rejection_reason?: true
    admin_comment?: true
    tx_hash?: true
    processed_at?: true
    created_at?: true
    updated_at?: true
  }

  export type WithdrawalRequestMaxAggregateInputType = {
    id?: true
    user_id?: true
    amount?: true
    currency?: true
    wallet_address?: true
    status?: true
    rejection_reason?: true
    admin_comment?: true
    tx_hash?: true
    processed_at?: true
    created_at?: true
    updated_at?: true
  }

  export type WithdrawalRequestCountAggregateInputType = {
    id?: true
    user_id?: true
    amount?: true
    currency?: true
    wallet_address?: true
    status?: true
    rejection_reason?: true
    admin_comment?: true
    tx_hash?: true
    processed_at?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type WithdrawalRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WithdrawalRequest to aggregate.
     */
    where?: WithdrawalRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WithdrawalRequests to fetch.
     */
    orderBy?: WithdrawalRequestOrderByWithRelationInput | WithdrawalRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WithdrawalRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WithdrawalRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WithdrawalRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WithdrawalRequests
    **/
    _count?: true | WithdrawalRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WithdrawalRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WithdrawalRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WithdrawalRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WithdrawalRequestMaxAggregateInputType
  }

  export type GetWithdrawalRequestAggregateType<T extends WithdrawalRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateWithdrawalRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWithdrawalRequest[P]>
      : GetScalarType<T[P], AggregateWithdrawalRequest[P]>
  }




  export type WithdrawalRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WithdrawalRequestWhereInput
    orderBy?: WithdrawalRequestOrderByWithAggregationInput | WithdrawalRequestOrderByWithAggregationInput[]
    by: WithdrawalRequestScalarFieldEnum[] | WithdrawalRequestScalarFieldEnum
    having?: WithdrawalRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WithdrawalRequestCountAggregateInputType | true
    _avg?: WithdrawalRequestAvgAggregateInputType
    _sum?: WithdrawalRequestSumAggregateInputType
    _min?: WithdrawalRequestMinAggregateInputType
    _max?: WithdrawalRequestMaxAggregateInputType
  }

  export type WithdrawalRequestGroupByOutputType = {
    id: number
    user_id: number
    amount: number
    currency: string
    wallet_address: string
    status: $Enums.WithdrawalStatus
    rejection_reason: string | null
    admin_comment: string | null
    tx_hash: string | null
    processed_at: Date | null
    created_at: Date
    updated_at: Date
    _count: WithdrawalRequestCountAggregateOutputType | null
    _avg: WithdrawalRequestAvgAggregateOutputType | null
    _sum: WithdrawalRequestSumAggregateOutputType | null
    _min: WithdrawalRequestMinAggregateOutputType | null
    _max: WithdrawalRequestMaxAggregateOutputType | null
  }

  type GetWithdrawalRequestGroupByPayload<T extends WithdrawalRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WithdrawalRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WithdrawalRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WithdrawalRequestGroupByOutputType[P]>
            : GetScalarType<T[P], WithdrawalRequestGroupByOutputType[P]>
        }
      >
    >


  export type WithdrawalRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    amount?: boolean
    currency?: boolean
    wallet_address?: boolean
    status?: boolean
    rejection_reason?: boolean
    admin_comment?: boolean
    tx_hash?: boolean
    processed_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["withdrawalRequest"]>

  export type WithdrawalRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    amount?: boolean
    currency?: boolean
    wallet_address?: boolean
    status?: boolean
    rejection_reason?: boolean
    admin_comment?: boolean
    tx_hash?: boolean
    processed_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["withdrawalRequest"]>

  export type WithdrawalRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    amount?: boolean
    currency?: boolean
    wallet_address?: boolean
    status?: boolean
    rejection_reason?: boolean
    admin_comment?: boolean
    tx_hash?: boolean
    processed_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["withdrawalRequest"]>

  export type WithdrawalRequestSelectScalar = {
    id?: boolean
    user_id?: boolean
    amount?: boolean
    currency?: boolean
    wallet_address?: boolean
    status?: boolean
    rejection_reason?: boolean
    admin_comment?: boolean
    tx_hash?: boolean
    processed_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type WithdrawalRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "amount" | "currency" | "wallet_address" | "status" | "rejection_reason" | "admin_comment" | "tx_hash" | "processed_at" | "created_at" | "updated_at", ExtArgs["result"]["withdrawalRequest"]>
  export type WithdrawalRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WithdrawalRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WithdrawalRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WithdrawalRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WithdrawalRequest"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      amount: number
      currency: string
      wallet_address: string
      status: $Enums.WithdrawalStatus
      rejection_reason: string | null
      admin_comment: string | null
      tx_hash: string | null
      processed_at: Date | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["withdrawalRequest"]>
    composites: {}
  }

  type WithdrawalRequestGetPayload<S extends boolean | null | undefined | WithdrawalRequestDefaultArgs> = $Result.GetResult<Prisma.$WithdrawalRequestPayload, S>

  type WithdrawalRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WithdrawalRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WithdrawalRequestCountAggregateInputType | true
    }

  export interface WithdrawalRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WithdrawalRequest'], meta: { name: 'WithdrawalRequest' } }
    /**
     * Find zero or one WithdrawalRequest that matches the filter.
     * @param {WithdrawalRequestFindUniqueArgs} args - Arguments to find a WithdrawalRequest
     * @example
     * // Get one WithdrawalRequest
     * const withdrawalRequest = await prisma.withdrawalRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WithdrawalRequestFindUniqueArgs>(args: SelectSubset<T, WithdrawalRequestFindUniqueArgs<ExtArgs>>): Prisma__WithdrawalRequestClient<$Result.GetResult<Prisma.$WithdrawalRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WithdrawalRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WithdrawalRequestFindUniqueOrThrowArgs} args - Arguments to find a WithdrawalRequest
     * @example
     * // Get one WithdrawalRequest
     * const withdrawalRequest = await prisma.withdrawalRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WithdrawalRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, WithdrawalRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WithdrawalRequestClient<$Result.GetResult<Prisma.$WithdrawalRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WithdrawalRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawalRequestFindFirstArgs} args - Arguments to find a WithdrawalRequest
     * @example
     * // Get one WithdrawalRequest
     * const withdrawalRequest = await prisma.withdrawalRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WithdrawalRequestFindFirstArgs>(args?: SelectSubset<T, WithdrawalRequestFindFirstArgs<ExtArgs>>): Prisma__WithdrawalRequestClient<$Result.GetResult<Prisma.$WithdrawalRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WithdrawalRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawalRequestFindFirstOrThrowArgs} args - Arguments to find a WithdrawalRequest
     * @example
     * // Get one WithdrawalRequest
     * const withdrawalRequest = await prisma.withdrawalRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WithdrawalRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, WithdrawalRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__WithdrawalRequestClient<$Result.GetResult<Prisma.$WithdrawalRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WithdrawalRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawalRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WithdrawalRequests
     * const withdrawalRequests = await prisma.withdrawalRequest.findMany()
     * 
     * // Get first 10 WithdrawalRequests
     * const withdrawalRequests = await prisma.withdrawalRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const withdrawalRequestWithIdOnly = await prisma.withdrawalRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WithdrawalRequestFindManyArgs>(args?: SelectSubset<T, WithdrawalRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WithdrawalRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WithdrawalRequest.
     * @param {WithdrawalRequestCreateArgs} args - Arguments to create a WithdrawalRequest.
     * @example
     * // Create one WithdrawalRequest
     * const WithdrawalRequest = await prisma.withdrawalRequest.create({
     *   data: {
     *     // ... data to create a WithdrawalRequest
     *   }
     * })
     * 
     */
    create<T extends WithdrawalRequestCreateArgs>(args: SelectSubset<T, WithdrawalRequestCreateArgs<ExtArgs>>): Prisma__WithdrawalRequestClient<$Result.GetResult<Prisma.$WithdrawalRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WithdrawalRequests.
     * @param {WithdrawalRequestCreateManyArgs} args - Arguments to create many WithdrawalRequests.
     * @example
     * // Create many WithdrawalRequests
     * const withdrawalRequest = await prisma.withdrawalRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WithdrawalRequestCreateManyArgs>(args?: SelectSubset<T, WithdrawalRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WithdrawalRequests and returns the data saved in the database.
     * @param {WithdrawalRequestCreateManyAndReturnArgs} args - Arguments to create many WithdrawalRequests.
     * @example
     * // Create many WithdrawalRequests
     * const withdrawalRequest = await prisma.withdrawalRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WithdrawalRequests and only return the `id`
     * const withdrawalRequestWithIdOnly = await prisma.withdrawalRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WithdrawalRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, WithdrawalRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WithdrawalRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WithdrawalRequest.
     * @param {WithdrawalRequestDeleteArgs} args - Arguments to delete one WithdrawalRequest.
     * @example
     * // Delete one WithdrawalRequest
     * const WithdrawalRequest = await prisma.withdrawalRequest.delete({
     *   where: {
     *     // ... filter to delete one WithdrawalRequest
     *   }
     * })
     * 
     */
    delete<T extends WithdrawalRequestDeleteArgs>(args: SelectSubset<T, WithdrawalRequestDeleteArgs<ExtArgs>>): Prisma__WithdrawalRequestClient<$Result.GetResult<Prisma.$WithdrawalRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WithdrawalRequest.
     * @param {WithdrawalRequestUpdateArgs} args - Arguments to update one WithdrawalRequest.
     * @example
     * // Update one WithdrawalRequest
     * const withdrawalRequest = await prisma.withdrawalRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WithdrawalRequestUpdateArgs>(args: SelectSubset<T, WithdrawalRequestUpdateArgs<ExtArgs>>): Prisma__WithdrawalRequestClient<$Result.GetResult<Prisma.$WithdrawalRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WithdrawalRequests.
     * @param {WithdrawalRequestDeleteManyArgs} args - Arguments to filter WithdrawalRequests to delete.
     * @example
     * // Delete a few WithdrawalRequests
     * const { count } = await prisma.withdrawalRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WithdrawalRequestDeleteManyArgs>(args?: SelectSubset<T, WithdrawalRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WithdrawalRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawalRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WithdrawalRequests
     * const withdrawalRequest = await prisma.withdrawalRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WithdrawalRequestUpdateManyArgs>(args: SelectSubset<T, WithdrawalRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WithdrawalRequests and returns the data updated in the database.
     * @param {WithdrawalRequestUpdateManyAndReturnArgs} args - Arguments to update many WithdrawalRequests.
     * @example
     * // Update many WithdrawalRequests
     * const withdrawalRequest = await prisma.withdrawalRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WithdrawalRequests and only return the `id`
     * const withdrawalRequestWithIdOnly = await prisma.withdrawalRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WithdrawalRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, WithdrawalRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WithdrawalRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WithdrawalRequest.
     * @param {WithdrawalRequestUpsertArgs} args - Arguments to update or create a WithdrawalRequest.
     * @example
     * // Update or create a WithdrawalRequest
     * const withdrawalRequest = await prisma.withdrawalRequest.upsert({
     *   create: {
     *     // ... data to create a WithdrawalRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WithdrawalRequest we want to update
     *   }
     * })
     */
    upsert<T extends WithdrawalRequestUpsertArgs>(args: SelectSubset<T, WithdrawalRequestUpsertArgs<ExtArgs>>): Prisma__WithdrawalRequestClient<$Result.GetResult<Prisma.$WithdrawalRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WithdrawalRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawalRequestCountArgs} args - Arguments to filter WithdrawalRequests to count.
     * @example
     * // Count the number of WithdrawalRequests
     * const count = await prisma.withdrawalRequest.count({
     *   where: {
     *     // ... the filter for the WithdrawalRequests we want to count
     *   }
     * })
    **/
    count<T extends WithdrawalRequestCountArgs>(
      args?: Subset<T, WithdrawalRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WithdrawalRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WithdrawalRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawalRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WithdrawalRequestAggregateArgs>(args: Subset<T, WithdrawalRequestAggregateArgs>): Prisma.PrismaPromise<GetWithdrawalRequestAggregateType<T>>

    /**
     * Group by WithdrawalRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawalRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WithdrawalRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WithdrawalRequestGroupByArgs['orderBy'] }
        : { orderBy?: WithdrawalRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WithdrawalRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWithdrawalRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WithdrawalRequest model
   */
  readonly fields: WithdrawalRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WithdrawalRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WithdrawalRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WithdrawalRequest model
   */
  interface WithdrawalRequestFieldRefs {
    readonly id: FieldRef<"WithdrawalRequest", 'Int'>
    readonly user_id: FieldRef<"WithdrawalRequest", 'Int'>
    readonly amount: FieldRef<"WithdrawalRequest", 'Float'>
    readonly currency: FieldRef<"WithdrawalRequest", 'String'>
    readonly wallet_address: FieldRef<"WithdrawalRequest", 'String'>
    readonly status: FieldRef<"WithdrawalRequest", 'WithdrawalStatus'>
    readonly rejection_reason: FieldRef<"WithdrawalRequest", 'String'>
    readonly admin_comment: FieldRef<"WithdrawalRequest", 'String'>
    readonly tx_hash: FieldRef<"WithdrawalRequest", 'String'>
    readonly processed_at: FieldRef<"WithdrawalRequest", 'DateTime'>
    readonly created_at: FieldRef<"WithdrawalRequest", 'DateTime'>
    readonly updated_at: FieldRef<"WithdrawalRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WithdrawalRequest findUnique
   */
  export type WithdrawalRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawalRequest
     */
    select?: WithdrawalRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WithdrawalRequest
     */
    omit?: WithdrawalRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalRequestInclude<ExtArgs> | null
    /**
     * Filter, which WithdrawalRequest to fetch.
     */
    where: WithdrawalRequestWhereUniqueInput
  }

  /**
   * WithdrawalRequest findUniqueOrThrow
   */
  export type WithdrawalRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawalRequest
     */
    select?: WithdrawalRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WithdrawalRequest
     */
    omit?: WithdrawalRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalRequestInclude<ExtArgs> | null
    /**
     * Filter, which WithdrawalRequest to fetch.
     */
    where: WithdrawalRequestWhereUniqueInput
  }

  /**
   * WithdrawalRequest findFirst
   */
  export type WithdrawalRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawalRequest
     */
    select?: WithdrawalRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WithdrawalRequest
     */
    omit?: WithdrawalRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalRequestInclude<ExtArgs> | null
    /**
     * Filter, which WithdrawalRequest to fetch.
     */
    where?: WithdrawalRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WithdrawalRequests to fetch.
     */
    orderBy?: WithdrawalRequestOrderByWithRelationInput | WithdrawalRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WithdrawalRequests.
     */
    cursor?: WithdrawalRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WithdrawalRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WithdrawalRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WithdrawalRequests.
     */
    distinct?: WithdrawalRequestScalarFieldEnum | WithdrawalRequestScalarFieldEnum[]
  }

  /**
   * WithdrawalRequest findFirstOrThrow
   */
  export type WithdrawalRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawalRequest
     */
    select?: WithdrawalRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WithdrawalRequest
     */
    omit?: WithdrawalRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalRequestInclude<ExtArgs> | null
    /**
     * Filter, which WithdrawalRequest to fetch.
     */
    where?: WithdrawalRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WithdrawalRequests to fetch.
     */
    orderBy?: WithdrawalRequestOrderByWithRelationInput | WithdrawalRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WithdrawalRequests.
     */
    cursor?: WithdrawalRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WithdrawalRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WithdrawalRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WithdrawalRequests.
     */
    distinct?: WithdrawalRequestScalarFieldEnum | WithdrawalRequestScalarFieldEnum[]
  }

  /**
   * WithdrawalRequest findMany
   */
  export type WithdrawalRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawalRequest
     */
    select?: WithdrawalRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WithdrawalRequest
     */
    omit?: WithdrawalRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalRequestInclude<ExtArgs> | null
    /**
     * Filter, which WithdrawalRequests to fetch.
     */
    where?: WithdrawalRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WithdrawalRequests to fetch.
     */
    orderBy?: WithdrawalRequestOrderByWithRelationInput | WithdrawalRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WithdrawalRequests.
     */
    cursor?: WithdrawalRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WithdrawalRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WithdrawalRequests.
     */
    skip?: number
    distinct?: WithdrawalRequestScalarFieldEnum | WithdrawalRequestScalarFieldEnum[]
  }

  /**
   * WithdrawalRequest create
   */
  export type WithdrawalRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawalRequest
     */
    select?: WithdrawalRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WithdrawalRequest
     */
    omit?: WithdrawalRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a WithdrawalRequest.
     */
    data: XOR<WithdrawalRequestCreateInput, WithdrawalRequestUncheckedCreateInput>
  }

  /**
   * WithdrawalRequest createMany
   */
  export type WithdrawalRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WithdrawalRequests.
     */
    data: WithdrawalRequestCreateManyInput | WithdrawalRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WithdrawalRequest createManyAndReturn
   */
  export type WithdrawalRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawalRequest
     */
    select?: WithdrawalRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WithdrawalRequest
     */
    omit?: WithdrawalRequestOmit<ExtArgs> | null
    /**
     * The data used to create many WithdrawalRequests.
     */
    data: WithdrawalRequestCreateManyInput | WithdrawalRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WithdrawalRequest update
   */
  export type WithdrawalRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawalRequest
     */
    select?: WithdrawalRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WithdrawalRequest
     */
    omit?: WithdrawalRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a WithdrawalRequest.
     */
    data: XOR<WithdrawalRequestUpdateInput, WithdrawalRequestUncheckedUpdateInput>
    /**
     * Choose, which WithdrawalRequest to update.
     */
    where: WithdrawalRequestWhereUniqueInput
  }

  /**
   * WithdrawalRequest updateMany
   */
  export type WithdrawalRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WithdrawalRequests.
     */
    data: XOR<WithdrawalRequestUpdateManyMutationInput, WithdrawalRequestUncheckedUpdateManyInput>
    /**
     * Filter which WithdrawalRequests to update
     */
    where?: WithdrawalRequestWhereInput
    /**
     * Limit how many WithdrawalRequests to update.
     */
    limit?: number
  }

  /**
   * WithdrawalRequest updateManyAndReturn
   */
  export type WithdrawalRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawalRequest
     */
    select?: WithdrawalRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WithdrawalRequest
     */
    omit?: WithdrawalRequestOmit<ExtArgs> | null
    /**
     * The data used to update WithdrawalRequests.
     */
    data: XOR<WithdrawalRequestUpdateManyMutationInput, WithdrawalRequestUncheckedUpdateManyInput>
    /**
     * Filter which WithdrawalRequests to update
     */
    where?: WithdrawalRequestWhereInput
    /**
     * Limit how many WithdrawalRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WithdrawalRequest upsert
   */
  export type WithdrawalRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawalRequest
     */
    select?: WithdrawalRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WithdrawalRequest
     */
    omit?: WithdrawalRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the WithdrawalRequest to update in case it exists.
     */
    where: WithdrawalRequestWhereUniqueInput
    /**
     * In case the WithdrawalRequest found by the `where` argument doesn't exist, create a new WithdrawalRequest with this data.
     */
    create: XOR<WithdrawalRequestCreateInput, WithdrawalRequestUncheckedCreateInput>
    /**
     * In case the WithdrawalRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WithdrawalRequestUpdateInput, WithdrawalRequestUncheckedUpdateInput>
  }

  /**
   * WithdrawalRequest delete
   */
  export type WithdrawalRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawalRequest
     */
    select?: WithdrawalRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WithdrawalRequest
     */
    omit?: WithdrawalRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalRequestInclude<ExtArgs> | null
    /**
     * Filter which WithdrawalRequest to delete.
     */
    where: WithdrawalRequestWhereUniqueInput
  }

  /**
   * WithdrawalRequest deleteMany
   */
  export type WithdrawalRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WithdrawalRequests to delete
     */
    where?: WithdrawalRequestWhereInput
    /**
     * Limit how many WithdrawalRequests to delete.
     */
    limit?: number
  }

  /**
   * WithdrawalRequest without action
   */
  export type WithdrawalRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WithdrawalRequest
     */
    select?: WithdrawalRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WithdrawalRequest
     */
    omit?: WithdrawalRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalRequestInclude<ExtArgs> | null
  }


  /**
   * Model Tokens
   */

  export type AggregateTokens = {
    _count: TokensCountAggregateOutputType | null
    _avg: TokensAvgAggregateOutputType | null
    _sum: TokensSumAggregateOutputType | null
    _min: TokensMinAggregateOutputType | null
    _max: TokensMaxAggregateOutputType | null
  }

  export type TokensAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type TokensSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type TokensMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    refresh_token: string | null
    created_at: Date | null
  }

  export type TokensMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    refresh_token: string | null
    created_at: Date | null
  }

  export type TokensCountAggregateOutputType = {
    id: number
    user_id: number
    refresh_token: number
    created_at: number
    _all: number
  }


  export type TokensAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type TokensSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type TokensMinAggregateInputType = {
    id?: true
    user_id?: true
    refresh_token?: true
    created_at?: true
  }

  export type TokensMaxAggregateInputType = {
    id?: true
    user_id?: true
    refresh_token?: true
    created_at?: true
  }

  export type TokensCountAggregateInputType = {
    id?: true
    user_id?: true
    refresh_token?: true
    created_at?: true
    _all?: true
  }

  export type TokensAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tokens to aggregate.
     */
    where?: TokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokensOrderByWithRelationInput | TokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tokens
    **/
    _count?: true | TokensCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TokensAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TokensSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokensMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokensMaxAggregateInputType
  }

  export type GetTokensAggregateType<T extends TokensAggregateArgs> = {
        [P in keyof T & keyof AggregateTokens]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTokens[P]>
      : GetScalarType<T[P], AggregateTokens[P]>
  }




  export type TokensGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokensWhereInput
    orderBy?: TokensOrderByWithAggregationInput | TokensOrderByWithAggregationInput[]
    by: TokensScalarFieldEnum[] | TokensScalarFieldEnum
    having?: TokensScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokensCountAggregateInputType | true
    _avg?: TokensAvgAggregateInputType
    _sum?: TokensSumAggregateInputType
    _min?: TokensMinAggregateInputType
    _max?: TokensMaxAggregateInputType
  }

  export type TokensGroupByOutputType = {
    id: number
    user_id: number
    refresh_token: string
    created_at: Date
    _count: TokensCountAggregateOutputType | null
    _avg: TokensAvgAggregateOutputType | null
    _sum: TokensSumAggregateOutputType | null
    _min: TokensMinAggregateOutputType | null
    _max: TokensMaxAggregateOutputType | null
  }

  type GetTokensGroupByPayload<T extends TokensGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokensGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokensGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokensGroupByOutputType[P]>
            : GetScalarType<T[P], TokensGroupByOutputType[P]>
        }
      >
    >


  export type TokensSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    refresh_token?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tokens"]>

  export type TokensSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    refresh_token?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tokens"]>

  export type TokensSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    refresh_token?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tokens"]>

  export type TokensSelectScalar = {
    id?: boolean
    user_id?: boolean
    refresh_token?: boolean
    created_at?: boolean
  }

  export type TokensOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "refresh_token" | "created_at", ExtArgs["result"]["tokens"]>
  export type TokensInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TokensIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TokensIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TokensPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tokens"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      refresh_token: string
      created_at: Date
    }, ExtArgs["result"]["tokens"]>
    composites: {}
  }

  type TokensGetPayload<S extends boolean | null | undefined | TokensDefaultArgs> = $Result.GetResult<Prisma.$TokensPayload, S>

  type TokensCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TokensFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TokensCountAggregateInputType | true
    }

  export interface TokensDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tokens'], meta: { name: 'Tokens' } }
    /**
     * Find zero or one Tokens that matches the filter.
     * @param {TokensFindUniqueArgs} args - Arguments to find a Tokens
     * @example
     * // Get one Tokens
     * const tokens = await prisma.tokens.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TokensFindUniqueArgs>(args: SelectSubset<T, TokensFindUniqueArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tokens that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TokensFindUniqueOrThrowArgs} args - Arguments to find a Tokens
     * @example
     * // Get one Tokens
     * const tokens = await prisma.tokens.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TokensFindUniqueOrThrowArgs>(args: SelectSubset<T, TokensFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensFindFirstArgs} args - Arguments to find a Tokens
     * @example
     * // Get one Tokens
     * const tokens = await prisma.tokens.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TokensFindFirstArgs>(args?: SelectSubset<T, TokensFindFirstArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tokens that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensFindFirstOrThrowArgs} args - Arguments to find a Tokens
     * @example
     * // Get one Tokens
     * const tokens = await prisma.tokens.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TokensFindFirstOrThrowArgs>(args?: SelectSubset<T, TokensFindFirstOrThrowArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tokens
     * const tokens = await prisma.tokens.findMany()
     * 
     * // Get first 10 Tokens
     * const tokens = await prisma.tokens.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tokensWithIdOnly = await prisma.tokens.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TokensFindManyArgs>(args?: SelectSubset<T, TokensFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tokens.
     * @param {TokensCreateArgs} args - Arguments to create a Tokens.
     * @example
     * // Create one Tokens
     * const Tokens = await prisma.tokens.create({
     *   data: {
     *     // ... data to create a Tokens
     *   }
     * })
     * 
     */
    create<T extends TokensCreateArgs>(args: SelectSubset<T, TokensCreateArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tokens.
     * @param {TokensCreateManyArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const tokens = await prisma.tokens.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TokensCreateManyArgs>(args?: SelectSubset<T, TokensCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tokens and returns the data saved in the database.
     * @param {TokensCreateManyAndReturnArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const tokens = await prisma.tokens.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tokens and only return the `id`
     * const tokensWithIdOnly = await prisma.tokens.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TokensCreateManyAndReturnArgs>(args?: SelectSubset<T, TokensCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tokens.
     * @param {TokensDeleteArgs} args - Arguments to delete one Tokens.
     * @example
     * // Delete one Tokens
     * const Tokens = await prisma.tokens.delete({
     *   where: {
     *     // ... filter to delete one Tokens
     *   }
     * })
     * 
     */
    delete<T extends TokensDeleteArgs>(args: SelectSubset<T, TokensDeleteArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tokens.
     * @param {TokensUpdateArgs} args - Arguments to update one Tokens.
     * @example
     * // Update one Tokens
     * const tokens = await prisma.tokens.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TokensUpdateArgs>(args: SelectSubset<T, TokensUpdateArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tokens.
     * @param {TokensDeleteManyArgs} args - Arguments to filter Tokens to delete.
     * @example
     * // Delete a few Tokens
     * const { count } = await prisma.tokens.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TokensDeleteManyArgs>(args?: SelectSubset<T, TokensDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tokens
     * const tokens = await prisma.tokens.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TokensUpdateManyArgs>(args: SelectSubset<T, TokensUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens and returns the data updated in the database.
     * @param {TokensUpdateManyAndReturnArgs} args - Arguments to update many Tokens.
     * @example
     * // Update many Tokens
     * const tokens = await prisma.tokens.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tokens and only return the `id`
     * const tokensWithIdOnly = await prisma.tokens.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TokensUpdateManyAndReturnArgs>(args: SelectSubset<T, TokensUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tokens.
     * @param {TokensUpsertArgs} args - Arguments to update or create a Tokens.
     * @example
     * // Update or create a Tokens
     * const tokens = await prisma.tokens.upsert({
     *   create: {
     *     // ... data to create a Tokens
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tokens we want to update
     *   }
     * })
     */
    upsert<T extends TokensUpsertArgs>(args: SelectSubset<T, TokensUpsertArgs<ExtArgs>>): Prisma__TokensClient<$Result.GetResult<Prisma.$TokensPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensCountArgs} args - Arguments to filter Tokens to count.
     * @example
     * // Count the number of Tokens
     * const count = await prisma.tokens.count({
     *   where: {
     *     // ... the filter for the Tokens we want to count
     *   }
     * })
    **/
    count<T extends TokensCountArgs>(
      args?: Subset<T, TokensCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokensCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TokensAggregateArgs>(args: Subset<T, TokensAggregateArgs>): Prisma.PrismaPromise<GetTokensAggregateType<T>>

    /**
     * Group by Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TokensGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokensGroupByArgs['orderBy'] }
        : { orderBy?: TokensGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TokensGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokensGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tokens model
   */
  readonly fields: TokensFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tokens.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokensClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tokens model
   */
  interface TokensFieldRefs {
    readonly id: FieldRef<"Tokens", 'Int'>
    readonly user_id: FieldRef<"Tokens", 'Int'>
    readonly refresh_token: FieldRef<"Tokens", 'String'>
    readonly created_at: FieldRef<"Tokens", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tokens findUnique
   */
  export type TokensFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokensInclude<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where: TokensWhereUniqueInput
  }

  /**
   * Tokens findUniqueOrThrow
   */
  export type TokensFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokensInclude<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where: TokensWhereUniqueInput
  }

  /**
   * Tokens findFirst
   */
  export type TokensFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokensInclude<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where?: TokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokensOrderByWithRelationInput | TokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokensScalarFieldEnum | TokensScalarFieldEnum[]
  }

  /**
   * Tokens findFirstOrThrow
   */
  export type TokensFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokensInclude<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where?: TokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokensOrderByWithRelationInput | TokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokensScalarFieldEnum | TokensScalarFieldEnum[]
  }

  /**
   * Tokens findMany
   */
  export type TokensFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokensInclude<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where?: TokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokensOrderByWithRelationInput | TokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tokens.
     */
    cursor?: TokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    distinct?: TokensScalarFieldEnum | TokensScalarFieldEnum[]
  }

  /**
   * Tokens create
   */
  export type TokensCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokensInclude<ExtArgs> | null
    /**
     * The data needed to create a Tokens.
     */
    data: XOR<TokensCreateInput, TokensUncheckedCreateInput>
  }

  /**
   * Tokens createMany
   */
  export type TokensCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tokens.
     */
    data: TokensCreateManyInput | TokensCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tokens createManyAndReturn
   */
  export type TokensCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * The data used to create many Tokens.
     */
    data: TokensCreateManyInput | TokensCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokensIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tokens update
   */
  export type TokensUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokensInclude<ExtArgs> | null
    /**
     * The data needed to update a Tokens.
     */
    data: XOR<TokensUpdateInput, TokensUncheckedUpdateInput>
    /**
     * Choose, which Tokens to update.
     */
    where: TokensWhereUniqueInput
  }

  /**
   * Tokens updateMany
   */
  export type TokensUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokensUpdateManyMutationInput, TokensUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokensWhereInput
    /**
     * Limit how many Tokens to update.
     */
    limit?: number
  }

  /**
   * Tokens updateManyAndReturn
   */
  export type TokensUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokensUpdateManyMutationInput, TokensUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokensWhereInput
    /**
     * Limit how many Tokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokensIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tokens upsert
   */
  export type TokensUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokensInclude<ExtArgs> | null
    /**
     * The filter to search for the Tokens to update in case it exists.
     */
    where: TokensWhereUniqueInput
    /**
     * In case the Tokens found by the `where` argument doesn't exist, create a new Tokens with this data.
     */
    create: XOR<TokensCreateInput, TokensUncheckedCreateInput>
    /**
     * In case the Tokens was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokensUpdateInput, TokensUncheckedUpdateInput>
  }

  /**
   * Tokens delete
   */
  export type TokensDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokensInclude<ExtArgs> | null
    /**
     * Filter which Tokens to delete.
     */
    where: TokensWhereUniqueInput
  }

  /**
   * Tokens deleteMany
   */
  export type TokensDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tokens to delete
     */
    where?: TokensWhereInput
    /**
     * Limit how many Tokens to delete.
     */
    limit?: number
  }

  /**
   * Tokens without action
   */
  export type TokensDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tokens
     */
    select?: TokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tokens
     */
    omit?: TokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokensInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    telegram_id: 'telegram_id',
    username: 'username',
    created_at: 'created_at',
    vip_expires_at: 'vip_expires_at',
    balance: 'balance',
    frozen_balance: 'frozen_balance',
    connect_code: 'connect_code',
    connect_code_expires_at: 'connect_code_expires_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VerificationCodesScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    code: 'code',
    type: 'type',
    expires_at: 'expires_at'
  };

  export type VerificationCodesScalarFieldEnum = (typeof VerificationCodesScalarFieldEnum)[keyof typeof VerificationCodesScalarFieldEnum]


  export const UserSettingsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    language: 'language',
    currency: 'currency',
    timezone: 'timezone',
    notify_news: 'notify_news',
    notify_payments: 'notify_payments',
    is_stealth: 'is_stealth',
    updated_at: 'updated_at'
  };

  export type UserSettingsScalarFieldEnum = (typeof UserSettingsScalarFieldEnum)[keyof typeof UserSettingsScalarFieldEnum]


  export const PromoCodeScalarFieldEnum: {
    id: 'id',
    code: 'code',
    type: 'type',
    value: 'value',
    is_used: 'is_used',
    used_at: 'used_at',
    user_id: 'user_id',
    created_at: 'created_at'
  };

  export type PromoCodeScalarFieldEnum = (typeof PromoCodeScalarFieldEnum)[keyof typeof PromoCodeScalarFieldEnum]


  export const GameAccountScalarFieldEnum: {
    id: 'id',
    nickname: 'nickname',
    server: 'server',
    verified: 'verified',
    wins: 'wins',
    user_id: 'user_id'
  };

  export type GameAccountScalarFieldEnum = (typeof GameAccountScalarFieldEnum)[keyof typeof GameAccountScalarFieldEnum]


  export const LocationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    file_id: 'file_id',
    pos_one_x: 'pos_one_x',
    pos_one_y: 'pos_one_y',
    pos_one_z: 'pos_one_z',
    pos_two_x: 'pos_two_x',
    pos_two_y: 'pos_two_y',
    pos_two_z: 'pos_two_z'
  };

  export type LocationScalarFieldEnum = (typeof LocationScalarFieldEnum)[keyof typeof LocationScalarFieldEnum]


  export const RaceScalarFieldEnum: {
    id: 'id',
    secret_code: 'secret_code',
    is_vip: 'is_vip',
    status: 'status',
    location_id: 'location_id',
    winner_id: 'winner_id',
    winner_path: 'winner_path',
    prize: 'prize',
    start_at: 'start_at',
    server_start_time: 'server_start_time',
    creator_id: 'creator_id',
    created_at: 'created_at'
  };

  export type RaceScalarFieldEnum = (typeof RaceScalarFieldEnum)[keyof typeof RaceScalarFieldEnum]


  export const RaceParticipantScalarFieldEnum: {
    id: 'id',
    race_id: 'race_id',
    game_account_id: 'game_account_id',
    finished: 'finished',
    server_finish_at: 'server_finish_at',
    client_time_ms: 'client_time_ms',
    is_disqualified: 'is_disqualified',
    suspicion_reason: 'suspicion_reason'
  };

  export type RaceParticipantScalarFieldEnum = (typeof RaceParticipantScalarFieldEnum)[keyof typeof RaceParticipantScalarFieldEnum]


  export const RaceWitnessScalarFieldEnum: {
    id: 'id',
    race_id: 'race_id',
    observer_id: 'observer_id',
    suspect_nickname: 'suspect_nickname',
    suspect_server: 'suspect_server',
    server_time: 'server_time'
  };

  export type RaceWitnessScalarFieldEnum = (typeof RaceWitnessScalarFieldEnum)[keyof typeof RaceWitnessScalarFieldEnum]


  export const RaceTelemetryScalarFieldEnum: {
    id: 'id',
    participant_id: 'participant_id',
    x: 'x',
    y: 'y',
    z: 'z',
    speed: 'speed',
    client_timestamp: 'client_timestamp',
    created_at: 'created_at'
  };

  export type RaceTelemetryScalarFieldEnum = (typeof RaceTelemetryScalarFieldEnum)[keyof typeof RaceTelemetryScalarFieldEnum]


  export const TransactionsScalarFieldEnum: {
    id: 'id',
    hash: 'hash',
    user_id: 'user_id',
    amount: 'amount',
    comment: 'comment',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type TransactionsScalarFieldEnum = (typeof TransactionsScalarFieldEnum)[keyof typeof TransactionsScalarFieldEnum]


  export const WithdrawalRequestScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    amount: 'amount',
    currency: 'currency',
    wallet_address: 'wallet_address',
    status: 'status',
    rejection_reason: 'rejection_reason',
    admin_comment: 'admin_comment',
    tx_hash: 'tx_hash',
    processed_at: 'processed_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type WithdrawalRequestScalarFieldEnum = (typeof WithdrawalRequestScalarFieldEnum)[keyof typeof WithdrawalRequestScalarFieldEnum]


  export const TokensScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    refresh_token: 'refresh_token',
    created_at: 'created_at'
  };

  export type TokensScalarFieldEnum = (typeof TokensScalarFieldEnum)[keyof typeof TokensScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'VerificationCodeType'
   */
  export type EnumVerificationCodeTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VerificationCodeType'>
    


  /**
   * Reference to a field of type 'VerificationCodeType[]'
   */
  export type ListEnumVerificationCodeTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VerificationCodeType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'PromoType'
   */
  export type EnumPromoTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PromoType'>
    


  /**
   * Reference to a field of type 'PromoType[]'
   */
  export type ListEnumPromoTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PromoType[]'>
    


  /**
   * Reference to a field of type 'RaceStatus'
   */
  export type EnumRaceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RaceStatus'>
    


  /**
   * Reference to a field of type 'RaceStatus[]'
   */
  export type ListEnumRaceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RaceStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    


  /**
   * Reference to a field of type 'WithdrawalStatus'
   */
  export type EnumWithdrawalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WithdrawalStatus'>
    


  /**
   * Reference to a field of type 'WithdrawalStatus[]'
   */
  export type ListEnumWithdrawalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WithdrawalStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    telegram_id?: BigIntFilter<"User"> | bigint | number
    username?: StringNullableFilter<"User"> | string | null
    created_at?: DateTimeFilter<"User"> | Date | string
    vip_expires_at?: DateTimeNullableFilter<"User"> | Date | string | null
    balance?: FloatFilter<"User"> | number
    frozen_balance?: FloatFilter<"User"> | number
    connect_code?: StringNullableFilter<"User"> | string | null
    connect_code_expires_at?: DateTimeNullableFilter<"User"> | Date | string | null
    withdrawals?: WithdrawalRequestListRelationFilter
    activated_promos?: PromoCodeListRelationFilter
    game_accounts?: GameAccountListRelationFilter
    created_races?: RaceListRelationFilter
    settings?: XOR<UserSettingsNullableScalarRelationFilter, UserSettingsWhereInput> | null
    transactions?: TransactionsListRelationFilter
    tokens?: TokensListRelationFilter
    verification_codes?: VerificationCodesListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    telegram_id?: SortOrder
    username?: SortOrderInput | SortOrder
    created_at?: SortOrder
    vip_expires_at?: SortOrderInput | SortOrder
    balance?: SortOrder
    frozen_balance?: SortOrder
    connect_code?: SortOrderInput | SortOrder
    connect_code_expires_at?: SortOrderInput | SortOrder
    withdrawals?: WithdrawalRequestOrderByRelationAggregateInput
    activated_promos?: PromoCodeOrderByRelationAggregateInput
    game_accounts?: GameAccountOrderByRelationAggregateInput
    created_races?: RaceOrderByRelationAggregateInput
    settings?: UserSettingsOrderByWithRelationInput
    transactions?: TransactionsOrderByRelationAggregateInput
    tokens?: TokensOrderByRelationAggregateInput
    verification_codes?: VerificationCodesOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    telegram_id?: bigint | number
    connect_code?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringNullableFilter<"User"> | string | null
    created_at?: DateTimeFilter<"User"> | Date | string
    vip_expires_at?: DateTimeNullableFilter<"User"> | Date | string | null
    balance?: FloatFilter<"User"> | number
    frozen_balance?: FloatFilter<"User"> | number
    connect_code_expires_at?: DateTimeNullableFilter<"User"> | Date | string | null
    withdrawals?: WithdrawalRequestListRelationFilter
    activated_promos?: PromoCodeListRelationFilter
    game_accounts?: GameAccountListRelationFilter
    created_races?: RaceListRelationFilter
    settings?: XOR<UserSettingsNullableScalarRelationFilter, UserSettingsWhereInput> | null
    transactions?: TransactionsListRelationFilter
    tokens?: TokensListRelationFilter
    verification_codes?: VerificationCodesListRelationFilter
  }, "id" | "telegram_id" | "connect_code">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    telegram_id?: SortOrder
    username?: SortOrderInput | SortOrder
    created_at?: SortOrder
    vip_expires_at?: SortOrderInput | SortOrder
    balance?: SortOrder
    frozen_balance?: SortOrder
    connect_code?: SortOrderInput | SortOrder
    connect_code_expires_at?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    telegram_id?: BigIntWithAggregatesFilter<"User"> | bigint | number
    username?: StringNullableWithAggregatesFilter<"User"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    vip_expires_at?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    balance?: FloatWithAggregatesFilter<"User"> | number
    frozen_balance?: FloatWithAggregatesFilter<"User"> | number
    connect_code?: StringNullableWithAggregatesFilter<"User"> | string | null
    connect_code_expires_at?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type VerificationCodesWhereInput = {
    AND?: VerificationCodesWhereInput | VerificationCodesWhereInput[]
    OR?: VerificationCodesWhereInput[]
    NOT?: VerificationCodesWhereInput | VerificationCodesWhereInput[]
    id?: IntFilter<"VerificationCodes"> | number
    user_id?: IntFilter<"VerificationCodes"> | number
    code?: StringFilter<"VerificationCodes"> | string
    type?: EnumVerificationCodeTypeFilter<"VerificationCodes"> | $Enums.VerificationCodeType
    expires_at?: DateTimeFilter<"VerificationCodes"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type VerificationCodesOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    code?: SortOrder
    type?: SortOrder
    expires_at?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type VerificationCodesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VerificationCodesWhereInput | VerificationCodesWhereInput[]
    OR?: VerificationCodesWhereInput[]
    NOT?: VerificationCodesWhereInput | VerificationCodesWhereInput[]
    user_id?: IntFilter<"VerificationCodes"> | number
    code?: StringFilter<"VerificationCodes"> | string
    type?: EnumVerificationCodeTypeFilter<"VerificationCodes"> | $Enums.VerificationCodeType
    expires_at?: DateTimeFilter<"VerificationCodes"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type VerificationCodesOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    code?: SortOrder
    type?: SortOrder
    expires_at?: SortOrder
    _count?: VerificationCodesCountOrderByAggregateInput
    _avg?: VerificationCodesAvgOrderByAggregateInput
    _max?: VerificationCodesMaxOrderByAggregateInput
    _min?: VerificationCodesMinOrderByAggregateInput
    _sum?: VerificationCodesSumOrderByAggregateInput
  }

  export type VerificationCodesScalarWhereWithAggregatesInput = {
    AND?: VerificationCodesScalarWhereWithAggregatesInput | VerificationCodesScalarWhereWithAggregatesInput[]
    OR?: VerificationCodesScalarWhereWithAggregatesInput[]
    NOT?: VerificationCodesScalarWhereWithAggregatesInput | VerificationCodesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"VerificationCodes"> | number
    user_id?: IntWithAggregatesFilter<"VerificationCodes"> | number
    code?: StringWithAggregatesFilter<"VerificationCodes"> | string
    type?: EnumVerificationCodeTypeWithAggregatesFilter<"VerificationCodes"> | $Enums.VerificationCodeType
    expires_at?: DateTimeWithAggregatesFilter<"VerificationCodes"> | Date | string
  }

  export type UserSettingsWhereInput = {
    AND?: UserSettingsWhereInput | UserSettingsWhereInput[]
    OR?: UserSettingsWhereInput[]
    NOT?: UserSettingsWhereInput | UserSettingsWhereInput[]
    id?: IntFilter<"UserSettings"> | number
    user_id?: IntFilter<"UserSettings"> | number
    language?: StringFilter<"UserSettings"> | string
    currency?: StringFilter<"UserSettings"> | string
    timezone?: IntFilter<"UserSettings"> | number
    notify_news?: BoolFilter<"UserSettings"> | boolean
    notify_payments?: BoolFilter<"UserSettings"> | boolean
    is_stealth?: BoolFilter<"UserSettings"> | boolean
    updated_at?: DateTimeFilter<"UserSettings"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserSettingsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    language?: SortOrder
    currency?: SortOrder
    timezone?: SortOrder
    notify_news?: SortOrder
    notify_payments?: SortOrder
    is_stealth?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserSettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    user_id?: number
    AND?: UserSettingsWhereInput | UserSettingsWhereInput[]
    OR?: UserSettingsWhereInput[]
    NOT?: UserSettingsWhereInput | UserSettingsWhereInput[]
    language?: StringFilter<"UserSettings"> | string
    currency?: StringFilter<"UserSettings"> | string
    timezone?: IntFilter<"UserSettings"> | number
    notify_news?: BoolFilter<"UserSettings"> | boolean
    notify_payments?: BoolFilter<"UserSettings"> | boolean
    is_stealth?: BoolFilter<"UserSettings"> | boolean
    updated_at?: DateTimeFilter<"UserSettings"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "user_id">

  export type UserSettingsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    language?: SortOrder
    currency?: SortOrder
    timezone?: SortOrder
    notify_news?: SortOrder
    notify_payments?: SortOrder
    is_stealth?: SortOrder
    updated_at?: SortOrder
    _count?: UserSettingsCountOrderByAggregateInput
    _avg?: UserSettingsAvgOrderByAggregateInput
    _max?: UserSettingsMaxOrderByAggregateInput
    _min?: UserSettingsMinOrderByAggregateInput
    _sum?: UserSettingsSumOrderByAggregateInput
  }

  export type UserSettingsScalarWhereWithAggregatesInput = {
    AND?: UserSettingsScalarWhereWithAggregatesInput | UserSettingsScalarWhereWithAggregatesInput[]
    OR?: UserSettingsScalarWhereWithAggregatesInput[]
    NOT?: UserSettingsScalarWhereWithAggregatesInput | UserSettingsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserSettings"> | number
    user_id?: IntWithAggregatesFilter<"UserSettings"> | number
    language?: StringWithAggregatesFilter<"UserSettings"> | string
    currency?: StringWithAggregatesFilter<"UserSettings"> | string
    timezone?: IntWithAggregatesFilter<"UserSettings"> | number
    notify_news?: BoolWithAggregatesFilter<"UserSettings"> | boolean
    notify_payments?: BoolWithAggregatesFilter<"UserSettings"> | boolean
    is_stealth?: BoolWithAggregatesFilter<"UserSettings"> | boolean
    updated_at?: DateTimeWithAggregatesFilter<"UserSettings"> | Date | string
  }

  export type PromoCodeWhereInput = {
    AND?: PromoCodeWhereInput | PromoCodeWhereInput[]
    OR?: PromoCodeWhereInput[]
    NOT?: PromoCodeWhereInput | PromoCodeWhereInput[]
    id?: IntFilter<"PromoCode"> | number
    code?: StringFilter<"PromoCode"> | string
    type?: EnumPromoTypeFilter<"PromoCode"> | $Enums.PromoType
    value?: IntFilter<"PromoCode"> | number
    is_used?: BoolFilter<"PromoCode"> | boolean
    used_at?: DateTimeNullableFilter<"PromoCode"> | Date | string | null
    user_id?: IntNullableFilter<"PromoCode"> | number | null
    created_at?: DateTimeFilter<"PromoCode"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type PromoCodeOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    type?: SortOrder
    value?: SortOrder
    is_used?: SortOrder
    used_at?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PromoCodeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    AND?: PromoCodeWhereInput | PromoCodeWhereInput[]
    OR?: PromoCodeWhereInput[]
    NOT?: PromoCodeWhereInput | PromoCodeWhereInput[]
    type?: EnumPromoTypeFilter<"PromoCode"> | $Enums.PromoType
    value?: IntFilter<"PromoCode"> | number
    is_used?: BoolFilter<"PromoCode"> | boolean
    used_at?: DateTimeNullableFilter<"PromoCode"> | Date | string | null
    user_id?: IntNullableFilter<"PromoCode"> | number | null
    created_at?: DateTimeFilter<"PromoCode"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "code">

  export type PromoCodeOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    type?: SortOrder
    value?: SortOrder
    is_used?: SortOrder
    used_at?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: PromoCodeCountOrderByAggregateInput
    _avg?: PromoCodeAvgOrderByAggregateInput
    _max?: PromoCodeMaxOrderByAggregateInput
    _min?: PromoCodeMinOrderByAggregateInput
    _sum?: PromoCodeSumOrderByAggregateInput
  }

  export type PromoCodeScalarWhereWithAggregatesInput = {
    AND?: PromoCodeScalarWhereWithAggregatesInput | PromoCodeScalarWhereWithAggregatesInput[]
    OR?: PromoCodeScalarWhereWithAggregatesInput[]
    NOT?: PromoCodeScalarWhereWithAggregatesInput | PromoCodeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PromoCode"> | number
    code?: StringWithAggregatesFilter<"PromoCode"> | string
    type?: EnumPromoTypeWithAggregatesFilter<"PromoCode"> | $Enums.PromoType
    value?: IntWithAggregatesFilter<"PromoCode"> | number
    is_used?: BoolWithAggregatesFilter<"PromoCode"> | boolean
    used_at?: DateTimeNullableWithAggregatesFilter<"PromoCode"> | Date | string | null
    user_id?: IntNullableWithAggregatesFilter<"PromoCode"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"PromoCode"> | Date | string
  }

  export type GameAccountWhereInput = {
    AND?: GameAccountWhereInput | GameAccountWhereInput[]
    OR?: GameAccountWhereInput[]
    NOT?: GameAccountWhereInput | GameAccountWhereInput[]
    id?: IntFilter<"GameAccount"> | number
    nickname?: StringFilter<"GameAccount"> | string
    server?: IntFilter<"GameAccount"> | number
    verified?: BoolFilter<"GameAccount"> | boolean
    wins?: IntFilter<"GameAccount"> | number
    user_id?: IntFilter<"GameAccount"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    races_won?: RaceListRelationFilter
    participations?: RaceParticipantListRelationFilter
    sightings_observed?: RaceWitnessListRelationFilter
    sightings_suspect?: RaceWitnessListRelationFilter
  }

  export type GameAccountOrderByWithRelationInput = {
    id?: SortOrder
    nickname?: SortOrder
    server?: SortOrder
    verified?: SortOrder
    wins?: SortOrder
    user_id?: SortOrder
    user?: UserOrderByWithRelationInput
    races_won?: RaceOrderByRelationAggregateInput
    participations?: RaceParticipantOrderByRelationAggregateInput
    sightings_observed?: RaceWitnessOrderByRelationAggregateInput
    sightings_suspect?: RaceWitnessOrderByRelationAggregateInput
  }

  export type GameAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nickname_server?: GameAccountNicknameServerCompoundUniqueInput
    AND?: GameAccountWhereInput | GameAccountWhereInput[]
    OR?: GameAccountWhereInput[]
    NOT?: GameAccountWhereInput | GameAccountWhereInput[]
    nickname?: StringFilter<"GameAccount"> | string
    server?: IntFilter<"GameAccount"> | number
    verified?: BoolFilter<"GameAccount"> | boolean
    wins?: IntFilter<"GameAccount"> | number
    user_id?: IntFilter<"GameAccount"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    races_won?: RaceListRelationFilter
    participations?: RaceParticipantListRelationFilter
    sightings_observed?: RaceWitnessListRelationFilter
    sightings_suspect?: RaceWitnessListRelationFilter
  }, "id" | "nickname_server">

  export type GameAccountOrderByWithAggregationInput = {
    id?: SortOrder
    nickname?: SortOrder
    server?: SortOrder
    verified?: SortOrder
    wins?: SortOrder
    user_id?: SortOrder
    _count?: GameAccountCountOrderByAggregateInput
    _avg?: GameAccountAvgOrderByAggregateInput
    _max?: GameAccountMaxOrderByAggregateInput
    _min?: GameAccountMinOrderByAggregateInput
    _sum?: GameAccountSumOrderByAggregateInput
  }

  export type GameAccountScalarWhereWithAggregatesInput = {
    AND?: GameAccountScalarWhereWithAggregatesInput | GameAccountScalarWhereWithAggregatesInput[]
    OR?: GameAccountScalarWhereWithAggregatesInput[]
    NOT?: GameAccountScalarWhereWithAggregatesInput | GameAccountScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GameAccount"> | number
    nickname?: StringWithAggregatesFilter<"GameAccount"> | string
    server?: IntWithAggregatesFilter<"GameAccount"> | number
    verified?: BoolWithAggregatesFilter<"GameAccount"> | boolean
    wins?: IntWithAggregatesFilter<"GameAccount"> | number
    user_id?: IntWithAggregatesFilter<"GameAccount"> | number
  }

  export type LocationWhereInput = {
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    id?: IntFilter<"Location"> | number
    name?: StringFilter<"Location"> | string
    file_id?: StringFilter<"Location"> | string
    pos_one_x?: FloatFilter<"Location"> | number
    pos_one_y?: FloatFilter<"Location"> | number
    pos_one_z?: FloatFilter<"Location"> | number
    pos_two_x?: FloatFilter<"Location"> | number
    pos_two_y?: FloatFilter<"Location"> | number
    pos_two_z?: FloatFilter<"Location"> | number
    races?: RaceListRelationFilter
  }

  export type LocationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    file_id?: SortOrder
    pos_one_x?: SortOrder
    pos_one_y?: SortOrder
    pos_one_z?: SortOrder
    pos_two_x?: SortOrder
    pos_two_y?: SortOrder
    pos_two_z?: SortOrder
    races?: RaceOrderByRelationAggregateInput
  }

  export type LocationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    name?: StringFilter<"Location"> | string
    file_id?: StringFilter<"Location"> | string
    pos_one_x?: FloatFilter<"Location"> | number
    pos_one_y?: FloatFilter<"Location"> | number
    pos_one_z?: FloatFilter<"Location"> | number
    pos_two_x?: FloatFilter<"Location"> | number
    pos_two_y?: FloatFilter<"Location"> | number
    pos_two_z?: FloatFilter<"Location"> | number
    races?: RaceListRelationFilter
  }, "id">

  export type LocationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    file_id?: SortOrder
    pos_one_x?: SortOrder
    pos_one_y?: SortOrder
    pos_one_z?: SortOrder
    pos_two_x?: SortOrder
    pos_two_y?: SortOrder
    pos_two_z?: SortOrder
    _count?: LocationCountOrderByAggregateInput
    _avg?: LocationAvgOrderByAggregateInput
    _max?: LocationMaxOrderByAggregateInput
    _min?: LocationMinOrderByAggregateInput
    _sum?: LocationSumOrderByAggregateInput
  }

  export type LocationScalarWhereWithAggregatesInput = {
    AND?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    OR?: LocationScalarWhereWithAggregatesInput[]
    NOT?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Location"> | number
    name?: StringWithAggregatesFilter<"Location"> | string
    file_id?: StringWithAggregatesFilter<"Location"> | string
    pos_one_x?: FloatWithAggregatesFilter<"Location"> | number
    pos_one_y?: FloatWithAggregatesFilter<"Location"> | number
    pos_one_z?: FloatWithAggregatesFilter<"Location"> | number
    pos_two_x?: FloatWithAggregatesFilter<"Location"> | number
    pos_two_y?: FloatWithAggregatesFilter<"Location"> | number
    pos_two_z?: FloatWithAggregatesFilter<"Location"> | number
  }

  export type RaceWhereInput = {
    AND?: RaceWhereInput | RaceWhereInput[]
    OR?: RaceWhereInput[]
    NOT?: RaceWhereInput | RaceWhereInput[]
    id?: IntFilter<"Race"> | number
    secret_code?: StringFilter<"Race"> | string
    is_vip?: BoolFilter<"Race"> | boolean
    status?: EnumRaceStatusFilter<"Race"> | $Enums.RaceStatus
    location_id?: IntFilter<"Race"> | number
    winner_id?: IntNullableFilter<"Race"> | number | null
    winner_path?: JsonNullableFilter<"Race">
    prize?: StringFilter<"Race"> | string
    start_at?: DateTimeFilter<"Race"> | Date | string
    server_start_time?: DateTimeNullableFilter<"Race"> | Date | string | null
    creator_id?: IntNullableFilter<"Race"> | number | null
    created_at?: DateTimeFilter<"Race"> | Date | string
    location?: XOR<LocationScalarRelationFilter, LocationWhereInput>
    winner?: XOR<GameAccountNullableScalarRelationFilter, GameAccountWhereInput> | null
    creator?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    participants?: RaceParticipantListRelationFilter
    witnesses?: RaceWitnessListRelationFilter
  }

  export type RaceOrderByWithRelationInput = {
    id?: SortOrder
    secret_code?: SortOrder
    is_vip?: SortOrder
    status?: SortOrder
    location_id?: SortOrder
    winner_id?: SortOrderInput | SortOrder
    winner_path?: SortOrderInput | SortOrder
    prize?: SortOrder
    start_at?: SortOrder
    server_start_time?: SortOrderInput | SortOrder
    creator_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    location?: LocationOrderByWithRelationInput
    winner?: GameAccountOrderByWithRelationInput
    creator?: UserOrderByWithRelationInput
    participants?: RaceParticipantOrderByRelationAggregateInput
    witnesses?: RaceWitnessOrderByRelationAggregateInput
  }

  export type RaceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    secret_code?: string
    AND?: RaceWhereInput | RaceWhereInput[]
    OR?: RaceWhereInput[]
    NOT?: RaceWhereInput | RaceWhereInput[]
    is_vip?: BoolFilter<"Race"> | boolean
    status?: EnumRaceStatusFilter<"Race"> | $Enums.RaceStatus
    location_id?: IntFilter<"Race"> | number
    winner_id?: IntNullableFilter<"Race"> | number | null
    winner_path?: JsonNullableFilter<"Race">
    prize?: StringFilter<"Race"> | string
    start_at?: DateTimeFilter<"Race"> | Date | string
    server_start_time?: DateTimeNullableFilter<"Race"> | Date | string | null
    creator_id?: IntNullableFilter<"Race"> | number | null
    created_at?: DateTimeFilter<"Race"> | Date | string
    location?: XOR<LocationScalarRelationFilter, LocationWhereInput>
    winner?: XOR<GameAccountNullableScalarRelationFilter, GameAccountWhereInput> | null
    creator?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    participants?: RaceParticipantListRelationFilter
    witnesses?: RaceWitnessListRelationFilter
  }, "id" | "secret_code">

  export type RaceOrderByWithAggregationInput = {
    id?: SortOrder
    secret_code?: SortOrder
    is_vip?: SortOrder
    status?: SortOrder
    location_id?: SortOrder
    winner_id?: SortOrderInput | SortOrder
    winner_path?: SortOrderInput | SortOrder
    prize?: SortOrder
    start_at?: SortOrder
    server_start_time?: SortOrderInput | SortOrder
    creator_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: RaceCountOrderByAggregateInput
    _avg?: RaceAvgOrderByAggregateInput
    _max?: RaceMaxOrderByAggregateInput
    _min?: RaceMinOrderByAggregateInput
    _sum?: RaceSumOrderByAggregateInput
  }

  export type RaceScalarWhereWithAggregatesInput = {
    AND?: RaceScalarWhereWithAggregatesInput | RaceScalarWhereWithAggregatesInput[]
    OR?: RaceScalarWhereWithAggregatesInput[]
    NOT?: RaceScalarWhereWithAggregatesInput | RaceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Race"> | number
    secret_code?: StringWithAggregatesFilter<"Race"> | string
    is_vip?: BoolWithAggregatesFilter<"Race"> | boolean
    status?: EnumRaceStatusWithAggregatesFilter<"Race"> | $Enums.RaceStatus
    location_id?: IntWithAggregatesFilter<"Race"> | number
    winner_id?: IntNullableWithAggregatesFilter<"Race"> | number | null
    winner_path?: JsonNullableWithAggregatesFilter<"Race">
    prize?: StringWithAggregatesFilter<"Race"> | string
    start_at?: DateTimeWithAggregatesFilter<"Race"> | Date | string
    server_start_time?: DateTimeNullableWithAggregatesFilter<"Race"> | Date | string | null
    creator_id?: IntNullableWithAggregatesFilter<"Race"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"Race"> | Date | string
  }

  export type RaceParticipantWhereInput = {
    AND?: RaceParticipantWhereInput | RaceParticipantWhereInput[]
    OR?: RaceParticipantWhereInput[]
    NOT?: RaceParticipantWhereInput | RaceParticipantWhereInput[]
    id?: IntFilter<"RaceParticipant"> | number
    race_id?: IntFilter<"RaceParticipant"> | number
    game_account_id?: IntFilter<"RaceParticipant"> | number
    finished?: BoolFilter<"RaceParticipant"> | boolean
    server_finish_at?: DateTimeNullableFilter<"RaceParticipant"> | Date | string | null
    client_time_ms?: IntNullableFilter<"RaceParticipant"> | number | null
    is_disqualified?: BoolFilter<"RaceParticipant"> | boolean
    suspicion_reason?: StringNullableFilter<"RaceParticipant"> | string | null
    race?: XOR<RaceScalarRelationFilter, RaceWhereInput>
    game_account?: XOR<GameAccountScalarRelationFilter, GameAccountWhereInput>
    telemetry?: RaceTelemetryListRelationFilter
  }

  export type RaceParticipantOrderByWithRelationInput = {
    id?: SortOrder
    race_id?: SortOrder
    game_account_id?: SortOrder
    finished?: SortOrder
    server_finish_at?: SortOrderInput | SortOrder
    client_time_ms?: SortOrderInput | SortOrder
    is_disqualified?: SortOrder
    suspicion_reason?: SortOrderInput | SortOrder
    race?: RaceOrderByWithRelationInput
    game_account?: GameAccountOrderByWithRelationInput
    telemetry?: RaceTelemetryOrderByRelationAggregateInput
  }

  export type RaceParticipantWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    race_id_game_account_id?: RaceParticipantRace_idGame_account_idCompoundUniqueInput
    AND?: RaceParticipantWhereInput | RaceParticipantWhereInput[]
    OR?: RaceParticipantWhereInput[]
    NOT?: RaceParticipantWhereInput | RaceParticipantWhereInput[]
    race_id?: IntFilter<"RaceParticipant"> | number
    game_account_id?: IntFilter<"RaceParticipant"> | number
    finished?: BoolFilter<"RaceParticipant"> | boolean
    server_finish_at?: DateTimeNullableFilter<"RaceParticipant"> | Date | string | null
    client_time_ms?: IntNullableFilter<"RaceParticipant"> | number | null
    is_disqualified?: BoolFilter<"RaceParticipant"> | boolean
    suspicion_reason?: StringNullableFilter<"RaceParticipant"> | string | null
    race?: XOR<RaceScalarRelationFilter, RaceWhereInput>
    game_account?: XOR<GameAccountScalarRelationFilter, GameAccountWhereInput>
    telemetry?: RaceTelemetryListRelationFilter
  }, "id" | "race_id_game_account_id">

  export type RaceParticipantOrderByWithAggregationInput = {
    id?: SortOrder
    race_id?: SortOrder
    game_account_id?: SortOrder
    finished?: SortOrder
    server_finish_at?: SortOrderInput | SortOrder
    client_time_ms?: SortOrderInput | SortOrder
    is_disqualified?: SortOrder
    suspicion_reason?: SortOrderInput | SortOrder
    _count?: RaceParticipantCountOrderByAggregateInput
    _avg?: RaceParticipantAvgOrderByAggregateInput
    _max?: RaceParticipantMaxOrderByAggregateInput
    _min?: RaceParticipantMinOrderByAggregateInput
    _sum?: RaceParticipantSumOrderByAggregateInput
  }

  export type RaceParticipantScalarWhereWithAggregatesInput = {
    AND?: RaceParticipantScalarWhereWithAggregatesInput | RaceParticipantScalarWhereWithAggregatesInput[]
    OR?: RaceParticipantScalarWhereWithAggregatesInput[]
    NOT?: RaceParticipantScalarWhereWithAggregatesInput | RaceParticipantScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RaceParticipant"> | number
    race_id?: IntWithAggregatesFilter<"RaceParticipant"> | number
    game_account_id?: IntWithAggregatesFilter<"RaceParticipant"> | number
    finished?: BoolWithAggregatesFilter<"RaceParticipant"> | boolean
    server_finish_at?: DateTimeNullableWithAggregatesFilter<"RaceParticipant"> | Date | string | null
    client_time_ms?: IntNullableWithAggregatesFilter<"RaceParticipant"> | number | null
    is_disqualified?: BoolWithAggregatesFilter<"RaceParticipant"> | boolean
    suspicion_reason?: StringNullableWithAggregatesFilter<"RaceParticipant"> | string | null
  }

  export type RaceWitnessWhereInput = {
    AND?: RaceWitnessWhereInput | RaceWitnessWhereInput[]
    OR?: RaceWitnessWhereInput[]
    NOT?: RaceWitnessWhereInput | RaceWitnessWhereInput[]
    id?: IntFilter<"RaceWitness"> | number
    race_id?: IntFilter<"RaceWitness"> | number
    observer_id?: IntFilter<"RaceWitness"> | number
    suspect_nickname?: StringFilter<"RaceWitness"> | string
    suspect_server?: IntFilter<"RaceWitness"> | number
    server_time?: DateTimeFilter<"RaceWitness"> | Date | string
    race?: XOR<RaceScalarRelationFilter, RaceWhereInput>
    observer?: XOR<GameAccountScalarRelationFilter, GameAccountWhereInput>
    suspect?: XOR<GameAccountScalarRelationFilter, GameAccountWhereInput>
  }

  export type RaceWitnessOrderByWithRelationInput = {
    id?: SortOrder
    race_id?: SortOrder
    observer_id?: SortOrder
    suspect_nickname?: SortOrder
    suspect_server?: SortOrder
    server_time?: SortOrder
    race?: RaceOrderByWithRelationInput
    observer?: GameAccountOrderByWithRelationInput
    suspect?: GameAccountOrderByWithRelationInput
  }

  export type RaceWitnessWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RaceWitnessWhereInput | RaceWitnessWhereInput[]
    OR?: RaceWitnessWhereInput[]
    NOT?: RaceWitnessWhereInput | RaceWitnessWhereInput[]
    race_id?: IntFilter<"RaceWitness"> | number
    observer_id?: IntFilter<"RaceWitness"> | number
    suspect_nickname?: StringFilter<"RaceWitness"> | string
    suspect_server?: IntFilter<"RaceWitness"> | number
    server_time?: DateTimeFilter<"RaceWitness"> | Date | string
    race?: XOR<RaceScalarRelationFilter, RaceWhereInput>
    observer?: XOR<GameAccountScalarRelationFilter, GameAccountWhereInput>
    suspect?: XOR<GameAccountScalarRelationFilter, GameAccountWhereInput>
  }, "id">

  export type RaceWitnessOrderByWithAggregationInput = {
    id?: SortOrder
    race_id?: SortOrder
    observer_id?: SortOrder
    suspect_nickname?: SortOrder
    suspect_server?: SortOrder
    server_time?: SortOrder
    _count?: RaceWitnessCountOrderByAggregateInput
    _avg?: RaceWitnessAvgOrderByAggregateInput
    _max?: RaceWitnessMaxOrderByAggregateInput
    _min?: RaceWitnessMinOrderByAggregateInput
    _sum?: RaceWitnessSumOrderByAggregateInput
  }

  export type RaceWitnessScalarWhereWithAggregatesInput = {
    AND?: RaceWitnessScalarWhereWithAggregatesInput | RaceWitnessScalarWhereWithAggregatesInput[]
    OR?: RaceWitnessScalarWhereWithAggregatesInput[]
    NOT?: RaceWitnessScalarWhereWithAggregatesInput | RaceWitnessScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RaceWitness"> | number
    race_id?: IntWithAggregatesFilter<"RaceWitness"> | number
    observer_id?: IntWithAggregatesFilter<"RaceWitness"> | number
    suspect_nickname?: StringWithAggregatesFilter<"RaceWitness"> | string
    suspect_server?: IntWithAggregatesFilter<"RaceWitness"> | number
    server_time?: DateTimeWithAggregatesFilter<"RaceWitness"> | Date | string
  }

  export type RaceTelemetryWhereInput = {
    AND?: RaceTelemetryWhereInput | RaceTelemetryWhereInput[]
    OR?: RaceTelemetryWhereInput[]
    NOT?: RaceTelemetryWhereInput | RaceTelemetryWhereInput[]
    id?: IntFilter<"RaceTelemetry"> | number
    participant_id?: IntFilter<"RaceTelemetry"> | number
    x?: FloatFilter<"RaceTelemetry"> | number
    y?: FloatFilter<"RaceTelemetry"> | number
    z?: FloatFilter<"RaceTelemetry"> | number
    speed?: FloatFilter<"RaceTelemetry"> | number
    client_timestamp?: BigIntFilter<"RaceTelemetry"> | bigint | number
    created_at?: DateTimeFilter<"RaceTelemetry"> | Date | string
    participant?: XOR<RaceParticipantScalarRelationFilter, RaceParticipantWhereInput>
  }

  export type RaceTelemetryOrderByWithRelationInput = {
    id?: SortOrder
    participant_id?: SortOrder
    x?: SortOrder
    y?: SortOrder
    z?: SortOrder
    speed?: SortOrder
    client_timestamp?: SortOrder
    created_at?: SortOrder
    participant?: RaceParticipantOrderByWithRelationInput
  }

  export type RaceTelemetryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RaceTelemetryWhereInput | RaceTelemetryWhereInput[]
    OR?: RaceTelemetryWhereInput[]
    NOT?: RaceTelemetryWhereInput | RaceTelemetryWhereInput[]
    participant_id?: IntFilter<"RaceTelemetry"> | number
    x?: FloatFilter<"RaceTelemetry"> | number
    y?: FloatFilter<"RaceTelemetry"> | number
    z?: FloatFilter<"RaceTelemetry"> | number
    speed?: FloatFilter<"RaceTelemetry"> | number
    client_timestamp?: BigIntFilter<"RaceTelemetry"> | bigint | number
    created_at?: DateTimeFilter<"RaceTelemetry"> | Date | string
    participant?: XOR<RaceParticipantScalarRelationFilter, RaceParticipantWhereInput>
  }, "id">

  export type RaceTelemetryOrderByWithAggregationInput = {
    id?: SortOrder
    participant_id?: SortOrder
    x?: SortOrder
    y?: SortOrder
    z?: SortOrder
    speed?: SortOrder
    client_timestamp?: SortOrder
    created_at?: SortOrder
    _count?: RaceTelemetryCountOrderByAggregateInput
    _avg?: RaceTelemetryAvgOrderByAggregateInput
    _max?: RaceTelemetryMaxOrderByAggregateInput
    _min?: RaceTelemetryMinOrderByAggregateInput
    _sum?: RaceTelemetrySumOrderByAggregateInput
  }

  export type RaceTelemetryScalarWhereWithAggregatesInput = {
    AND?: RaceTelemetryScalarWhereWithAggregatesInput | RaceTelemetryScalarWhereWithAggregatesInput[]
    OR?: RaceTelemetryScalarWhereWithAggregatesInput[]
    NOT?: RaceTelemetryScalarWhereWithAggregatesInput | RaceTelemetryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RaceTelemetry"> | number
    participant_id?: IntWithAggregatesFilter<"RaceTelemetry"> | number
    x?: FloatWithAggregatesFilter<"RaceTelemetry"> | number
    y?: FloatWithAggregatesFilter<"RaceTelemetry"> | number
    z?: FloatWithAggregatesFilter<"RaceTelemetry"> | number
    speed?: FloatWithAggregatesFilter<"RaceTelemetry"> | number
    client_timestamp?: BigIntWithAggregatesFilter<"RaceTelemetry"> | bigint | number
    created_at?: DateTimeWithAggregatesFilter<"RaceTelemetry"> | Date | string
  }

  export type TransactionsWhereInput = {
    AND?: TransactionsWhereInput | TransactionsWhereInput[]
    OR?: TransactionsWhereInput[]
    NOT?: TransactionsWhereInput | TransactionsWhereInput[]
    id?: IntFilter<"Transactions"> | number
    hash?: StringNullableFilter<"Transactions"> | string | null
    user_id?: IntFilter<"Transactions"> | number
    amount?: BigIntFilter<"Transactions"> | bigint | number
    comment?: StringFilter<"Transactions"> | string
    status?: EnumPaymentStatusFilter<"Transactions"> | $Enums.PaymentStatus
    created_at?: DateTimeFilter<"Transactions"> | Date | string
    updated_at?: DateTimeFilter<"Transactions"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TransactionsOrderByWithRelationInput = {
    id?: SortOrder
    hash?: SortOrderInput | SortOrder
    user_id?: SortOrder
    amount?: SortOrder
    comment?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TransactionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    hash?: string
    comment?: string
    AND?: TransactionsWhereInput | TransactionsWhereInput[]
    OR?: TransactionsWhereInput[]
    NOT?: TransactionsWhereInput | TransactionsWhereInput[]
    user_id?: IntFilter<"Transactions"> | number
    amount?: BigIntFilter<"Transactions"> | bigint | number
    status?: EnumPaymentStatusFilter<"Transactions"> | $Enums.PaymentStatus
    created_at?: DateTimeFilter<"Transactions"> | Date | string
    updated_at?: DateTimeFilter<"Transactions"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "hash" | "comment">

  export type TransactionsOrderByWithAggregationInput = {
    id?: SortOrder
    hash?: SortOrderInput | SortOrder
    user_id?: SortOrder
    amount?: SortOrder
    comment?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: TransactionsCountOrderByAggregateInput
    _avg?: TransactionsAvgOrderByAggregateInput
    _max?: TransactionsMaxOrderByAggregateInput
    _min?: TransactionsMinOrderByAggregateInput
    _sum?: TransactionsSumOrderByAggregateInput
  }

  export type TransactionsScalarWhereWithAggregatesInput = {
    AND?: TransactionsScalarWhereWithAggregatesInput | TransactionsScalarWhereWithAggregatesInput[]
    OR?: TransactionsScalarWhereWithAggregatesInput[]
    NOT?: TransactionsScalarWhereWithAggregatesInput | TransactionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Transactions"> | number
    hash?: StringNullableWithAggregatesFilter<"Transactions"> | string | null
    user_id?: IntWithAggregatesFilter<"Transactions"> | number
    amount?: BigIntWithAggregatesFilter<"Transactions"> | bigint | number
    comment?: StringWithAggregatesFilter<"Transactions"> | string
    status?: EnumPaymentStatusWithAggregatesFilter<"Transactions"> | $Enums.PaymentStatus
    created_at?: DateTimeWithAggregatesFilter<"Transactions"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Transactions"> | Date | string
  }

  export type WithdrawalRequestWhereInput = {
    AND?: WithdrawalRequestWhereInput | WithdrawalRequestWhereInput[]
    OR?: WithdrawalRequestWhereInput[]
    NOT?: WithdrawalRequestWhereInput | WithdrawalRequestWhereInput[]
    id?: IntFilter<"WithdrawalRequest"> | number
    user_id?: IntFilter<"WithdrawalRequest"> | number
    amount?: FloatFilter<"WithdrawalRequest"> | number
    currency?: StringFilter<"WithdrawalRequest"> | string
    wallet_address?: StringFilter<"WithdrawalRequest"> | string
    status?: EnumWithdrawalStatusFilter<"WithdrawalRequest"> | $Enums.WithdrawalStatus
    rejection_reason?: StringNullableFilter<"WithdrawalRequest"> | string | null
    admin_comment?: StringNullableFilter<"WithdrawalRequest"> | string | null
    tx_hash?: StringNullableFilter<"WithdrawalRequest"> | string | null
    processed_at?: DateTimeNullableFilter<"WithdrawalRequest"> | Date | string | null
    created_at?: DateTimeFilter<"WithdrawalRequest"> | Date | string
    updated_at?: DateTimeFilter<"WithdrawalRequest"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type WithdrawalRequestOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    wallet_address?: SortOrder
    status?: SortOrder
    rejection_reason?: SortOrderInput | SortOrder
    admin_comment?: SortOrderInput | SortOrder
    tx_hash?: SortOrderInput | SortOrder
    processed_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type WithdrawalRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WithdrawalRequestWhereInput | WithdrawalRequestWhereInput[]
    OR?: WithdrawalRequestWhereInput[]
    NOT?: WithdrawalRequestWhereInput | WithdrawalRequestWhereInput[]
    user_id?: IntFilter<"WithdrawalRequest"> | number
    amount?: FloatFilter<"WithdrawalRequest"> | number
    currency?: StringFilter<"WithdrawalRequest"> | string
    wallet_address?: StringFilter<"WithdrawalRequest"> | string
    status?: EnumWithdrawalStatusFilter<"WithdrawalRequest"> | $Enums.WithdrawalStatus
    rejection_reason?: StringNullableFilter<"WithdrawalRequest"> | string | null
    admin_comment?: StringNullableFilter<"WithdrawalRequest"> | string | null
    tx_hash?: StringNullableFilter<"WithdrawalRequest"> | string | null
    processed_at?: DateTimeNullableFilter<"WithdrawalRequest"> | Date | string | null
    created_at?: DateTimeFilter<"WithdrawalRequest"> | Date | string
    updated_at?: DateTimeFilter<"WithdrawalRequest"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type WithdrawalRequestOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    wallet_address?: SortOrder
    status?: SortOrder
    rejection_reason?: SortOrderInput | SortOrder
    admin_comment?: SortOrderInput | SortOrder
    tx_hash?: SortOrderInput | SortOrder
    processed_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: WithdrawalRequestCountOrderByAggregateInput
    _avg?: WithdrawalRequestAvgOrderByAggregateInput
    _max?: WithdrawalRequestMaxOrderByAggregateInput
    _min?: WithdrawalRequestMinOrderByAggregateInput
    _sum?: WithdrawalRequestSumOrderByAggregateInput
  }

  export type WithdrawalRequestScalarWhereWithAggregatesInput = {
    AND?: WithdrawalRequestScalarWhereWithAggregatesInput | WithdrawalRequestScalarWhereWithAggregatesInput[]
    OR?: WithdrawalRequestScalarWhereWithAggregatesInput[]
    NOT?: WithdrawalRequestScalarWhereWithAggregatesInput | WithdrawalRequestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WithdrawalRequest"> | number
    user_id?: IntWithAggregatesFilter<"WithdrawalRequest"> | number
    amount?: FloatWithAggregatesFilter<"WithdrawalRequest"> | number
    currency?: StringWithAggregatesFilter<"WithdrawalRequest"> | string
    wallet_address?: StringWithAggregatesFilter<"WithdrawalRequest"> | string
    status?: EnumWithdrawalStatusWithAggregatesFilter<"WithdrawalRequest"> | $Enums.WithdrawalStatus
    rejection_reason?: StringNullableWithAggregatesFilter<"WithdrawalRequest"> | string | null
    admin_comment?: StringNullableWithAggregatesFilter<"WithdrawalRequest"> | string | null
    tx_hash?: StringNullableWithAggregatesFilter<"WithdrawalRequest"> | string | null
    processed_at?: DateTimeNullableWithAggregatesFilter<"WithdrawalRequest"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"WithdrawalRequest"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"WithdrawalRequest"> | Date | string
  }

  export type TokensWhereInput = {
    AND?: TokensWhereInput | TokensWhereInput[]
    OR?: TokensWhereInput[]
    NOT?: TokensWhereInput | TokensWhereInput[]
    id?: IntFilter<"Tokens"> | number
    user_id?: IntFilter<"Tokens"> | number
    refresh_token?: StringFilter<"Tokens"> | string
    created_at?: DateTimeFilter<"Tokens"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TokensOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    refresh_token?: SortOrder
    created_at?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TokensWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    user_id?: number
    refresh_token?: string
    AND?: TokensWhereInput | TokensWhereInput[]
    OR?: TokensWhereInput[]
    NOT?: TokensWhereInput | TokensWhereInput[]
    created_at?: DateTimeFilter<"Tokens"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "user_id" | "refresh_token">

  export type TokensOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    refresh_token?: SortOrder
    created_at?: SortOrder
    _count?: TokensCountOrderByAggregateInput
    _avg?: TokensAvgOrderByAggregateInput
    _max?: TokensMaxOrderByAggregateInput
    _min?: TokensMinOrderByAggregateInput
    _sum?: TokensSumOrderByAggregateInput
  }

  export type TokensScalarWhereWithAggregatesInput = {
    AND?: TokensScalarWhereWithAggregatesInput | TokensScalarWhereWithAggregatesInput[]
    OR?: TokensScalarWhereWithAggregatesInput[]
    NOT?: TokensScalarWhereWithAggregatesInput | TokensScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tokens"> | number
    user_id?: IntWithAggregatesFilter<"Tokens"> | number
    refresh_token?: StringWithAggregatesFilter<"Tokens"> | string
    created_at?: DateTimeWithAggregatesFilter<"Tokens"> | Date | string
  }

  export type UserCreateInput = {
    telegram_id: bigint | number
    username?: string | null
    created_at?: Date | string
    vip_expires_at?: Date | string | null
    balance?: number
    frozen_balance?: number
    connect_code?: string | null
    connect_code_expires_at?: Date | string | null
    withdrawals?: WithdrawalRequestCreateNestedManyWithoutUserInput
    activated_promos?: PromoCodeCreateNestedManyWithoutUserInput
    game_accounts?: GameAccountCreateNestedManyWithoutUserInput
    created_races?: RaceCreateNestedManyWithoutCreatorInput
    settings?: UserSettingsCreateNestedOneWithoutUserInput
    transactions?: TransactionsCreateNestedManyWithoutUserInput
    tokens?: TokensCreateNestedManyWithoutUserInput
    verification_codes?: VerificationCodesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    telegram_id: bigint | number
    username?: string | null
    created_at?: Date | string
    vip_expires_at?: Date | string | null
    balance?: number
    frozen_balance?: number
    connect_code?: string | null
    connect_code_expires_at?: Date | string | null
    withdrawals?: WithdrawalRequestUncheckedCreateNestedManyWithoutUserInput
    activated_promos?: PromoCodeUncheckedCreateNestedManyWithoutUserInput
    game_accounts?: GameAccountUncheckedCreateNestedManyWithoutUserInput
    created_races?: RaceUncheckedCreateNestedManyWithoutCreatorInput
    settings?: UserSettingsUncheckedCreateNestedOneWithoutUserInput
    transactions?: TransactionsUncheckedCreateNestedManyWithoutUserInput
    tokens?: TokensUncheckedCreateNestedManyWithoutUserInput
    verification_codes?: VerificationCodesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    telegram_id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    vip_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    frozen_balance?: FloatFieldUpdateOperationsInput | number
    connect_code?: NullableStringFieldUpdateOperationsInput | string | null
    connect_code_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    withdrawals?: WithdrawalRequestUpdateManyWithoutUserNestedInput
    activated_promos?: PromoCodeUpdateManyWithoutUserNestedInput
    game_accounts?: GameAccountUpdateManyWithoutUserNestedInput
    created_races?: RaceUpdateManyWithoutCreatorNestedInput
    settings?: UserSettingsUpdateOneWithoutUserNestedInput
    transactions?: TransactionsUpdateManyWithoutUserNestedInput
    tokens?: TokensUpdateManyWithoutUserNestedInput
    verification_codes?: VerificationCodesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    telegram_id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    vip_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    frozen_balance?: FloatFieldUpdateOperationsInput | number
    connect_code?: NullableStringFieldUpdateOperationsInput | string | null
    connect_code_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    withdrawals?: WithdrawalRequestUncheckedUpdateManyWithoutUserNestedInput
    activated_promos?: PromoCodeUncheckedUpdateManyWithoutUserNestedInput
    game_accounts?: GameAccountUncheckedUpdateManyWithoutUserNestedInput
    created_races?: RaceUncheckedUpdateManyWithoutCreatorNestedInput
    settings?: UserSettingsUncheckedUpdateOneWithoutUserNestedInput
    transactions?: TransactionsUncheckedUpdateManyWithoutUserNestedInput
    tokens?: TokensUncheckedUpdateManyWithoutUserNestedInput
    verification_codes?: VerificationCodesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    telegram_id: bigint | number
    username?: string | null
    created_at?: Date | string
    vip_expires_at?: Date | string | null
    balance?: number
    frozen_balance?: number
    connect_code?: string | null
    connect_code_expires_at?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    telegram_id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    vip_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    frozen_balance?: FloatFieldUpdateOperationsInput | number
    connect_code?: NullableStringFieldUpdateOperationsInput | string | null
    connect_code_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    telegram_id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    vip_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    frozen_balance?: FloatFieldUpdateOperationsInput | number
    connect_code?: NullableStringFieldUpdateOperationsInput | string | null
    connect_code_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VerificationCodesCreateInput = {
    code: string
    type: $Enums.VerificationCodeType
    expires_at: Date | string
    user: UserCreateNestedOneWithoutVerification_codesInput
  }

  export type VerificationCodesUncheckedCreateInput = {
    id?: number
    user_id: number
    code: string
    type: $Enums.VerificationCodeType
    expires_at: Date | string
  }

  export type VerificationCodesUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumVerificationCodeTypeFieldUpdateOperationsInput | $Enums.VerificationCodeType
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVerification_codesNestedInput
  }

  export type VerificationCodesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumVerificationCodeTypeFieldUpdateOperationsInput | $Enums.VerificationCodeType
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCodesCreateManyInput = {
    id?: number
    user_id: number
    code: string
    type: $Enums.VerificationCodeType
    expires_at: Date | string
  }

  export type VerificationCodesUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumVerificationCodeTypeFieldUpdateOperationsInput | $Enums.VerificationCodeType
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCodesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumVerificationCodeTypeFieldUpdateOperationsInput | $Enums.VerificationCodeType
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSettingsCreateInput = {
    language?: string
    currency?: string
    timezone?: number
    notify_news?: boolean
    notify_payments?: boolean
    is_stealth?: boolean
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutSettingsInput
  }

  export type UserSettingsUncheckedCreateInput = {
    id?: number
    user_id: number
    language?: string
    currency?: string
    timezone?: number
    notify_news?: boolean
    notify_payments?: boolean
    is_stealth?: boolean
    updated_at?: Date | string
  }

  export type UserSettingsUpdateInput = {
    language?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    timezone?: IntFieldUpdateOperationsInput | number
    notify_news?: BoolFieldUpdateOperationsInput | boolean
    notify_payments?: BoolFieldUpdateOperationsInput | boolean
    is_stealth?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSettingsNestedInput
  }

  export type UserSettingsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    language?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    timezone?: IntFieldUpdateOperationsInput | number
    notify_news?: BoolFieldUpdateOperationsInput | boolean
    notify_payments?: BoolFieldUpdateOperationsInput | boolean
    is_stealth?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSettingsCreateManyInput = {
    id?: number
    user_id: number
    language?: string
    currency?: string
    timezone?: number
    notify_news?: boolean
    notify_payments?: boolean
    is_stealth?: boolean
    updated_at?: Date | string
  }

  export type UserSettingsUpdateManyMutationInput = {
    language?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    timezone?: IntFieldUpdateOperationsInput | number
    notify_news?: BoolFieldUpdateOperationsInput | boolean
    notify_payments?: BoolFieldUpdateOperationsInput | boolean
    is_stealth?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSettingsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    language?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    timezone?: IntFieldUpdateOperationsInput | number
    notify_news?: BoolFieldUpdateOperationsInput | boolean
    notify_payments?: BoolFieldUpdateOperationsInput | boolean
    is_stealth?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromoCodeCreateInput = {
    code: string
    type: $Enums.PromoType
    value: number
    is_used?: boolean
    used_at?: Date | string | null
    created_at?: Date | string
    user?: UserCreateNestedOneWithoutActivated_promosInput
  }

  export type PromoCodeUncheckedCreateInput = {
    id?: number
    code: string
    type: $Enums.PromoType
    value: number
    is_used?: boolean
    used_at?: Date | string | null
    user_id?: number | null
    created_at?: Date | string
  }

  export type PromoCodeUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumPromoTypeFieldUpdateOperationsInput | $Enums.PromoType
    value?: IntFieldUpdateOperationsInput | number
    is_used?: BoolFieldUpdateOperationsInput | boolean
    used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutActivated_promosNestedInput
  }

  export type PromoCodeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumPromoTypeFieldUpdateOperationsInput | $Enums.PromoType
    value?: IntFieldUpdateOperationsInput | number
    is_used?: BoolFieldUpdateOperationsInput | boolean
    used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromoCodeCreateManyInput = {
    id?: number
    code: string
    type: $Enums.PromoType
    value: number
    is_used?: boolean
    used_at?: Date | string | null
    user_id?: number | null
    created_at?: Date | string
  }

  export type PromoCodeUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumPromoTypeFieldUpdateOperationsInput | $Enums.PromoType
    value?: IntFieldUpdateOperationsInput | number
    is_used?: BoolFieldUpdateOperationsInput | boolean
    used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromoCodeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumPromoTypeFieldUpdateOperationsInput | $Enums.PromoType
    value?: IntFieldUpdateOperationsInput | number
    is_used?: BoolFieldUpdateOperationsInput | boolean
    used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameAccountCreateInput = {
    nickname: string
    server: number
    verified?: boolean
    wins?: number
    user: UserCreateNestedOneWithoutGame_accountsInput
    races_won?: RaceCreateNestedManyWithoutWinnerInput
    participations?: RaceParticipantCreateNestedManyWithoutGame_accountInput
    sightings_observed?: RaceWitnessCreateNestedManyWithoutObserverInput
    sightings_suspect?: RaceWitnessCreateNestedManyWithoutSuspectInput
  }

  export type GameAccountUncheckedCreateInput = {
    id?: number
    nickname: string
    server: number
    verified?: boolean
    wins?: number
    user_id: number
    races_won?: RaceUncheckedCreateNestedManyWithoutWinnerInput
    participations?: RaceParticipantUncheckedCreateNestedManyWithoutGame_accountInput
    sightings_observed?: RaceWitnessUncheckedCreateNestedManyWithoutObserverInput
    sightings_suspect?: RaceWitnessUncheckedCreateNestedManyWithoutSuspectInput
  }

  export type GameAccountUpdateInput = {
    nickname?: StringFieldUpdateOperationsInput | string
    server?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    wins?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutGame_accountsNestedInput
    races_won?: RaceUpdateManyWithoutWinnerNestedInput
    participations?: RaceParticipantUpdateManyWithoutGame_accountNestedInput
    sightings_observed?: RaceWitnessUpdateManyWithoutObserverNestedInput
    sightings_suspect?: RaceWitnessUpdateManyWithoutSuspectNestedInput
  }

  export type GameAccountUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nickname?: StringFieldUpdateOperationsInput | string
    server?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    wins?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    races_won?: RaceUncheckedUpdateManyWithoutWinnerNestedInput
    participations?: RaceParticipantUncheckedUpdateManyWithoutGame_accountNestedInput
    sightings_observed?: RaceWitnessUncheckedUpdateManyWithoutObserverNestedInput
    sightings_suspect?: RaceWitnessUncheckedUpdateManyWithoutSuspectNestedInput
  }

  export type GameAccountCreateManyInput = {
    id?: number
    nickname: string
    server: number
    verified?: boolean
    wins?: number
    user_id: number
  }

  export type GameAccountUpdateManyMutationInput = {
    nickname?: StringFieldUpdateOperationsInput | string
    server?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    wins?: IntFieldUpdateOperationsInput | number
  }

  export type GameAccountUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nickname?: StringFieldUpdateOperationsInput | string
    server?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    wins?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type LocationCreateInput = {
    name: string
    file_id: string
    pos_one_x: number
    pos_one_y: number
    pos_one_z: number
    pos_two_x: number
    pos_two_y: number
    pos_two_z: number
    races?: RaceCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateInput = {
    id?: number
    name: string
    file_id: string
    pos_one_x: number
    pos_one_y: number
    pos_one_z: number
    pos_two_x: number
    pos_two_y: number
    pos_two_z: number
    races?: RaceUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    file_id?: StringFieldUpdateOperationsInput | string
    pos_one_x?: FloatFieldUpdateOperationsInput | number
    pos_one_y?: FloatFieldUpdateOperationsInput | number
    pos_one_z?: FloatFieldUpdateOperationsInput | number
    pos_two_x?: FloatFieldUpdateOperationsInput | number
    pos_two_y?: FloatFieldUpdateOperationsInput | number
    pos_two_z?: FloatFieldUpdateOperationsInput | number
    races?: RaceUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    file_id?: StringFieldUpdateOperationsInput | string
    pos_one_x?: FloatFieldUpdateOperationsInput | number
    pos_one_y?: FloatFieldUpdateOperationsInput | number
    pos_one_z?: FloatFieldUpdateOperationsInput | number
    pos_two_x?: FloatFieldUpdateOperationsInput | number
    pos_two_y?: FloatFieldUpdateOperationsInput | number
    pos_two_z?: FloatFieldUpdateOperationsInput | number
    races?: RaceUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type LocationCreateManyInput = {
    id?: number
    name: string
    file_id: string
    pos_one_x: number
    pos_one_y: number
    pos_one_z: number
    pos_two_x: number
    pos_two_y: number
    pos_two_z: number
  }

  export type LocationUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    file_id?: StringFieldUpdateOperationsInput | string
    pos_one_x?: FloatFieldUpdateOperationsInput | number
    pos_one_y?: FloatFieldUpdateOperationsInput | number
    pos_one_z?: FloatFieldUpdateOperationsInput | number
    pos_two_x?: FloatFieldUpdateOperationsInput | number
    pos_two_y?: FloatFieldUpdateOperationsInput | number
    pos_two_z?: FloatFieldUpdateOperationsInput | number
  }

  export type LocationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    file_id?: StringFieldUpdateOperationsInput | string
    pos_one_x?: FloatFieldUpdateOperationsInput | number
    pos_one_y?: FloatFieldUpdateOperationsInput | number
    pos_one_z?: FloatFieldUpdateOperationsInput | number
    pos_two_x?: FloatFieldUpdateOperationsInput | number
    pos_two_y?: FloatFieldUpdateOperationsInput | number
    pos_two_z?: FloatFieldUpdateOperationsInput | number
  }

  export type RaceCreateInput = {
    secret_code: string
    is_vip?: boolean
    status?: $Enums.RaceStatus
    winner_path?: NullableJsonNullValueInput | InputJsonValue
    prize: string
    start_at: Date | string
    server_start_time?: Date | string | null
    created_at?: Date | string
    location: LocationCreateNestedOneWithoutRacesInput
    winner?: GameAccountCreateNestedOneWithoutRaces_wonInput
    creator?: UserCreateNestedOneWithoutCreated_racesInput
    participants?: RaceParticipantCreateNestedManyWithoutRaceInput
    witnesses?: RaceWitnessCreateNestedManyWithoutRaceInput
  }

  export type RaceUncheckedCreateInput = {
    id?: number
    secret_code: string
    is_vip?: boolean
    status?: $Enums.RaceStatus
    location_id: number
    winner_id?: number | null
    winner_path?: NullableJsonNullValueInput | InputJsonValue
    prize: string
    start_at: Date | string
    server_start_time?: Date | string | null
    creator_id?: number | null
    created_at?: Date | string
    participants?: RaceParticipantUncheckedCreateNestedManyWithoutRaceInput
    witnesses?: RaceWitnessUncheckedCreateNestedManyWithoutRaceInput
  }

  export type RaceUpdateInput = {
    secret_code?: StringFieldUpdateOperationsInput | string
    is_vip?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumRaceStatusFieldUpdateOperationsInput | $Enums.RaceStatus
    winner_path?: NullableJsonNullValueInput | InputJsonValue
    prize?: StringFieldUpdateOperationsInput | string
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    server_start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: LocationUpdateOneRequiredWithoutRacesNestedInput
    winner?: GameAccountUpdateOneWithoutRaces_wonNestedInput
    creator?: UserUpdateOneWithoutCreated_racesNestedInput
    participants?: RaceParticipantUpdateManyWithoutRaceNestedInput
    witnesses?: RaceWitnessUpdateManyWithoutRaceNestedInput
  }

  export type RaceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    secret_code?: StringFieldUpdateOperationsInput | string
    is_vip?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumRaceStatusFieldUpdateOperationsInput | $Enums.RaceStatus
    location_id?: IntFieldUpdateOperationsInput | number
    winner_id?: NullableIntFieldUpdateOperationsInput | number | null
    winner_path?: NullableJsonNullValueInput | InputJsonValue
    prize?: StringFieldUpdateOperationsInput | string
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    server_start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creator_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: RaceParticipantUncheckedUpdateManyWithoutRaceNestedInput
    witnesses?: RaceWitnessUncheckedUpdateManyWithoutRaceNestedInput
  }

  export type RaceCreateManyInput = {
    id?: number
    secret_code: string
    is_vip?: boolean
    status?: $Enums.RaceStatus
    location_id: number
    winner_id?: number | null
    winner_path?: NullableJsonNullValueInput | InputJsonValue
    prize: string
    start_at: Date | string
    server_start_time?: Date | string | null
    creator_id?: number | null
    created_at?: Date | string
  }

  export type RaceUpdateManyMutationInput = {
    secret_code?: StringFieldUpdateOperationsInput | string
    is_vip?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumRaceStatusFieldUpdateOperationsInput | $Enums.RaceStatus
    winner_path?: NullableJsonNullValueInput | InputJsonValue
    prize?: StringFieldUpdateOperationsInput | string
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    server_start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RaceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    secret_code?: StringFieldUpdateOperationsInput | string
    is_vip?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumRaceStatusFieldUpdateOperationsInput | $Enums.RaceStatus
    location_id?: IntFieldUpdateOperationsInput | number
    winner_id?: NullableIntFieldUpdateOperationsInput | number | null
    winner_path?: NullableJsonNullValueInput | InputJsonValue
    prize?: StringFieldUpdateOperationsInput | string
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    server_start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creator_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RaceParticipantCreateInput = {
    finished?: boolean
    server_finish_at?: Date | string | null
    client_time_ms?: number | null
    is_disqualified?: boolean
    suspicion_reason?: string | null
    race: RaceCreateNestedOneWithoutParticipantsInput
    game_account: GameAccountCreateNestedOneWithoutParticipationsInput
    telemetry?: RaceTelemetryCreateNestedManyWithoutParticipantInput
  }

  export type RaceParticipantUncheckedCreateInput = {
    id?: number
    race_id: number
    game_account_id: number
    finished?: boolean
    server_finish_at?: Date | string | null
    client_time_ms?: number | null
    is_disqualified?: boolean
    suspicion_reason?: string | null
    telemetry?: RaceTelemetryUncheckedCreateNestedManyWithoutParticipantInput
  }

  export type RaceParticipantUpdateInput = {
    finished?: BoolFieldUpdateOperationsInput | boolean
    server_finish_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    client_time_ms?: NullableIntFieldUpdateOperationsInput | number | null
    is_disqualified?: BoolFieldUpdateOperationsInput | boolean
    suspicion_reason?: NullableStringFieldUpdateOperationsInput | string | null
    race?: RaceUpdateOneRequiredWithoutParticipantsNestedInput
    game_account?: GameAccountUpdateOneRequiredWithoutParticipationsNestedInput
    telemetry?: RaceTelemetryUpdateManyWithoutParticipantNestedInput
  }

  export type RaceParticipantUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    race_id?: IntFieldUpdateOperationsInput | number
    game_account_id?: IntFieldUpdateOperationsInput | number
    finished?: BoolFieldUpdateOperationsInput | boolean
    server_finish_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    client_time_ms?: NullableIntFieldUpdateOperationsInput | number | null
    is_disqualified?: BoolFieldUpdateOperationsInput | boolean
    suspicion_reason?: NullableStringFieldUpdateOperationsInput | string | null
    telemetry?: RaceTelemetryUncheckedUpdateManyWithoutParticipantNestedInput
  }

  export type RaceParticipantCreateManyInput = {
    id?: number
    race_id: number
    game_account_id: number
    finished?: boolean
    server_finish_at?: Date | string | null
    client_time_ms?: number | null
    is_disqualified?: boolean
    suspicion_reason?: string | null
  }

  export type RaceParticipantUpdateManyMutationInput = {
    finished?: BoolFieldUpdateOperationsInput | boolean
    server_finish_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    client_time_ms?: NullableIntFieldUpdateOperationsInput | number | null
    is_disqualified?: BoolFieldUpdateOperationsInput | boolean
    suspicion_reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RaceParticipantUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    race_id?: IntFieldUpdateOperationsInput | number
    game_account_id?: IntFieldUpdateOperationsInput | number
    finished?: BoolFieldUpdateOperationsInput | boolean
    server_finish_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    client_time_ms?: NullableIntFieldUpdateOperationsInput | number | null
    is_disqualified?: BoolFieldUpdateOperationsInput | boolean
    suspicion_reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RaceWitnessCreateInput = {
    server_time?: Date | string
    race: RaceCreateNestedOneWithoutWitnessesInput
    observer: GameAccountCreateNestedOneWithoutSightings_observedInput
    suspect: GameAccountCreateNestedOneWithoutSightings_suspectInput
  }

  export type RaceWitnessUncheckedCreateInput = {
    id?: number
    race_id: number
    observer_id: number
    suspect_nickname: string
    suspect_server: number
    server_time?: Date | string
  }

  export type RaceWitnessUpdateInput = {
    server_time?: DateTimeFieldUpdateOperationsInput | Date | string
    race?: RaceUpdateOneRequiredWithoutWitnessesNestedInput
    observer?: GameAccountUpdateOneRequiredWithoutSightings_observedNestedInput
    suspect?: GameAccountUpdateOneRequiredWithoutSightings_suspectNestedInput
  }

  export type RaceWitnessUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    race_id?: IntFieldUpdateOperationsInput | number
    observer_id?: IntFieldUpdateOperationsInput | number
    suspect_nickname?: StringFieldUpdateOperationsInput | string
    suspect_server?: IntFieldUpdateOperationsInput | number
    server_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RaceWitnessCreateManyInput = {
    id?: number
    race_id: number
    observer_id: number
    suspect_nickname: string
    suspect_server: number
    server_time?: Date | string
  }

  export type RaceWitnessUpdateManyMutationInput = {
    server_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RaceWitnessUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    race_id?: IntFieldUpdateOperationsInput | number
    observer_id?: IntFieldUpdateOperationsInput | number
    suspect_nickname?: StringFieldUpdateOperationsInput | string
    suspect_server?: IntFieldUpdateOperationsInput | number
    server_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RaceTelemetryCreateInput = {
    x: number
    y: number
    z: number
    speed: number
    client_timestamp: bigint | number
    created_at?: Date | string
    participant: RaceParticipantCreateNestedOneWithoutTelemetryInput
  }

  export type RaceTelemetryUncheckedCreateInput = {
    id?: number
    participant_id: number
    x: number
    y: number
    z: number
    speed: number
    client_timestamp: bigint | number
    created_at?: Date | string
  }

  export type RaceTelemetryUpdateInput = {
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    z?: FloatFieldUpdateOperationsInput | number
    speed?: FloatFieldUpdateOperationsInput | number
    client_timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    participant?: RaceParticipantUpdateOneRequiredWithoutTelemetryNestedInput
  }

  export type RaceTelemetryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    participant_id?: IntFieldUpdateOperationsInput | number
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    z?: FloatFieldUpdateOperationsInput | number
    speed?: FloatFieldUpdateOperationsInput | number
    client_timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RaceTelemetryCreateManyInput = {
    id?: number
    participant_id: number
    x: number
    y: number
    z: number
    speed: number
    client_timestamp: bigint | number
    created_at?: Date | string
  }

  export type RaceTelemetryUpdateManyMutationInput = {
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    z?: FloatFieldUpdateOperationsInput | number
    speed?: FloatFieldUpdateOperationsInput | number
    client_timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RaceTelemetryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    participant_id?: IntFieldUpdateOperationsInput | number
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    z?: FloatFieldUpdateOperationsInput | number
    speed?: FloatFieldUpdateOperationsInput | number
    client_timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionsCreateInput = {
    hash?: string | null
    amount: bigint | number
    comment: string
    status: $Enums.PaymentStatus
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionsUncheckedCreateInput = {
    id?: number
    hash?: string | null
    user_id: number
    amount: bigint | number
    comment: string
    status: $Enums.PaymentStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TransactionsUpdateInput = {
    hash?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    comment?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    hash?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    comment?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionsCreateManyInput = {
    id?: number
    hash?: string | null
    user_id: number
    amount: bigint | number
    comment: string
    status: $Enums.PaymentStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TransactionsUpdateManyMutationInput = {
    hash?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    comment?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    hash?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    comment?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WithdrawalRequestCreateInput = {
    amount: number
    currency?: string
    wallet_address: string
    status?: $Enums.WithdrawalStatus
    rejection_reason?: string | null
    admin_comment?: string | null
    tx_hash?: string | null
    processed_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutWithdrawalsInput
  }

  export type WithdrawalRequestUncheckedCreateInput = {
    id?: number
    user_id: number
    amount: number
    currency?: string
    wallet_address: string
    status?: $Enums.WithdrawalStatus
    rejection_reason?: string | null
    admin_comment?: string | null
    tx_hash?: string | null
    processed_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type WithdrawalRequestUpdateInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    wallet_address?: StringFieldUpdateOperationsInput | string
    status?: EnumWithdrawalStatusFieldUpdateOperationsInput | $Enums.WithdrawalStatus
    rejection_reason?: NullableStringFieldUpdateOperationsInput | string | null
    admin_comment?: NullableStringFieldUpdateOperationsInput | string | null
    tx_hash?: NullableStringFieldUpdateOperationsInput | string | null
    processed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWithdrawalsNestedInput
  }

  export type WithdrawalRequestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    wallet_address?: StringFieldUpdateOperationsInput | string
    status?: EnumWithdrawalStatusFieldUpdateOperationsInput | $Enums.WithdrawalStatus
    rejection_reason?: NullableStringFieldUpdateOperationsInput | string | null
    admin_comment?: NullableStringFieldUpdateOperationsInput | string | null
    tx_hash?: NullableStringFieldUpdateOperationsInput | string | null
    processed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WithdrawalRequestCreateManyInput = {
    id?: number
    user_id: number
    amount: number
    currency?: string
    wallet_address: string
    status?: $Enums.WithdrawalStatus
    rejection_reason?: string | null
    admin_comment?: string | null
    tx_hash?: string | null
    processed_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type WithdrawalRequestUpdateManyMutationInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    wallet_address?: StringFieldUpdateOperationsInput | string
    status?: EnumWithdrawalStatusFieldUpdateOperationsInput | $Enums.WithdrawalStatus
    rejection_reason?: NullableStringFieldUpdateOperationsInput | string | null
    admin_comment?: NullableStringFieldUpdateOperationsInput | string | null
    tx_hash?: NullableStringFieldUpdateOperationsInput | string | null
    processed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WithdrawalRequestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    wallet_address?: StringFieldUpdateOperationsInput | string
    status?: EnumWithdrawalStatusFieldUpdateOperationsInput | $Enums.WithdrawalStatus
    rejection_reason?: NullableStringFieldUpdateOperationsInput | string | null
    admin_comment?: NullableStringFieldUpdateOperationsInput | string | null
    tx_hash?: NullableStringFieldUpdateOperationsInput | string | null
    processed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokensCreateInput = {
    refresh_token: string
    created_at?: Date | string
    user: UserCreateNestedOneWithoutTokensInput
  }

  export type TokensUncheckedCreateInput = {
    id?: number
    user_id: number
    refresh_token: string
    created_at?: Date | string
  }

  export type TokensUpdateInput = {
    refresh_token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTokensNestedInput
  }

  export type TokensUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    refresh_token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokensCreateManyInput = {
    id?: number
    user_id: number
    refresh_token: string
    created_at?: Date | string
  }

  export type TokensUpdateManyMutationInput = {
    refresh_token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokensUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    refresh_token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type WithdrawalRequestListRelationFilter = {
    every?: WithdrawalRequestWhereInput
    some?: WithdrawalRequestWhereInput
    none?: WithdrawalRequestWhereInput
  }

  export type PromoCodeListRelationFilter = {
    every?: PromoCodeWhereInput
    some?: PromoCodeWhereInput
    none?: PromoCodeWhereInput
  }

  export type GameAccountListRelationFilter = {
    every?: GameAccountWhereInput
    some?: GameAccountWhereInput
    none?: GameAccountWhereInput
  }

  export type RaceListRelationFilter = {
    every?: RaceWhereInput
    some?: RaceWhereInput
    none?: RaceWhereInput
  }

  export type UserSettingsNullableScalarRelationFilter = {
    is?: UserSettingsWhereInput | null
    isNot?: UserSettingsWhereInput | null
  }

  export type TransactionsListRelationFilter = {
    every?: TransactionsWhereInput
    some?: TransactionsWhereInput
    none?: TransactionsWhereInput
  }

  export type TokensListRelationFilter = {
    every?: TokensWhereInput
    some?: TokensWhereInput
    none?: TokensWhereInput
  }

  export type VerificationCodesListRelationFilter = {
    every?: VerificationCodesWhereInput
    some?: VerificationCodesWhereInput
    none?: VerificationCodesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type WithdrawalRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PromoCodeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GameAccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RaceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TokensOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VerificationCodesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    telegram_id?: SortOrder
    username?: SortOrder
    created_at?: SortOrder
    vip_expires_at?: SortOrder
    balance?: SortOrder
    frozen_balance?: SortOrder
    connect_code?: SortOrder
    connect_code_expires_at?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    telegram_id?: SortOrder
    balance?: SortOrder
    frozen_balance?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    telegram_id?: SortOrder
    username?: SortOrder
    created_at?: SortOrder
    vip_expires_at?: SortOrder
    balance?: SortOrder
    frozen_balance?: SortOrder
    connect_code?: SortOrder
    connect_code_expires_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    telegram_id?: SortOrder
    username?: SortOrder
    created_at?: SortOrder
    vip_expires_at?: SortOrder
    balance?: SortOrder
    frozen_balance?: SortOrder
    connect_code?: SortOrder
    connect_code_expires_at?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    telegram_id?: SortOrder
    balance?: SortOrder
    frozen_balance?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumVerificationCodeTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationCodeType | EnumVerificationCodeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationCodeType[] | ListEnumVerificationCodeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VerificationCodeType[] | ListEnumVerificationCodeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVerificationCodeTypeFilter<$PrismaModel> | $Enums.VerificationCodeType
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type VerificationCodesCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    code?: SortOrder
    type?: SortOrder
    expires_at?: SortOrder
  }

  export type VerificationCodesAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type VerificationCodesMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    code?: SortOrder
    type?: SortOrder
    expires_at?: SortOrder
  }

  export type VerificationCodesMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    code?: SortOrder
    type?: SortOrder
    expires_at?: SortOrder
  }

  export type VerificationCodesSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumVerificationCodeTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationCodeType | EnumVerificationCodeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationCodeType[] | ListEnumVerificationCodeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VerificationCodeType[] | ListEnumVerificationCodeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVerificationCodeTypeWithAggregatesFilter<$PrismaModel> | $Enums.VerificationCodeType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVerificationCodeTypeFilter<$PrismaModel>
    _max?: NestedEnumVerificationCodeTypeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserSettingsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    language?: SortOrder
    currency?: SortOrder
    timezone?: SortOrder
    notify_news?: SortOrder
    notify_payments?: SortOrder
    is_stealth?: SortOrder
    updated_at?: SortOrder
  }

  export type UserSettingsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    timezone?: SortOrder
  }

  export type UserSettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    language?: SortOrder
    currency?: SortOrder
    timezone?: SortOrder
    notify_news?: SortOrder
    notify_payments?: SortOrder
    is_stealth?: SortOrder
    updated_at?: SortOrder
  }

  export type UserSettingsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    language?: SortOrder
    currency?: SortOrder
    timezone?: SortOrder
    notify_news?: SortOrder
    notify_payments?: SortOrder
    is_stealth?: SortOrder
    updated_at?: SortOrder
  }

  export type UserSettingsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    timezone?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumPromoTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PromoType | EnumPromoTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PromoType[] | ListEnumPromoTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PromoType[] | ListEnumPromoTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPromoTypeFilter<$PrismaModel> | $Enums.PromoType
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type PromoCodeCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    type?: SortOrder
    value?: SortOrder
    is_used?: SortOrder
    used_at?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
  }

  export type PromoCodeAvgOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    user_id?: SortOrder
  }

  export type PromoCodeMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    type?: SortOrder
    value?: SortOrder
    is_used?: SortOrder
    used_at?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
  }

  export type PromoCodeMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    type?: SortOrder
    value?: SortOrder
    is_used?: SortOrder
    used_at?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
  }

  export type PromoCodeSumOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    user_id?: SortOrder
  }

  export type EnumPromoTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PromoType | EnumPromoTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PromoType[] | ListEnumPromoTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PromoType[] | ListEnumPromoTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPromoTypeWithAggregatesFilter<$PrismaModel> | $Enums.PromoType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPromoTypeFilter<$PrismaModel>
    _max?: NestedEnumPromoTypeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type RaceParticipantListRelationFilter = {
    every?: RaceParticipantWhereInput
    some?: RaceParticipantWhereInput
    none?: RaceParticipantWhereInput
  }

  export type RaceWitnessListRelationFilter = {
    every?: RaceWitnessWhereInput
    some?: RaceWitnessWhereInput
    none?: RaceWitnessWhereInput
  }

  export type RaceParticipantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RaceWitnessOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GameAccountNicknameServerCompoundUniqueInput = {
    nickname: string
    server: number
  }

  export type GameAccountCountOrderByAggregateInput = {
    id?: SortOrder
    nickname?: SortOrder
    server?: SortOrder
    verified?: SortOrder
    wins?: SortOrder
    user_id?: SortOrder
  }

  export type GameAccountAvgOrderByAggregateInput = {
    id?: SortOrder
    server?: SortOrder
    wins?: SortOrder
    user_id?: SortOrder
  }

  export type GameAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    nickname?: SortOrder
    server?: SortOrder
    verified?: SortOrder
    wins?: SortOrder
    user_id?: SortOrder
  }

  export type GameAccountMinOrderByAggregateInput = {
    id?: SortOrder
    nickname?: SortOrder
    server?: SortOrder
    verified?: SortOrder
    wins?: SortOrder
    user_id?: SortOrder
  }

  export type GameAccountSumOrderByAggregateInput = {
    id?: SortOrder
    server?: SortOrder
    wins?: SortOrder
    user_id?: SortOrder
  }

  export type LocationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    file_id?: SortOrder
    pos_one_x?: SortOrder
    pos_one_y?: SortOrder
    pos_one_z?: SortOrder
    pos_two_x?: SortOrder
    pos_two_y?: SortOrder
    pos_two_z?: SortOrder
  }

  export type LocationAvgOrderByAggregateInput = {
    id?: SortOrder
    pos_one_x?: SortOrder
    pos_one_y?: SortOrder
    pos_one_z?: SortOrder
    pos_two_x?: SortOrder
    pos_two_y?: SortOrder
    pos_two_z?: SortOrder
  }

  export type LocationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    file_id?: SortOrder
    pos_one_x?: SortOrder
    pos_one_y?: SortOrder
    pos_one_z?: SortOrder
    pos_two_x?: SortOrder
    pos_two_y?: SortOrder
    pos_two_z?: SortOrder
  }

  export type LocationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    file_id?: SortOrder
    pos_one_x?: SortOrder
    pos_one_y?: SortOrder
    pos_one_z?: SortOrder
    pos_two_x?: SortOrder
    pos_two_y?: SortOrder
    pos_two_z?: SortOrder
  }

  export type LocationSumOrderByAggregateInput = {
    id?: SortOrder
    pos_one_x?: SortOrder
    pos_one_y?: SortOrder
    pos_one_z?: SortOrder
    pos_two_x?: SortOrder
    pos_two_y?: SortOrder
    pos_two_z?: SortOrder
  }

  export type EnumRaceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RaceStatus | EnumRaceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RaceStatus[] | ListEnumRaceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RaceStatus[] | ListEnumRaceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRaceStatusFilter<$PrismaModel> | $Enums.RaceStatus
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type LocationScalarRelationFilter = {
    is?: LocationWhereInput
    isNot?: LocationWhereInput
  }

  export type GameAccountNullableScalarRelationFilter = {
    is?: GameAccountWhereInput | null
    isNot?: GameAccountWhereInput | null
  }

  export type RaceCountOrderByAggregateInput = {
    id?: SortOrder
    secret_code?: SortOrder
    is_vip?: SortOrder
    status?: SortOrder
    location_id?: SortOrder
    winner_id?: SortOrder
    winner_path?: SortOrder
    prize?: SortOrder
    start_at?: SortOrder
    server_start_time?: SortOrder
    creator_id?: SortOrder
    created_at?: SortOrder
  }

  export type RaceAvgOrderByAggregateInput = {
    id?: SortOrder
    location_id?: SortOrder
    winner_id?: SortOrder
    creator_id?: SortOrder
  }

  export type RaceMaxOrderByAggregateInput = {
    id?: SortOrder
    secret_code?: SortOrder
    is_vip?: SortOrder
    status?: SortOrder
    location_id?: SortOrder
    winner_id?: SortOrder
    prize?: SortOrder
    start_at?: SortOrder
    server_start_time?: SortOrder
    creator_id?: SortOrder
    created_at?: SortOrder
  }

  export type RaceMinOrderByAggregateInput = {
    id?: SortOrder
    secret_code?: SortOrder
    is_vip?: SortOrder
    status?: SortOrder
    location_id?: SortOrder
    winner_id?: SortOrder
    prize?: SortOrder
    start_at?: SortOrder
    server_start_time?: SortOrder
    creator_id?: SortOrder
    created_at?: SortOrder
  }

  export type RaceSumOrderByAggregateInput = {
    id?: SortOrder
    location_id?: SortOrder
    winner_id?: SortOrder
    creator_id?: SortOrder
  }

  export type EnumRaceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RaceStatus | EnumRaceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RaceStatus[] | ListEnumRaceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RaceStatus[] | ListEnumRaceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRaceStatusWithAggregatesFilter<$PrismaModel> | $Enums.RaceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRaceStatusFilter<$PrismaModel>
    _max?: NestedEnumRaceStatusFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type RaceScalarRelationFilter = {
    is?: RaceWhereInput
    isNot?: RaceWhereInput
  }

  export type GameAccountScalarRelationFilter = {
    is?: GameAccountWhereInput
    isNot?: GameAccountWhereInput
  }

  export type RaceTelemetryListRelationFilter = {
    every?: RaceTelemetryWhereInput
    some?: RaceTelemetryWhereInput
    none?: RaceTelemetryWhereInput
  }

  export type RaceTelemetryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RaceParticipantRace_idGame_account_idCompoundUniqueInput = {
    race_id: number
    game_account_id: number
  }

  export type RaceParticipantCountOrderByAggregateInput = {
    id?: SortOrder
    race_id?: SortOrder
    game_account_id?: SortOrder
    finished?: SortOrder
    server_finish_at?: SortOrder
    client_time_ms?: SortOrder
    is_disqualified?: SortOrder
    suspicion_reason?: SortOrder
  }

  export type RaceParticipantAvgOrderByAggregateInput = {
    id?: SortOrder
    race_id?: SortOrder
    game_account_id?: SortOrder
    client_time_ms?: SortOrder
  }

  export type RaceParticipantMaxOrderByAggregateInput = {
    id?: SortOrder
    race_id?: SortOrder
    game_account_id?: SortOrder
    finished?: SortOrder
    server_finish_at?: SortOrder
    client_time_ms?: SortOrder
    is_disqualified?: SortOrder
    suspicion_reason?: SortOrder
  }

  export type RaceParticipantMinOrderByAggregateInput = {
    id?: SortOrder
    race_id?: SortOrder
    game_account_id?: SortOrder
    finished?: SortOrder
    server_finish_at?: SortOrder
    client_time_ms?: SortOrder
    is_disqualified?: SortOrder
    suspicion_reason?: SortOrder
  }

  export type RaceParticipantSumOrderByAggregateInput = {
    id?: SortOrder
    race_id?: SortOrder
    game_account_id?: SortOrder
    client_time_ms?: SortOrder
  }

  export type RaceWitnessCountOrderByAggregateInput = {
    id?: SortOrder
    race_id?: SortOrder
    observer_id?: SortOrder
    suspect_nickname?: SortOrder
    suspect_server?: SortOrder
    server_time?: SortOrder
  }

  export type RaceWitnessAvgOrderByAggregateInput = {
    id?: SortOrder
    race_id?: SortOrder
    observer_id?: SortOrder
    suspect_server?: SortOrder
  }

  export type RaceWitnessMaxOrderByAggregateInput = {
    id?: SortOrder
    race_id?: SortOrder
    observer_id?: SortOrder
    suspect_nickname?: SortOrder
    suspect_server?: SortOrder
    server_time?: SortOrder
  }

  export type RaceWitnessMinOrderByAggregateInput = {
    id?: SortOrder
    race_id?: SortOrder
    observer_id?: SortOrder
    suspect_nickname?: SortOrder
    suspect_server?: SortOrder
    server_time?: SortOrder
  }

  export type RaceWitnessSumOrderByAggregateInput = {
    id?: SortOrder
    race_id?: SortOrder
    observer_id?: SortOrder
    suspect_server?: SortOrder
  }

  export type RaceParticipantScalarRelationFilter = {
    is?: RaceParticipantWhereInput
    isNot?: RaceParticipantWhereInput
  }

  export type RaceTelemetryCountOrderByAggregateInput = {
    id?: SortOrder
    participant_id?: SortOrder
    x?: SortOrder
    y?: SortOrder
    z?: SortOrder
    speed?: SortOrder
    client_timestamp?: SortOrder
    created_at?: SortOrder
  }

  export type RaceTelemetryAvgOrderByAggregateInput = {
    id?: SortOrder
    participant_id?: SortOrder
    x?: SortOrder
    y?: SortOrder
    z?: SortOrder
    speed?: SortOrder
    client_timestamp?: SortOrder
  }

  export type RaceTelemetryMaxOrderByAggregateInput = {
    id?: SortOrder
    participant_id?: SortOrder
    x?: SortOrder
    y?: SortOrder
    z?: SortOrder
    speed?: SortOrder
    client_timestamp?: SortOrder
    created_at?: SortOrder
  }

  export type RaceTelemetryMinOrderByAggregateInput = {
    id?: SortOrder
    participant_id?: SortOrder
    x?: SortOrder
    y?: SortOrder
    z?: SortOrder
    speed?: SortOrder
    client_timestamp?: SortOrder
    created_at?: SortOrder
  }

  export type RaceTelemetrySumOrderByAggregateInput = {
    id?: SortOrder
    participant_id?: SortOrder
    x?: SortOrder
    y?: SortOrder
    z?: SortOrder
    speed?: SortOrder
    client_timestamp?: SortOrder
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type TransactionsCountOrderByAggregateInput = {
    id?: SortOrder
    hash?: SortOrder
    user_id?: SortOrder
    amount?: SortOrder
    comment?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TransactionsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    amount?: SortOrder
  }

  export type TransactionsMaxOrderByAggregateInput = {
    id?: SortOrder
    hash?: SortOrder
    user_id?: SortOrder
    amount?: SortOrder
    comment?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TransactionsMinOrderByAggregateInput = {
    id?: SortOrder
    hash?: SortOrder
    user_id?: SortOrder
    amount?: SortOrder
    comment?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TransactionsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    amount?: SortOrder
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type EnumWithdrawalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WithdrawalStatus | EnumWithdrawalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WithdrawalStatus[] | ListEnumWithdrawalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WithdrawalStatus[] | ListEnumWithdrawalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWithdrawalStatusFilter<$PrismaModel> | $Enums.WithdrawalStatus
  }

  export type WithdrawalRequestCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    wallet_address?: SortOrder
    status?: SortOrder
    rejection_reason?: SortOrder
    admin_comment?: SortOrder
    tx_hash?: SortOrder
    processed_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type WithdrawalRequestAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    amount?: SortOrder
  }

  export type WithdrawalRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    wallet_address?: SortOrder
    status?: SortOrder
    rejection_reason?: SortOrder
    admin_comment?: SortOrder
    tx_hash?: SortOrder
    processed_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type WithdrawalRequestMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    wallet_address?: SortOrder
    status?: SortOrder
    rejection_reason?: SortOrder
    admin_comment?: SortOrder
    tx_hash?: SortOrder
    processed_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type WithdrawalRequestSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    amount?: SortOrder
  }

  export type EnumWithdrawalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WithdrawalStatus | EnumWithdrawalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WithdrawalStatus[] | ListEnumWithdrawalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WithdrawalStatus[] | ListEnumWithdrawalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWithdrawalStatusWithAggregatesFilter<$PrismaModel> | $Enums.WithdrawalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWithdrawalStatusFilter<$PrismaModel>
    _max?: NestedEnumWithdrawalStatusFilter<$PrismaModel>
  }

  export type TokensCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    refresh_token?: SortOrder
    created_at?: SortOrder
  }

  export type TokensAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type TokensMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    refresh_token?: SortOrder
    created_at?: SortOrder
  }

  export type TokensMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    refresh_token?: SortOrder
    created_at?: SortOrder
  }

  export type TokensSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type WithdrawalRequestCreateNestedManyWithoutUserInput = {
    create?: XOR<WithdrawalRequestCreateWithoutUserInput, WithdrawalRequestUncheckedCreateWithoutUserInput> | WithdrawalRequestCreateWithoutUserInput[] | WithdrawalRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WithdrawalRequestCreateOrConnectWithoutUserInput | WithdrawalRequestCreateOrConnectWithoutUserInput[]
    createMany?: WithdrawalRequestCreateManyUserInputEnvelope
    connect?: WithdrawalRequestWhereUniqueInput | WithdrawalRequestWhereUniqueInput[]
  }

  export type PromoCodeCreateNestedManyWithoutUserInput = {
    create?: XOR<PromoCodeCreateWithoutUserInput, PromoCodeUncheckedCreateWithoutUserInput> | PromoCodeCreateWithoutUserInput[] | PromoCodeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PromoCodeCreateOrConnectWithoutUserInput | PromoCodeCreateOrConnectWithoutUserInput[]
    createMany?: PromoCodeCreateManyUserInputEnvelope
    connect?: PromoCodeWhereUniqueInput | PromoCodeWhereUniqueInput[]
  }

  export type GameAccountCreateNestedManyWithoutUserInput = {
    create?: XOR<GameAccountCreateWithoutUserInput, GameAccountUncheckedCreateWithoutUserInput> | GameAccountCreateWithoutUserInput[] | GameAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GameAccountCreateOrConnectWithoutUserInput | GameAccountCreateOrConnectWithoutUserInput[]
    createMany?: GameAccountCreateManyUserInputEnvelope
    connect?: GameAccountWhereUniqueInput | GameAccountWhereUniqueInput[]
  }

  export type RaceCreateNestedManyWithoutCreatorInput = {
    create?: XOR<RaceCreateWithoutCreatorInput, RaceUncheckedCreateWithoutCreatorInput> | RaceCreateWithoutCreatorInput[] | RaceUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: RaceCreateOrConnectWithoutCreatorInput | RaceCreateOrConnectWithoutCreatorInput[]
    createMany?: RaceCreateManyCreatorInputEnvelope
    connect?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
  }

  export type UserSettingsCreateNestedOneWithoutUserInput = {
    create?: XOR<UserSettingsCreateWithoutUserInput, UserSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSettingsCreateOrConnectWithoutUserInput
    connect?: UserSettingsWhereUniqueInput
  }

  export type TransactionsCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionsCreateWithoutUserInput, TransactionsUncheckedCreateWithoutUserInput> | TransactionsCreateWithoutUserInput[] | TransactionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutUserInput | TransactionsCreateOrConnectWithoutUserInput[]
    createMany?: TransactionsCreateManyUserInputEnvelope
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
  }

  export type TokensCreateNestedManyWithoutUserInput = {
    create?: XOR<TokensCreateWithoutUserInput, TokensUncheckedCreateWithoutUserInput> | TokensCreateWithoutUserInput[] | TokensUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokensCreateOrConnectWithoutUserInput | TokensCreateOrConnectWithoutUserInput[]
    createMany?: TokensCreateManyUserInputEnvelope
    connect?: TokensWhereUniqueInput | TokensWhereUniqueInput[]
  }

  export type VerificationCodesCreateNestedManyWithoutUserInput = {
    create?: XOR<VerificationCodesCreateWithoutUserInput, VerificationCodesUncheckedCreateWithoutUserInput> | VerificationCodesCreateWithoutUserInput[] | VerificationCodesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VerificationCodesCreateOrConnectWithoutUserInput | VerificationCodesCreateOrConnectWithoutUserInput[]
    createMany?: VerificationCodesCreateManyUserInputEnvelope
    connect?: VerificationCodesWhereUniqueInput | VerificationCodesWhereUniqueInput[]
  }

  export type WithdrawalRequestUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WithdrawalRequestCreateWithoutUserInput, WithdrawalRequestUncheckedCreateWithoutUserInput> | WithdrawalRequestCreateWithoutUserInput[] | WithdrawalRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WithdrawalRequestCreateOrConnectWithoutUserInput | WithdrawalRequestCreateOrConnectWithoutUserInput[]
    createMany?: WithdrawalRequestCreateManyUserInputEnvelope
    connect?: WithdrawalRequestWhereUniqueInput | WithdrawalRequestWhereUniqueInput[]
  }

  export type PromoCodeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PromoCodeCreateWithoutUserInput, PromoCodeUncheckedCreateWithoutUserInput> | PromoCodeCreateWithoutUserInput[] | PromoCodeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PromoCodeCreateOrConnectWithoutUserInput | PromoCodeCreateOrConnectWithoutUserInput[]
    createMany?: PromoCodeCreateManyUserInputEnvelope
    connect?: PromoCodeWhereUniqueInput | PromoCodeWhereUniqueInput[]
  }

  export type GameAccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GameAccountCreateWithoutUserInput, GameAccountUncheckedCreateWithoutUserInput> | GameAccountCreateWithoutUserInput[] | GameAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GameAccountCreateOrConnectWithoutUserInput | GameAccountCreateOrConnectWithoutUserInput[]
    createMany?: GameAccountCreateManyUserInputEnvelope
    connect?: GameAccountWhereUniqueInput | GameAccountWhereUniqueInput[]
  }

  export type RaceUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<RaceCreateWithoutCreatorInput, RaceUncheckedCreateWithoutCreatorInput> | RaceCreateWithoutCreatorInput[] | RaceUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: RaceCreateOrConnectWithoutCreatorInput | RaceCreateOrConnectWithoutCreatorInput[]
    createMany?: RaceCreateManyCreatorInputEnvelope
    connect?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
  }

  export type UserSettingsUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserSettingsCreateWithoutUserInput, UserSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSettingsCreateOrConnectWithoutUserInput
    connect?: UserSettingsWhereUniqueInput
  }

  export type TransactionsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionsCreateWithoutUserInput, TransactionsUncheckedCreateWithoutUserInput> | TransactionsCreateWithoutUserInput[] | TransactionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutUserInput | TransactionsCreateOrConnectWithoutUserInput[]
    createMany?: TransactionsCreateManyUserInputEnvelope
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
  }

  export type TokensUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TokensCreateWithoutUserInput, TokensUncheckedCreateWithoutUserInput> | TokensCreateWithoutUserInput[] | TokensUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokensCreateOrConnectWithoutUserInput | TokensCreateOrConnectWithoutUserInput[]
    createMany?: TokensCreateManyUserInputEnvelope
    connect?: TokensWhereUniqueInput | TokensWhereUniqueInput[]
  }

  export type VerificationCodesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<VerificationCodesCreateWithoutUserInput, VerificationCodesUncheckedCreateWithoutUserInput> | VerificationCodesCreateWithoutUserInput[] | VerificationCodesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VerificationCodesCreateOrConnectWithoutUserInput | VerificationCodesCreateOrConnectWithoutUserInput[]
    createMany?: VerificationCodesCreateManyUserInputEnvelope
    connect?: VerificationCodesWhereUniqueInput | VerificationCodesWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type WithdrawalRequestUpdateManyWithoutUserNestedInput = {
    create?: XOR<WithdrawalRequestCreateWithoutUserInput, WithdrawalRequestUncheckedCreateWithoutUserInput> | WithdrawalRequestCreateWithoutUserInput[] | WithdrawalRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WithdrawalRequestCreateOrConnectWithoutUserInput | WithdrawalRequestCreateOrConnectWithoutUserInput[]
    upsert?: WithdrawalRequestUpsertWithWhereUniqueWithoutUserInput | WithdrawalRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WithdrawalRequestCreateManyUserInputEnvelope
    set?: WithdrawalRequestWhereUniqueInput | WithdrawalRequestWhereUniqueInput[]
    disconnect?: WithdrawalRequestWhereUniqueInput | WithdrawalRequestWhereUniqueInput[]
    delete?: WithdrawalRequestWhereUniqueInput | WithdrawalRequestWhereUniqueInput[]
    connect?: WithdrawalRequestWhereUniqueInput | WithdrawalRequestWhereUniqueInput[]
    update?: WithdrawalRequestUpdateWithWhereUniqueWithoutUserInput | WithdrawalRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WithdrawalRequestUpdateManyWithWhereWithoutUserInput | WithdrawalRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WithdrawalRequestScalarWhereInput | WithdrawalRequestScalarWhereInput[]
  }

  export type PromoCodeUpdateManyWithoutUserNestedInput = {
    create?: XOR<PromoCodeCreateWithoutUserInput, PromoCodeUncheckedCreateWithoutUserInput> | PromoCodeCreateWithoutUserInput[] | PromoCodeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PromoCodeCreateOrConnectWithoutUserInput | PromoCodeCreateOrConnectWithoutUserInput[]
    upsert?: PromoCodeUpsertWithWhereUniqueWithoutUserInput | PromoCodeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PromoCodeCreateManyUserInputEnvelope
    set?: PromoCodeWhereUniqueInput | PromoCodeWhereUniqueInput[]
    disconnect?: PromoCodeWhereUniqueInput | PromoCodeWhereUniqueInput[]
    delete?: PromoCodeWhereUniqueInput | PromoCodeWhereUniqueInput[]
    connect?: PromoCodeWhereUniqueInput | PromoCodeWhereUniqueInput[]
    update?: PromoCodeUpdateWithWhereUniqueWithoutUserInput | PromoCodeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PromoCodeUpdateManyWithWhereWithoutUserInput | PromoCodeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PromoCodeScalarWhereInput | PromoCodeScalarWhereInput[]
  }

  export type GameAccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<GameAccountCreateWithoutUserInput, GameAccountUncheckedCreateWithoutUserInput> | GameAccountCreateWithoutUserInput[] | GameAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GameAccountCreateOrConnectWithoutUserInput | GameAccountCreateOrConnectWithoutUserInput[]
    upsert?: GameAccountUpsertWithWhereUniqueWithoutUserInput | GameAccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GameAccountCreateManyUserInputEnvelope
    set?: GameAccountWhereUniqueInput | GameAccountWhereUniqueInput[]
    disconnect?: GameAccountWhereUniqueInput | GameAccountWhereUniqueInput[]
    delete?: GameAccountWhereUniqueInput | GameAccountWhereUniqueInput[]
    connect?: GameAccountWhereUniqueInput | GameAccountWhereUniqueInput[]
    update?: GameAccountUpdateWithWhereUniqueWithoutUserInput | GameAccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GameAccountUpdateManyWithWhereWithoutUserInput | GameAccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GameAccountScalarWhereInput | GameAccountScalarWhereInput[]
  }

  export type RaceUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<RaceCreateWithoutCreatorInput, RaceUncheckedCreateWithoutCreatorInput> | RaceCreateWithoutCreatorInput[] | RaceUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: RaceCreateOrConnectWithoutCreatorInput | RaceCreateOrConnectWithoutCreatorInput[]
    upsert?: RaceUpsertWithWhereUniqueWithoutCreatorInput | RaceUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: RaceCreateManyCreatorInputEnvelope
    set?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
    disconnect?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
    delete?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
    connect?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
    update?: RaceUpdateWithWhereUniqueWithoutCreatorInput | RaceUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: RaceUpdateManyWithWhereWithoutCreatorInput | RaceUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: RaceScalarWhereInput | RaceScalarWhereInput[]
  }

  export type UserSettingsUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserSettingsCreateWithoutUserInput, UserSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSettingsCreateOrConnectWithoutUserInput
    upsert?: UserSettingsUpsertWithoutUserInput
    disconnect?: UserSettingsWhereInput | boolean
    delete?: UserSettingsWhereInput | boolean
    connect?: UserSettingsWhereUniqueInput
    update?: XOR<XOR<UserSettingsUpdateToOneWithWhereWithoutUserInput, UserSettingsUpdateWithoutUserInput>, UserSettingsUncheckedUpdateWithoutUserInput>
  }

  export type TransactionsUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionsCreateWithoutUserInput, TransactionsUncheckedCreateWithoutUserInput> | TransactionsCreateWithoutUserInput[] | TransactionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutUserInput | TransactionsCreateOrConnectWithoutUserInput[]
    upsert?: TransactionsUpsertWithWhereUniqueWithoutUserInput | TransactionsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionsCreateManyUserInputEnvelope
    set?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    disconnect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    delete?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    update?: TransactionsUpdateWithWhereUniqueWithoutUserInput | TransactionsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionsUpdateManyWithWhereWithoutUserInput | TransactionsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
  }

  export type TokensUpdateManyWithoutUserNestedInput = {
    create?: XOR<TokensCreateWithoutUserInput, TokensUncheckedCreateWithoutUserInput> | TokensCreateWithoutUserInput[] | TokensUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokensCreateOrConnectWithoutUserInput | TokensCreateOrConnectWithoutUserInput[]
    upsert?: TokensUpsertWithWhereUniqueWithoutUserInput | TokensUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TokensCreateManyUserInputEnvelope
    set?: TokensWhereUniqueInput | TokensWhereUniqueInput[]
    disconnect?: TokensWhereUniqueInput | TokensWhereUniqueInput[]
    delete?: TokensWhereUniqueInput | TokensWhereUniqueInput[]
    connect?: TokensWhereUniqueInput | TokensWhereUniqueInput[]
    update?: TokensUpdateWithWhereUniqueWithoutUserInput | TokensUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TokensUpdateManyWithWhereWithoutUserInput | TokensUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TokensScalarWhereInput | TokensScalarWhereInput[]
  }

  export type VerificationCodesUpdateManyWithoutUserNestedInput = {
    create?: XOR<VerificationCodesCreateWithoutUserInput, VerificationCodesUncheckedCreateWithoutUserInput> | VerificationCodesCreateWithoutUserInput[] | VerificationCodesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VerificationCodesCreateOrConnectWithoutUserInput | VerificationCodesCreateOrConnectWithoutUserInput[]
    upsert?: VerificationCodesUpsertWithWhereUniqueWithoutUserInput | VerificationCodesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VerificationCodesCreateManyUserInputEnvelope
    set?: VerificationCodesWhereUniqueInput | VerificationCodesWhereUniqueInput[]
    disconnect?: VerificationCodesWhereUniqueInput | VerificationCodesWhereUniqueInput[]
    delete?: VerificationCodesWhereUniqueInput | VerificationCodesWhereUniqueInput[]
    connect?: VerificationCodesWhereUniqueInput | VerificationCodesWhereUniqueInput[]
    update?: VerificationCodesUpdateWithWhereUniqueWithoutUserInput | VerificationCodesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VerificationCodesUpdateManyWithWhereWithoutUserInput | VerificationCodesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VerificationCodesScalarWhereInput | VerificationCodesScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type WithdrawalRequestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WithdrawalRequestCreateWithoutUserInput, WithdrawalRequestUncheckedCreateWithoutUserInput> | WithdrawalRequestCreateWithoutUserInput[] | WithdrawalRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WithdrawalRequestCreateOrConnectWithoutUserInput | WithdrawalRequestCreateOrConnectWithoutUserInput[]
    upsert?: WithdrawalRequestUpsertWithWhereUniqueWithoutUserInput | WithdrawalRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WithdrawalRequestCreateManyUserInputEnvelope
    set?: WithdrawalRequestWhereUniqueInput | WithdrawalRequestWhereUniqueInput[]
    disconnect?: WithdrawalRequestWhereUniqueInput | WithdrawalRequestWhereUniqueInput[]
    delete?: WithdrawalRequestWhereUniqueInput | WithdrawalRequestWhereUniqueInput[]
    connect?: WithdrawalRequestWhereUniqueInput | WithdrawalRequestWhereUniqueInput[]
    update?: WithdrawalRequestUpdateWithWhereUniqueWithoutUserInput | WithdrawalRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WithdrawalRequestUpdateManyWithWhereWithoutUserInput | WithdrawalRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WithdrawalRequestScalarWhereInput | WithdrawalRequestScalarWhereInput[]
  }

  export type PromoCodeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PromoCodeCreateWithoutUserInput, PromoCodeUncheckedCreateWithoutUserInput> | PromoCodeCreateWithoutUserInput[] | PromoCodeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PromoCodeCreateOrConnectWithoutUserInput | PromoCodeCreateOrConnectWithoutUserInput[]
    upsert?: PromoCodeUpsertWithWhereUniqueWithoutUserInput | PromoCodeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PromoCodeCreateManyUserInputEnvelope
    set?: PromoCodeWhereUniqueInput | PromoCodeWhereUniqueInput[]
    disconnect?: PromoCodeWhereUniqueInput | PromoCodeWhereUniqueInput[]
    delete?: PromoCodeWhereUniqueInput | PromoCodeWhereUniqueInput[]
    connect?: PromoCodeWhereUniqueInput | PromoCodeWhereUniqueInput[]
    update?: PromoCodeUpdateWithWhereUniqueWithoutUserInput | PromoCodeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PromoCodeUpdateManyWithWhereWithoutUserInput | PromoCodeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PromoCodeScalarWhereInput | PromoCodeScalarWhereInput[]
  }

  export type GameAccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GameAccountCreateWithoutUserInput, GameAccountUncheckedCreateWithoutUserInput> | GameAccountCreateWithoutUserInput[] | GameAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GameAccountCreateOrConnectWithoutUserInput | GameAccountCreateOrConnectWithoutUserInput[]
    upsert?: GameAccountUpsertWithWhereUniqueWithoutUserInput | GameAccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GameAccountCreateManyUserInputEnvelope
    set?: GameAccountWhereUniqueInput | GameAccountWhereUniqueInput[]
    disconnect?: GameAccountWhereUniqueInput | GameAccountWhereUniqueInput[]
    delete?: GameAccountWhereUniqueInput | GameAccountWhereUniqueInput[]
    connect?: GameAccountWhereUniqueInput | GameAccountWhereUniqueInput[]
    update?: GameAccountUpdateWithWhereUniqueWithoutUserInput | GameAccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GameAccountUpdateManyWithWhereWithoutUserInput | GameAccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GameAccountScalarWhereInput | GameAccountScalarWhereInput[]
  }

  export type RaceUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<RaceCreateWithoutCreatorInput, RaceUncheckedCreateWithoutCreatorInput> | RaceCreateWithoutCreatorInput[] | RaceUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: RaceCreateOrConnectWithoutCreatorInput | RaceCreateOrConnectWithoutCreatorInput[]
    upsert?: RaceUpsertWithWhereUniqueWithoutCreatorInput | RaceUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: RaceCreateManyCreatorInputEnvelope
    set?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
    disconnect?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
    delete?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
    connect?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
    update?: RaceUpdateWithWhereUniqueWithoutCreatorInput | RaceUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: RaceUpdateManyWithWhereWithoutCreatorInput | RaceUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: RaceScalarWhereInput | RaceScalarWhereInput[]
  }

  export type UserSettingsUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserSettingsCreateWithoutUserInput, UserSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSettingsCreateOrConnectWithoutUserInput
    upsert?: UserSettingsUpsertWithoutUserInput
    disconnect?: UserSettingsWhereInput | boolean
    delete?: UserSettingsWhereInput | boolean
    connect?: UserSettingsWhereUniqueInput
    update?: XOR<XOR<UserSettingsUpdateToOneWithWhereWithoutUserInput, UserSettingsUpdateWithoutUserInput>, UserSettingsUncheckedUpdateWithoutUserInput>
  }

  export type TransactionsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionsCreateWithoutUserInput, TransactionsUncheckedCreateWithoutUserInput> | TransactionsCreateWithoutUserInput[] | TransactionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutUserInput | TransactionsCreateOrConnectWithoutUserInput[]
    upsert?: TransactionsUpsertWithWhereUniqueWithoutUserInput | TransactionsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionsCreateManyUserInputEnvelope
    set?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    disconnect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    delete?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    update?: TransactionsUpdateWithWhereUniqueWithoutUserInput | TransactionsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionsUpdateManyWithWhereWithoutUserInput | TransactionsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
  }

  export type TokensUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TokensCreateWithoutUserInput, TokensUncheckedCreateWithoutUserInput> | TokensCreateWithoutUserInput[] | TokensUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokensCreateOrConnectWithoutUserInput | TokensCreateOrConnectWithoutUserInput[]
    upsert?: TokensUpsertWithWhereUniqueWithoutUserInput | TokensUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TokensCreateManyUserInputEnvelope
    set?: TokensWhereUniqueInput | TokensWhereUniqueInput[]
    disconnect?: TokensWhereUniqueInput | TokensWhereUniqueInput[]
    delete?: TokensWhereUniqueInput | TokensWhereUniqueInput[]
    connect?: TokensWhereUniqueInput | TokensWhereUniqueInput[]
    update?: TokensUpdateWithWhereUniqueWithoutUserInput | TokensUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TokensUpdateManyWithWhereWithoutUserInput | TokensUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TokensScalarWhereInput | TokensScalarWhereInput[]
  }

  export type VerificationCodesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<VerificationCodesCreateWithoutUserInput, VerificationCodesUncheckedCreateWithoutUserInput> | VerificationCodesCreateWithoutUserInput[] | VerificationCodesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VerificationCodesCreateOrConnectWithoutUserInput | VerificationCodesCreateOrConnectWithoutUserInput[]
    upsert?: VerificationCodesUpsertWithWhereUniqueWithoutUserInput | VerificationCodesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VerificationCodesCreateManyUserInputEnvelope
    set?: VerificationCodesWhereUniqueInput | VerificationCodesWhereUniqueInput[]
    disconnect?: VerificationCodesWhereUniqueInput | VerificationCodesWhereUniqueInput[]
    delete?: VerificationCodesWhereUniqueInput | VerificationCodesWhereUniqueInput[]
    connect?: VerificationCodesWhereUniqueInput | VerificationCodesWhereUniqueInput[]
    update?: VerificationCodesUpdateWithWhereUniqueWithoutUserInput | VerificationCodesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VerificationCodesUpdateManyWithWhereWithoutUserInput | VerificationCodesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VerificationCodesScalarWhereInput | VerificationCodesScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutVerification_codesInput = {
    create?: XOR<UserCreateWithoutVerification_codesInput, UserUncheckedCreateWithoutVerification_codesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVerification_codesInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumVerificationCodeTypeFieldUpdateOperationsInput = {
    set?: $Enums.VerificationCodeType
  }

  export type UserUpdateOneRequiredWithoutVerification_codesNestedInput = {
    create?: XOR<UserCreateWithoutVerification_codesInput, UserUncheckedCreateWithoutVerification_codesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVerification_codesInput
    upsert?: UserUpsertWithoutVerification_codesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVerification_codesInput, UserUpdateWithoutVerification_codesInput>, UserUncheckedUpdateWithoutVerification_codesInput>
  }

  export type UserCreateNestedOneWithoutSettingsInput = {
    create?: XOR<UserCreateWithoutSettingsInput, UserUncheckedCreateWithoutSettingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSettingsInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutSettingsNestedInput = {
    create?: XOR<UserCreateWithoutSettingsInput, UserUncheckedCreateWithoutSettingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSettingsInput
    upsert?: UserUpsertWithoutSettingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSettingsInput, UserUpdateWithoutSettingsInput>, UserUncheckedUpdateWithoutSettingsInput>
  }

  export type UserCreateNestedOneWithoutActivated_promosInput = {
    create?: XOR<UserCreateWithoutActivated_promosInput, UserUncheckedCreateWithoutActivated_promosInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivated_promosInput
    connect?: UserWhereUniqueInput
  }

  export type EnumPromoTypeFieldUpdateOperationsInput = {
    set?: $Enums.PromoType
  }

  export type UserUpdateOneWithoutActivated_promosNestedInput = {
    create?: XOR<UserCreateWithoutActivated_promosInput, UserUncheckedCreateWithoutActivated_promosInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivated_promosInput
    upsert?: UserUpsertWithoutActivated_promosInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutActivated_promosInput, UserUpdateWithoutActivated_promosInput>, UserUncheckedUpdateWithoutActivated_promosInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedOneWithoutGame_accountsInput = {
    create?: XOR<UserCreateWithoutGame_accountsInput, UserUncheckedCreateWithoutGame_accountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGame_accountsInput
    connect?: UserWhereUniqueInput
  }

  export type RaceCreateNestedManyWithoutWinnerInput = {
    create?: XOR<RaceCreateWithoutWinnerInput, RaceUncheckedCreateWithoutWinnerInput> | RaceCreateWithoutWinnerInput[] | RaceUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: RaceCreateOrConnectWithoutWinnerInput | RaceCreateOrConnectWithoutWinnerInput[]
    createMany?: RaceCreateManyWinnerInputEnvelope
    connect?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
  }

  export type RaceParticipantCreateNestedManyWithoutGame_accountInput = {
    create?: XOR<RaceParticipantCreateWithoutGame_accountInput, RaceParticipantUncheckedCreateWithoutGame_accountInput> | RaceParticipantCreateWithoutGame_accountInput[] | RaceParticipantUncheckedCreateWithoutGame_accountInput[]
    connectOrCreate?: RaceParticipantCreateOrConnectWithoutGame_accountInput | RaceParticipantCreateOrConnectWithoutGame_accountInput[]
    createMany?: RaceParticipantCreateManyGame_accountInputEnvelope
    connect?: RaceParticipantWhereUniqueInput | RaceParticipantWhereUniqueInput[]
  }

  export type RaceWitnessCreateNestedManyWithoutObserverInput = {
    create?: XOR<RaceWitnessCreateWithoutObserverInput, RaceWitnessUncheckedCreateWithoutObserverInput> | RaceWitnessCreateWithoutObserverInput[] | RaceWitnessUncheckedCreateWithoutObserverInput[]
    connectOrCreate?: RaceWitnessCreateOrConnectWithoutObserverInput | RaceWitnessCreateOrConnectWithoutObserverInput[]
    createMany?: RaceWitnessCreateManyObserverInputEnvelope
    connect?: RaceWitnessWhereUniqueInput | RaceWitnessWhereUniqueInput[]
  }

  export type RaceWitnessCreateNestedManyWithoutSuspectInput = {
    create?: XOR<RaceWitnessCreateWithoutSuspectInput, RaceWitnessUncheckedCreateWithoutSuspectInput> | RaceWitnessCreateWithoutSuspectInput[] | RaceWitnessUncheckedCreateWithoutSuspectInput[]
    connectOrCreate?: RaceWitnessCreateOrConnectWithoutSuspectInput | RaceWitnessCreateOrConnectWithoutSuspectInput[]
    createMany?: RaceWitnessCreateManySuspectInputEnvelope
    connect?: RaceWitnessWhereUniqueInput | RaceWitnessWhereUniqueInput[]
  }

  export type RaceUncheckedCreateNestedManyWithoutWinnerInput = {
    create?: XOR<RaceCreateWithoutWinnerInput, RaceUncheckedCreateWithoutWinnerInput> | RaceCreateWithoutWinnerInput[] | RaceUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: RaceCreateOrConnectWithoutWinnerInput | RaceCreateOrConnectWithoutWinnerInput[]
    createMany?: RaceCreateManyWinnerInputEnvelope
    connect?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
  }

  export type RaceParticipantUncheckedCreateNestedManyWithoutGame_accountInput = {
    create?: XOR<RaceParticipantCreateWithoutGame_accountInput, RaceParticipantUncheckedCreateWithoutGame_accountInput> | RaceParticipantCreateWithoutGame_accountInput[] | RaceParticipantUncheckedCreateWithoutGame_accountInput[]
    connectOrCreate?: RaceParticipantCreateOrConnectWithoutGame_accountInput | RaceParticipantCreateOrConnectWithoutGame_accountInput[]
    createMany?: RaceParticipantCreateManyGame_accountInputEnvelope
    connect?: RaceParticipantWhereUniqueInput | RaceParticipantWhereUniqueInput[]
  }

  export type RaceWitnessUncheckedCreateNestedManyWithoutObserverInput = {
    create?: XOR<RaceWitnessCreateWithoutObserverInput, RaceWitnessUncheckedCreateWithoutObserverInput> | RaceWitnessCreateWithoutObserverInput[] | RaceWitnessUncheckedCreateWithoutObserverInput[]
    connectOrCreate?: RaceWitnessCreateOrConnectWithoutObserverInput | RaceWitnessCreateOrConnectWithoutObserverInput[]
    createMany?: RaceWitnessCreateManyObserverInputEnvelope
    connect?: RaceWitnessWhereUniqueInput | RaceWitnessWhereUniqueInput[]
  }

  export type RaceWitnessUncheckedCreateNestedManyWithoutSuspectInput = {
    create?: XOR<RaceWitnessCreateWithoutSuspectInput, RaceWitnessUncheckedCreateWithoutSuspectInput> | RaceWitnessCreateWithoutSuspectInput[] | RaceWitnessUncheckedCreateWithoutSuspectInput[]
    connectOrCreate?: RaceWitnessCreateOrConnectWithoutSuspectInput | RaceWitnessCreateOrConnectWithoutSuspectInput[]
    createMany?: RaceWitnessCreateManySuspectInputEnvelope
    connect?: RaceWitnessWhereUniqueInput | RaceWitnessWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutGame_accountsNestedInput = {
    create?: XOR<UserCreateWithoutGame_accountsInput, UserUncheckedCreateWithoutGame_accountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGame_accountsInput
    upsert?: UserUpsertWithoutGame_accountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGame_accountsInput, UserUpdateWithoutGame_accountsInput>, UserUncheckedUpdateWithoutGame_accountsInput>
  }

  export type RaceUpdateManyWithoutWinnerNestedInput = {
    create?: XOR<RaceCreateWithoutWinnerInput, RaceUncheckedCreateWithoutWinnerInput> | RaceCreateWithoutWinnerInput[] | RaceUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: RaceCreateOrConnectWithoutWinnerInput | RaceCreateOrConnectWithoutWinnerInput[]
    upsert?: RaceUpsertWithWhereUniqueWithoutWinnerInput | RaceUpsertWithWhereUniqueWithoutWinnerInput[]
    createMany?: RaceCreateManyWinnerInputEnvelope
    set?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
    disconnect?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
    delete?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
    connect?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
    update?: RaceUpdateWithWhereUniqueWithoutWinnerInput | RaceUpdateWithWhereUniqueWithoutWinnerInput[]
    updateMany?: RaceUpdateManyWithWhereWithoutWinnerInput | RaceUpdateManyWithWhereWithoutWinnerInput[]
    deleteMany?: RaceScalarWhereInput | RaceScalarWhereInput[]
  }

  export type RaceParticipantUpdateManyWithoutGame_accountNestedInput = {
    create?: XOR<RaceParticipantCreateWithoutGame_accountInput, RaceParticipantUncheckedCreateWithoutGame_accountInput> | RaceParticipantCreateWithoutGame_accountInput[] | RaceParticipantUncheckedCreateWithoutGame_accountInput[]
    connectOrCreate?: RaceParticipantCreateOrConnectWithoutGame_accountInput | RaceParticipantCreateOrConnectWithoutGame_accountInput[]
    upsert?: RaceParticipantUpsertWithWhereUniqueWithoutGame_accountInput | RaceParticipantUpsertWithWhereUniqueWithoutGame_accountInput[]
    createMany?: RaceParticipantCreateManyGame_accountInputEnvelope
    set?: RaceParticipantWhereUniqueInput | RaceParticipantWhereUniqueInput[]
    disconnect?: RaceParticipantWhereUniqueInput | RaceParticipantWhereUniqueInput[]
    delete?: RaceParticipantWhereUniqueInput | RaceParticipantWhereUniqueInput[]
    connect?: RaceParticipantWhereUniqueInput | RaceParticipantWhereUniqueInput[]
    update?: RaceParticipantUpdateWithWhereUniqueWithoutGame_accountInput | RaceParticipantUpdateWithWhereUniqueWithoutGame_accountInput[]
    updateMany?: RaceParticipantUpdateManyWithWhereWithoutGame_accountInput | RaceParticipantUpdateManyWithWhereWithoutGame_accountInput[]
    deleteMany?: RaceParticipantScalarWhereInput | RaceParticipantScalarWhereInput[]
  }

  export type RaceWitnessUpdateManyWithoutObserverNestedInput = {
    create?: XOR<RaceWitnessCreateWithoutObserverInput, RaceWitnessUncheckedCreateWithoutObserverInput> | RaceWitnessCreateWithoutObserverInput[] | RaceWitnessUncheckedCreateWithoutObserverInput[]
    connectOrCreate?: RaceWitnessCreateOrConnectWithoutObserverInput | RaceWitnessCreateOrConnectWithoutObserverInput[]
    upsert?: RaceWitnessUpsertWithWhereUniqueWithoutObserverInput | RaceWitnessUpsertWithWhereUniqueWithoutObserverInput[]
    createMany?: RaceWitnessCreateManyObserverInputEnvelope
    set?: RaceWitnessWhereUniqueInput | RaceWitnessWhereUniqueInput[]
    disconnect?: RaceWitnessWhereUniqueInput | RaceWitnessWhereUniqueInput[]
    delete?: RaceWitnessWhereUniqueInput | RaceWitnessWhereUniqueInput[]
    connect?: RaceWitnessWhereUniqueInput | RaceWitnessWhereUniqueInput[]
    update?: RaceWitnessUpdateWithWhereUniqueWithoutObserverInput | RaceWitnessUpdateWithWhereUniqueWithoutObserverInput[]
    updateMany?: RaceWitnessUpdateManyWithWhereWithoutObserverInput | RaceWitnessUpdateManyWithWhereWithoutObserverInput[]
    deleteMany?: RaceWitnessScalarWhereInput | RaceWitnessScalarWhereInput[]
  }

  export type RaceWitnessUpdateManyWithoutSuspectNestedInput = {
    create?: XOR<RaceWitnessCreateWithoutSuspectInput, RaceWitnessUncheckedCreateWithoutSuspectInput> | RaceWitnessCreateWithoutSuspectInput[] | RaceWitnessUncheckedCreateWithoutSuspectInput[]
    connectOrCreate?: RaceWitnessCreateOrConnectWithoutSuspectInput | RaceWitnessCreateOrConnectWithoutSuspectInput[]
    upsert?: RaceWitnessUpsertWithWhereUniqueWithoutSuspectInput | RaceWitnessUpsertWithWhereUniqueWithoutSuspectInput[]
    createMany?: RaceWitnessCreateManySuspectInputEnvelope
    set?: RaceWitnessWhereUniqueInput | RaceWitnessWhereUniqueInput[]
    disconnect?: RaceWitnessWhereUniqueInput | RaceWitnessWhereUniqueInput[]
    delete?: RaceWitnessWhereUniqueInput | RaceWitnessWhereUniqueInput[]
    connect?: RaceWitnessWhereUniqueInput | RaceWitnessWhereUniqueInput[]
    update?: RaceWitnessUpdateWithWhereUniqueWithoutSuspectInput | RaceWitnessUpdateWithWhereUniqueWithoutSuspectInput[]
    updateMany?: RaceWitnessUpdateManyWithWhereWithoutSuspectInput | RaceWitnessUpdateManyWithWhereWithoutSuspectInput[]
    deleteMany?: RaceWitnessScalarWhereInput | RaceWitnessScalarWhereInput[]
  }

  export type RaceUncheckedUpdateManyWithoutWinnerNestedInput = {
    create?: XOR<RaceCreateWithoutWinnerInput, RaceUncheckedCreateWithoutWinnerInput> | RaceCreateWithoutWinnerInput[] | RaceUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: RaceCreateOrConnectWithoutWinnerInput | RaceCreateOrConnectWithoutWinnerInput[]
    upsert?: RaceUpsertWithWhereUniqueWithoutWinnerInput | RaceUpsertWithWhereUniqueWithoutWinnerInput[]
    createMany?: RaceCreateManyWinnerInputEnvelope
    set?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
    disconnect?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
    delete?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
    connect?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
    update?: RaceUpdateWithWhereUniqueWithoutWinnerInput | RaceUpdateWithWhereUniqueWithoutWinnerInput[]
    updateMany?: RaceUpdateManyWithWhereWithoutWinnerInput | RaceUpdateManyWithWhereWithoutWinnerInput[]
    deleteMany?: RaceScalarWhereInput | RaceScalarWhereInput[]
  }

  export type RaceParticipantUncheckedUpdateManyWithoutGame_accountNestedInput = {
    create?: XOR<RaceParticipantCreateWithoutGame_accountInput, RaceParticipantUncheckedCreateWithoutGame_accountInput> | RaceParticipantCreateWithoutGame_accountInput[] | RaceParticipantUncheckedCreateWithoutGame_accountInput[]
    connectOrCreate?: RaceParticipantCreateOrConnectWithoutGame_accountInput | RaceParticipantCreateOrConnectWithoutGame_accountInput[]
    upsert?: RaceParticipantUpsertWithWhereUniqueWithoutGame_accountInput | RaceParticipantUpsertWithWhereUniqueWithoutGame_accountInput[]
    createMany?: RaceParticipantCreateManyGame_accountInputEnvelope
    set?: RaceParticipantWhereUniqueInput | RaceParticipantWhereUniqueInput[]
    disconnect?: RaceParticipantWhereUniqueInput | RaceParticipantWhereUniqueInput[]
    delete?: RaceParticipantWhereUniqueInput | RaceParticipantWhereUniqueInput[]
    connect?: RaceParticipantWhereUniqueInput | RaceParticipantWhereUniqueInput[]
    update?: RaceParticipantUpdateWithWhereUniqueWithoutGame_accountInput | RaceParticipantUpdateWithWhereUniqueWithoutGame_accountInput[]
    updateMany?: RaceParticipantUpdateManyWithWhereWithoutGame_accountInput | RaceParticipantUpdateManyWithWhereWithoutGame_accountInput[]
    deleteMany?: RaceParticipantScalarWhereInput | RaceParticipantScalarWhereInput[]
  }

  export type RaceWitnessUncheckedUpdateManyWithoutObserverNestedInput = {
    create?: XOR<RaceWitnessCreateWithoutObserverInput, RaceWitnessUncheckedCreateWithoutObserverInput> | RaceWitnessCreateWithoutObserverInput[] | RaceWitnessUncheckedCreateWithoutObserverInput[]
    connectOrCreate?: RaceWitnessCreateOrConnectWithoutObserverInput | RaceWitnessCreateOrConnectWithoutObserverInput[]
    upsert?: RaceWitnessUpsertWithWhereUniqueWithoutObserverInput | RaceWitnessUpsertWithWhereUniqueWithoutObserverInput[]
    createMany?: RaceWitnessCreateManyObserverInputEnvelope
    set?: RaceWitnessWhereUniqueInput | RaceWitnessWhereUniqueInput[]
    disconnect?: RaceWitnessWhereUniqueInput | RaceWitnessWhereUniqueInput[]
    delete?: RaceWitnessWhereUniqueInput | RaceWitnessWhereUniqueInput[]
    connect?: RaceWitnessWhereUniqueInput | RaceWitnessWhereUniqueInput[]
    update?: RaceWitnessUpdateWithWhereUniqueWithoutObserverInput | RaceWitnessUpdateWithWhereUniqueWithoutObserverInput[]
    updateMany?: RaceWitnessUpdateManyWithWhereWithoutObserverInput | RaceWitnessUpdateManyWithWhereWithoutObserverInput[]
    deleteMany?: RaceWitnessScalarWhereInput | RaceWitnessScalarWhereInput[]
  }

  export type RaceWitnessUncheckedUpdateManyWithoutSuspectNestedInput = {
    create?: XOR<RaceWitnessCreateWithoutSuspectInput, RaceWitnessUncheckedCreateWithoutSuspectInput> | RaceWitnessCreateWithoutSuspectInput[] | RaceWitnessUncheckedCreateWithoutSuspectInput[]
    connectOrCreate?: RaceWitnessCreateOrConnectWithoutSuspectInput | RaceWitnessCreateOrConnectWithoutSuspectInput[]
    upsert?: RaceWitnessUpsertWithWhereUniqueWithoutSuspectInput | RaceWitnessUpsertWithWhereUniqueWithoutSuspectInput[]
    createMany?: RaceWitnessCreateManySuspectInputEnvelope
    set?: RaceWitnessWhereUniqueInput | RaceWitnessWhereUniqueInput[]
    disconnect?: RaceWitnessWhereUniqueInput | RaceWitnessWhereUniqueInput[]
    delete?: RaceWitnessWhereUniqueInput | RaceWitnessWhereUniqueInput[]
    connect?: RaceWitnessWhereUniqueInput | RaceWitnessWhereUniqueInput[]
    update?: RaceWitnessUpdateWithWhereUniqueWithoutSuspectInput | RaceWitnessUpdateWithWhereUniqueWithoutSuspectInput[]
    updateMany?: RaceWitnessUpdateManyWithWhereWithoutSuspectInput | RaceWitnessUpdateManyWithWhereWithoutSuspectInput[]
    deleteMany?: RaceWitnessScalarWhereInput | RaceWitnessScalarWhereInput[]
  }

  export type RaceCreateNestedManyWithoutLocationInput = {
    create?: XOR<RaceCreateWithoutLocationInput, RaceUncheckedCreateWithoutLocationInput> | RaceCreateWithoutLocationInput[] | RaceUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: RaceCreateOrConnectWithoutLocationInput | RaceCreateOrConnectWithoutLocationInput[]
    createMany?: RaceCreateManyLocationInputEnvelope
    connect?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
  }

  export type RaceUncheckedCreateNestedManyWithoutLocationInput = {
    create?: XOR<RaceCreateWithoutLocationInput, RaceUncheckedCreateWithoutLocationInput> | RaceCreateWithoutLocationInput[] | RaceUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: RaceCreateOrConnectWithoutLocationInput | RaceCreateOrConnectWithoutLocationInput[]
    createMany?: RaceCreateManyLocationInputEnvelope
    connect?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
  }

  export type RaceUpdateManyWithoutLocationNestedInput = {
    create?: XOR<RaceCreateWithoutLocationInput, RaceUncheckedCreateWithoutLocationInput> | RaceCreateWithoutLocationInput[] | RaceUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: RaceCreateOrConnectWithoutLocationInput | RaceCreateOrConnectWithoutLocationInput[]
    upsert?: RaceUpsertWithWhereUniqueWithoutLocationInput | RaceUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: RaceCreateManyLocationInputEnvelope
    set?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
    disconnect?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
    delete?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
    connect?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
    update?: RaceUpdateWithWhereUniqueWithoutLocationInput | RaceUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: RaceUpdateManyWithWhereWithoutLocationInput | RaceUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: RaceScalarWhereInput | RaceScalarWhereInput[]
  }

  export type RaceUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<RaceCreateWithoutLocationInput, RaceUncheckedCreateWithoutLocationInput> | RaceCreateWithoutLocationInput[] | RaceUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: RaceCreateOrConnectWithoutLocationInput | RaceCreateOrConnectWithoutLocationInput[]
    upsert?: RaceUpsertWithWhereUniqueWithoutLocationInput | RaceUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: RaceCreateManyLocationInputEnvelope
    set?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
    disconnect?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
    delete?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
    connect?: RaceWhereUniqueInput | RaceWhereUniqueInput[]
    update?: RaceUpdateWithWhereUniqueWithoutLocationInput | RaceUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: RaceUpdateManyWithWhereWithoutLocationInput | RaceUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: RaceScalarWhereInput | RaceScalarWhereInput[]
  }

  export type LocationCreateNestedOneWithoutRacesInput = {
    create?: XOR<LocationCreateWithoutRacesInput, LocationUncheckedCreateWithoutRacesInput>
    connectOrCreate?: LocationCreateOrConnectWithoutRacesInput
    connect?: LocationWhereUniqueInput
  }

  export type GameAccountCreateNestedOneWithoutRaces_wonInput = {
    create?: XOR<GameAccountCreateWithoutRaces_wonInput, GameAccountUncheckedCreateWithoutRaces_wonInput>
    connectOrCreate?: GameAccountCreateOrConnectWithoutRaces_wonInput
    connect?: GameAccountWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCreated_racesInput = {
    create?: XOR<UserCreateWithoutCreated_racesInput, UserUncheckedCreateWithoutCreated_racesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreated_racesInput
    connect?: UserWhereUniqueInput
  }

  export type RaceParticipantCreateNestedManyWithoutRaceInput = {
    create?: XOR<RaceParticipantCreateWithoutRaceInput, RaceParticipantUncheckedCreateWithoutRaceInput> | RaceParticipantCreateWithoutRaceInput[] | RaceParticipantUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: RaceParticipantCreateOrConnectWithoutRaceInput | RaceParticipantCreateOrConnectWithoutRaceInput[]
    createMany?: RaceParticipantCreateManyRaceInputEnvelope
    connect?: RaceParticipantWhereUniqueInput | RaceParticipantWhereUniqueInput[]
  }

  export type RaceWitnessCreateNestedManyWithoutRaceInput = {
    create?: XOR<RaceWitnessCreateWithoutRaceInput, RaceWitnessUncheckedCreateWithoutRaceInput> | RaceWitnessCreateWithoutRaceInput[] | RaceWitnessUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: RaceWitnessCreateOrConnectWithoutRaceInput | RaceWitnessCreateOrConnectWithoutRaceInput[]
    createMany?: RaceWitnessCreateManyRaceInputEnvelope
    connect?: RaceWitnessWhereUniqueInput | RaceWitnessWhereUniqueInput[]
  }

  export type RaceParticipantUncheckedCreateNestedManyWithoutRaceInput = {
    create?: XOR<RaceParticipantCreateWithoutRaceInput, RaceParticipantUncheckedCreateWithoutRaceInput> | RaceParticipantCreateWithoutRaceInput[] | RaceParticipantUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: RaceParticipantCreateOrConnectWithoutRaceInput | RaceParticipantCreateOrConnectWithoutRaceInput[]
    createMany?: RaceParticipantCreateManyRaceInputEnvelope
    connect?: RaceParticipantWhereUniqueInput | RaceParticipantWhereUniqueInput[]
  }

  export type RaceWitnessUncheckedCreateNestedManyWithoutRaceInput = {
    create?: XOR<RaceWitnessCreateWithoutRaceInput, RaceWitnessUncheckedCreateWithoutRaceInput> | RaceWitnessCreateWithoutRaceInput[] | RaceWitnessUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: RaceWitnessCreateOrConnectWithoutRaceInput | RaceWitnessCreateOrConnectWithoutRaceInput[]
    createMany?: RaceWitnessCreateManyRaceInputEnvelope
    connect?: RaceWitnessWhereUniqueInput | RaceWitnessWhereUniqueInput[]
  }

  export type EnumRaceStatusFieldUpdateOperationsInput = {
    set?: $Enums.RaceStatus
  }

  export type LocationUpdateOneRequiredWithoutRacesNestedInput = {
    create?: XOR<LocationCreateWithoutRacesInput, LocationUncheckedCreateWithoutRacesInput>
    connectOrCreate?: LocationCreateOrConnectWithoutRacesInput
    upsert?: LocationUpsertWithoutRacesInput
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutRacesInput, LocationUpdateWithoutRacesInput>, LocationUncheckedUpdateWithoutRacesInput>
  }

  export type GameAccountUpdateOneWithoutRaces_wonNestedInput = {
    create?: XOR<GameAccountCreateWithoutRaces_wonInput, GameAccountUncheckedCreateWithoutRaces_wonInput>
    connectOrCreate?: GameAccountCreateOrConnectWithoutRaces_wonInput
    upsert?: GameAccountUpsertWithoutRaces_wonInput
    disconnect?: GameAccountWhereInput | boolean
    delete?: GameAccountWhereInput | boolean
    connect?: GameAccountWhereUniqueInput
    update?: XOR<XOR<GameAccountUpdateToOneWithWhereWithoutRaces_wonInput, GameAccountUpdateWithoutRaces_wonInput>, GameAccountUncheckedUpdateWithoutRaces_wonInput>
  }

  export type UserUpdateOneWithoutCreated_racesNestedInput = {
    create?: XOR<UserCreateWithoutCreated_racesInput, UserUncheckedCreateWithoutCreated_racesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreated_racesInput
    upsert?: UserUpsertWithoutCreated_racesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreated_racesInput, UserUpdateWithoutCreated_racesInput>, UserUncheckedUpdateWithoutCreated_racesInput>
  }

  export type RaceParticipantUpdateManyWithoutRaceNestedInput = {
    create?: XOR<RaceParticipantCreateWithoutRaceInput, RaceParticipantUncheckedCreateWithoutRaceInput> | RaceParticipantCreateWithoutRaceInput[] | RaceParticipantUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: RaceParticipantCreateOrConnectWithoutRaceInput | RaceParticipantCreateOrConnectWithoutRaceInput[]
    upsert?: RaceParticipantUpsertWithWhereUniqueWithoutRaceInput | RaceParticipantUpsertWithWhereUniqueWithoutRaceInput[]
    createMany?: RaceParticipantCreateManyRaceInputEnvelope
    set?: RaceParticipantWhereUniqueInput | RaceParticipantWhereUniqueInput[]
    disconnect?: RaceParticipantWhereUniqueInput | RaceParticipantWhereUniqueInput[]
    delete?: RaceParticipantWhereUniqueInput | RaceParticipantWhereUniqueInput[]
    connect?: RaceParticipantWhereUniqueInput | RaceParticipantWhereUniqueInput[]
    update?: RaceParticipantUpdateWithWhereUniqueWithoutRaceInput | RaceParticipantUpdateWithWhereUniqueWithoutRaceInput[]
    updateMany?: RaceParticipantUpdateManyWithWhereWithoutRaceInput | RaceParticipantUpdateManyWithWhereWithoutRaceInput[]
    deleteMany?: RaceParticipantScalarWhereInput | RaceParticipantScalarWhereInput[]
  }

  export type RaceWitnessUpdateManyWithoutRaceNestedInput = {
    create?: XOR<RaceWitnessCreateWithoutRaceInput, RaceWitnessUncheckedCreateWithoutRaceInput> | RaceWitnessCreateWithoutRaceInput[] | RaceWitnessUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: RaceWitnessCreateOrConnectWithoutRaceInput | RaceWitnessCreateOrConnectWithoutRaceInput[]
    upsert?: RaceWitnessUpsertWithWhereUniqueWithoutRaceInput | RaceWitnessUpsertWithWhereUniqueWithoutRaceInput[]
    createMany?: RaceWitnessCreateManyRaceInputEnvelope
    set?: RaceWitnessWhereUniqueInput | RaceWitnessWhereUniqueInput[]
    disconnect?: RaceWitnessWhereUniqueInput | RaceWitnessWhereUniqueInput[]
    delete?: RaceWitnessWhereUniqueInput | RaceWitnessWhereUniqueInput[]
    connect?: RaceWitnessWhereUniqueInput | RaceWitnessWhereUniqueInput[]
    update?: RaceWitnessUpdateWithWhereUniqueWithoutRaceInput | RaceWitnessUpdateWithWhereUniqueWithoutRaceInput[]
    updateMany?: RaceWitnessUpdateManyWithWhereWithoutRaceInput | RaceWitnessUpdateManyWithWhereWithoutRaceInput[]
    deleteMany?: RaceWitnessScalarWhereInput | RaceWitnessScalarWhereInput[]
  }

  export type RaceParticipantUncheckedUpdateManyWithoutRaceNestedInput = {
    create?: XOR<RaceParticipantCreateWithoutRaceInput, RaceParticipantUncheckedCreateWithoutRaceInput> | RaceParticipantCreateWithoutRaceInput[] | RaceParticipantUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: RaceParticipantCreateOrConnectWithoutRaceInput | RaceParticipantCreateOrConnectWithoutRaceInput[]
    upsert?: RaceParticipantUpsertWithWhereUniqueWithoutRaceInput | RaceParticipantUpsertWithWhereUniqueWithoutRaceInput[]
    createMany?: RaceParticipantCreateManyRaceInputEnvelope
    set?: RaceParticipantWhereUniqueInput | RaceParticipantWhereUniqueInput[]
    disconnect?: RaceParticipantWhereUniqueInput | RaceParticipantWhereUniqueInput[]
    delete?: RaceParticipantWhereUniqueInput | RaceParticipantWhereUniqueInput[]
    connect?: RaceParticipantWhereUniqueInput | RaceParticipantWhereUniqueInput[]
    update?: RaceParticipantUpdateWithWhereUniqueWithoutRaceInput | RaceParticipantUpdateWithWhereUniqueWithoutRaceInput[]
    updateMany?: RaceParticipantUpdateManyWithWhereWithoutRaceInput | RaceParticipantUpdateManyWithWhereWithoutRaceInput[]
    deleteMany?: RaceParticipantScalarWhereInput | RaceParticipantScalarWhereInput[]
  }

  export type RaceWitnessUncheckedUpdateManyWithoutRaceNestedInput = {
    create?: XOR<RaceWitnessCreateWithoutRaceInput, RaceWitnessUncheckedCreateWithoutRaceInput> | RaceWitnessCreateWithoutRaceInput[] | RaceWitnessUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: RaceWitnessCreateOrConnectWithoutRaceInput | RaceWitnessCreateOrConnectWithoutRaceInput[]
    upsert?: RaceWitnessUpsertWithWhereUniqueWithoutRaceInput | RaceWitnessUpsertWithWhereUniqueWithoutRaceInput[]
    createMany?: RaceWitnessCreateManyRaceInputEnvelope
    set?: RaceWitnessWhereUniqueInput | RaceWitnessWhereUniqueInput[]
    disconnect?: RaceWitnessWhereUniqueInput | RaceWitnessWhereUniqueInput[]
    delete?: RaceWitnessWhereUniqueInput | RaceWitnessWhereUniqueInput[]
    connect?: RaceWitnessWhereUniqueInput | RaceWitnessWhereUniqueInput[]
    update?: RaceWitnessUpdateWithWhereUniqueWithoutRaceInput | RaceWitnessUpdateWithWhereUniqueWithoutRaceInput[]
    updateMany?: RaceWitnessUpdateManyWithWhereWithoutRaceInput | RaceWitnessUpdateManyWithWhereWithoutRaceInput[]
    deleteMany?: RaceWitnessScalarWhereInput | RaceWitnessScalarWhereInput[]
  }

  export type RaceCreateNestedOneWithoutParticipantsInput = {
    create?: XOR<RaceCreateWithoutParticipantsInput, RaceUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: RaceCreateOrConnectWithoutParticipantsInput
    connect?: RaceWhereUniqueInput
  }

  export type GameAccountCreateNestedOneWithoutParticipationsInput = {
    create?: XOR<GameAccountCreateWithoutParticipationsInput, GameAccountUncheckedCreateWithoutParticipationsInput>
    connectOrCreate?: GameAccountCreateOrConnectWithoutParticipationsInput
    connect?: GameAccountWhereUniqueInput
  }

  export type RaceTelemetryCreateNestedManyWithoutParticipantInput = {
    create?: XOR<RaceTelemetryCreateWithoutParticipantInput, RaceTelemetryUncheckedCreateWithoutParticipantInput> | RaceTelemetryCreateWithoutParticipantInput[] | RaceTelemetryUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: RaceTelemetryCreateOrConnectWithoutParticipantInput | RaceTelemetryCreateOrConnectWithoutParticipantInput[]
    createMany?: RaceTelemetryCreateManyParticipantInputEnvelope
    connect?: RaceTelemetryWhereUniqueInput | RaceTelemetryWhereUniqueInput[]
  }

  export type RaceTelemetryUncheckedCreateNestedManyWithoutParticipantInput = {
    create?: XOR<RaceTelemetryCreateWithoutParticipantInput, RaceTelemetryUncheckedCreateWithoutParticipantInput> | RaceTelemetryCreateWithoutParticipantInput[] | RaceTelemetryUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: RaceTelemetryCreateOrConnectWithoutParticipantInput | RaceTelemetryCreateOrConnectWithoutParticipantInput[]
    createMany?: RaceTelemetryCreateManyParticipantInputEnvelope
    connect?: RaceTelemetryWhereUniqueInput | RaceTelemetryWhereUniqueInput[]
  }

  export type RaceUpdateOneRequiredWithoutParticipantsNestedInput = {
    create?: XOR<RaceCreateWithoutParticipantsInput, RaceUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: RaceCreateOrConnectWithoutParticipantsInput
    upsert?: RaceUpsertWithoutParticipantsInput
    connect?: RaceWhereUniqueInput
    update?: XOR<XOR<RaceUpdateToOneWithWhereWithoutParticipantsInput, RaceUpdateWithoutParticipantsInput>, RaceUncheckedUpdateWithoutParticipantsInput>
  }

  export type GameAccountUpdateOneRequiredWithoutParticipationsNestedInput = {
    create?: XOR<GameAccountCreateWithoutParticipationsInput, GameAccountUncheckedCreateWithoutParticipationsInput>
    connectOrCreate?: GameAccountCreateOrConnectWithoutParticipationsInput
    upsert?: GameAccountUpsertWithoutParticipationsInput
    connect?: GameAccountWhereUniqueInput
    update?: XOR<XOR<GameAccountUpdateToOneWithWhereWithoutParticipationsInput, GameAccountUpdateWithoutParticipationsInput>, GameAccountUncheckedUpdateWithoutParticipationsInput>
  }

  export type RaceTelemetryUpdateManyWithoutParticipantNestedInput = {
    create?: XOR<RaceTelemetryCreateWithoutParticipantInput, RaceTelemetryUncheckedCreateWithoutParticipantInput> | RaceTelemetryCreateWithoutParticipantInput[] | RaceTelemetryUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: RaceTelemetryCreateOrConnectWithoutParticipantInput | RaceTelemetryCreateOrConnectWithoutParticipantInput[]
    upsert?: RaceTelemetryUpsertWithWhereUniqueWithoutParticipantInput | RaceTelemetryUpsertWithWhereUniqueWithoutParticipantInput[]
    createMany?: RaceTelemetryCreateManyParticipantInputEnvelope
    set?: RaceTelemetryWhereUniqueInput | RaceTelemetryWhereUniqueInput[]
    disconnect?: RaceTelemetryWhereUniqueInput | RaceTelemetryWhereUniqueInput[]
    delete?: RaceTelemetryWhereUniqueInput | RaceTelemetryWhereUniqueInput[]
    connect?: RaceTelemetryWhereUniqueInput | RaceTelemetryWhereUniqueInput[]
    update?: RaceTelemetryUpdateWithWhereUniqueWithoutParticipantInput | RaceTelemetryUpdateWithWhereUniqueWithoutParticipantInput[]
    updateMany?: RaceTelemetryUpdateManyWithWhereWithoutParticipantInput | RaceTelemetryUpdateManyWithWhereWithoutParticipantInput[]
    deleteMany?: RaceTelemetryScalarWhereInput | RaceTelemetryScalarWhereInput[]
  }

  export type RaceTelemetryUncheckedUpdateManyWithoutParticipantNestedInput = {
    create?: XOR<RaceTelemetryCreateWithoutParticipantInput, RaceTelemetryUncheckedCreateWithoutParticipantInput> | RaceTelemetryCreateWithoutParticipantInput[] | RaceTelemetryUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: RaceTelemetryCreateOrConnectWithoutParticipantInput | RaceTelemetryCreateOrConnectWithoutParticipantInput[]
    upsert?: RaceTelemetryUpsertWithWhereUniqueWithoutParticipantInput | RaceTelemetryUpsertWithWhereUniqueWithoutParticipantInput[]
    createMany?: RaceTelemetryCreateManyParticipantInputEnvelope
    set?: RaceTelemetryWhereUniqueInput | RaceTelemetryWhereUniqueInput[]
    disconnect?: RaceTelemetryWhereUniqueInput | RaceTelemetryWhereUniqueInput[]
    delete?: RaceTelemetryWhereUniqueInput | RaceTelemetryWhereUniqueInput[]
    connect?: RaceTelemetryWhereUniqueInput | RaceTelemetryWhereUniqueInput[]
    update?: RaceTelemetryUpdateWithWhereUniqueWithoutParticipantInput | RaceTelemetryUpdateWithWhereUniqueWithoutParticipantInput[]
    updateMany?: RaceTelemetryUpdateManyWithWhereWithoutParticipantInput | RaceTelemetryUpdateManyWithWhereWithoutParticipantInput[]
    deleteMany?: RaceTelemetryScalarWhereInput | RaceTelemetryScalarWhereInput[]
  }

  export type RaceCreateNestedOneWithoutWitnessesInput = {
    create?: XOR<RaceCreateWithoutWitnessesInput, RaceUncheckedCreateWithoutWitnessesInput>
    connectOrCreate?: RaceCreateOrConnectWithoutWitnessesInput
    connect?: RaceWhereUniqueInput
  }

  export type GameAccountCreateNestedOneWithoutSightings_observedInput = {
    create?: XOR<GameAccountCreateWithoutSightings_observedInput, GameAccountUncheckedCreateWithoutSightings_observedInput>
    connectOrCreate?: GameAccountCreateOrConnectWithoutSightings_observedInput
    connect?: GameAccountWhereUniqueInput
  }

  export type GameAccountCreateNestedOneWithoutSightings_suspectInput = {
    create?: XOR<GameAccountCreateWithoutSightings_suspectInput, GameAccountUncheckedCreateWithoutSightings_suspectInput>
    connectOrCreate?: GameAccountCreateOrConnectWithoutSightings_suspectInput
    connect?: GameAccountWhereUniqueInput
  }

  export type RaceUpdateOneRequiredWithoutWitnessesNestedInput = {
    create?: XOR<RaceCreateWithoutWitnessesInput, RaceUncheckedCreateWithoutWitnessesInput>
    connectOrCreate?: RaceCreateOrConnectWithoutWitnessesInput
    upsert?: RaceUpsertWithoutWitnessesInput
    connect?: RaceWhereUniqueInput
    update?: XOR<XOR<RaceUpdateToOneWithWhereWithoutWitnessesInput, RaceUpdateWithoutWitnessesInput>, RaceUncheckedUpdateWithoutWitnessesInput>
  }

  export type GameAccountUpdateOneRequiredWithoutSightings_observedNestedInput = {
    create?: XOR<GameAccountCreateWithoutSightings_observedInput, GameAccountUncheckedCreateWithoutSightings_observedInput>
    connectOrCreate?: GameAccountCreateOrConnectWithoutSightings_observedInput
    upsert?: GameAccountUpsertWithoutSightings_observedInput
    connect?: GameAccountWhereUniqueInput
    update?: XOR<XOR<GameAccountUpdateToOneWithWhereWithoutSightings_observedInput, GameAccountUpdateWithoutSightings_observedInput>, GameAccountUncheckedUpdateWithoutSightings_observedInput>
  }

  export type GameAccountUpdateOneRequiredWithoutSightings_suspectNestedInput = {
    create?: XOR<GameAccountCreateWithoutSightings_suspectInput, GameAccountUncheckedCreateWithoutSightings_suspectInput>
    connectOrCreate?: GameAccountCreateOrConnectWithoutSightings_suspectInput
    upsert?: GameAccountUpsertWithoutSightings_suspectInput
    connect?: GameAccountWhereUniqueInput
    update?: XOR<XOR<GameAccountUpdateToOneWithWhereWithoutSightings_suspectInput, GameAccountUpdateWithoutSightings_suspectInput>, GameAccountUncheckedUpdateWithoutSightings_suspectInput>
  }

  export type RaceParticipantCreateNestedOneWithoutTelemetryInput = {
    create?: XOR<RaceParticipantCreateWithoutTelemetryInput, RaceParticipantUncheckedCreateWithoutTelemetryInput>
    connectOrCreate?: RaceParticipantCreateOrConnectWithoutTelemetryInput
    connect?: RaceParticipantWhereUniqueInput
  }

  export type RaceParticipantUpdateOneRequiredWithoutTelemetryNestedInput = {
    create?: XOR<RaceParticipantCreateWithoutTelemetryInput, RaceParticipantUncheckedCreateWithoutTelemetryInput>
    connectOrCreate?: RaceParticipantCreateOrConnectWithoutTelemetryInput
    upsert?: RaceParticipantUpsertWithoutTelemetryInput
    connect?: RaceParticipantWhereUniqueInput
    update?: XOR<XOR<RaceParticipantUpdateToOneWithWhereWithoutTelemetryInput, RaceParticipantUpdateWithoutTelemetryInput>, RaceParticipantUncheckedUpdateWithoutTelemetryInput>
  }

  export type UserCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type UserUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    upsert?: UserUpsertWithoutTransactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTransactionsInput, UserUpdateWithoutTransactionsInput>, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserCreateNestedOneWithoutWithdrawalsInput = {
    create?: XOR<UserCreateWithoutWithdrawalsInput, UserUncheckedCreateWithoutWithdrawalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWithdrawalsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumWithdrawalStatusFieldUpdateOperationsInput = {
    set?: $Enums.WithdrawalStatus
  }

  export type UserUpdateOneRequiredWithoutWithdrawalsNestedInput = {
    create?: XOR<UserCreateWithoutWithdrawalsInput, UserUncheckedCreateWithoutWithdrawalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWithdrawalsInput
    upsert?: UserUpsertWithoutWithdrawalsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWithdrawalsInput, UserUpdateWithoutWithdrawalsInput>, UserUncheckedUpdateWithoutWithdrawalsInput>
  }

  export type UserCreateNestedOneWithoutTokensInput = {
    create?: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokensInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTokensNestedInput = {
    create?: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokensInput
    upsert?: UserUpsertWithoutTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTokensInput, UserUpdateWithoutTokensInput>, UserUncheckedUpdateWithoutTokensInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumVerificationCodeTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationCodeType | EnumVerificationCodeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationCodeType[] | ListEnumVerificationCodeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VerificationCodeType[] | ListEnumVerificationCodeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVerificationCodeTypeFilter<$PrismaModel> | $Enums.VerificationCodeType
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumVerificationCodeTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationCodeType | EnumVerificationCodeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationCodeType[] | ListEnumVerificationCodeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VerificationCodeType[] | ListEnumVerificationCodeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVerificationCodeTypeWithAggregatesFilter<$PrismaModel> | $Enums.VerificationCodeType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVerificationCodeTypeFilter<$PrismaModel>
    _max?: NestedEnumVerificationCodeTypeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumPromoTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PromoType | EnumPromoTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PromoType[] | ListEnumPromoTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PromoType[] | ListEnumPromoTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPromoTypeFilter<$PrismaModel> | $Enums.PromoType
  }

  export type NestedEnumPromoTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PromoType | EnumPromoTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PromoType[] | ListEnumPromoTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PromoType[] | ListEnumPromoTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPromoTypeWithAggregatesFilter<$PrismaModel> | $Enums.PromoType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPromoTypeFilter<$PrismaModel>
    _max?: NestedEnumPromoTypeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRaceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RaceStatus | EnumRaceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RaceStatus[] | ListEnumRaceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RaceStatus[] | ListEnumRaceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRaceStatusFilter<$PrismaModel> | $Enums.RaceStatus
  }

  export type NestedEnumRaceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RaceStatus | EnumRaceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RaceStatus[] | ListEnumRaceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RaceStatus[] | ListEnumRaceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRaceStatusWithAggregatesFilter<$PrismaModel> | $Enums.RaceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRaceStatusFilter<$PrismaModel>
    _max?: NestedEnumRaceStatusFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NestedEnumWithdrawalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WithdrawalStatus | EnumWithdrawalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WithdrawalStatus[] | ListEnumWithdrawalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WithdrawalStatus[] | ListEnumWithdrawalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWithdrawalStatusFilter<$PrismaModel> | $Enums.WithdrawalStatus
  }

  export type NestedEnumWithdrawalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WithdrawalStatus | EnumWithdrawalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WithdrawalStatus[] | ListEnumWithdrawalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WithdrawalStatus[] | ListEnumWithdrawalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWithdrawalStatusWithAggregatesFilter<$PrismaModel> | $Enums.WithdrawalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWithdrawalStatusFilter<$PrismaModel>
    _max?: NestedEnumWithdrawalStatusFilter<$PrismaModel>
  }

  export type WithdrawalRequestCreateWithoutUserInput = {
    amount: number
    currency?: string
    wallet_address: string
    status?: $Enums.WithdrawalStatus
    rejection_reason?: string | null
    admin_comment?: string | null
    tx_hash?: string | null
    processed_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type WithdrawalRequestUncheckedCreateWithoutUserInput = {
    id?: number
    amount: number
    currency?: string
    wallet_address: string
    status?: $Enums.WithdrawalStatus
    rejection_reason?: string | null
    admin_comment?: string | null
    tx_hash?: string | null
    processed_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type WithdrawalRequestCreateOrConnectWithoutUserInput = {
    where: WithdrawalRequestWhereUniqueInput
    create: XOR<WithdrawalRequestCreateWithoutUserInput, WithdrawalRequestUncheckedCreateWithoutUserInput>
  }

  export type WithdrawalRequestCreateManyUserInputEnvelope = {
    data: WithdrawalRequestCreateManyUserInput | WithdrawalRequestCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PromoCodeCreateWithoutUserInput = {
    code: string
    type: $Enums.PromoType
    value: number
    is_used?: boolean
    used_at?: Date | string | null
    created_at?: Date | string
  }

  export type PromoCodeUncheckedCreateWithoutUserInput = {
    id?: number
    code: string
    type: $Enums.PromoType
    value: number
    is_used?: boolean
    used_at?: Date | string | null
    created_at?: Date | string
  }

  export type PromoCodeCreateOrConnectWithoutUserInput = {
    where: PromoCodeWhereUniqueInput
    create: XOR<PromoCodeCreateWithoutUserInput, PromoCodeUncheckedCreateWithoutUserInput>
  }

  export type PromoCodeCreateManyUserInputEnvelope = {
    data: PromoCodeCreateManyUserInput | PromoCodeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GameAccountCreateWithoutUserInput = {
    nickname: string
    server: number
    verified?: boolean
    wins?: number
    races_won?: RaceCreateNestedManyWithoutWinnerInput
    participations?: RaceParticipantCreateNestedManyWithoutGame_accountInput
    sightings_observed?: RaceWitnessCreateNestedManyWithoutObserverInput
    sightings_suspect?: RaceWitnessCreateNestedManyWithoutSuspectInput
  }

  export type GameAccountUncheckedCreateWithoutUserInput = {
    id?: number
    nickname: string
    server: number
    verified?: boolean
    wins?: number
    races_won?: RaceUncheckedCreateNestedManyWithoutWinnerInput
    participations?: RaceParticipantUncheckedCreateNestedManyWithoutGame_accountInput
    sightings_observed?: RaceWitnessUncheckedCreateNestedManyWithoutObserverInput
    sightings_suspect?: RaceWitnessUncheckedCreateNestedManyWithoutSuspectInput
  }

  export type GameAccountCreateOrConnectWithoutUserInput = {
    where: GameAccountWhereUniqueInput
    create: XOR<GameAccountCreateWithoutUserInput, GameAccountUncheckedCreateWithoutUserInput>
  }

  export type GameAccountCreateManyUserInputEnvelope = {
    data: GameAccountCreateManyUserInput | GameAccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RaceCreateWithoutCreatorInput = {
    secret_code: string
    is_vip?: boolean
    status?: $Enums.RaceStatus
    winner_path?: NullableJsonNullValueInput | InputJsonValue
    prize: string
    start_at: Date | string
    server_start_time?: Date | string | null
    created_at?: Date | string
    location: LocationCreateNestedOneWithoutRacesInput
    winner?: GameAccountCreateNestedOneWithoutRaces_wonInput
    participants?: RaceParticipantCreateNestedManyWithoutRaceInput
    witnesses?: RaceWitnessCreateNestedManyWithoutRaceInput
  }

  export type RaceUncheckedCreateWithoutCreatorInput = {
    id?: number
    secret_code: string
    is_vip?: boolean
    status?: $Enums.RaceStatus
    location_id: number
    winner_id?: number | null
    winner_path?: NullableJsonNullValueInput | InputJsonValue
    prize: string
    start_at: Date | string
    server_start_time?: Date | string | null
    created_at?: Date | string
    participants?: RaceParticipantUncheckedCreateNestedManyWithoutRaceInput
    witnesses?: RaceWitnessUncheckedCreateNestedManyWithoutRaceInput
  }

  export type RaceCreateOrConnectWithoutCreatorInput = {
    where: RaceWhereUniqueInput
    create: XOR<RaceCreateWithoutCreatorInput, RaceUncheckedCreateWithoutCreatorInput>
  }

  export type RaceCreateManyCreatorInputEnvelope = {
    data: RaceCreateManyCreatorInput | RaceCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type UserSettingsCreateWithoutUserInput = {
    language?: string
    currency?: string
    timezone?: number
    notify_news?: boolean
    notify_payments?: boolean
    is_stealth?: boolean
    updated_at?: Date | string
  }

  export type UserSettingsUncheckedCreateWithoutUserInput = {
    id?: number
    language?: string
    currency?: string
    timezone?: number
    notify_news?: boolean
    notify_payments?: boolean
    is_stealth?: boolean
    updated_at?: Date | string
  }

  export type UserSettingsCreateOrConnectWithoutUserInput = {
    where: UserSettingsWhereUniqueInput
    create: XOR<UserSettingsCreateWithoutUserInput, UserSettingsUncheckedCreateWithoutUserInput>
  }

  export type TransactionsCreateWithoutUserInput = {
    hash?: string | null
    amount: bigint | number
    comment: string
    status: $Enums.PaymentStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TransactionsUncheckedCreateWithoutUserInput = {
    id?: number
    hash?: string | null
    amount: bigint | number
    comment: string
    status: $Enums.PaymentStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TransactionsCreateOrConnectWithoutUserInput = {
    where: TransactionsWhereUniqueInput
    create: XOR<TransactionsCreateWithoutUserInput, TransactionsUncheckedCreateWithoutUserInput>
  }

  export type TransactionsCreateManyUserInputEnvelope = {
    data: TransactionsCreateManyUserInput | TransactionsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TokensCreateWithoutUserInput = {
    refresh_token: string
    created_at?: Date | string
  }

  export type TokensUncheckedCreateWithoutUserInput = {
    id?: number
    refresh_token: string
    created_at?: Date | string
  }

  export type TokensCreateOrConnectWithoutUserInput = {
    where: TokensWhereUniqueInput
    create: XOR<TokensCreateWithoutUserInput, TokensUncheckedCreateWithoutUserInput>
  }

  export type TokensCreateManyUserInputEnvelope = {
    data: TokensCreateManyUserInput | TokensCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type VerificationCodesCreateWithoutUserInput = {
    code: string
    type: $Enums.VerificationCodeType
    expires_at: Date | string
  }

  export type VerificationCodesUncheckedCreateWithoutUserInput = {
    id?: number
    code: string
    type: $Enums.VerificationCodeType
    expires_at: Date | string
  }

  export type VerificationCodesCreateOrConnectWithoutUserInput = {
    where: VerificationCodesWhereUniqueInput
    create: XOR<VerificationCodesCreateWithoutUserInput, VerificationCodesUncheckedCreateWithoutUserInput>
  }

  export type VerificationCodesCreateManyUserInputEnvelope = {
    data: VerificationCodesCreateManyUserInput | VerificationCodesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WithdrawalRequestUpsertWithWhereUniqueWithoutUserInput = {
    where: WithdrawalRequestWhereUniqueInput
    update: XOR<WithdrawalRequestUpdateWithoutUserInput, WithdrawalRequestUncheckedUpdateWithoutUserInput>
    create: XOR<WithdrawalRequestCreateWithoutUserInput, WithdrawalRequestUncheckedCreateWithoutUserInput>
  }

  export type WithdrawalRequestUpdateWithWhereUniqueWithoutUserInput = {
    where: WithdrawalRequestWhereUniqueInput
    data: XOR<WithdrawalRequestUpdateWithoutUserInput, WithdrawalRequestUncheckedUpdateWithoutUserInput>
  }

  export type WithdrawalRequestUpdateManyWithWhereWithoutUserInput = {
    where: WithdrawalRequestScalarWhereInput
    data: XOR<WithdrawalRequestUpdateManyMutationInput, WithdrawalRequestUncheckedUpdateManyWithoutUserInput>
  }

  export type WithdrawalRequestScalarWhereInput = {
    AND?: WithdrawalRequestScalarWhereInput | WithdrawalRequestScalarWhereInput[]
    OR?: WithdrawalRequestScalarWhereInput[]
    NOT?: WithdrawalRequestScalarWhereInput | WithdrawalRequestScalarWhereInput[]
    id?: IntFilter<"WithdrawalRequest"> | number
    user_id?: IntFilter<"WithdrawalRequest"> | number
    amount?: FloatFilter<"WithdrawalRequest"> | number
    currency?: StringFilter<"WithdrawalRequest"> | string
    wallet_address?: StringFilter<"WithdrawalRequest"> | string
    status?: EnumWithdrawalStatusFilter<"WithdrawalRequest"> | $Enums.WithdrawalStatus
    rejection_reason?: StringNullableFilter<"WithdrawalRequest"> | string | null
    admin_comment?: StringNullableFilter<"WithdrawalRequest"> | string | null
    tx_hash?: StringNullableFilter<"WithdrawalRequest"> | string | null
    processed_at?: DateTimeNullableFilter<"WithdrawalRequest"> | Date | string | null
    created_at?: DateTimeFilter<"WithdrawalRequest"> | Date | string
    updated_at?: DateTimeFilter<"WithdrawalRequest"> | Date | string
  }

  export type PromoCodeUpsertWithWhereUniqueWithoutUserInput = {
    where: PromoCodeWhereUniqueInput
    update: XOR<PromoCodeUpdateWithoutUserInput, PromoCodeUncheckedUpdateWithoutUserInput>
    create: XOR<PromoCodeCreateWithoutUserInput, PromoCodeUncheckedCreateWithoutUserInput>
  }

  export type PromoCodeUpdateWithWhereUniqueWithoutUserInput = {
    where: PromoCodeWhereUniqueInput
    data: XOR<PromoCodeUpdateWithoutUserInput, PromoCodeUncheckedUpdateWithoutUserInput>
  }

  export type PromoCodeUpdateManyWithWhereWithoutUserInput = {
    where: PromoCodeScalarWhereInput
    data: XOR<PromoCodeUpdateManyMutationInput, PromoCodeUncheckedUpdateManyWithoutUserInput>
  }

  export type PromoCodeScalarWhereInput = {
    AND?: PromoCodeScalarWhereInput | PromoCodeScalarWhereInput[]
    OR?: PromoCodeScalarWhereInput[]
    NOT?: PromoCodeScalarWhereInput | PromoCodeScalarWhereInput[]
    id?: IntFilter<"PromoCode"> | number
    code?: StringFilter<"PromoCode"> | string
    type?: EnumPromoTypeFilter<"PromoCode"> | $Enums.PromoType
    value?: IntFilter<"PromoCode"> | number
    is_used?: BoolFilter<"PromoCode"> | boolean
    used_at?: DateTimeNullableFilter<"PromoCode"> | Date | string | null
    user_id?: IntNullableFilter<"PromoCode"> | number | null
    created_at?: DateTimeFilter<"PromoCode"> | Date | string
  }

  export type GameAccountUpsertWithWhereUniqueWithoutUserInput = {
    where: GameAccountWhereUniqueInput
    update: XOR<GameAccountUpdateWithoutUserInput, GameAccountUncheckedUpdateWithoutUserInput>
    create: XOR<GameAccountCreateWithoutUserInput, GameAccountUncheckedCreateWithoutUserInput>
  }

  export type GameAccountUpdateWithWhereUniqueWithoutUserInput = {
    where: GameAccountWhereUniqueInput
    data: XOR<GameAccountUpdateWithoutUserInput, GameAccountUncheckedUpdateWithoutUserInput>
  }

  export type GameAccountUpdateManyWithWhereWithoutUserInput = {
    where: GameAccountScalarWhereInput
    data: XOR<GameAccountUpdateManyMutationInput, GameAccountUncheckedUpdateManyWithoutUserInput>
  }

  export type GameAccountScalarWhereInput = {
    AND?: GameAccountScalarWhereInput | GameAccountScalarWhereInput[]
    OR?: GameAccountScalarWhereInput[]
    NOT?: GameAccountScalarWhereInput | GameAccountScalarWhereInput[]
    id?: IntFilter<"GameAccount"> | number
    nickname?: StringFilter<"GameAccount"> | string
    server?: IntFilter<"GameAccount"> | number
    verified?: BoolFilter<"GameAccount"> | boolean
    wins?: IntFilter<"GameAccount"> | number
    user_id?: IntFilter<"GameAccount"> | number
  }

  export type RaceUpsertWithWhereUniqueWithoutCreatorInput = {
    where: RaceWhereUniqueInput
    update: XOR<RaceUpdateWithoutCreatorInput, RaceUncheckedUpdateWithoutCreatorInput>
    create: XOR<RaceCreateWithoutCreatorInput, RaceUncheckedCreateWithoutCreatorInput>
  }

  export type RaceUpdateWithWhereUniqueWithoutCreatorInput = {
    where: RaceWhereUniqueInput
    data: XOR<RaceUpdateWithoutCreatorInput, RaceUncheckedUpdateWithoutCreatorInput>
  }

  export type RaceUpdateManyWithWhereWithoutCreatorInput = {
    where: RaceScalarWhereInput
    data: XOR<RaceUpdateManyMutationInput, RaceUncheckedUpdateManyWithoutCreatorInput>
  }

  export type RaceScalarWhereInput = {
    AND?: RaceScalarWhereInput | RaceScalarWhereInput[]
    OR?: RaceScalarWhereInput[]
    NOT?: RaceScalarWhereInput | RaceScalarWhereInput[]
    id?: IntFilter<"Race"> | number
    secret_code?: StringFilter<"Race"> | string
    is_vip?: BoolFilter<"Race"> | boolean
    status?: EnumRaceStatusFilter<"Race"> | $Enums.RaceStatus
    location_id?: IntFilter<"Race"> | number
    winner_id?: IntNullableFilter<"Race"> | number | null
    winner_path?: JsonNullableFilter<"Race">
    prize?: StringFilter<"Race"> | string
    start_at?: DateTimeFilter<"Race"> | Date | string
    server_start_time?: DateTimeNullableFilter<"Race"> | Date | string | null
    creator_id?: IntNullableFilter<"Race"> | number | null
    created_at?: DateTimeFilter<"Race"> | Date | string
  }

  export type UserSettingsUpsertWithoutUserInput = {
    update: XOR<UserSettingsUpdateWithoutUserInput, UserSettingsUncheckedUpdateWithoutUserInput>
    create: XOR<UserSettingsCreateWithoutUserInput, UserSettingsUncheckedCreateWithoutUserInput>
    where?: UserSettingsWhereInput
  }

  export type UserSettingsUpdateToOneWithWhereWithoutUserInput = {
    where?: UserSettingsWhereInput
    data: XOR<UserSettingsUpdateWithoutUserInput, UserSettingsUncheckedUpdateWithoutUserInput>
  }

  export type UserSettingsUpdateWithoutUserInput = {
    language?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    timezone?: IntFieldUpdateOperationsInput | number
    notify_news?: BoolFieldUpdateOperationsInput | boolean
    notify_payments?: BoolFieldUpdateOperationsInput | boolean
    is_stealth?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSettingsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    language?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    timezone?: IntFieldUpdateOperationsInput | number
    notify_news?: BoolFieldUpdateOperationsInput | boolean
    notify_payments?: BoolFieldUpdateOperationsInput | boolean
    is_stealth?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionsUpsertWithWhereUniqueWithoutUserInput = {
    where: TransactionsWhereUniqueInput
    update: XOR<TransactionsUpdateWithoutUserInput, TransactionsUncheckedUpdateWithoutUserInput>
    create: XOR<TransactionsCreateWithoutUserInput, TransactionsUncheckedCreateWithoutUserInput>
  }

  export type TransactionsUpdateWithWhereUniqueWithoutUserInput = {
    where: TransactionsWhereUniqueInput
    data: XOR<TransactionsUpdateWithoutUserInput, TransactionsUncheckedUpdateWithoutUserInput>
  }

  export type TransactionsUpdateManyWithWhereWithoutUserInput = {
    where: TransactionsScalarWhereInput
    data: XOR<TransactionsUpdateManyMutationInput, TransactionsUncheckedUpdateManyWithoutUserInput>
  }

  export type TransactionsScalarWhereInput = {
    AND?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
    OR?: TransactionsScalarWhereInput[]
    NOT?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
    id?: IntFilter<"Transactions"> | number
    hash?: StringNullableFilter<"Transactions"> | string | null
    user_id?: IntFilter<"Transactions"> | number
    amount?: BigIntFilter<"Transactions"> | bigint | number
    comment?: StringFilter<"Transactions"> | string
    status?: EnumPaymentStatusFilter<"Transactions"> | $Enums.PaymentStatus
    created_at?: DateTimeFilter<"Transactions"> | Date | string
    updated_at?: DateTimeFilter<"Transactions"> | Date | string
  }

  export type TokensUpsertWithWhereUniqueWithoutUserInput = {
    where: TokensWhereUniqueInput
    update: XOR<TokensUpdateWithoutUserInput, TokensUncheckedUpdateWithoutUserInput>
    create: XOR<TokensCreateWithoutUserInput, TokensUncheckedCreateWithoutUserInput>
  }

  export type TokensUpdateWithWhereUniqueWithoutUserInput = {
    where: TokensWhereUniqueInput
    data: XOR<TokensUpdateWithoutUserInput, TokensUncheckedUpdateWithoutUserInput>
  }

  export type TokensUpdateManyWithWhereWithoutUserInput = {
    where: TokensScalarWhereInput
    data: XOR<TokensUpdateManyMutationInput, TokensUncheckedUpdateManyWithoutUserInput>
  }

  export type TokensScalarWhereInput = {
    AND?: TokensScalarWhereInput | TokensScalarWhereInput[]
    OR?: TokensScalarWhereInput[]
    NOT?: TokensScalarWhereInput | TokensScalarWhereInput[]
    id?: IntFilter<"Tokens"> | number
    user_id?: IntFilter<"Tokens"> | number
    refresh_token?: StringFilter<"Tokens"> | string
    created_at?: DateTimeFilter<"Tokens"> | Date | string
  }

  export type VerificationCodesUpsertWithWhereUniqueWithoutUserInput = {
    where: VerificationCodesWhereUniqueInput
    update: XOR<VerificationCodesUpdateWithoutUserInput, VerificationCodesUncheckedUpdateWithoutUserInput>
    create: XOR<VerificationCodesCreateWithoutUserInput, VerificationCodesUncheckedCreateWithoutUserInput>
  }

  export type VerificationCodesUpdateWithWhereUniqueWithoutUserInput = {
    where: VerificationCodesWhereUniqueInput
    data: XOR<VerificationCodesUpdateWithoutUserInput, VerificationCodesUncheckedUpdateWithoutUserInput>
  }

  export type VerificationCodesUpdateManyWithWhereWithoutUserInput = {
    where: VerificationCodesScalarWhereInput
    data: XOR<VerificationCodesUpdateManyMutationInput, VerificationCodesUncheckedUpdateManyWithoutUserInput>
  }

  export type VerificationCodesScalarWhereInput = {
    AND?: VerificationCodesScalarWhereInput | VerificationCodesScalarWhereInput[]
    OR?: VerificationCodesScalarWhereInput[]
    NOT?: VerificationCodesScalarWhereInput | VerificationCodesScalarWhereInput[]
    id?: IntFilter<"VerificationCodes"> | number
    user_id?: IntFilter<"VerificationCodes"> | number
    code?: StringFilter<"VerificationCodes"> | string
    type?: EnumVerificationCodeTypeFilter<"VerificationCodes"> | $Enums.VerificationCodeType
    expires_at?: DateTimeFilter<"VerificationCodes"> | Date | string
  }

  export type UserCreateWithoutVerification_codesInput = {
    telegram_id: bigint | number
    username?: string | null
    created_at?: Date | string
    vip_expires_at?: Date | string | null
    balance?: number
    frozen_balance?: number
    connect_code?: string | null
    connect_code_expires_at?: Date | string | null
    withdrawals?: WithdrawalRequestCreateNestedManyWithoutUserInput
    activated_promos?: PromoCodeCreateNestedManyWithoutUserInput
    game_accounts?: GameAccountCreateNestedManyWithoutUserInput
    created_races?: RaceCreateNestedManyWithoutCreatorInput
    settings?: UserSettingsCreateNestedOneWithoutUserInput
    transactions?: TransactionsCreateNestedManyWithoutUserInput
    tokens?: TokensCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVerification_codesInput = {
    id?: number
    telegram_id: bigint | number
    username?: string | null
    created_at?: Date | string
    vip_expires_at?: Date | string | null
    balance?: number
    frozen_balance?: number
    connect_code?: string | null
    connect_code_expires_at?: Date | string | null
    withdrawals?: WithdrawalRequestUncheckedCreateNestedManyWithoutUserInput
    activated_promos?: PromoCodeUncheckedCreateNestedManyWithoutUserInput
    game_accounts?: GameAccountUncheckedCreateNestedManyWithoutUserInput
    created_races?: RaceUncheckedCreateNestedManyWithoutCreatorInput
    settings?: UserSettingsUncheckedCreateNestedOneWithoutUserInput
    transactions?: TransactionsUncheckedCreateNestedManyWithoutUserInput
    tokens?: TokensUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVerification_codesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVerification_codesInput, UserUncheckedCreateWithoutVerification_codesInput>
  }

  export type UserUpsertWithoutVerification_codesInput = {
    update: XOR<UserUpdateWithoutVerification_codesInput, UserUncheckedUpdateWithoutVerification_codesInput>
    create: XOR<UserCreateWithoutVerification_codesInput, UserUncheckedCreateWithoutVerification_codesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVerification_codesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVerification_codesInput, UserUncheckedUpdateWithoutVerification_codesInput>
  }

  export type UserUpdateWithoutVerification_codesInput = {
    telegram_id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    vip_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    frozen_balance?: FloatFieldUpdateOperationsInput | number
    connect_code?: NullableStringFieldUpdateOperationsInput | string | null
    connect_code_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    withdrawals?: WithdrawalRequestUpdateManyWithoutUserNestedInput
    activated_promos?: PromoCodeUpdateManyWithoutUserNestedInput
    game_accounts?: GameAccountUpdateManyWithoutUserNestedInput
    created_races?: RaceUpdateManyWithoutCreatorNestedInput
    settings?: UserSettingsUpdateOneWithoutUserNestedInput
    transactions?: TransactionsUpdateManyWithoutUserNestedInput
    tokens?: TokensUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVerification_codesInput = {
    id?: IntFieldUpdateOperationsInput | number
    telegram_id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    vip_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    frozen_balance?: FloatFieldUpdateOperationsInput | number
    connect_code?: NullableStringFieldUpdateOperationsInput | string | null
    connect_code_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    withdrawals?: WithdrawalRequestUncheckedUpdateManyWithoutUserNestedInput
    activated_promos?: PromoCodeUncheckedUpdateManyWithoutUserNestedInput
    game_accounts?: GameAccountUncheckedUpdateManyWithoutUserNestedInput
    created_races?: RaceUncheckedUpdateManyWithoutCreatorNestedInput
    settings?: UserSettingsUncheckedUpdateOneWithoutUserNestedInput
    transactions?: TransactionsUncheckedUpdateManyWithoutUserNestedInput
    tokens?: TokensUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSettingsInput = {
    telegram_id: bigint | number
    username?: string | null
    created_at?: Date | string
    vip_expires_at?: Date | string | null
    balance?: number
    frozen_balance?: number
    connect_code?: string | null
    connect_code_expires_at?: Date | string | null
    withdrawals?: WithdrawalRequestCreateNestedManyWithoutUserInput
    activated_promos?: PromoCodeCreateNestedManyWithoutUserInput
    game_accounts?: GameAccountCreateNestedManyWithoutUserInput
    created_races?: RaceCreateNestedManyWithoutCreatorInput
    transactions?: TransactionsCreateNestedManyWithoutUserInput
    tokens?: TokensCreateNestedManyWithoutUserInput
    verification_codes?: VerificationCodesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSettingsInput = {
    id?: number
    telegram_id: bigint | number
    username?: string | null
    created_at?: Date | string
    vip_expires_at?: Date | string | null
    balance?: number
    frozen_balance?: number
    connect_code?: string | null
    connect_code_expires_at?: Date | string | null
    withdrawals?: WithdrawalRequestUncheckedCreateNestedManyWithoutUserInput
    activated_promos?: PromoCodeUncheckedCreateNestedManyWithoutUserInput
    game_accounts?: GameAccountUncheckedCreateNestedManyWithoutUserInput
    created_races?: RaceUncheckedCreateNestedManyWithoutCreatorInput
    transactions?: TransactionsUncheckedCreateNestedManyWithoutUserInput
    tokens?: TokensUncheckedCreateNestedManyWithoutUserInput
    verification_codes?: VerificationCodesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSettingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSettingsInput, UserUncheckedCreateWithoutSettingsInput>
  }

  export type UserUpsertWithoutSettingsInput = {
    update: XOR<UserUpdateWithoutSettingsInput, UserUncheckedUpdateWithoutSettingsInput>
    create: XOR<UserCreateWithoutSettingsInput, UserUncheckedCreateWithoutSettingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSettingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSettingsInput, UserUncheckedUpdateWithoutSettingsInput>
  }

  export type UserUpdateWithoutSettingsInput = {
    telegram_id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    vip_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    frozen_balance?: FloatFieldUpdateOperationsInput | number
    connect_code?: NullableStringFieldUpdateOperationsInput | string | null
    connect_code_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    withdrawals?: WithdrawalRequestUpdateManyWithoutUserNestedInput
    activated_promos?: PromoCodeUpdateManyWithoutUserNestedInput
    game_accounts?: GameAccountUpdateManyWithoutUserNestedInput
    created_races?: RaceUpdateManyWithoutCreatorNestedInput
    transactions?: TransactionsUpdateManyWithoutUserNestedInput
    tokens?: TokensUpdateManyWithoutUserNestedInput
    verification_codes?: VerificationCodesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSettingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    telegram_id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    vip_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    frozen_balance?: FloatFieldUpdateOperationsInput | number
    connect_code?: NullableStringFieldUpdateOperationsInput | string | null
    connect_code_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    withdrawals?: WithdrawalRequestUncheckedUpdateManyWithoutUserNestedInput
    activated_promos?: PromoCodeUncheckedUpdateManyWithoutUserNestedInput
    game_accounts?: GameAccountUncheckedUpdateManyWithoutUserNestedInput
    created_races?: RaceUncheckedUpdateManyWithoutCreatorNestedInput
    transactions?: TransactionsUncheckedUpdateManyWithoutUserNestedInput
    tokens?: TokensUncheckedUpdateManyWithoutUserNestedInput
    verification_codes?: VerificationCodesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutActivated_promosInput = {
    telegram_id: bigint | number
    username?: string | null
    created_at?: Date | string
    vip_expires_at?: Date | string | null
    balance?: number
    frozen_balance?: number
    connect_code?: string | null
    connect_code_expires_at?: Date | string | null
    withdrawals?: WithdrawalRequestCreateNestedManyWithoutUserInput
    game_accounts?: GameAccountCreateNestedManyWithoutUserInput
    created_races?: RaceCreateNestedManyWithoutCreatorInput
    settings?: UserSettingsCreateNestedOneWithoutUserInput
    transactions?: TransactionsCreateNestedManyWithoutUserInput
    tokens?: TokensCreateNestedManyWithoutUserInput
    verification_codes?: VerificationCodesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutActivated_promosInput = {
    id?: number
    telegram_id: bigint | number
    username?: string | null
    created_at?: Date | string
    vip_expires_at?: Date | string | null
    balance?: number
    frozen_balance?: number
    connect_code?: string | null
    connect_code_expires_at?: Date | string | null
    withdrawals?: WithdrawalRequestUncheckedCreateNestedManyWithoutUserInput
    game_accounts?: GameAccountUncheckedCreateNestedManyWithoutUserInput
    created_races?: RaceUncheckedCreateNestedManyWithoutCreatorInput
    settings?: UserSettingsUncheckedCreateNestedOneWithoutUserInput
    transactions?: TransactionsUncheckedCreateNestedManyWithoutUserInput
    tokens?: TokensUncheckedCreateNestedManyWithoutUserInput
    verification_codes?: VerificationCodesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutActivated_promosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutActivated_promosInput, UserUncheckedCreateWithoutActivated_promosInput>
  }

  export type UserUpsertWithoutActivated_promosInput = {
    update: XOR<UserUpdateWithoutActivated_promosInput, UserUncheckedUpdateWithoutActivated_promosInput>
    create: XOR<UserCreateWithoutActivated_promosInput, UserUncheckedCreateWithoutActivated_promosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutActivated_promosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutActivated_promosInput, UserUncheckedUpdateWithoutActivated_promosInput>
  }

  export type UserUpdateWithoutActivated_promosInput = {
    telegram_id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    vip_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    frozen_balance?: FloatFieldUpdateOperationsInput | number
    connect_code?: NullableStringFieldUpdateOperationsInput | string | null
    connect_code_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    withdrawals?: WithdrawalRequestUpdateManyWithoutUserNestedInput
    game_accounts?: GameAccountUpdateManyWithoutUserNestedInput
    created_races?: RaceUpdateManyWithoutCreatorNestedInput
    settings?: UserSettingsUpdateOneWithoutUserNestedInput
    transactions?: TransactionsUpdateManyWithoutUserNestedInput
    tokens?: TokensUpdateManyWithoutUserNestedInput
    verification_codes?: VerificationCodesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutActivated_promosInput = {
    id?: IntFieldUpdateOperationsInput | number
    telegram_id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    vip_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    frozen_balance?: FloatFieldUpdateOperationsInput | number
    connect_code?: NullableStringFieldUpdateOperationsInput | string | null
    connect_code_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    withdrawals?: WithdrawalRequestUncheckedUpdateManyWithoutUserNestedInput
    game_accounts?: GameAccountUncheckedUpdateManyWithoutUserNestedInput
    created_races?: RaceUncheckedUpdateManyWithoutCreatorNestedInput
    settings?: UserSettingsUncheckedUpdateOneWithoutUserNestedInput
    transactions?: TransactionsUncheckedUpdateManyWithoutUserNestedInput
    tokens?: TokensUncheckedUpdateManyWithoutUserNestedInput
    verification_codes?: VerificationCodesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutGame_accountsInput = {
    telegram_id: bigint | number
    username?: string | null
    created_at?: Date | string
    vip_expires_at?: Date | string | null
    balance?: number
    frozen_balance?: number
    connect_code?: string | null
    connect_code_expires_at?: Date | string | null
    withdrawals?: WithdrawalRequestCreateNestedManyWithoutUserInput
    activated_promos?: PromoCodeCreateNestedManyWithoutUserInput
    created_races?: RaceCreateNestedManyWithoutCreatorInput
    settings?: UserSettingsCreateNestedOneWithoutUserInput
    transactions?: TransactionsCreateNestedManyWithoutUserInput
    tokens?: TokensCreateNestedManyWithoutUserInput
    verification_codes?: VerificationCodesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGame_accountsInput = {
    id?: number
    telegram_id: bigint | number
    username?: string | null
    created_at?: Date | string
    vip_expires_at?: Date | string | null
    balance?: number
    frozen_balance?: number
    connect_code?: string | null
    connect_code_expires_at?: Date | string | null
    withdrawals?: WithdrawalRequestUncheckedCreateNestedManyWithoutUserInput
    activated_promos?: PromoCodeUncheckedCreateNestedManyWithoutUserInput
    created_races?: RaceUncheckedCreateNestedManyWithoutCreatorInput
    settings?: UserSettingsUncheckedCreateNestedOneWithoutUserInput
    transactions?: TransactionsUncheckedCreateNestedManyWithoutUserInput
    tokens?: TokensUncheckedCreateNestedManyWithoutUserInput
    verification_codes?: VerificationCodesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGame_accountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGame_accountsInput, UserUncheckedCreateWithoutGame_accountsInput>
  }

  export type RaceCreateWithoutWinnerInput = {
    secret_code: string
    is_vip?: boolean
    status?: $Enums.RaceStatus
    winner_path?: NullableJsonNullValueInput | InputJsonValue
    prize: string
    start_at: Date | string
    server_start_time?: Date | string | null
    created_at?: Date | string
    location: LocationCreateNestedOneWithoutRacesInput
    creator?: UserCreateNestedOneWithoutCreated_racesInput
    participants?: RaceParticipantCreateNestedManyWithoutRaceInput
    witnesses?: RaceWitnessCreateNestedManyWithoutRaceInput
  }

  export type RaceUncheckedCreateWithoutWinnerInput = {
    id?: number
    secret_code: string
    is_vip?: boolean
    status?: $Enums.RaceStatus
    location_id: number
    winner_path?: NullableJsonNullValueInput | InputJsonValue
    prize: string
    start_at: Date | string
    server_start_time?: Date | string | null
    creator_id?: number | null
    created_at?: Date | string
    participants?: RaceParticipantUncheckedCreateNestedManyWithoutRaceInput
    witnesses?: RaceWitnessUncheckedCreateNestedManyWithoutRaceInput
  }

  export type RaceCreateOrConnectWithoutWinnerInput = {
    where: RaceWhereUniqueInput
    create: XOR<RaceCreateWithoutWinnerInput, RaceUncheckedCreateWithoutWinnerInput>
  }

  export type RaceCreateManyWinnerInputEnvelope = {
    data: RaceCreateManyWinnerInput | RaceCreateManyWinnerInput[]
    skipDuplicates?: boolean
  }

  export type RaceParticipantCreateWithoutGame_accountInput = {
    finished?: boolean
    server_finish_at?: Date | string | null
    client_time_ms?: number | null
    is_disqualified?: boolean
    suspicion_reason?: string | null
    race: RaceCreateNestedOneWithoutParticipantsInput
    telemetry?: RaceTelemetryCreateNestedManyWithoutParticipantInput
  }

  export type RaceParticipantUncheckedCreateWithoutGame_accountInput = {
    id?: number
    race_id: number
    finished?: boolean
    server_finish_at?: Date | string | null
    client_time_ms?: number | null
    is_disqualified?: boolean
    suspicion_reason?: string | null
    telemetry?: RaceTelemetryUncheckedCreateNestedManyWithoutParticipantInput
  }

  export type RaceParticipantCreateOrConnectWithoutGame_accountInput = {
    where: RaceParticipantWhereUniqueInput
    create: XOR<RaceParticipantCreateWithoutGame_accountInput, RaceParticipantUncheckedCreateWithoutGame_accountInput>
  }

  export type RaceParticipantCreateManyGame_accountInputEnvelope = {
    data: RaceParticipantCreateManyGame_accountInput | RaceParticipantCreateManyGame_accountInput[]
    skipDuplicates?: boolean
  }

  export type RaceWitnessCreateWithoutObserverInput = {
    server_time?: Date | string
    race: RaceCreateNestedOneWithoutWitnessesInput
    suspect: GameAccountCreateNestedOneWithoutSightings_suspectInput
  }

  export type RaceWitnessUncheckedCreateWithoutObserverInput = {
    id?: number
    race_id: number
    suspect_nickname: string
    suspect_server: number
    server_time?: Date | string
  }

  export type RaceWitnessCreateOrConnectWithoutObserverInput = {
    where: RaceWitnessWhereUniqueInput
    create: XOR<RaceWitnessCreateWithoutObserverInput, RaceWitnessUncheckedCreateWithoutObserverInput>
  }

  export type RaceWitnessCreateManyObserverInputEnvelope = {
    data: RaceWitnessCreateManyObserverInput | RaceWitnessCreateManyObserverInput[]
    skipDuplicates?: boolean
  }

  export type RaceWitnessCreateWithoutSuspectInput = {
    server_time?: Date | string
    race: RaceCreateNestedOneWithoutWitnessesInput
    observer: GameAccountCreateNestedOneWithoutSightings_observedInput
  }

  export type RaceWitnessUncheckedCreateWithoutSuspectInput = {
    id?: number
    race_id: number
    observer_id: number
    server_time?: Date | string
  }

  export type RaceWitnessCreateOrConnectWithoutSuspectInput = {
    where: RaceWitnessWhereUniqueInput
    create: XOR<RaceWitnessCreateWithoutSuspectInput, RaceWitnessUncheckedCreateWithoutSuspectInput>
  }

  export type RaceWitnessCreateManySuspectInputEnvelope = {
    data: RaceWitnessCreateManySuspectInput | RaceWitnessCreateManySuspectInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutGame_accountsInput = {
    update: XOR<UserUpdateWithoutGame_accountsInput, UserUncheckedUpdateWithoutGame_accountsInput>
    create: XOR<UserCreateWithoutGame_accountsInput, UserUncheckedCreateWithoutGame_accountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGame_accountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGame_accountsInput, UserUncheckedUpdateWithoutGame_accountsInput>
  }

  export type UserUpdateWithoutGame_accountsInput = {
    telegram_id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    vip_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    frozen_balance?: FloatFieldUpdateOperationsInput | number
    connect_code?: NullableStringFieldUpdateOperationsInput | string | null
    connect_code_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    withdrawals?: WithdrawalRequestUpdateManyWithoutUserNestedInput
    activated_promos?: PromoCodeUpdateManyWithoutUserNestedInput
    created_races?: RaceUpdateManyWithoutCreatorNestedInput
    settings?: UserSettingsUpdateOneWithoutUserNestedInput
    transactions?: TransactionsUpdateManyWithoutUserNestedInput
    tokens?: TokensUpdateManyWithoutUserNestedInput
    verification_codes?: VerificationCodesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGame_accountsInput = {
    id?: IntFieldUpdateOperationsInput | number
    telegram_id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    vip_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    frozen_balance?: FloatFieldUpdateOperationsInput | number
    connect_code?: NullableStringFieldUpdateOperationsInput | string | null
    connect_code_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    withdrawals?: WithdrawalRequestUncheckedUpdateManyWithoutUserNestedInput
    activated_promos?: PromoCodeUncheckedUpdateManyWithoutUserNestedInput
    created_races?: RaceUncheckedUpdateManyWithoutCreatorNestedInput
    settings?: UserSettingsUncheckedUpdateOneWithoutUserNestedInput
    transactions?: TransactionsUncheckedUpdateManyWithoutUserNestedInput
    tokens?: TokensUncheckedUpdateManyWithoutUserNestedInput
    verification_codes?: VerificationCodesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RaceUpsertWithWhereUniqueWithoutWinnerInput = {
    where: RaceWhereUniqueInput
    update: XOR<RaceUpdateWithoutWinnerInput, RaceUncheckedUpdateWithoutWinnerInput>
    create: XOR<RaceCreateWithoutWinnerInput, RaceUncheckedCreateWithoutWinnerInput>
  }

  export type RaceUpdateWithWhereUniqueWithoutWinnerInput = {
    where: RaceWhereUniqueInput
    data: XOR<RaceUpdateWithoutWinnerInput, RaceUncheckedUpdateWithoutWinnerInput>
  }

  export type RaceUpdateManyWithWhereWithoutWinnerInput = {
    where: RaceScalarWhereInput
    data: XOR<RaceUpdateManyMutationInput, RaceUncheckedUpdateManyWithoutWinnerInput>
  }

  export type RaceParticipantUpsertWithWhereUniqueWithoutGame_accountInput = {
    where: RaceParticipantWhereUniqueInput
    update: XOR<RaceParticipantUpdateWithoutGame_accountInput, RaceParticipantUncheckedUpdateWithoutGame_accountInput>
    create: XOR<RaceParticipantCreateWithoutGame_accountInput, RaceParticipantUncheckedCreateWithoutGame_accountInput>
  }

  export type RaceParticipantUpdateWithWhereUniqueWithoutGame_accountInput = {
    where: RaceParticipantWhereUniqueInput
    data: XOR<RaceParticipantUpdateWithoutGame_accountInput, RaceParticipantUncheckedUpdateWithoutGame_accountInput>
  }

  export type RaceParticipantUpdateManyWithWhereWithoutGame_accountInput = {
    where: RaceParticipantScalarWhereInput
    data: XOR<RaceParticipantUpdateManyMutationInput, RaceParticipantUncheckedUpdateManyWithoutGame_accountInput>
  }

  export type RaceParticipantScalarWhereInput = {
    AND?: RaceParticipantScalarWhereInput | RaceParticipantScalarWhereInput[]
    OR?: RaceParticipantScalarWhereInput[]
    NOT?: RaceParticipantScalarWhereInput | RaceParticipantScalarWhereInput[]
    id?: IntFilter<"RaceParticipant"> | number
    race_id?: IntFilter<"RaceParticipant"> | number
    game_account_id?: IntFilter<"RaceParticipant"> | number
    finished?: BoolFilter<"RaceParticipant"> | boolean
    server_finish_at?: DateTimeNullableFilter<"RaceParticipant"> | Date | string | null
    client_time_ms?: IntNullableFilter<"RaceParticipant"> | number | null
    is_disqualified?: BoolFilter<"RaceParticipant"> | boolean
    suspicion_reason?: StringNullableFilter<"RaceParticipant"> | string | null
  }

  export type RaceWitnessUpsertWithWhereUniqueWithoutObserverInput = {
    where: RaceWitnessWhereUniqueInput
    update: XOR<RaceWitnessUpdateWithoutObserverInput, RaceWitnessUncheckedUpdateWithoutObserverInput>
    create: XOR<RaceWitnessCreateWithoutObserverInput, RaceWitnessUncheckedCreateWithoutObserverInput>
  }

  export type RaceWitnessUpdateWithWhereUniqueWithoutObserverInput = {
    where: RaceWitnessWhereUniqueInput
    data: XOR<RaceWitnessUpdateWithoutObserverInput, RaceWitnessUncheckedUpdateWithoutObserverInput>
  }

  export type RaceWitnessUpdateManyWithWhereWithoutObserverInput = {
    where: RaceWitnessScalarWhereInput
    data: XOR<RaceWitnessUpdateManyMutationInput, RaceWitnessUncheckedUpdateManyWithoutObserverInput>
  }

  export type RaceWitnessScalarWhereInput = {
    AND?: RaceWitnessScalarWhereInput | RaceWitnessScalarWhereInput[]
    OR?: RaceWitnessScalarWhereInput[]
    NOT?: RaceWitnessScalarWhereInput | RaceWitnessScalarWhereInput[]
    id?: IntFilter<"RaceWitness"> | number
    race_id?: IntFilter<"RaceWitness"> | number
    observer_id?: IntFilter<"RaceWitness"> | number
    suspect_nickname?: StringFilter<"RaceWitness"> | string
    suspect_server?: IntFilter<"RaceWitness"> | number
    server_time?: DateTimeFilter<"RaceWitness"> | Date | string
  }

  export type RaceWitnessUpsertWithWhereUniqueWithoutSuspectInput = {
    where: RaceWitnessWhereUniqueInput
    update: XOR<RaceWitnessUpdateWithoutSuspectInput, RaceWitnessUncheckedUpdateWithoutSuspectInput>
    create: XOR<RaceWitnessCreateWithoutSuspectInput, RaceWitnessUncheckedCreateWithoutSuspectInput>
  }

  export type RaceWitnessUpdateWithWhereUniqueWithoutSuspectInput = {
    where: RaceWitnessWhereUniqueInput
    data: XOR<RaceWitnessUpdateWithoutSuspectInput, RaceWitnessUncheckedUpdateWithoutSuspectInput>
  }

  export type RaceWitnessUpdateManyWithWhereWithoutSuspectInput = {
    where: RaceWitnessScalarWhereInput
    data: XOR<RaceWitnessUpdateManyMutationInput, RaceWitnessUncheckedUpdateManyWithoutSuspectInput>
  }

  export type RaceCreateWithoutLocationInput = {
    secret_code: string
    is_vip?: boolean
    status?: $Enums.RaceStatus
    winner_path?: NullableJsonNullValueInput | InputJsonValue
    prize: string
    start_at: Date | string
    server_start_time?: Date | string | null
    created_at?: Date | string
    winner?: GameAccountCreateNestedOneWithoutRaces_wonInput
    creator?: UserCreateNestedOneWithoutCreated_racesInput
    participants?: RaceParticipantCreateNestedManyWithoutRaceInput
    witnesses?: RaceWitnessCreateNestedManyWithoutRaceInput
  }

  export type RaceUncheckedCreateWithoutLocationInput = {
    id?: number
    secret_code: string
    is_vip?: boolean
    status?: $Enums.RaceStatus
    winner_id?: number | null
    winner_path?: NullableJsonNullValueInput | InputJsonValue
    prize: string
    start_at: Date | string
    server_start_time?: Date | string | null
    creator_id?: number | null
    created_at?: Date | string
    participants?: RaceParticipantUncheckedCreateNestedManyWithoutRaceInput
    witnesses?: RaceWitnessUncheckedCreateNestedManyWithoutRaceInput
  }

  export type RaceCreateOrConnectWithoutLocationInput = {
    where: RaceWhereUniqueInput
    create: XOR<RaceCreateWithoutLocationInput, RaceUncheckedCreateWithoutLocationInput>
  }

  export type RaceCreateManyLocationInputEnvelope = {
    data: RaceCreateManyLocationInput | RaceCreateManyLocationInput[]
    skipDuplicates?: boolean
  }

  export type RaceUpsertWithWhereUniqueWithoutLocationInput = {
    where: RaceWhereUniqueInput
    update: XOR<RaceUpdateWithoutLocationInput, RaceUncheckedUpdateWithoutLocationInput>
    create: XOR<RaceCreateWithoutLocationInput, RaceUncheckedCreateWithoutLocationInput>
  }

  export type RaceUpdateWithWhereUniqueWithoutLocationInput = {
    where: RaceWhereUniqueInput
    data: XOR<RaceUpdateWithoutLocationInput, RaceUncheckedUpdateWithoutLocationInput>
  }

  export type RaceUpdateManyWithWhereWithoutLocationInput = {
    where: RaceScalarWhereInput
    data: XOR<RaceUpdateManyMutationInput, RaceUncheckedUpdateManyWithoutLocationInput>
  }

  export type LocationCreateWithoutRacesInput = {
    name: string
    file_id: string
    pos_one_x: number
    pos_one_y: number
    pos_one_z: number
    pos_two_x: number
    pos_two_y: number
    pos_two_z: number
  }

  export type LocationUncheckedCreateWithoutRacesInput = {
    id?: number
    name: string
    file_id: string
    pos_one_x: number
    pos_one_y: number
    pos_one_z: number
    pos_two_x: number
    pos_two_y: number
    pos_two_z: number
  }

  export type LocationCreateOrConnectWithoutRacesInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutRacesInput, LocationUncheckedCreateWithoutRacesInput>
  }

  export type GameAccountCreateWithoutRaces_wonInput = {
    nickname: string
    server: number
    verified?: boolean
    wins?: number
    user: UserCreateNestedOneWithoutGame_accountsInput
    participations?: RaceParticipantCreateNestedManyWithoutGame_accountInput
    sightings_observed?: RaceWitnessCreateNestedManyWithoutObserverInput
    sightings_suspect?: RaceWitnessCreateNestedManyWithoutSuspectInput
  }

  export type GameAccountUncheckedCreateWithoutRaces_wonInput = {
    id?: number
    nickname: string
    server: number
    verified?: boolean
    wins?: number
    user_id: number
    participations?: RaceParticipantUncheckedCreateNestedManyWithoutGame_accountInput
    sightings_observed?: RaceWitnessUncheckedCreateNestedManyWithoutObserverInput
    sightings_suspect?: RaceWitnessUncheckedCreateNestedManyWithoutSuspectInput
  }

  export type GameAccountCreateOrConnectWithoutRaces_wonInput = {
    where: GameAccountWhereUniqueInput
    create: XOR<GameAccountCreateWithoutRaces_wonInput, GameAccountUncheckedCreateWithoutRaces_wonInput>
  }

  export type UserCreateWithoutCreated_racesInput = {
    telegram_id: bigint | number
    username?: string | null
    created_at?: Date | string
    vip_expires_at?: Date | string | null
    balance?: number
    frozen_balance?: number
    connect_code?: string | null
    connect_code_expires_at?: Date | string | null
    withdrawals?: WithdrawalRequestCreateNestedManyWithoutUserInput
    activated_promos?: PromoCodeCreateNestedManyWithoutUserInput
    game_accounts?: GameAccountCreateNestedManyWithoutUserInput
    settings?: UserSettingsCreateNestedOneWithoutUserInput
    transactions?: TransactionsCreateNestedManyWithoutUserInput
    tokens?: TokensCreateNestedManyWithoutUserInput
    verification_codes?: VerificationCodesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCreated_racesInput = {
    id?: number
    telegram_id: bigint | number
    username?: string | null
    created_at?: Date | string
    vip_expires_at?: Date | string | null
    balance?: number
    frozen_balance?: number
    connect_code?: string | null
    connect_code_expires_at?: Date | string | null
    withdrawals?: WithdrawalRequestUncheckedCreateNestedManyWithoutUserInput
    activated_promos?: PromoCodeUncheckedCreateNestedManyWithoutUserInput
    game_accounts?: GameAccountUncheckedCreateNestedManyWithoutUserInput
    settings?: UserSettingsUncheckedCreateNestedOneWithoutUserInput
    transactions?: TransactionsUncheckedCreateNestedManyWithoutUserInput
    tokens?: TokensUncheckedCreateNestedManyWithoutUserInput
    verification_codes?: VerificationCodesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCreated_racesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreated_racesInput, UserUncheckedCreateWithoutCreated_racesInput>
  }

  export type RaceParticipantCreateWithoutRaceInput = {
    finished?: boolean
    server_finish_at?: Date | string | null
    client_time_ms?: number | null
    is_disqualified?: boolean
    suspicion_reason?: string | null
    game_account: GameAccountCreateNestedOneWithoutParticipationsInput
    telemetry?: RaceTelemetryCreateNestedManyWithoutParticipantInput
  }

  export type RaceParticipantUncheckedCreateWithoutRaceInput = {
    id?: number
    game_account_id: number
    finished?: boolean
    server_finish_at?: Date | string | null
    client_time_ms?: number | null
    is_disqualified?: boolean
    suspicion_reason?: string | null
    telemetry?: RaceTelemetryUncheckedCreateNestedManyWithoutParticipantInput
  }

  export type RaceParticipantCreateOrConnectWithoutRaceInput = {
    where: RaceParticipantWhereUniqueInput
    create: XOR<RaceParticipantCreateWithoutRaceInput, RaceParticipantUncheckedCreateWithoutRaceInput>
  }

  export type RaceParticipantCreateManyRaceInputEnvelope = {
    data: RaceParticipantCreateManyRaceInput | RaceParticipantCreateManyRaceInput[]
    skipDuplicates?: boolean
  }

  export type RaceWitnessCreateWithoutRaceInput = {
    server_time?: Date | string
    observer: GameAccountCreateNestedOneWithoutSightings_observedInput
    suspect: GameAccountCreateNestedOneWithoutSightings_suspectInput
  }

  export type RaceWitnessUncheckedCreateWithoutRaceInput = {
    id?: number
    observer_id: number
    suspect_nickname: string
    suspect_server: number
    server_time?: Date | string
  }

  export type RaceWitnessCreateOrConnectWithoutRaceInput = {
    where: RaceWitnessWhereUniqueInput
    create: XOR<RaceWitnessCreateWithoutRaceInput, RaceWitnessUncheckedCreateWithoutRaceInput>
  }

  export type RaceWitnessCreateManyRaceInputEnvelope = {
    data: RaceWitnessCreateManyRaceInput | RaceWitnessCreateManyRaceInput[]
    skipDuplicates?: boolean
  }

  export type LocationUpsertWithoutRacesInput = {
    update: XOR<LocationUpdateWithoutRacesInput, LocationUncheckedUpdateWithoutRacesInput>
    create: XOR<LocationCreateWithoutRacesInput, LocationUncheckedCreateWithoutRacesInput>
    where?: LocationWhereInput
  }

  export type LocationUpdateToOneWithWhereWithoutRacesInput = {
    where?: LocationWhereInput
    data: XOR<LocationUpdateWithoutRacesInput, LocationUncheckedUpdateWithoutRacesInput>
  }

  export type LocationUpdateWithoutRacesInput = {
    name?: StringFieldUpdateOperationsInput | string
    file_id?: StringFieldUpdateOperationsInput | string
    pos_one_x?: FloatFieldUpdateOperationsInput | number
    pos_one_y?: FloatFieldUpdateOperationsInput | number
    pos_one_z?: FloatFieldUpdateOperationsInput | number
    pos_two_x?: FloatFieldUpdateOperationsInput | number
    pos_two_y?: FloatFieldUpdateOperationsInput | number
    pos_two_z?: FloatFieldUpdateOperationsInput | number
  }

  export type LocationUncheckedUpdateWithoutRacesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    file_id?: StringFieldUpdateOperationsInput | string
    pos_one_x?: FloatFieldUpdateOperationsInput | number
    pos_one_y?: FloatFieldUpdateOperationsInput | number
    pos_one_z?: FloatFieldUpdateOperationsInput | number
    pos_two_x?: FloatFieldUpdateOperationsInput | number
    pos_two_y?: FloatFieldUpdateOperationsInput | number
    pos_two_z?: FloatFieldUpdateOperationsInput | number
  }

  export type GameAccountUpsertWithoutRaces_wonInput = {
    update: XOR<GameAccountUpdateWithoutRaces_wonInput, GameAccountUncheckedUpdateWithoutRaces_wonInput>
    create: XOR<GameAccountCreateWithoutRaces_wonInput, GameAccountUncheckedCreateWithoutRaces_wonInput>
    where?: GameAccountWhereInput
  }

  export type GameAccountUpdateToOneWithWhereWithoutRaces_wonInput = {
    where?: GameAccountWhereInput
    data: XOR<GameAccountUpdateWithoutRaces_wonInput, GameAccountUncheckedUpdateWithoutRaces_wonInput>
  }

  export type GameAccountUpdateWithoutRaces_wonInput = {
    nickname?: StringFieldUpdateOperationsInput | string
    server?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    wins?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutGame_accountsNestedInput
    participations?: RaceParticipantUpdateManyWithoutGame_accountNestedInput
    sightings_observed?: RaceWitnessUpdateManyWithoutObserverNestedInput
    sightings_suspect?: RaceWitnessUpdateManyWithoutSuspectNestedInput
  }

  export type GameAccountUncheckedUpdateWithoutRaces_wonInput = {
    id?: IntFieldUpdateOperationsInput | number
    nickname?: StringFieldUpdateOperationsInput | string
    server?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    wins?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    participations?: RaceParticipantUncheckedUpdateManyWithoutGame_accountNestedInput
    sightings_observed?: RaceWitnessUncheckedUpdateManyWithoutObserverNestedInput
    sightings_suspect?: RaceWitnessUncheckedUpdateManyWithoutSuspectNestedInput
  }

  export type UserUpsertWithoutCreated_racesInput = {
    update: XOR<UserUpdateWithoutCreated_racesInput, UserUncheckedUpdateWithoutCreated_racesInput>
    create: XOR<UserCreateWithoutCreated_racesInput, UserUncheckedCreateWithoutCreated_racesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreated_racesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreated_racesInput, UserUncheckedUpdateWithoutCreated_racesInput>
  }

  export type UserUpdateWithoutCreated_racesInput = {
    telegram_id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    vip_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    frozen_balance?: FloatFieldUpdateOperationsInput | number
    connect_code?: NullableStringFieldUpdateOperationsInput | string | null
    connect_code_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    withdrawals?: WithdrawalRequestUpdateManyWithoutUserNestedInput
    activated_promos?: PromoCodeUpdateManyWithoutUserNestedInput
    game_accounts?: GameAccountUpdateManyWithoutUserNestedInput
    settings?: UserSettingsUpdateOneWithoutUserNestedInput
    transactions?: TransactionsUpdateManyWithoutUserNestedInput
    tokens?: TokensUpdateManyWithoutUserNestedInput
    verification_codes?: VerificationCodesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreated_racesInput = {
    id?: IntFieldUpdateOperationsInput | number
    telegram_id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    vip_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    frozen_balance?: FloatFieldUpdateOperationsInput | number
    connect_code?: NullableStringFieldUpdateOperationsInput | string | null
    connect_code_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    withdrawals?: WithdrawalRequestUncheckedUpdateManyWithoutUserNestedInput
    activated_promos?: PromoCodeUncheckedUpdateManyWithoutUserNestedInput
    game_accounts?: GameAccountUncheckedUpdateManyWithoutUserNestedInput
    settings?: UserSettingsUncheckedUpdateOneWithoutUserNestedInput
    transactions?: TransactionsUncheckedUpdateManyWithoutUserNestedInput
    tokens?: TokensUncheckedUpdateManyWithoutUserNestedInput
    verification_codes?: VerificationCodesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RaceParticipantUpsertWithWhereUniqueWithoutRaceInput = {
    where: RaceParticipantWhereUniqueInput
    update: XOR<RaceParticipantUpdateWithoutRaceInput, RaceParticipantUncheckedUpdateWithoutRaceInput>
    create: XOR<RaceParticipantCreateWithoutRaceInput, RaceParticipantUncheckedCreateWithoutRaceInput>
  }

  export type RaceParticipantUpdateWithWhereUniqueWithoutRaceInput = {
    where: RaceParticipantWhereUniqueInput
    data: XOR<RaceParticipantUpdateWithoutRaceInput, RaceParticipantUncheckedUpdateWithoutRaceInput>
  }

  export type RaceParticipantUpdateManyWithWhereWithoutRaceInput = {
    where: RaceParticipantScalarWhereInput
    data: XOR<RaceParticipantUpdateManyMutationInput, RaceParticipantUncheckedUpdateManyWithoutRaceInput>
  }

  export type RaceWitnessUpsertWithWhereUniqueWithoutRaceInput = {
    where: RaceWitnessWhereUniqueInput
    update: XOR<RaceWitnessUpdateWithoutRaceInput, RaceWitnessUncheckedUpdateWithoutRaceInput>
    create: XOR<RaceWitnessCreateWithoutRaceInput, RaceWitnessUncheckedCreateWithoutRaceInput>
  }

  export type RaceWitnessUpdateWithWhereUniqueWithoutRaceInput = {
    where: RaceWitnessWhereUniqueInput
    data: XOR<RaceWitnessUpdateWithoutRaceInput, RaceWitnessUncheckedUpdateWithoutRaceInput>
  }

  export type RaceWitnessUpdateManyWithWhereWithoutRaceInput = {
    where: RaceWitnessScalarWhereInput
    data: XOR<RaceWitnessUpdateManyMutationInput, RaceWitnessUncheckedUpdateManyWithoutRaceInput>
  }

  export type RaceCreateWithoutParticipantsInput = {
    secret_code: string
    is_vip?: boolean
    status?: $Enums.RaceStatus
    winner_path?: NullableJsonNullValueInput | InputJsonValue
    prize: string
    start_at: Date | string
    server_start_time?: Date | string | null
    created_at?: Date | string
    location: LocationCreateNestedOneWithoutRacesInput
    winner?: GameAccountCreateNestedOneWithoutRaces_wonInput
    creator?: UserCreateNestedOneWithoutCreated_racesInput
    witnesses?: RaceWitnessCreateNestedManyWithoutRaceInput
  }

  export type RaceUncheckedCreateWithoutParticipantsInput = {
    id?: number
    secret_code: string
    is_vip?: boolean
    status?: $Enums.RaceStatus
    location_id: number
    winner_id?: number | null
    winner_path?: NullableJsonNullValueInput | InputJsonValue
    prize: string
    start_at: Date | string
    server_start_time?: Date | string | null
    creator_id?: number | null
    created_at?: Date | string
    witnesses?: RaceWitnessUncheckedCreateNestedManyWithoutRaceInput
  }

  export type RaceCreateOrConnectWithoutParticipantsInput = {
    where: RaceWhereUniqueInput
    create: XOR<RaceCreateWithoutParticipantsInput, RaceUncheckedCreateWithoutParticipantsInput>
  }

  export type GameAccountCreateWithoutParticipationsInput = {
    nickname: string
    server: number
    verified?: boolean
    wins?: number
    user: UserCreateNestedOneWithoutGame_accountsInput
    races_won?: RaceCreateNestedManyWithoutWinnerInput
    sightings_observed?: RaceWitnessCreateNestedManyWithoutObserverInput
    sightings_suspect?: RaceWitnessCreateNestedManyWithoutSuspectInput
  }

  export type GameAccountUncheckedCreateWithoutParticipationsInput = {
    id?: number
    nickname: string
    server: number
    verified?: boolean
    wins?: number
    user_id: number
    races_won?: RaceUncheckedCreateNestedManyWithoutWinnerInput
    sightings_observed?: RaceWitnessUncheckedCreateNestedManyWithoutObserverInput
    sightings_suspect?: RaceWitnessUncheckedCreateNestedManyWithoutSuspectInput
  }

  export type GameAccountCreateOrConnectWithoutParticipationsInput = {
    where: GameAccountWhereUniqueInput
    create: XOR<GameAccountCreateWithoutParticipationsInput, GameAccountUncheckedCreateWithoutParticipationsInput>
  }

  export type RaceTelemetryCreateWithoutParticipantInput = {
    x: number
    y: number
    z: number
    speed: number
    client_timestamp: bigint | number
    created_at?: Date | string
  }

  export type RaceTelemetryUncheckedCreateWithoutParticipantInput = {
    id?: number
    x: number
    y: number
    z: number
    speed: number
    client_timestamp: bigint | number
    created_at?: Date | string
  }

  export type RaceTelemetryCreateOrConnectWithoutParticipantInput = {
    where: RaceTelemetryWhereUniqueInput
    create: XOR<RaceTelemetryCreateWithoutParticipantInput, RaceTelemetryUncheckedCreateWithoutParticipantInput>
  }

  export type RaceTelemetryCreateManyParticipantInputEnvelope = {
    data: RaceTelemetryCreateManyParticipantInput | RaceTelemetryCreateManyParticipantInput[]
    skipDuplicates?: boolean
  }

  export type RaceUpsertWithoutParticipantsInput = {
    update: XOR<RaceUpdateWithoutParticipantsInput, RaceUncheckedUpdateWithoutParticipantsInput>
    create: XOR<RaceCreateWithoutParticipantsInput, RaceUncheckedCreateWithoutParticipantsInput>
    where?: RaceWhereInput
  }

  export type RaceUpdateToOneWithWhereWithoutParticipantsInput = {
    where?: RaceWhereInput
    data: XOR<RaceUpdateWithoutParticipantsInput, RaceUncheckedUpdateWithoutParticipantsInput>
  }

  export type RaceUpdateWithoutParticipantsInput = {
    secret_code?: StringFieldUpdateOperationsInput | string
    is_vip?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumRaceStatusFieldUpdateOperationsInput | $Enums.RaceStatus
    winner_path?: NullableJsonNullValueInput | InputJsonValue
    prize?: StringFieldUpdateOperationsInput | string
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    server_start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: LocationUpdateOneRequiredWithoutRacesNestedInput
    winner?: GameAccountUpdateOneWithoutRaces_wonNestedInput
    creator?: UserUpdateOneWithoutCreated_racesNestedInput
    witnesses?: RaceWitnessUpdateManyWithoutRaceNestedInput
  }

  export type RaceUncheckedUpdateWithoutParticipantsInput = {
    id?: IntFieldUpdateOperationsInput | number
    secret_code?: StringFieldUpdateOperationsInput | string
    is_vip?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumRaceStatusFieldUpdateOperationsInput | $Enums.RaceStatus
    location_id?: IntFieldUpdateOperationsInput | number
    winner_id?: NullableIntFieldUpdateOperationsInput | number | null
    winner_path?: NullableJsonNullValueInput | InputJsonValue
    prize?: StringFieldUpdateOperationsInput | string
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    server_start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creator_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    witnesses?: RaceWitnessUncheckedUpdateManyWithoutRaceNestedInput
  }

  export type GameAccountUpsertWithoutParticipationsInput = {
    update: XOR<GameAccountUpdateWithoutParticipationsInput, GameAccountUncheckedUpdateWithoutParticipationsInput>
    create: XOR<GameAccountCreateWithoutParticipationsInput, GameAccountUncheckedCreateWithoutParticipationsInput>
    where?: GameAccountWhereInput
  }

  export type GameAccountUpdateToOneWithWhereWithoutParticipationsInput = {
    where?: GameAccountWhereInput
    data: XOR<GameAccountUpdateWithoutParticipationsInput, GameAccountUncheckedUpdateWithoutParticipationsInput>
  }

  export type GameAccountUpdateWithoutParticipationsInput = {
    nickname?: StringFieldUpdateOperationsInput | string
    server?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    wins?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutGame_accountsNestedInput
    races_won?: RaceUpdateManyWithoutWinnerNestedInput
    sightings_observed?: RaceWitnessUpdateManyWithoutObserverNestedInput
    sightings_suspect?: RaceWitnessUpdateManyWithoutSuspectNestedInput
  }

  export type GameAccountUncheckedUpdateWithoutParticipationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nickname?: StringFieldUpdateOperationsInput | string
    server?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    wins?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    races_won?: RaceUncheckedUpdateManyWithoutWinnerNestedInput
    sightings_observed?: RaceWitnessUncheckedUpdateManyWithoutObserverNestedInput
    sightings_suspect?: RaceWitnessUncheckedUpdateManyWithoutSuspectNestedInput
  }

  export type RaceTelemetryUpsertWithWhereUniqueWithoutParticipantInput = {
    where: RaceTelemetryWhereUniqueInput
    update: XOR<RaceTelemetryUpdateWithoutParticipantInput, RaceTelemetryUncheckedUpdateWithoutParticipantInput>
    create: XOR<RaceTelemetryCreateWithoutParticipantInput, RaceTelemetryUncheckedCreateWithoutParticipantInput>
  }

  export type RaceTelemetryUpdateWithWhereUniqueWithoutParticipantInput = {
    where: RaceTelemetryWhereUniqueInput
    data: XOR<RaceTelemetryUpdateWithoutParticipantInput, RaceTelemetryUncheckedUpdateWithoutParticipantInput>
  }

  export type RaceTelemetryUpdateManyWithWhereWithoutParticipantInput = {
    where: RaceTelemetryScalarWhereInput
    data: XOR<RaceTelemetryUpdateManyMutationInput, RaceTelemetryUncheckedUpdateManyWithoutParticipantInput>
  }

  export type RaceTelemetryScalarWhereInput = {
    AND?: RaceTelemetryScalarWhereInput | RaceTelemetryScalarWhereInput[]
    OR?: RaceTelemetryScalarWhereInput[]
    NOT?: RaceTelemetryScalarWhereInput | RaceTelemetryScalarWhereInput[]
    id?: IntFilter<"RaceTelemetry"> | number
    participant_id?: IntFilter<"RaceTelemetry"> | number
    x?: FloatFilter<"RaceTelemetry"> | number
    y?: FloatFilter<"RaceTelemetry"> | number
    z?: FloatFilter<"RaceTelemetry"> | number
    speed?: FloatFilter<"RaceTelemetry"> | number
    client_timestamp?: BigIntFilter<"RaceTelemetry"> | bigint | number
    created_at?: DateTimeFilter<"RaceTelemetry"> | Date | string
  }

  export type RaceCreateWithoutWitnessesInput = {
    secret_code: string
    is_vip?: boolean
    status?: $Enums.RaceStatus
    winner_path?: NullableJsonNullValueInput | InputJsonValue
    prize: string
    start_at: Date | string
    server_start_time?: Date | string | null
    created_at?: Date | string
    location: LocationCreateNestedOneWithoutRacesInput
    winner?: GameAccountCreateNestedOneWithoutRaces_wonInput
    creator?: UserCreateNestedOneWithoutCreated_racesInput
    participants?: RaceParticipantCreateNestedManyWithoutRaceInput
  }

  export type RaceUncheckedCreateWithoutWitnessesInput = {
    id?: number
    secret_code: string
    is_vip?: boolean
    status?: $Enums.RaceStatus
    location_id: number
    winner_id?: number | null
    winner_path?: NullableJsonNullValueInput | InputJsonValue
    prize: string
    start_at: Date | string
    server_start_time?: Date | string | null
    creator_id?: number | null
    created_at?: Date | string
    participants?: RaceParticipantUncheckedCreateNestedManyWithoutRaceInput
  }

  export type RaceCreateOrConnectWithoutWitnessesInput = {
    where: RaceWhereUniqueInput
    create: XOR<RaceCreateWithoutWitnessesInput, RaceUncheckedCreateWithoutWitnessesInput>
  }

  export type GameAccountCreateWithoutSightings_observedInput = {
    nickname: string
    server: number
    verified?: boolean
    wins?: number
    user: UserCreateNestedOneWithoutGame_accountsInput
    races_won?: RaceCreateNestedManyWithoutWinnerInput
    participations?: RaceParticipantCreateNestedManyWithoutGame_accountInput
    sightings_suspect?: RaceWitnessCreateNestedManyWithoutSuspectInput
  }

  export type GameAccountUncheckedCreateWithoutSightings_observedInput = {
    id?: number
    nickname: string
    server: number
    verified?: boolean
    wins?: number
    user_id: number
    races_won?: RaceUncheckedCreateNestedManyWithoutWinnerInput
    participations?: RaceParticipantUncheckedCreateNestedManyWithoutGame_accountInput
    sightings_suspect?: RaceWitnessUncheckedCreateNestedManyWithoutSuspectInput
  }

  export type GameAccountCreateOrConnectWithoutSightings_observedInput = {
    where: GameAccountWhereUniqueInput
    create: XOR<GameAccountCreateWithoutSightings_observedInput, GameAccountUncheckedCreateWithoutSightings_observedInput>
  }

  export type GameAccountCreateWithoutSightings_suspectInput = {
    nickname: string
    server: number
    verified?: boolean
    wins?: number
    user: UserCreateNestedOneWithoutGame_accountsInput
    races_won?: RaceCreateNestedManyWithoutWinnerInput
    participations?: RaceParticipantCreateNestedManyWithoutGame_accountInput
    sightings_observed?: RaceWitnessCreateNestedManyWithoutObserverInput
  }

  export type GameAccountUncheckedCreateWithoutSightings_suspectInput = {
    id?: number
    nickname: string
    server: number
    verified?: boolean
    wins?: number
    user_id: number
    races_won?: RaceUncheckedCreateNestedManyWithoutWinnerInput
    participations?: RaceParticipantUncheckedCreateNestedManyWithoutGame_accountInput
    sightings_observed?: RaceWitnessUncheckedCreateNestedManyWithoutObserverInput
  }

  export type GameAccountCreateOrConnectWithoutSightings_suspectInput = {
    where: GameAccountWhereUniqueInput
    create: XOR<GameAccountCreateWithoutSightings_suspectInput, GameAccountUncheckedCreateWithoutSightings_suspectInput>
  }

  export type RaceUpsertWithoutWitnessesInput = {
    update: XOR<RaceUpdateWithoutWitnessesInput, RaceUncheckedUpdateWithoutWitnessesInput>
    create: XOR<RaceCreateWithoutWitnessesInput, RaceUncheckedCreateWithoutWitnessesInput>
    where?: RaceWhereInput
  }

  export type RaceUpdateToOneWithWhereWithoutWitnessesInput = {
    where?: RaceWhereInput
    data: XOR<RaceUpdateWithoutWitnessesInput, RaceUncheckedUpdateWithoutWitnessesInput>
  }

  export type RaceUpdateWithoutWitnessesInput = {
    secret_code?: StringFieldUpdateOperationsInput | string
    is_vip?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumRaceStatusFieldUpdateOperationsInput | $Enums.RaceStatus
    winner_path?: NullableJsonNullValueInput | InputJsonValue
    prize?: StringFieldUpdateOperationsInput | string
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    server_start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: LocationUpdateOneRequiredWithoutRacesNestedInput
    winner?: GameAccountUpdateOneWithoutRaces_wonNestedInput
    creator?: UserUpdateOneWithoutCreated_racesNestedInput
    participants?: RaceParticipantUpdateManyWithoutRaceNestedInput
  }

  export type RaceUncheckedUpdateWithoutWitnessesInput = {
    id?: IntFieldUpdateOperationsInput | number
    secret_code?: StringFieldUpdateOperationsInput | string
    is_vip?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumRaceStatusFieldUpdateOperationsInput | $Enums.RaceStatus
    location_id?: IntFieldUpdateOperationsInput | number
    winner_id?: NullableIntFieldUpdateOperationsInput | number | null
    winner_path?: NullableJsonNullValueInput | InputJsonValue
    prize?: StringFieldUpdateOperationsInput | string
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    server_start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creator_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: RaceParticipantUncheckedUpdateManyWithoutRaceNestedInput
  }

  export type GameAccountUpsertWithoutSightings_observedInput = {
    update: XOR<GameAccountUpdateWithoutSightings_observedInput, GameAccountUncheckedUpdateWithoutSightings_observedInput>
    create: XOR<GameAccountCreateWithoutSightings_observedInput, GameAccountUncheckedCreateWithoutSightings_observedInput>
    where?: GameAccountWhereInput
  }

  export type GameAccountUpdateToOneWithWhereWithoutSightings_observedInput = {
    where?: GameAccountWhereInput
    data: XOR<GameAccountUpdateWithoutSightings_observedInput, GameAccountUncheckedUpdateWithoutSightings_observedInput>
  }

  export type GameAccountUpdateWithoutSightings_observedInput = {
    nickname?: StringFieldUpdateOperationsInput | string
    server?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    wins?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutGame_accountsNestedInput
    races_won?: RaceUpdateManyWithoutWinnerNestedInput
    participations?: RaceParticipantUpdateManyWithoutGame_accountNestedInput
    sightings_suspect?: RaceWitnessUpdateManyWithoutSuspectNestedInput
  }

  export type GameAccountUncheckedUpdateWithoutSightings_observedInput = {
    id?: IntFieldUpdateOperationsInput | number
    nickname?: StringFieldUpdateOperationsInput | string
    server?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    wins?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    races_won?: RaceUncheckedUpdateManyWithoutWinnerNestedInput
    participations?: RaceParticipantUncheckedUpdateManyWithoutGame_accountNestedInput
    sightings_suspect?: RaceWitnessUncheckedUpdateManyWithoutSuspectNestedInput
  }

  export type GameAccountUpsertWithoutSightings_suspectInput = {
    update: XOR<GameAccountUpdateWithoutSightings_suspectInput, GameAccountUncheckedUpdateWithoutSightings_suspectInput>
    create: XOR<GameAccountCreateWithoutSightings_suspectInput, GameAccountUncheckedCreateWithoutSightings_suspectInput>
    where?: GameAccountWhereInput
  }

  export type GameAccountUpdateToOneWithWhereWithoutSightings_suspectInput = {
    where?: GameAccountWhereInput
    data: XOR<GameAccountUpdateWithoutSightings_suspectInput, GameAccountUncheckedUpdateWithoutSightings_suspectInput>
  }

  export type GameAccountUpdateWithoutSightings_suspectInput = {
    nickname?: StringFieldUpdateOperationsInput | string
    server?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    wins?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutGame_accountsNestedInput
    races_won?: RaceUpdateManyWithoutWinnerNestedInput
    participations?: RaceParticipantUpdateManyWithoutGame_accountNestedInput
    sightings_observed?: RaceWitnessUpdateManyWithoutObserverNestedInput
  }

  export type GameAccountUncheckedUpdateWithoutSightings_suspectInput = {
    id?: IntFieldUpdateOperationsInput | number
    nickname?: StringFieldUpdateOperationsInput | string
    server?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    wins?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    races_won?: RaceUncheckedUpdateManyWithoutWinnerNestedInput
    participations?: RaceParticipantUncheckedUpdateManyWithoutGame_accountNestedInput
    sightings_observed?: RaceWitnessUncheckedUpdateManyWithoutObserverNestedInput
  }

  export type RaceParticipantCreateWithoutTelemetryInput = {
    finished?: boolean
    server_finish_at?: Date | string | null
    client_time_ms?: number | null
    is_disqualified?: boolean
    suspicion_reason?: string | null
    race: RaceCreateNestedOneWithoutParticipantsInput
    game_account: GameAccountCreateNestedOneWithoutParticipationsInput
  }

  export type RaceParticipantUncheckedCreateWithoutTelemetryInput = {
    id?: number
    race_id: number
    game_account_id: number
    finished?: boolean
    server_finish_at?: Date | string | null
    client_time_ms?: number | null
    is_disqualified?: boolean
    suspicion_reason?: string | null
  }

  export type RaceParticipantCreateOrConnectWithoutTelemetryInput = {
    where: RaceParticipantWhereUniqueInput
    create: XOR<RaceParticipantCreateWithoutTelemetryInput, RaceParticipantUncheckedCreateWithoutTelemetryInput>
  }

  export type RaceParticipantUpsertWithoutTelemetryInput = {
    update: XOR<RaceParticipantUpdateWithoutTelemetryInput, RaceParticipantUncheckedUpdateWithoutTelemetryInput>
    create: XOR<RaceParticipantCreateWithoutTelemetryInput, RaceParticipantUncheckedCreateWithoutTelemetryInput>
    where?: RaceParticipantWhereInput
  }

  export type RaceParticipantUpdateToOneWithWhereWithoutTelemetryInput = {
    where?: RaceParticipantWhereInput
    data: XOR<RaceParticipantUpdateWithoutTelemetryInput, RaceParticipantUncheckedUpdateWithoutTelemetryInput>
  }

  export type RaceParticipantUpdateWithoutTelemetryInput = {
    finished?: BoolFieldUpdateOperationsInput | boolean
    server_finish_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    client_time_ms?: NullableIntFieldUpdateOperationsInput | number | null
    is_disqualified?: BoolFieldUpdateOperationsInput | boolean
    suspicion_reason?: NullableStringFieldUpdateOperationsInput | string | null
    race?: RaceUpdateOneRequiredWithoutParticipantsNestedInput
    game_account?: GameAccountUpdateOneRequiredWithoutParticipationsNestedInput
  }

  export type RaceParticipantUncheckedUpdateWithoutTelemetryInput = {
    id?: IntFieldUpdateOperationsInput | number
    race_id?: IntFieldUpdateOperationsInput | number
    game_account_id?: IntFieldUpdateOperationsInput | number
    finished?: BoolFieldUpdateOperationsInput | boolean
    server_finish_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    client_time_ms?: NullableIntFieldUpdateOperationsInput | number | null
    is_disqualified?: BoolFieldUpdateOperationsInput | boolean
    suspicion_reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateWithoutTransactionsInput = {
    telegram_id: bigint | number
    username?: string | null
    created_at?: Date | string
    vip_expires_at?: Date | string | null
    balance?: number
    frozen_balance?: number
    connect_code?: string | null
    connect_code_expires_at?: Date | string | null
    withdrawals?: WithdrawalRequestCreateNestedManyWithoutUserInput
    activated_promos?: PromoCodeCreateNestedManyWithoutUserInput
    game_accounts?: GameAccountCreateNestedManyWithoutUserInput
    created_races?: RaceCreateNestedManyWithoutCreatorInput
    settings?: UserSettingsCreateNestedOneWithoutUserInput
    tokens?: TokensCreateNestedManyWithoutUserInput
    verification_codes?: VerificationCodesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTransactionsInput = {
    id?: number
    telegram_id: bigint | number
    username?: string | null
    created_at?: Date | string
    vip_expires_at?: Date | string | null
    balance?: number
    frozen_balance?: number
    connect_code?: string | null
    connect_code_expires_at?: Date | string | null
    withdrawals?: WithdrawalRequestUncheckedCreateNestedManyWithoutUserInput
    activated_promos?: PromoCodeUncheckedCreateNestedManyWithoutUserInput
    game_accounts?: GameAccountUncheckedCreateNestedManyWithoutUserInput
    created_races?: RaceUncheckedCreateNestedManyWithoutCreatorInput
    settings?: UserSettingsUncheckedCreateNestedOneWithoutUserInput
    tokens?: TokensUncheckedCreateNestedManyWithoutUserInput
    verification_codes?: VerificationCodesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
  }

  export type UserUpsertWithoutTransactionsInput = {
    update: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserUpdateWithoutTransactionsInput = {
    telegram_id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    vip_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    frozen_balance?: FloatFieldUpdateOperationsInput | number
    connect_code?: NullableStringFieldUpdateOperationsInput | string | null
    connect_code_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    withdrawals?: WithdrawalRequestUpdateManyWithoutUserNestedInput
    activated_promos?: PromoCodeUpdateManyWithoutUserNestedInput
    game_accounts?: GameAccountUpdateManyWithoutUserNestedInput
    created_races?: RaceUpdateManyWithoutCreatorNestedInput
    settings?: UserSettingsUpdateOneWithoutUserNestedInput
    tokens?: TokensUpdateManyWithoutUserNestedInput
    verification_codes?: VerificationCodesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    telegram_id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    vip_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    frozen_balance?: FloatFieldUpdateOperationsInput | number
    connect_code?: NullableStringFieldUpdateOperationsInput | string | null
    connect_code_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    withdrawals?: WithdrawalRequestUncheckedUpdateManyWithoutUserNestedInput
    activated_promos?: PromoCodeUncheckedUpdateManyWithoutUserNestedInput
    game_accounts?: GameAccountUncheckedUpdateManyWithoutUserNestedInput
    created_races?: RaceUncheckedUpdateManyWithoutCreatorNestedInput
    settings?: UserSettingsUncheckedUpdateOneWithoutUserNestedInput
    tokens?: TokensUncheckedUpdateManyWithoutUserNestedInput
    verification_codes?: VerificationCodesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutWithdrawalsInput = {
    telegram_id: bigint | number
    username?: string | null
    created_at?: Date | string
    vip_expires_at?: Date | string | null
    balance?: number
    frozen_balance?: number
    connect_code?: string | null
    connect_code_expires_at?: Date | string | null
    activated_promos?: PromoCodeCreateNestedManyWithoutUserInput
    game_accounts?: GameAccountCreateNestedManyWithoutUserInput
    created_races?: RaceCreateNestedManyWithoutCreatorInput
    settings?: UserSettingsCreateNestedOneWithoutUserInput
    transactions?: TransactionsCreateNestedManyWithoutUserInput
    tokens?: TokensCreateNestedManyWithoutUserInput
    verification_codes?: VerificationCodesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWithdrawalsInput = {
    id?: number
    telegram_id: bigint | number
    username?: string | null
    created_at?: Date | string
    vip_expires_at?: Date | string | null
    balance?: number
    frozen_balance?: number
    connect_code?: string | null
    connect_code_expires_at?: Date | string | null
    activated_promos?: PromoCodeUncheckedCreateNestedManyWithoutUserInput
    game_accounts?: GameAccountUncheckedCreateNestedManyWithoutUserInput
    created_races?: RaceUncheckedCreateNestedManyWithoutCreatorInput
    settings?: UserSettingsUncheckedCreateNestedOneWithoutUserInput
    transactions?: TransactionsUncheckedCreateNestedManyWithoutUserInput
    tokens?: TokensUncheckedCreateNestedManyWithoutUserInput
    verification_codes?: VerificationCodesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWithdrawalsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWithdrawalsInput, UserUncheckedCreateWithoutWithdrawalsInput>
  }

  export type UserUpsertWithoutWithdrawalsInput = {
    update: XOR<UserUpdateWithoutWithdrawalsInput, UserUncheckedUpdateWithoutWithdrawalsInput>
    create: XOR<UserCreateWithoutWithdrawalsInput, UserUncheckedCreateWithoutWithdrawalsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWithdrawalsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWithdrawalsInput, UserUncheckedUpdateWithoutWithdrawalsInput>
  }

  export type UserUpdateWithoutWithdrawalsInput = {
    telegram_id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    vip_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    frozen_balance?: FloatFieldUpdateOperationsInput | number
    connect_code?: NullableStringFieldUpdateOperationsInput | string | null
    connect_code_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activated_promos?: PromoCodeUpdateManyWithoutUserNestedInput
    game_accounts?: GameAccountUpdateManyWithoutUserNestedInput
    created_races?: RaceUpdateManyWithoutCreatorNestedInput
    settings?: UserSettingsUpdateOneWithoutUserNestedInput
    transactions?: TransactionsUpdateManyWithoutUserNestedInput
    tokens?: TokensUpdateManyWithoutUserNestedInput
    verification_codes?: VerificationCodesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWithdrawalsInput = {
    id?: IntFieldUpdateOperationsInput | number
    telegram_id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    vip_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    frozen_balance?: FloatFieldUpdateOperationsInput | number
    connect_code?: NullableStringFieldUpdateOperationsInput | string | null
    connect_code_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activated_promos?: PromoCodeUncheckedUpdateManyWithoutUserNestedInput
    game_accounts?: GameAccountUncheckedUpdateManyWithoutUserNestedInput
    created_races?: RaceUncheckedUpdateManyWithoutCreatorNestedInput
    settings?: UserSettingsUncheckedUpdateOneWithoutUserNestedInput
    transactions?: TransactionsUncheckedUpdateManyWithoutUserNestedInput
    tokens?: TokensUncheckedUpdateManyWithoutUserNestedInput
    verification_codes?: VerificationCodesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutTokensInput = {
    telegram_id: bigint | number
    username?: string | null
    created_at?: Date | string
    vip_expires_at?: Date | string | null
    balance?: number
    frozen_balance?: number
    connect_code?: string | null
    connect_code_expires_at?: Date | string | null
    withdrawals?: WithdrawalRequestCreateNestedManyWithoutUserInput
    activated_promos?: PromoCodeCreateNestedManyWithoutUserInput
    game_accounts?: GameAccountCreateNestedManyWithoutUserInput
    created_races?: RaceCreateNestedManyWithoutCreatorInput
    settings?: UserSettingsCreateNestedOneWithoutUserInput
    transactions?: TransactionsCreateNestedManyWithoutUserInput
    verification_codes?: VerificationCodesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTokensInput = {
    id?: number
    telegram_id: bigint | number
    username?: string | null
    created_at?: Date | string
    vip_expires_at?: Date | string | null
    balance?: number
    frozen_balance?: number
    connect_code?: string | null
    connect_code_expires_at?: Date | string | null
    withdrawals?: WithdrawalRequestUncheckedCreateNestedManyWithoutUserInput
    activated_promos?: PromoCodeUncheckedCreateNestedManyWithoutUserInput
    game_accounts?: GameAccountUncheckedCreateNestedManyWithoutUserInput
    created_races?: RaceUncheckedCreateNestedManyWithoutCreatorInput
    settings?: UserSettingsUncheckedCreateNestedOneWithoutUserInput
    transactions?: TransactionsUncheckedCreateNestedManyWithoutUserInput
    verification_codes?: VerificationCodesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
  }

  export type UserUpsertWithoutTokensInput = {
    update: XOR<UserUpdateWithoutTokensInput, UserUncheckedUpdateWithoutTokensInput>
    create: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTokensInput, UserUncheckedUpdateWithoutTokensInput>
  }

  export type UserUpdateWithoutTokensInput = {
    telegram_id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    vip_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    frozen_balance?: FloatFieldUpdateOperationsInput | number
    connect_code?: NullableStringFieldUpdateOperationsInput | string | null
    connect_code_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    withdrawals?: WithdrawalRequestUpdateManyWithoutUserNestedInput
    activated_promos?: PromoCodeUpdateManyWithoutUserNestedInput
    game_accounts?: GameAccountUpdateManyWithoutUserNestedInput
    created_races?: RaceUpdateManyWithoutCreatorNestedInput
    settings?: UserSettingsUpdateOneWithoutUserNestedInput
    transactions?: TransactionsUpdateManyWithoutUserNestedInput
    verification_codes?: VerificationCodesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTokensInput = {
    id?: IntFieldUpdateOperationsInput | number
    telegram_id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    vip_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    frozen_balance?: FloatFieldUpdateOperationsInput | number
    connect_code?: NullableStringFieldUpdateOperationsInput | string | null
    connect_code_expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    withdrawals?: WithdrawalRequestUncheckedUpdateManyWithoutUserNestedInput
    activated_promos?: PromoCodeUncheckedUpdateManyWithoutUserNestedInput
    game_accounts?: GameAccountUncheckedUpdateManyWithoutUserNestedInput
    created_races?: RaceUncheckedUpdateManyWithoutCreatorNestedInput
    settings?: UserSettingsUncheckedUpdateOneWithoutUserNestedInput
    transactions?: TransactionsUncheckedUpdateManyWithoutUserNestedInput
    verification_codes?: VerificationCodesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WithdrawalRequestCreateManyUserInput = {
    id?: number
    amount: number
    currency?: string
    wallet_address: string
    status?: $Enums.WithdrawalStatus
    rejection_reason?: string | null
    admin_comment?: string | null
    tx_hash?: string | null
    processed_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PromoCodeCreateManyUserInput = {
    id?: number
    code: string
    type: $Enums.PromoType
    value: number
    is_used?: boolean
    used_at?: Date | string | null
    created_at?: Date | string
  }

  export type GameAccountCreateManyUserInput = {
    id?: number
    nickname: string
    server: number
    verified?: boolean
    wins?: number
  }

  export type RaceCreateManyCreatorInput = {
    id?: number
    secret_code: string
    is_vip?: boolean
    status?: $Enums.RaceStatus
    location_id: number
    winner_id?: number | null
    winner_path?: NullableJsonNullValueInput | InputJsonValue
    prize: string
    start_at: Date | string
    server_start_time?: Date | string | null
    created_at?: Date | string
  }

  export type TransactionsCreateManyUserInput = {
    id?: number
    hash?: string | null
    amount: bigint | number
    comment: string
    status: $Enums.PaymentStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TokensCreateManyUserInput = {
    id?: number
    refresh_token: string
    created_at?: Date | string
  }

  export type VerificationCodesCreateManyUserInput = {
    id?: number
    code: string
    type: $Enums.VerificationCodeType
    expires_at: Date | string
  }

  export type WithdrawalRequestUpdateWithoutUserInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    wallet_address?: StringFieldUpdateOperationsInput | string
    status?: EnumWithdrawalStatusFieldUpdateOperationsInput | $Enums.WithdrawalStatus
    rejection_reason?: NullableStringFieldUpdateOperationsInput | string | null
    admin_comment?: NullableStringFieldUpdateOperationsInput | string | null
    tx_hash?: NullableStringFieldUpdateOperationsInput | string | null
    processed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WithdrawalRequestUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    wallet_address?: StringFieldUpdateOperationsInput | string
    status?: EnumWithdrawalStatusFieldUpdateOperationsInput | $Enums.WithdrawalStatus
    rejection_reason?: NullableStringFieldUpdateOperationsInput | string | null
    admin_comment?: NullableStringFieldUpdateOperationsInput | string | null
    tx_hash?: NullableStringFieldUpdateOperationsInput | string | null
    processed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WithdrawalRequestUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    wallet_address?: StringFieldUpdateOperationsInput | string
    status?: EnumWithdrawalStatusFieldUpdateOperationsInput | $Enums.WithdrawalStatus
    rejection_reason?: NullableStringFieldUpdateOperationsInput | string | null
    admin_comment?: NullableStringFieldUpdateOperationsInput | string | null
    tx_hash?: NullableStringFieldUpdateOperationsInput | string | null
    processed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromoCodeUpdateWithoutUserInput = {
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumPromoTypeFieldUpdateOperationsInput | $Enums.PromoType
    value?: IntFieldUpdateOperationsInput | number
    is_used?: BoolFieldUpdateOperationsInput | boolean
    used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromoCodeUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumPromoTypeFieldUpdateOperationsInput | $Enums.PromoType
    value?: IntFieldUpdateOperationsInput | number
    is_used?: BoolFieldUpdateOperationsInput | boolean
    used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromoCodeUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumPromoTypeFieldUpdateOperationsInput | $Enums.PromoType
    value?: IntFieldUpdateOperationsInput | number
    is_used?: BoolFieldUpdateOperationsInput | boolean
    used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameAccountUpdateWithoutUserInput = {
    nickname?: StringFieldUpdateOperationsInput | string
    server?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    wins?: IntFieldUpdateOperationsInput | number
    races_won?: RaceUpdateManyWithoutWinnerNestedInput
    participations?: RaceParticipantUpdateManyWithoutGame_accountNestedInput
    sightings_observed?: RaceWitnessUpdateManyWithoutObserverNestedInput
    sightings_suspect?: RaceWitnessUpdateManyWithoutSuspectNestedInput
  }

  export type GameAccountUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    nickname?: StringFieldUpdateOperationsInput | string
    server?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    wins?: IntFieldUpdateOperationsInput | number
    races_won?: RaceUncheckedUpdateManyWithoutWinnerNestedInput
    participations?: RaceParticipantUncheckedUpdateManyWithoutGame_accountNestedInput
    sightings_observed?: RaceWitnessUncheckedUpdateManyWithoutObserverNestedInput
    sightings_suspect?: RaceWitnessUncheckedUpdateManyWithoutSuspectNestedInput
  }

  export type GameAccountUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    nickname?: StringFieldUpdateOperationsInput | string
    server?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    wins?: IntFieldUpdateOperationsInput | number
  }

  export type RaceUpdateWithoutCreatorInput = {
    secret_code?: StringFieldUpdateOperationsInput | string
    is_vip?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumRaceStatusFieldUpdateOperationsInput | $Enums.RaceStatus
    winner_path?: NullableJsonNullValueInput | InputJsonValue
    prize?: StringFieldUpdateOperationsInput | string
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    server_start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: LocationUpdateOneRequiredWithoutRacesNestedInput
    winner?: GameAccountUpdateOneWithoutRaces_wonNestedInput
    participants?: RaceParticipantUpdateManyWithoutRaceNestedInput
    witnesses?: RaceWitnessUpdateManyWithoutRaceNestedInput
  }

  export type RaceUncheckedUpdateWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    secret_code?: StringFieldUpdateOperationsInput | string
    is_vip?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumRaceStatusFieldUpdateOperationsInput | $Enums.RaceStatus
    location_id?: IntFieldUpdateOperationsInput | number
    winner_id?: NullableIntFieldUpdateOperationsInput | number | null
    winner_path?: NullableJsonNullValueInput | InputJsonValue
    prize?: StringFieldUpdateOperationsInput | string
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    server_start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: RaceParticipantUncheckedUpdateManyWithoutRaceNestedInput
    witnesses?: RaceWitnessUncheckedUpdateManyWithoutRaceNestedInput
  }

  export type RaceUncheckedUpdateManyWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    secret_code?: StringFieldUpdateOperationsInput | string
    is_vip?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumRaceStatusFieldUpdateOperationsInput | $Enums.RaceStatus
    location_id?: IntFieldUpdateOperationsInput | number
    winner_id?: NullableIntFieldUpdateOperationsInput | number | null
    winner_path?: NullableJsonNullValueInput | InputJsonValue
    prize?: StringFieldUpdateOperationsInput | string
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    server_start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionsUpdateWithoutUserInput = {
    hash?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    comment?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    hash?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    comment?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    hash?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    comment?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokensUpdateWithoutUserInput = {
    refresh_token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokensUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    refresh_token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokensUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    refresh_token?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCodesUpdateWithoutUserInput = {
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumVerificationCodeTypeFieldUpdateOperationsInput | $Enums.VerificationCodeType
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCodesUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumVerificationCodeTypeFieldUpdateOperationsInput | $Enums.VerificationCodeType
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCodesUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumVerificationCodeTypeFieldUpdateOperationsInput | $Enums.VerificationCodeType
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RaceCreateManyWinnerInput = {
    id?: number
    secret_code: string
    is_vip?: boolean
    status?: $Enums.RaceStatus
    location_id: number
    winner_path?: NullableJsonNullValueInput | InputJsonValue
    prize: string
    start_at: Date | string
    server_start_time?: Date | string | null
    creator_id?: number | null
    created_at?: Date | string
  }

  export type RaceParticipantCreateManyGame_accountInput = {
    id?: number
    race_id: number
    finished?: boolean
    server_finish_at?: Date | string | null
    client_time_ms?: number | null
    is_disqualified?: boolean
    suspicion_reason?: string | null
  }

  export type RaceWitnessCreateManyObserverInput = {
    id?: number
    race_id: number
    suspect_nickname: string
    suspect_server: number
    server_time?: Date | string
  }

  export type RaceWitnessCreateManySuspectInput = {
    id?: number
    race_id: number
    observer_id: number
    server_time?: Date | string
  }

  export type RaceUpdateWithoutWinnerInput = {
    secret_code?: StringFieldUpdateOperationsInput | string
    is_vip?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumRaceStatusFieldUpdateOperationsInput | $Enums.RaceStatus
    winner_path?: NullableJsonNullValueInput | InputJsonValue
    prize?: StringFieldUpdateOperationsInput | string
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    server_start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: LocationUpdateOneRequiredWithoutRacesNestedInput
    creator?: UserUpdateOneWithoutCreated_racesNestedInput
    participants?: RaceParticipantUpdateManyWithoutRaceNestedInput
    witnesses?: RaceWitnessUpdateManyWithoutRaceNestedInput
  }

  export type RaceUncheckedUpdateWithoutWinnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    secret_code?: StringFieldUpdateOperationsInput | string
    is_vip?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumRaceStatusFieldUpdateOperationsInput | $Enums.RaceStatus
    location_id?: IntFieldUpdateOperationsInput | number
    winner_path?: NullableJsonNullValueInput | InputJsonValue
    prize?: StringFieldUpdateOperationsInput | string
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    server_start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creator_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: RaceParticipantUncheckedUpdateManyWithoutRaceNestedInput
    witnesses?: RaceWitnessUncheckedUpdateManyWithoutRaceNestedInput
  }

  export type RaceUncheckedUpdateManyWithoutWinnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    secret_code?: StringFieldUpdateOperationsInput | string
    is_vip?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumRaceStatusFieldUpdateOperationsInput | $Enums.RaceStatus
    location_id?: IntFieldUpdateOperationsInput | number
    winner_path?: NullableJsonNullValueInput | InputJsonValue
    prize?: StringFieldUpdateOperationsInput | string
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    server_start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creator_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RaceParticipantUpdateWithoutGame_accountInput = {
    finished?: BoolFieldUpdateOperationsInput | boolean
    server_finish_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    client_time_ms?: NullableIntFieldUpdateOperationsInput | number | null
    is_disqualified?: BoolFieldUpdateOperationsInput | boolean
    suspicion_reason?: NullableStringFieldUpdateOperationsInput | string | null
    race?: RaceUpdateOneRequiredWithoutParticipantsNestedInput
    telemetry?: RaceTelemetryUpdateManyWithoutParticipantNestedInput
  }

  export type RaceParticipantUncheckedUpdateWithoutGame_accountInput = {
    id?: IntFieldUpdateOperationsInput | number
    race_id?: IntFieldUpdateOperationsInput | number
    finished?: BoolFieldUpdateOperationsInput | boolean
    server_finish_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    client_time_ms?: NullableIntFieldUpdateOperationsInput | number | null
    is_disqualified?: BoolFieldUpdateOperationsInput | boolean
    suspicion_reason?: NullableStringFieldUpdateOperationsInput | string | null
    telemetry?: RaceTelemetryUncheckedUpdateManyWithoutParticipantNestedInput
  }

  export type RaceParticipantUncheckedUpdateManyWithoutGame_accountInput = {
    id?: IntFieldUpdateOperationsInput | number
    race_id?: IntFieldUpdateOperationsInput | number
    finished?: BoolFieldUpdateOperationsInput | boolean
    server_finish_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    client_time_ms?: NullableIntFieldUpdateOperationsInput | number | null
    is_disqualified?: BoolFieldUpdateOperationsInput | boolean
    suspicion_reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RaceWitnessUpdateWithoutObserverInput = {
    server_time?: DateTimeFieldUpdateOperationsInput | Date | string
    race?: RaceUpdateOneRequiredWithoutWitnessesNestedInput
    suspect?: GameAccountUpdateOneRequiredWithoutSightings_suspectNestedInput
  }

  export type RaceWitnessUncheckedUpdateWithoutObserverInput = {
    id?: IntFieldUpdateOperationsInput | number
    race_id?: IntFieldUpdateOperationsInput | number
    suspect_nickname?: StringFieldUpdateOperationsInput | string
    suspect_server?: IntFieldUpdateOperationsInput | number
    server_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RaceWitnessUncheckedUpdateManyWithoutObserverInput = {
    id?: IntFieldUpdateOperationsInput | number
    race_id?: IntFieldUpdateOperationsInput | number
    suspect_nickname?: StringFieldUpdateOperationsInput | string
    suspect_server?: IntFieldUpdateOperationsInput | number
    server_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RaceWitnessUpdateWithoutSuspectInput = {
    server_time?: DateTimeFieldUpdateOperationsInput | Date | string
    race?: RaceUpdateOneRequiredWithoutWitnessesNestedInput
    observer?: GameAccountUpdateOneRequiredWithoutSightings_observedNestedInput
  }

  export type RaceWitnessUncheckedUpdateWithoutSuspectInput = {
    id?: IntFieldUpdateOperationsInput | number
    race_id?: IntFieldUpdateOperationsInput | number
    observer_id?: IntFieldUpdateOperationsInput | number
    server_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RaceWitnessUncheckedUpdateManyWithoutSuspectInput = {
    id?: IntFieldUpdateOperationsInput | number
    race_id?: IntFieldUpdateOperationsInput | number
    observer_id?: IntFieldUpdateOperationsInput | number
    server_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RaceCreateManyLocationInput = {
    id?: number
    secret_code: string
    is_vip?: boolean
    status?: $Enums.RaceStatus
    winner_id?: number | null
    winner_path?: NullableJsonNullValueInput | InputJsonValue
    prize: string
    start_at: Date | string
    server_start_time?: Date | string | null
    creator_id?: number | null
    created_at?: Date | string
  }

  export type RaceUpdateWithoutLocationInput = {
    secret_code?: StringFieldUpdateOperationsInput | string
    is_vip?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumRaceStatusFieldUpdateOperationsInput | $Enums.RaceStatus
    winner_path?: NullableJsonNullValueInput | InputJsonValue
    prize?: StringFieldUpdateOperationsInput | string
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    server_start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    winner?: GameAccountUpdateOneWithoutRaces_wonNestedInput
    creator?: UserUpdateOneWithoutCreated_racesNestedInput
    participants?: RaceParticipantUpdateManyWithoutRaceNestedInput
    witnesses?: RaceWitnessUpdateManyWithoutRaceNestedInput
  }

  export type RaceUncheckedUpdateWithoutLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    secret_code?: StringFieldUpdateOperationsInput | string
    is_vip?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumRaceStatusFieldUpdateOperationsInput | $Enums.RaceStatus
    winner_id?: NullableIntFieldUpdateOperationsInput | number | null
    winner_path?: NullableJsonNullValueInput | InputJsonValue
    prize?: StringFieldUpdateOperationsInput | string
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    server_start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creator_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: RaceParticipantUncheckedUpdateManyWithoutRaceNestedInput
    witnesses?: RaceWitnessUncheckedUpdateManyWithoutRaceNestedInput
  }

  export type RaceUncheckedUpdateManyWithoutLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    secret_code?: StringFieldUpdateOperationsInput | string
    is_vip?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumRaceStatusFieldUpdateOperationsInput | $Enums.RaceStatus
    winner_id?: NullableIntFieldUpdateOperationsInput | number | null
    winner_path?: NullableJsonNullValueInput | InputJsonValue
    prize?: StringFieldUpdateOperationsInput | string
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    server_start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creator_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RaceParticipantCreateManyRaceInput = {
    id?: number
    game_account_id: number
    finished?: boolean
    server_finish_at?: Date | string | null
    client_time_ms?: number | null
    is_disqualified?: boolean
    suspicion_reason?: string | null
  }

  export type RaceWitnessCreateManyRaceInput = {
    id?: number
    observer_id: number
    suspect_nickname: string
    suspect_server: number
    server_time?: Date | string
  }

  export type RaceParticipantUpdateWithoutRaceInput = {
    finished?: BoolFieldUpdateOperationsInput | boolean
    server_finish_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    client_time_ms?: NullableIntFieldUpdateOperationsInput | number | null
    is_disqualified?: BoolFieldUpdateOperationsInput | boolean
    suspicion_reason?: NullableStringFieldUpdateOperationsInput | string | null
    game_account?: GameAccountUpdateOneRequiredWithoutParticipationsNestedInput
    telemetry?: RaceTelemetryUpdateManyWithoutParticipantNestedInput
  }

  export type RaceParticipantUncheckedUpdateWithoutRaceInput = {
    id?: IntFieldUpdateOperationsInput | number
    game_account_id?: IntFieldUpdateOperationsInput | number
    finished?: BoolFieldUpdateOperationsInput | boolean
    server_finish_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    client_time_ms?: NullableIntFieldUpdateOperationsInput | number | null
    is_disqualified?: BoolFieldUpdateOperationsInput | boolean
    suspicion_reason?: NullableStringFieldUpdateOperationsInput | string | null
    telemetry?: RaceTelemetryUncheckedUpdateManyWithoutParticipantNestedInput
  }

  export type RaceParticipantUncheckedUpdateManyWithoutRaceInput = {
    id?: IntFieldUpdateOperationsInput | number
    game_account_id?: IntFieldUpdateOperationsInput | number
    finished?: BoolFieldUpdateOperationsInput | boolean
    server_finish_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    client_time_ms?: NullableIntFieldUpdateOperationsInput | number | null
    is_disqualified?: BoolFieldUpdateOperationsInput | boolean
    suspicion_reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RaceWitnessUpdateWithoutRaceInput = {
    server_time?: DateTimeFieldUpdateOperationsInput | Date | string
    observer?: GameAccountUpdateOneRequiredWithoutSightings_observedNestedInput
    suspect?: GameAccountUpdateOneRequiredWithoutSightings_suspectNestedInput
  }

  export type RaceWitnessUncheckedUpdateWithoutRaceInput = {
    id?: IntFieldUpdateOperationsInput | number
    observer_id?: IntFieldUpdateOperationsInput | number
    suspect_nickname?: StringFieldUpdateOperationsInput | string
    suspect_server?: IntFieldUpdateOperationsInput | number
    server_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RaceWitnessUncheckedUpdateManyWithoutRaceInput = {
    id?: IntFieldUpdateOperationsInput | number
    observer_id?: IntFieldUpdateOperationsInput | number
    suspect_nickname?: StringFieldUpdateOperationsInput | string
    suspect_server?: IntFieldUpdateOperationsInput | number
    server_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RaceTelemetryCreateManyParticipantInput = {
    id?: number
    x: number
    y: number
    z: number
    speed: number
    client_timestamp: bigint | number
    created_at?: Date | string
  }

  export type RaceTelemetryUpdateWithoutParticipantInput = {
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    z?: FloatFieldUpdateOperationsInput | number
    speed?: FloatFieldUpdateOperationsInput | number
    client_timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RaceTelemetryUncheckedUpdateWithoutParticipantInput = {
    id?: IntFieldUpdateOperationsInput | number
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    z?: FloatFieldUpdateOperationsInput | number
    speed?: FloatFieldUpdateOperationsInput | number
    client_timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RaceTelemetryUncheckedUpdateManyWithoutParticipantInput = {
    id?: IntFieldUpdateOperationsInput | number
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    z?: FloatFieldUpdateOperationsInput | number
    speed?: FloatFieldUpdateOperationsInput | number
    client_timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}