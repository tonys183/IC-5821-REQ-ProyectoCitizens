
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
 * Model NeighborProfile
 * 
 */
export type NeighborProfile = $Result.DefaultSelection<Prisma.$NeighborProfilePayload>
/**
 * Model MunicipalityProfile
 * 
 */
export type MunicipalityProfile = $Result.DefaultSelection<Prisma.$MunicipalityProfilePayload>
/**
 * Model Alert
 * 
 */
export type Alert = $Result.DefaultSelection<Prisma.$AlertPayload>
/**
 * Model canton
 * 
 */
export type canton = $Result.DefaultSelection<Prisma.$cantonPayload>
/**
 * Model district
 * 
 */
export type district = $Result.DefaultSelection<Prisma.$districtPayload>
/**
 * Model problem
 * 
 */
export type problem = $Result.DefaultSelection<Prisma.$problemPayload>
/**
 * Model problem_type
 * 
 */
export type problem_type = $Result.DefaultSelection<Prisma.$problem_typePayload>
/**
 * Model report
 * 
 */
export type report = $Result.DefaultSelection<Prisma.$reportPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  NEIGHBOR: 'NEIGHBOR',
  MUNICIPALITY: 'MUNICIPALITY'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

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
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.neighborProfile`: Exposes CRUD operations for the **NeighborProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NeighborProfiles
    * const neighborProfiles = await prisma.neighborProfile.findMany()
    * ```
    */
  get neighborProfile(): Prisma.NeighborProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.municipalityProfile`: Exposes CRUD operations for the **MunicipalityProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MunicipalityProfiles
    * const municipalityProfiles = await prisma.municipalityProfile.findMany()
    * ```
    */
  get municipalityProfile(): Prisma.MunicipalityProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.alert`: Exposes CRUD operations for the **Alert** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alerts
    * const alerts = await prisma.alert.findMany()
    * ```
    */
  get alert(): Prisma.AlertDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.canton`: Exposes CRUD operations for the **canton** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cantons
    * const cantons = await prisma.canton.findMany()
    * ```
    */
  get canton(): Prisma.cantonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.district`: Exposes CRUD operations for the **district** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Districts
    * const districts = await prisma.district.findMany()
    * ```
    */
  get district(): Prisma.districtDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.problem`: Exposes CRUD operations for the **problem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Problems
    * const problems = await prisma.problem.findMany()
    * ```
    */
  get problem(): Prisma.problemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.problem_type`: Exposes CRUD operations for the **problem_type** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Problem_types
    * const problem_types = await prisma.problem_type.findMany()
    * ```
    */
  get problem_type(): Prisma.problem_typeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.report`: Exposes CRUD operations for the **report** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reports
    * const reports = await prisma.report.findMany()
    * ```
    */
  get report(): Prisma.reportDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    NeighborProfile: 'NeighborProfile',
    MunicipalityProfile: 'MunicipalityProfile',
    Alert: 'Alert',
    canton: 'canton',
    district: 'district',
    problem: 'problem',
    problem_type: 'problem_type',
    report: 'report'
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
      modelProps: "user" | "neighborProfile" | "municipalityProfile" | "alert" | "canton" | "district" | "problem" | "problem_type" | "report"
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
      NeighborProfile: {
        payload: Prisma.$NeighborProfilePayload<ExtArgs>
        fields: Prisma.NeighborProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NeighborProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NeighborProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NeighborProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NeighborProfilePayload>
          }
          findFirst: {
            args: Prisma.NeighborProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NeighborProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NeighborProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NeighborProfilePayload>
          }
          findMany: {
            args: Prisma.NeighborProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NeighborProfilePayload>[]
          }
          create: {
            args: Prisma.NeighborProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NeighborProfilePayload>
          }
          createMany: {
            args: Prisma.NeighborProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NeighborProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NeighborProfilePayload>[]
          }
          delete: {
            args: Prisma.NeighborProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NeighborProfilePayload>
          }
          update: {
            args: Prisma.NeighborProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NeighborProfilePayload>
          }
          deleteMany: {
            args: Prisma.NeighborProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NeighborProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NeighborProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NeighborProfilePayload>[]
          }
          upsert: {
            args: Prisma.NeighborProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NeighborProfilePayload>
          }
          aggregate: {
            args: Prisma.NeighborProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNeighborProfile>
          }
          groupBy: {
            args: Prisma.NeighborProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<NeighborProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.NeighborProfileCountArgs<ExtArgs>
            result: $Utils.Optional<NeighborProfileCountAggregateOutputType> | number
          }
        }
      }
      MunicipalityProfile: {
        payload: Prisma.$MunicipalityProfilePayload<ExtArgs>
        fields: Prisma.MunicipalityProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MunicipalityProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipalityProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MunicipalityProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipalityProfilePayload>
          }
          findFirst: {
            args: Prisma.MunicipalityProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipalityProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MunicipalityProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipalityProfilePayload>
          }
          findMany: {
            args: Prisma.MunicipalityProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipalityProfilePayload>[]
          }
          create: {
            args: Prisma.MunicipalityProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipalityProfilePayload>
          }
          createMany: {
            args: Prisma.MunicipalityProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MunicipalityProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipalityProfilePayload>[]
          }
          delete: {
            args: Prisma.MunicipalityProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipalityProfilePayload>
          }
          update: {
            args: Prisma.MunicipalityProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipalityProfilePayload>
          }
          deleteMany: {
            args: Prisma.MunicipalityProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MunicipalityProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MunicipalityProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipalityProfilePayload>[]
          }
          upsert: {
            args: Prisma.MunicipalityProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipalityProfilePayload>
          }
          aggregate: {
            args: Prisma.MunicipalityProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMunicipalityProfile>
          }
          groupBy: {
            args: Prisma.MunicipalityProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<MunicipalityProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.MunicipalityProfileCountArgs<ExtArgs>
            result: $Utils.Optional<MunicipalityProfileCountAggregateOutputType> | number
          }
        }
      }
      Alert: {
        payload: Prisma.$AlertPayload<ExtArgs>
        fields: Prisma.AlertFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlertFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlertFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          findFirst: {
            args: Prisma.AlertFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlertFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          findMany: {
            args: Prisma.AlertFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>[]
          }
          create: {
            args: Prisma.AlertCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          createMany: {
            args: Prisma.AlertCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlertCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>[]
          }
          delete: {
            args: Prisma.AlertDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          update: {
            args: Prisma.AlertUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          deleteMany: {
            args: Prisma.AlertDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlertUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlertUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>[]
          }
          upsert: {
            args: Prisma.AlertUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          aggregate: {
            args: Prisma.AlertAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlert>
          }
          groupBy: {
            args: Prisma.AlertGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlertGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlertCountArgs<ExtArgs>
            result: $Utils.Optional<AlertCountAggregateOutputType> | number
          }
        }
      }
      canton: {
        payload: Prisma.$cantonPayload<ExtArgs>
        fields: Prisma.cantonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cantonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cantonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cantonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cantonPayload>
          }
          findFirst: {
            args: Prisma.cantonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cantonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cantonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cantonPayload>
          }
          findMany: {
            args: Prisma.cantonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cantonPayload>[]
          }
          create: {
            args: Prisma.cantonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cantonPayload>
          }
          createMany: {
            args: Prisma.cantonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.cantonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cantonPayload>[]
          }
          delete: {
            args: Prisma.cantonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cantonPayload>
          }
          update: {
            args: Prisma.cantonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cantonPayload>
          }
          deleteMany: {
            args: Prisma.cantonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cantonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.cantonUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cantonPayload>[]
          }
          upsert: {
            args: Prisma.cantonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cantonPayload>
          }
          aggregate: {
            args: Prisma.CantonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCanton>
          }
          groupBy: {
            args: Prisma.cantonGroupByArgs<ExtArgs>
            result: $Utils.Optional<CantonGroupByOutputType>[]
          }
          count: {
            args: Prisma.cantonCountArgs<ExtArgs>
            result: $Utils.Optional<CantonCountAggregateOutputType> | number
          }
        }
      }
      district: {
        payload: Prisma.$districtPayload<ExtArgs>
        fields: Prisma.districtFieldRefs
        operations: {
          findUnique: {
            args: Prisma.districtFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$districtPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.districtFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$districtPayload>
          }
          findFirst: {
            args: Prisma.districtFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$districtPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.districtFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$districtPayload>
          }
          findMany: {
            args: Prisma.districtFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$districtPayload>[]
          }
          create: {
            args: Prisma.districtCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$districtPayload>
          }
          createMany: {
            args: Prisma.districtCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.districtCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$districtPayload>[]
          }
          delete: {
            args: Prisma.districtDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$districtPayload>
          }
          update: {
            args: Prisma.districtUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$districtPayload>
          }
          deleteMany: {
            args: Prisma.districtDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.districtUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.districtUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$districtPayload>[]
          }
          upsert: {
            args: Prisma.districtUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$districtPayload>
          }
          aggregate: {
            args: Prisma.DistrictAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDistrict>
          }
          groupBy: {
            args: Prisma.districtGroupByArgs<ExtArgs>
            result: $Utils.Optional<DistrictGroupByOutputType>[]
          }
          count: {
            args: Prisma.districtCountArgs<ExtArgs>
            result: $Utils.Optional<DistrictCountAggregateOutputType> | number
          }
        }
      }
      problem: {
        payload: Prisma.$problemPayload<ExtArgs>
        fields: Prisma.problemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.problemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.problemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemPayload>
          }
          findFirst: {
            args: Prisma.problemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.problemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemPayload>
          }
          findMany: {
            args: Prisma.problemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemPayload>[]
          }
          create: {
            args: Prisma.problemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemPayload>
          }
          createMany: {
            args: Prisma.problemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.problemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemPayload>[]
          }
          delete: {
            args: Prisma.problemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemPayload>
          }
          update: {
            args: Prisma.problemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemPayload>
          }
          deleteMany: {
            args: Prisma.problemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.problemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.problemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemPayload>[]
          }
          upsert: {
            args: Prisma.problemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemPayload>
          }
          aggregate: {
            args: Prisma.ProblemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProblem>
          }
          groupBy: {
            args: Prisma.problemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProblemGroupByOutputType>[]
          }
          count: {
            args: Prisma.problemCountArgs<ExtArgs>
            result: $Utils.Optional<ProblemCountAggregateOutputType> | number
          }
        }
      }
      problem_type: {
        payload: Prisma.$problem_typePayload<ExtArgs>
        fields: Prisma.problem_typeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.problem_typeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problem_typePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.problem_typeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problem_typePayload>
          }
          findFirst: {
            args: Prisma.problem_typeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problem_typePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.problem_typeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problem_typePayload>
          }
          findMany: {
            args: Prisma.problem_typeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problem_typePayload>[]
          }
          create: {
            args: Prisma.problem_typeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problem_typePayload>
          }
          createMany: {
            args: Prisma.problem_typeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.problem_typeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problem_typePayload>[]
          }
          delete: {
            args: Prisma.problem_typeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problem_typePayload>
          }
          update: {
            args: Prisma.problem_typeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problem_typePayload>
          }
          deleteMany: {
            args: Prisma.problem_typeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.problem_typeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.problem_typeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problem_typePayload>[]
          }
          upsert: {
            args: Prisma.problem_typeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problem_typePayload>
          }
          aggregate: {
            args: Prisma.Problem_typeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProblem_type>
          }
          groupBy: {
            args: Prisma.problem_typeGroupByArgs<ExtArgs>
            result: $Utils.Optional<Problem_typeGroupByOutputType>[]
          }
          count: {
            args: Prisma.problem_typeCountArgs<ExtArgs>
            result: $Utils.Optional<Problem_typeCountAggregateOutputType> | number
          }
        }
      }
      report: {
        payload: Prisma.$reportPayload<ExtArgs>
        fields: Prisma.reportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.reportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.reportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportPayload>
          }
          findFirst: {
            args: Prisma.reportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.reportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportPayload>
          }
          findMany: {
            args: Prisma.reportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportPayload>[]
          }
          create: {
            args: Prisma.reportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportPayload>
          }
          createMany: {
            args: Prisma.reportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.reportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportPayload>[]
          }
          delete: {
            args: Prisma.reportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportPayload>
          }
          update: {
            args: Prisma.reportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportPayload>
          }
          deleteMany: {
            args: Prisma.reportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.reportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.reportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportPayload>[]
          }
          upsert: {
            args: Prisma.reportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reportPayload>
          }
          aggregate: {
            args: Prisma.ReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReport>
          }
          groupBy: {
            args: Prisma.reportGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.reportCountArgs<ExtArgs>
            result: $Utils.Optional<ReportCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    neighborProfile?: NeighborProfileOmit
    municipalityProfile?: MunicipalityProfileOmit
    alert?: AlertOmit
    canton?: cantonOmit
    district?: districtOmit
    problem?: problemOmit
    problem_type?: problem_typeOmit
    report?: reportOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
    alerts: number
    reports: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alerts?: boolean | UserCountOutputTypeCountAlertsArgs
    reports?: boolean | UserCountOutputTypeCountReportsArgs
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
  export type UserCountOutputTypeCountAlertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reportWhereInput
  }


  /**
   * Count Type CantonCountOutputType
   */

  export type CantonCountOutputType = {
    district: number
    report: number
  }

  export type CantonCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    district?: boolean | CantonCountOutputTypeCountDistrictArgs
    report?: boolean | CantonCountOutputTypeCountReportArgs
  }

  // Custom InputTypes
  /**
   * CantonCountOutputType without action
   */
  export type CantonCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CantonCountOutputType
     */
    select?: CantonCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CantonCountOutputType without action
   */
  export type CantonCountOutputTypeCountDistrictArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: districtWhereInput
  }

  /**
   * CantonCountOutputType without action
   */
  export type CantonCountOutputTypeCountReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reportWhereInput
  }


  /**
   * Count Type DistrictCountOutputType
   */

  export type DistrictCountOutputType = {
    report_report_districtTodistrict: number
  }

  export type DistrictCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report_report_districtTodistrict?: boolean | DistrictCountOutputTypeCountReport_report_districtTodistrictArgs
  }

  // Custom InputTypes
  /**
   * DistrictCountOutputType without action
   */
  export type DistrictCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistrictCountOutputType
     */
    select?: DistrictCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DistrictCountOutputType without action
   */
  export type DistrictCountOutputTypeCountReport_report_districtTodistrictArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reportWhereInput
  }


  /**
   * Count Type ProblemCountOutputType
   */

  export type ProblemCountOutputType = {
    report: number
  }

  export type ProblemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | ProblemCountOutputTypeCountReportArgs
  }

  // Custom InputTypes
  /**
   * ProblemCountOutputType without action
   */
  export type ProblemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemCountOutputType
     */
    select?: ProblemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProblemCountOutputType without action
   */
  export type ProblemCountOutputTypeCountReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reportWhereInput
  }


  /**
   * Count Type Problem_typeCountOutputType
   */

  export type Problem_typeCountOutputType = {
    problem: number
  }

  export type Problem_typeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    problem?: boolean | Problem_typeCountOutputTypeCountProblemArgs
  }

  // Custom InputTypes
  /**
   * Problem_typeCountOutputType without action
   */
  export type Problem_typeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem_typeCountOutputType
     */
    select?: Problem_typeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Problem_typeCountOutputType without action
   */
  export type Problem_typeCountOutputTypeCountProblemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: problemWhereInput
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
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    created_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    created_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    role: number
    created_at: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    created_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    created_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    created_at?: true
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
    email: string
    password: string
    role: $Enums.Role
    created_at: Date
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
    email?: boolean
    password?: boolean
    role?: boolean
    created_at?: boolean
    neighborProfile?: boolean | User$neighborProfileArgs<ExtArgs>
    municipalityProfile?: boolean | User$municipalityProfileArgs<ExtArgs>
    alerts?: boolean | User$alertsArgs<ExtArgs>
    reports?: boolean | User$reportsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    created_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "role" | "created_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    neighborProfile?: boolean | User$neighborProfileArgs<ExtArgs>
    municipalityProfile?: boolean | User$municipalityProfileArgs<ExtArgs>
    alerts?: boolean | User$alertsArgs<ExtArgs>
    reports?: boolean | User$reportsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      neighborProfile: Prisma.$NeighborProfilePayload<ExtArgs> | null
      municipalityProfile: Prisma.$MunicipalityProfilePayload<ExtArgs> | null
      alerts: Prisma.$AlertPayload<ExtArgs>[]
      reports: Prisma.$reportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      role: $Enums.Role
      created_at: Date
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
    neighborProfile<T extends User$neighborProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$neighborProfileArgs<ExtArgs>>): Prisma__NeighborProfileClient<$Result.GetResult<Prisma.$NeighborProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    municipalityProfile<T extends User$municipalityProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$municipalityProfileArgs<ExtArgs>>): Prisma__MunicipalityProfileClient<$Result.GetResult<Prisma.$MunicipalityProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    alerts<T extends User$alertsArgs<ExtArgs> = {}>(args?: Subset<T, User$alertsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reports<T extends User$reportsArgs<ExtArgs> = {}>(args?: Subset<T, User$reportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly created_at: FieldRef<"User", 'DateTime'>
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
   * User.neighborProfile
   */
  export type User$neighborProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NeighborProfile
     */
    select?: NeighborProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NeighborProfile
     */
    omit?: NeighborProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NeighborProfileInclude<ExtArgs> | null
    where?: NeighborProfileWhereInput
  }

  /**
   * User.municipalityProfile
   */
  export type User$municipalityProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MunicipalityProfile
     */
    select?: MunicipalityProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MunicipalityProfile
     */
    omit?: MunicipalityProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipalityProfileInclude<ExtArgs> | null
    where?: MunicipalityProfileWhereInput
  }

  /**
   * User.alerts
   */
  export type User$alertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    where?: AlertWhereInput
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    cursor?: AlertWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * User.reports
   */
  export type User$reportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
    where?: reportWhereInput
    orderBy?: reportOrderByWithRelationInput | reportOrderByWithRelationInput[]
    cursor?: reportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
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
   * Model NeighborProfile
   */

  export type AggregateNeighborProfile = {
    _count: NeighborProfileCountAggregateOutputType | null
    _avg: NeighborProfileAvgAggregateOutputType | null
    _sum: NeighborProfileSumAggregateOutputType | null
    _min: NeighborProfileMinAggregateOutputType | null
    _max: NeighborProfileMaxAggregateOutputType | null
  }

  export type NeighborProfileAvgAggregateOutputType = {
    id: number | null
    identification: number | null
    phone_number: number | null
    userId: number | null
  }

  export type NeighborProfileSumAggregateOutputType = {
    id: number | null
    identification: number | null
    phone_number: number | null
    userId: number | null
  }

  export type NeighborProfileMinAggregateOutputType = {
    id: number | null
    first_name: string | null
    last_name: string | null
    second_last_name: string | null
    identification: number | null
    phone_number: number | null
    userId: number | null
  }

  export type NeighborProfileMaxAggregateOutputType = {
    id: number | null
    first_name: string | null
    last_name: string | null
    second_last_name: string | null
    identification: number | null
    phone_number: number | null
    userId: number | null
  }

  export type NeighborProfileCountAggregateOutputType = {
    id: number
    first_name: number
    last_name: number
    second_last_name: number
    identification: number
    phone_number: number
    userId: number
    _all: number
  }


  export type NeighborProfileAvgAggregateInputType = {
    id?: true
    identification?: true
    phone_number?: true
    userId?: true
  }

  export type NeighborProfileSumAggregateInputType = {
    id?: true
    identification?: true
    phone_number?: true
    userId?: true
  }

  export type NeighborProfileMinAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    second_last_name?: true
    identification?: true
    phone_number?: true
    userId?: true
  }

  export type NeighborProfileMaxAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    second_last_name?: true
    identification?: true
    phone_number?: true
    userId?: true
  }

  export type NeighborProfileCountAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    second_last_name?: true
    identification?: true
    phone_number?: true
    userId?: true
    _all?: true
  }

  export type NeighborProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NeighborProfile to aggregate.
     */
    where?: NeighborProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NeighborProfiles to fetch.
     */
    orderBy?: NeighborProfileOrderByWithRelationInput | NeighborProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NeighborProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NeighborProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NeighborProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NeighborProfiles
    **/
    _count?: true | NeighborProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NeighborProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NeighborProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NeighborProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NeighborProfileMaxAggregateInputType
  }

  export type GetNeighborProfileAggregateType<T extends NeighborProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateNeighborProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNeighborProfile[P]>
      : GetScalarType<T[P], AggregateNeighborProfile[P]>
  }




  export type NeighborProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NeighborProfileWhereInput
    orderBy?: NeighborProfileOrderByWithAggregationInput | NeighborProfileOrderByWithAggregationInput[]
    by: NeighborProfileScalarFieldEnum[] | NeighborProfileScalarFieldEnum
    having?: NeighborProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NeighborProfileCountAggregateInputType | true
    _avg?: NeighborProfileAvgAggregateInputType
    _sum?: NeighborProfileSumAggregateInputType
    _min?: NeighborProfileMinAggregateInputType
    _max?: NeighborProfileMaxAggregateInputType
  }

  export type NeighborProfileGroupByOutputType = {
    id: number
    first_name: string
    last_name: string
    second_last_name: string | null
    identification: number
    phone_number: number | null
    userId: number
    _count: NeighborProfileCountAggregateOutputType | null
    _avg: NeighborProfileAvgAggregateOutputType | null
    _sum: NeighborProfileSumAggregateOutputType | null
    _min: NeighborProfileMinAggregateOutputType | null
    _max: NeighborProfileMaxAggregateOutputType | null
  }

  type GetNeighborProfileGroupByPayload<T extends NeighborProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NeighborProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NeighborProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NeighborProfileGroupByOutputType[P]>
            : GetScalarType<T[P], NeighborProfileGroupByOutputType[P]>
        }
      >
    >


  export type NeighborProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    second_last_name?: boolean
    identification?: boolean
    phone_number?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["neighborProfile"]>

  export type NeighborProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    second_last_name?: boolean
    identification?: boolean
    phone_number?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["neighborProfile"]>

  export type NeighborProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    second_last_name?: boolean
    identification?: boolean
    phone_number?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["neighborProfile"]>

  export type NeighborProfileSelectScalar = {
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    second_last_name?: boolean
    identification?: boolean
    phone_number?: boolean
    userId?: boolean
  }

  export type NeighborProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "first_name" | "last_name" | "second_last_name" | "identification" | "phone_number" | "userId", ExtArgs["result"]["neighborProfile"]>
  export type NeighborProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NeighborProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NeighborProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NeighborProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NeighborProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      first_name: string
      last_name: string
      second_last_name: string | null
      identification: number
      phone_number: number | null
      userId: number
    }, ExtArgs["result"]["neighborProfile"]>
    composites: {}
  }

  type NeighborProfileGetPayload<S extends boolean | null | undefined | NeighborProfileDefaultArgs> = $Result.GetResult<Prisma.$NeighborProfilePayload, S>

  type NeighborProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NeighborProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NeighborProfileCountAggregateInputType | true
    }

  export interface NeighborProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NeighborProfile'], meta: { name: 'NeighborProfile' } }
    /**
     * Find zero or one NeighborProfile that matches the filter.
     * @param {NeighborProfileFindUniqueArgs} args - Arguments to find a NeighborProfile
     * @example
     * // Get one NeighborProfile
     * const neighborProfile = await prisma.neighborProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NeighborProfileFindUniqueArgs>(args: SelectSubset<T, NeighborProfileFindUniqueArgs<ExtArgs>>): Prisma__NeighborProfileClient<$Result.GetResult<Prisma.$NeighborProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NeighborProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NeighborProfileFindUniqueOrThrowArgs} args - Arguments to find a NeighborProfile
     * @example
     * // Get one NeighborProfile
     * const neighborProfile = await prisma.neighborProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NeighborProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, NeighborProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NeighborProfileClient<$Result.GetResult<Prisma.$NeighborProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NeighborProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NeighborProfileFindFirstArgs} args - Arguments to find a NeighborProfile
     * @example
     * // Get one NeighborProfile
     * const neighborProfile = await prisma.neighborProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NeighborProfileFindFirstArgs>(args?: SelectSubset<T, NeighborProfileFindFirstArgs<ExtArgs>>): Prisma__NeighborProfileClient<$Result.GetResult<Prisma.$NeighborProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NeighborProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NeighborProfileFindFirstOrThrowArgs} args - Arguments to find a NeighborProfile
     * @example
     * // Get one NeighborProfile
     * const neighborProfile = await prisma.neighborProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NeighborProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, NeighborProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__NeighborProfileClient<$Result.GetResult<Prisma.$NeighborProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NeighborProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NeighborProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NeighborProfiles
     * const neighborProfiles = await prisma.neighborProfile.findMany()
     * 
     * // Get first 10 NeighborProfiles
     * const neighborProfiles = await prisma.neighborProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const neighborProfileWithIdOnly = await prisma.neighborProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NeighborProfileFindManyArgs>(args?: SelectSubset<T, NeighborProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NeighborProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NeighborProfile.
     * @param {NeighborProfileCreateArgs} args - Arguments to create a NeighborProfile.
     * @example
     * // Create one NeighborProfile
     * const NeighborProfile = await prisma.neighborProfile.create({
     *   data: {
     *     // ... data to create a NeighborProfile
     *   }
     * })
     * 
     */
    create<T extends NeighborProfileCreateArgs>(args: SelectSubset<T, NeighborProfileCreateArgs<ExtArgs>>): Prisma__NeighborProfileClient<$Result.GetResult<Prisma.$NeighborProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NeighborProfiles.
     * @param {NeighborProfileCreateManyArgs} args - Arguments to create many NeighborProfiles.
     * @example
     * // Create many NeighborProfiles
     * const neighborProfile = await prisma.neighborProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NeighborProfileCreateManyArgs>(args?: SelectSubset<T, NeighborProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NeighborProfiles and returns the data saved in the database.
     * @param {NeighborProfileCreateManyAndReturnArgs} args - Arguments to create many NeighborProfiles.
     * @example
     * // Create many NeighborProfiles
     * const neighborProfile = await prisma.neighborProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NeighborProfiles and only return the `id`
     * const neighborProfileWithIdOnly = await prisma.neighborProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NeighborProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, NeighborProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NeighborProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NeighborProfile.
     * @param {NeighborProfileDeleteArgs} args - Arguments to delete one NeighborProfile.
     * @example
     * // Delete one NeighborProfile
     * const NeighborProfile = await prisma.neighborProfile.delete({
     *   where: {
     *     // ... filter to delete one NeighborProfile
     *   }
     * })
     * 
     */
    delete<T extends NeighborProfileDeleteArgs>(args: SelectSubset<T, NeighborProfileDeleteArgs<ExtArgs>>): Prisma__NeighborProfileClient<$Result.GetResult<Prisma.$NeighborProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NeighborProfile.
     * @param {NeighborProfileUpdateArgs} args - Arguments to update one NeighborProfile.
     * @example
     * // Update one NeighborProfile
     * const neighborProfile = await prisma.neighborProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NeighborProfileUpdateArgs>(args: SelectSubset<T, NeighborProfileUpdateArgs<ExtArgs>>): Prisma__NeighborProfileClient<$Result.GetResult<Prisma.$NeighborProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NeighborProfiles.
     * @param {NeighborProfileDeleteManyArgs} args - Arguments to filter NeighborProfiles to delete.
     * @example
     * // Delete a few NeighborProfiles
     * const { count } = await prisma.neighborProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NeighborProfileDeleteManyArgs>(args?: SelectSubset<T, NeighborProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NeighborProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NeighborProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NeighborProfiles
     * const neighborProfile = await prisma.neighborProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NeighborProfileUpdateManyArgs>(args: SelectSubset<T, NeighborProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NeighborProfiles and returns the data updated in the database.
     * @param {NeighborProfileUpdateManyAndReturnArgs} args - Arguments to update many NeighborProfiles.
     * @example
     * // Update many NeighborProfiles
     * const neighborProfile = await prisma.neighborProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NeighborProfiles and only return the `id`
     * const neighborProfileWithIdOnly = await prisma.neighborProfile.updateManyAndReturn({
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
    updateManyAndReturn<T extends NeighborProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, NeighborProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NeighborProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NeighborProfile.
     * @param {NeighborProfileUpsertArgs} args - Arguments to update or create a NeighborProfile.
     * @example
     * // Update or create a NeighborProfile
     * const neighborProfile = await prisma.neighborProfile.upsert({
     *   create: {
     *     // ... data to create a NeighborProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NeighborProfile we want to update
     *   }
     * })
     */
    upsert<T extends NeighborProfileUpsertArgs>(args: SelectSubset<T, NeighborProfileUpsertArgs<ExtArgs>>): Prisma__NeighborProfileClient<$Result.GetResult<Prisma.$NeighborProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NeighborProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NeighborProfileCountArgs} args - Arguments to filter NeighborProfiles to count.
     * @example
     * // Count the number of NeighborProfiles
     * const count = await prisma.neighborProfile.count({
     *   where: {
     *     // ... the filter for the NeighborProfiles we want to count
     *   }
     * })
    **/
    count<T extends NeighborProfileCountArgs>(
      args?: Subset<T, NeighborProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NeighborProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NeighborProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NeighborProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NeighborProfileAggregateArgs>(args: Subset<T, NeighborProfileAggregateArgs>): Prisma.PrismaPromise<GetNeighborProfileAggregateType<T>>

    /**
     * Group by NeighborProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NeighborProfileGroupByArgs} args - Group by arguments.
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
      T extends NeighborProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NeighborProfileGroupByArgs['orderBy'] }
        : { orderBy?: NeighborProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NeighborProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNeighborProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NeighborProfile model
   */
  readonly fields: NeighborProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NeighborProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NeighborProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the NeighborProfile model
   */
  interface NeighborProfileFieldRefs {
    readonly id: FieldRef<"NeighborProfile", 'Int'>
    readonly first_name: FieldRef<"NeighborProfile", 'String'>
    readonly last_name: FieldRef<"NeighborProfile", 'String'>
    readonly second_last_name: FieldRef<"NeighborProfile", 'String'>
    readonly identification: FieldRef<"NeighborProfile", 'Int'>
    readonly phone_number: FieldRef<"NeighborProfile", 'Int'>
    readonly userId: FieldRef<"NeighborProfile", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * NeighborProfile findUnique
   */
  export type NeighborProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NeighborProfile
     */
    select?: NeighborProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NeighborProfile
     */
    omit?: NeighborProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NeighborProfileInclude<ExtArgs> | null
    /**
     * Filter, which NeighborProfile to fetch.
     */
    where: NeighborProfileWhereUniqueInput
  }

  /**
   * NeighborProfile findUniqueOrThrow
   */
  export type NeighborProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NeighborProfile
     */
    select?: NeighborProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NeighborProfile
     */
    omit?: NeighborProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NeighborProfileInclude<ExtArgs> | null
    /**
     * Filter, which NeighborProfile to fetch.
     */
    where: NeighborProfileWhereUniqueInput
  }

  /**
   * NeighborProfile findFirst
   */
  export type NeighborProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NeighborProfile
     */
    select?: NeighborProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NeighborProfile
     */
    omit?: NeighborProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NeighborProfileInclude<ExtArgs> | null
    /**
     * Filter, which NeighborProfile to fetch.
     */
    where?: NeighborProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NeighborProfiles to fetch.
     */
    orderBy?: NeighborProfileOrderByWithRelationInput | NeighborProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NeighborProfiles.
     */
    cursor?: NeighborProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NeighborProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NeighborProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NeighborProfiles.
     */
    distinct?: NeighborProfileScalarFieldEnum | NeighborProfileScalarFieldEnum[]
  }

  /**
   * NeighborProfile findFirstOrThrow
   */
  export type NeighborProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NeighborProfile
     */
    select?: NeighborProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NeighborProfile
     */
    omit?: NeighborProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NeighborProfileInclude<ExtArgs> | null
    /**
     * Filter, which NeighborProfile to fetch.
     */
    where?: NeighborProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NeighborProfiles to fetch.
     */
    orderBy?: NeighborProfileOrderByWithRelationInput | NeighborProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NeighborProfiles.
     */
    cursor?: NeighborProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NeighborProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NeighborProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NeighborProfiles.
     */
    distinct?: NeighborProfileScalarFieldEnum | NeighborProfileScalarFieldEnum[]
  }

  /**
   * NeighborProfile findMany
   */
  export type NeighborProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NeighborProfile
     */
    select?: NeighborProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NeighborProfile
     */
    omit?: NeighborProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NeighborProfileInclude<ExtArgs> | null
    /**
     * Filter, which NeighborProfiles to fetch.
     */
    where?: NeighborProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NeighborProfiles to fetch.
     */
    orderBy?: NeighborProfileOrderByWithRelationInput | NeighborProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NeighborProfiles.
     */
    cursor?: NeighborProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NeighborProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NeighborProfiles.
     */
    skip?: number
    distinct?: NeighborProfileScalarFieldEnum | NeighborProfileScalarFieldEnum[]
  }

  /**
   * NeighborProfile create
   */
  export type NeighborProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NeighborProfile
     */
    select?: NeighborProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NeighborProfile
     */
    omit?: NeighborProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NeighborProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a NeighborProfile.
     */
    data: XOR<NeighborProfileCreateInput, NeighborProfileUncheckedCreateInput>
  }

  /**
   * NeighborProfile createMany
   */
  export type NeighborProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NeighborProfiles.
     */
    data: NeighborProfileCreateManyInput | NeighborProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NeighborProfile createManyAndReturn
   */
  export type NeighborProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NeighborProfile
     */
    select?: NeighborProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NeighborProfile
     */
    omit?: NeighborProfileOmit<ExtArgs> | null
    /**
     * The data used to create many NeighborProfiles.
     */
    data: NeighborProfileCreateManyInput | NeighborProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NeighborProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NeighborProfile update
   */
  export type NeighborProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NeighborProfile
     */
    select?: NeighborProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NeighborProfile
     */
    omit?: NeighborProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NeighborProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a NeighborProfile.
     */
    data: XOR<NeighborProfileUpdateInput, NeighborProfileUncheckedUpdateInput>
    /**
     * Choose, which NeighborProfile to update.
     */
    where: NeighborProfileWhereUniqueInput
  }

  /**
   * NeighborProfile updateMany
   */
  export type NeighborProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NeighborProfiles.
     */
    data: XOR<NeighborProfileUpdateManyMutationInput, NeighborProfileUncheckedUpdateManyInput>
    /**
     * Filter which NeighborProfiles to update
     */
    where?: NeighborProfileWhereInput
    /**
     * Limit how many NeighborProfiles to update.
     */
    limit?: number
  }

  /**
   * NeighborProfile updateManyAndReturn
   */
  export type NeighborProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NeighborProfile
     */
    select?: NeighborProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NeighborProfile
     */
    omit?: NeighborProfileOmit<ExtArgs> | null
    /**
     * The data used to update NeighborProfiles.
     */
    data: XOR<NeighborProfileUpdateManyMutationInput, NeighborProfileUncheckedUpdateManyInput>
    /**
     * Filter which NeighborProfiles to update
     */
    where?: NeighborProfileWhereInput
    /**
     * Limit how many NeighborProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NeighborProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NeighborProfile upsert
   */
  export type NeighborProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NeighborProfile
     */
    select?: NeighborProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NeighborProfile
     */
    omit?: NeighborProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NeighborProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the NeighborProfile to update in case it exists.
     */
    where: NeighborProfileWhereUniqueInput
    /**
     * In case the NeighborProfile found by the `where` argument doesn't exist, create a new NeighborProfile with this data.
     */
    create: XOR<NeighborProfileCreateInput, NeighborProfileUncheckedCreateInput>
    /**
     * In case the NeighborProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NeighborProfileUpdateInput, NeighborProfileUncheckedUpdateInput>
  }

  /**
   * NeighborProfile delete
   */
  export type NeighborProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NeighborProfile
     */
    select?: NeighborProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NeighborProfile
     */
    omit?: NeighborProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NeighborProfileInclude<ExtArgs> | null
    /**
     * Filter which NeighborProfile to delete.
     */
    where: NeighborProfileWhereUniqueInput
  }

  /**
   * NeighborProfile deleteMany
   */
  export type NeighborProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NeighborProfiles to delete
     */
    where?: NeighborProfileWhereInput
    /**
     * Limit how many NeighborProfiles to delete.
     */
    limit?: number
  }

  /**
   * NeighborProfile without action
   */
  export type NeighborProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NeighborProfile
     */
    select?: NeighborProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NeighborProfile
     */
    omit?: NeighborProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NeighborProfileInclude<ExtArgs> | null
  }


  /**
   * Model MunicipalityProfile
   */

  export type AggregateMunicipalityProfile = {
    _count: MunicipalityProfileCountAggregateOutputType | null
    _avg: MunicipalityProfileAvgAggregateOutputType | null
    _sum: MunicipalityProfileSumAggregateOutputType | null
    _min: MunicipalityProfileMinAggregateOutputType | null
    _max: MunicipalityProfileMaxAggregateOutputType | null
  }

  export type MunicipalityProfileAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type MunicipalityProfileSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type MunicipalityProfileMinAggregateOutputType = {
    id: number | null
    name: string | null
    canton: string | null
    userId: number | null
  }

  export type MunicipalityProfileMaxAggregateOutputType = {
    id: number | null
    name: string | null
    canton: string | null
    userId: number | null
  }

  export type MunicipalityProfileCountAggregateOutputType = {
    id: number
    name: number
    canton: number
    userId: number
    _all: number
  }


  export type MunicipalityProfileAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type MunicipalityProfileSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type MunicipalityProfileMinAggregateInputType = {
    id?: true
    name?: true
    canton?: true
    userId?: true
  }

  export type MunicipalityProfileMaxAggregateInputType = {
    id?: true
    name?: true
    canton?: true
    userId?: true
  }

  export type MunicipalityProfileCountAggregateInputType = {
    id?: true
    name?: true
    canton?: true
    userId?: true
    _all?: true
  }

  export type MunicipalityProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MunicipalityProfile to aggregate.
     */
    where?: MunicipalityProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MunicipalityProfiles to fetch.
     */
    orderBy?: MunicipalityProfileOrderByWithRelationInput | MunicipalityProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MunicipalityProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MunicipalityProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MunicipalityProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MunicipalityProfiles
    **/
    _count?: true | MunicipalityProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MunicipalityProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MunicipalityProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MunicipalityProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MunicipalityProfileMaxAggregateInputType
  }

  export type GetMunicipalityProfileAggregateType<T extends MunicipalityProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateMunicipalityProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMunicipalityProfile[P]>
      : GetScalarType<T[P], AggregateMunicipalityProfile[P]>
  }




  export type MunicipalityProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MunicipalityProfileWhereInput
    orderBy?: MunicipalityProfileOrderByWithAggregationInput | MunicipalityProfileOrderByWithAggregationInput[]
    by: MunicipalityProfileScalarFieldEnum[] | MunicipalityProfileScalarFieldEnum
    having?: MunicipalityProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MunicipalityProfileCountAggregateInputType | true
    _avg?: MunicipalityProfileAvgAggregateInputType
    _sum?: MunicipalityProfileSumAggregateInputType
    _min?: MunicipalityProfileMinAggregateInputType
    _max?: MunicipalityProfileMaxAggregateInputType
  }

  export type MunicipalityProfileGroupByOutputType = {
    id: number
    name: string
    canton: string
    userId: number
    _count: MunicipalityProfileCountAggregateOutputType | null
    _avg: MunicipalityProfileAvgAggregateOutputType | null
    _sum: MunicipalityProfileSumAggregateOutputType | null
    _min: MunicipalityProfileMinAggregateOutputType | null
    _max: MunicipalityProfileMaxAggregateOutputType | null
  }

  type GetMunicipalityProfileGroupByPayload<T extends MunicipalityProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MunicipalityProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MunicipalityProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MunicipalityProfileGroupByOutputType[P]>
            : GetScalarType<T[P], MunicipalityProfileGroupByOutputType[P]>
        }
      >
    >


  export type MunicipalityProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    canton?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["municipalityProfile"]>

  export type MunicipalityProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    canton?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["municipalityProfile"]>

  export type MunicipalityProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    canton?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["municipalityProfile"]>

  export type MunicipalityProfileSelectScalar = {
    id?: boolean
    name?: boolean
    canton?: boolean
    userId?: boolean
  }

  export type MunicipalityProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "canton" | "userId", ExtArgs["result"]["municipalityProfile"]>
  export type MunicipalityProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MunicipalityProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MunicipalityProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MunicipalityProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MunicipalityProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      canton: string
      userId: number
    }, ExtArgs["result"]["municipalityProfile"]>
    composites: {}
  }

  type MunicipalityProfileGetPayload<S extends boolean | null | undefined | MunicipalityProfileDefaultArgs> = $Result.GetResult<Prisma.$MunicipalityProfilePayload, S>

  type MunicipalityProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MunicipalityProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MunicipalityProfileCountAggregateInputType | true
    }

  export interface MunicipalityProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MunicipalityProfile'], meta: { name: 'MunicipalityProfile' } }
    /**
     * Find zero or one MunicipalityProfile that matches the filter.
     * @param {MunicipalityProfileFindUniqueArgs} args - Arguments to find a MunicipalityProfile
     * @example
     * // Get one MunicipalityProfile
     * const municipalityProfile = await prisma.municipalityProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MunicipalityProfileFindUniqueArgs>(args: SelectSubset<T, MunicipalityProfileFindUniqueArgs<ExtArgs>>): Prisma__MunicipalityProfileClient<$Result.GetResult<Prisma.$MunicipalityProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MunicipalityProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MunicipalityProfileFindUniqueOrThrowArgs} args - Arguments to find a MunicipalityProfile
     * @example
     * // Get one MunicipalityProfile
     * const municipalityProfile = await prisma.municipalityProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MunicipalityProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, MunicipalityProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MunicipalityProfileClient<$Result.GetResult<Prisma.$MunicipalityProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MunicipalityProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MunicipalityProfileFindFirstArgs} args - Arguments to find a MunicipalityProfile
     * @example
     * // Get one MunicipalityProfile
     * const municipalityProfile = await prisma.municipalityProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MunicipalityProfileFindFirstArgs>(args?: SelectSubset<T, MunicipalityProfileFindFirstArgs<ExtArgs>>): Prisma__MunicipalityProfileClient<$Result.GetResult<Prisma.$MunicipalityProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MunicipalityProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MunicipalityProfileFindFirstOrThrowArgs} args - Arguments to find a MunicipalityProfile
     * @example
     * // Get one MunicipalityProfile
     * const municipalityProfile = await prisma.municipalityProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MunicipalityProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, MunicipalityProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__MunicipalityProfileClient<$Result.GetResult<Prisma.$MunicipalityProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MunicipalityProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MunicipalityProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MunicipalityProfiles
     * const municipalityProfiles = await prisma.municipalityProfile.findMany()
     * 
     * // Get first 10 MunicipalityProfiles
     * const municipalityProfiles = await prisma.municipalityProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const municipalityProfileWithIdOnly = await prisma.municipalityProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MunicipalityProfileFindManyArgs>(args?: SelectSubset<T, MunicipalityProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MunicipalityProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MunicipalityProfile.
     * @param {MunicipalityProfileCreateArgs} args - Arguments to create a MunicipalityProfile.
     * @example
     * // Create one MunicipalityProfile
     * const MunicipalityProfile = await prisma.municipalityProfile.create({
     *   data: {
     *     // ... data to create a MunicipalityProfile
     *   }
     * })
     * 
     */
    create<T extends MunicipalityProfileCreateArgs>(args: SelectSubset<T, MunicipalityProfileCreateArgs<ExtArgs>>): Prisma__MunicipalityProfileClient<$Result.GetResult<Prisma.$MunicipalityProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MunicipalityProfiles.
     * @param {MunicipalityProfileCreateManyArgs} args - Arguments to create many MunicipalityProfiles.
     * @example
     * // Create many MunicipalityProfiles
     * const municipalityProfile = await prisma.municipalityProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MunicipalityProfileCreateManyArgs>(args?: SelectSubset<T, MunicipalityProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MunicipalityProfiles and returns the data saved in the database.
     * @param {MunicipalityProfileCreateManyAndReturnArgs} args - Arguments to create many MunicipalityProfiles.
     * @example
     * // Create many MunicipalityProfiles
     * const municipalityProfile = await prisma.municipalityProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MunicipalityProfiles and only return the `id`
     * const municipalityProfileWithIdOnly = await prisma.municipalityProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MunicipalityProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, MunicipalityProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MunicipalityProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MunicipalityProfile.
     * @param {MunicipalityProfileDeleteArgs} args - Arguments to delete one MunicipalityProfile.
     * @example
     * // Delete one MunicipalityProfile
     * const MunicipalityProfile = await prisma.municipalityProfile.delete({
     *   where: {
     *     // ... filter to delete one MunicipalityProfile
     *   }
     * })
     * 
     */
    delete<T extends MunicipalityProfileDeleteArgs>(args: SelectSubset<T, MunicipalityProfileDeleteArgs<ExtArgs>>): Prisma__MunicipalityProfileClient<$Result.GetResult<Prisma.$MunicipalityProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MunicipalityProfile.
     * @param {MunicipalityProfileUpdateArgs} args - Arguments to update one MunicipalityProfile.
     * @example
     * // Update one MunicipalityProfile
     * const municipalityProfile = await prisma.municipalityProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MunicipalityProfileUpdateArgs>(args: SelectSubset<T, MunicipalityProfileUpdateArgs<ExtArgs>>): Prisma__MunicipalityProfileClient<$Result.GetResult<Prisma.$MunicipalityProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MunicipalityProfiles.
     * @param {MunicipalityProfileDeleteManyArgs} args - Arguments to filter MunicipalityProfiles to delete.
     * @example
     * // Delete a few MunicipalityProfiles
     * const { count } = await prisma.municipalityProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MunicipalityProfileDeleteManyArgs>(args?: SelectSubset<T, MunicipalityProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MunicipalityProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MunicipalityProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MunicipalityProfiles
     * const municipalityProfile = await prisma.municipalityProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MunicipalityProfileUpdateManyArgs>(args: SelectSubset<T, MunicipalityProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MunicipalityProfiles and returns the data updated in the database.
     * @param {MunicipalityProfileUpdateManyAndReturnArgs} args - Arguments to update many MunicipalityProfiles.
     * @example
     * // Update many MunicipalityProfiles
     * const municipalityProfile = await prisma.municipalityProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MunicipalityProfiles and only return the `id`
     * const municipalityProfileWithIdOnly = await prisma.municipalityProfile.updateManyAndReturn({
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
    updateManyAndReturn<T extends MunicipalityProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, MunicipalityProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MunicipalityProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MunicipalityProfile.
     * @param {MunicipalityProfileUpsertArgs} args - Arguments to update or create a MunicipalityProfile.
     * @example
     * // Update or create a MunicipalityProfile
     * const municipalityProfile = await prisma.municipalityProfile.upsert({
     *   create: {
     *     // ... data to create a MunicipalityProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MunicipalityProfile we want to update
     *   }
     * })
     */
    upsert<T extends MunicipalityProfileUpsertArgs>(args: SelectSubset<T, MunicipalityProfileUpsertArgs<ExtArgs>>): Prisma__MunicipalityProfileClient<$Result.GetResult<Prisma.$MunicipalityProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MunicipalityProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MunicipalityProfileCountArgs} args - Arguments to filter MunicipalityProfiles to count.
     * @example
     * // Count the number of MunicipalityProfiles
     * const count = await prisma.municipalityProfile.count({
     *   where: {
     *     // ... the filter for the MunicipalityProfiles we want to count
     *   }
     * })
    **/
    count<T extends MunicipalityProfileCountArgs>(
      args?: Subset<T, MunicipalityProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MunicipalityProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MunicipalityProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MunicipalityProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MunicipalityProfileAggregateArgs>(args: Subset<T, MunicipalityProfileAggregateArgs>): Prisma.PrismaPromise<GetMunicipalityProfileAggregateType<T>>

    /**
     * Group by MunicipalityProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MunicipalityProfileGroupByArgs} args - Group by arguments.
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
      T extends MunicipalityProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MunicipalityProfileGroupByArgs['orderBy'] }
        : { orderBy?: MunicipalityProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MunicipalityProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMunicipalityProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MunicipalityProfile model
   */
  readonly fields: MunicipalityProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MunicipalityProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MunicipalityProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the MunicipalityProfile model
   */
  interface MunicipalityProfileFieldRefs {
    readonly id: FieldRef<"MunicipalityProfile", 'Int'>
    readonly name: FieldRef<"MunicipalityProfile", 'String'>
    readonly canton: FieldRef<"MunicipalityProfile", 'String'>
    readonly userId: FieldRef<"MunicipalityProfile", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * MunicipalityProfile findUnique
   */
  export type MunicipalityProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MunicipalityProfile
     */
    select?: MunicipalityProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MunicipalityProfile
     */
    omit?: MunicipalityProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipalityProfileInclude<ExtArgs> | null
    /**
     * Filter, which MunicipalityProfile to fetch.
     */
    where: MunicipalityProfileWhereUniqueInput
  }

  /**
   * MunicipalityProfile findUniqueOrThrow
   */
  export type MunicipalityProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MunicipalityProfile
     */
    select?: MunicipalityProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MunicipalityProfile
     */
    omit?: MunicipalityProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipalityProfileInclude<ExtArgs> | null
    /**
     * Filter, which MunicipalityProfile to fetch.
     */
    where: MunicipalityProfileWhereUniqueInput
  }

  /**
   * MunicipalityProfile findFirst
   */
  export type MunicipalityProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MunicipalityProfile
     */
    select?: MunicipalityProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MunicipalityProfile
     */
    omit?: MunicipalityProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipalityProfileInclude<ExtArgs> | null
    /**
     * Filter, which MunicipalityProfile to fetch.
     */
    where?: MunicipalityProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MunicipalityProfiles to fetch.
     */
    orderBy?: MunicipalityProfileOrderByWithRelationInput | MunicipalityProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MunicipalityProfiles.
     */
    cursor?: MunicipalityProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MunicipalityProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MunicipalityProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MunicipalityProfiles.
     */
    distinct?: MunicipalityProfileScalarFieldEnum | MunicipalityProfileScalarFieldEnum[]
  }

  /**
   * MunicipalityProfile findFirstOrThrow
   */
  export type MunicipalityProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MunicipalityProfile
     */
    select?: MunicipalityProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MunicipalityProfile
     */
    omit?: MunicipalityProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipalityProfileInclude<ExtArgs> | null
    /**
     * Filter, which MunicipalityProfile to fetch.
     */
    where?: MunicipalityProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MunicipalityProfiles to fetch.
     */
    orderBy?: MunicipalityProfileOrderByWithRelationInput | MunicipalityProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MunicipalityProfiles.
     */
    cursor?: MunicipalityProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MunicipalityProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MunicipalityProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MunicipalityProfiles.
     */
    distinct?: MunicipalityProfileScalarFieldEnum | MunicipalityProfileScalarFieldEnum[]
  }

  /**
   * MunicipalityProfile findMany
   */
  export type MunicipalityProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MunicipalityProfile
     */
    select?: MunicipalityProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MunicipalityProfile
     */
    omit?: MunicipalityProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipalityProfileInclude<ExtArgs> | null
    /**
     * Filter, which MunicipalityProfiles to fetch.
     */
    where?: MunicipalityProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MunicipalityProfiles to fetch.
     */
    orderBy?: MunicipalityProfileOrderByWithRelationInput | MunicipalityProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MunicipalityProfiles.
     */
    cursor?: MunicipalityProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MunicipalityProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MunicipalityProfiles.
     */
    skip?: number
    distinct?: MunicipalityProfileScalarFieldEnum | MunicipalityProfileScalarFieldEnum[]
  }

  /**
   * MunicipalityProfile create
   */
  export type MunicipalityProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MunicipalityProfile
     */
    select?: MunicipalityProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MunicipalityProfile
     */
    omit?: MunicipalityProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipalityProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a MunicipalityProfile.
     */
    data: XOR<MunicipalityProfileCreateInput, MunicipalityProfileUncheckedCreateInput>
  }

  /**
   * MunicipalityProfile createMany
   */
  export type MunicipalityProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MunicipalityProfiles.
     */
    data: MunicipalityProfileCreateManyInput | MunicipalityProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MunicipalityProfile createManyAndReturn
   */
  export type MunicipalityProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MunicipalityProfile
     */
    select?: MunicipalityProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MunicipalityProfile
     */
    omit?: MunicipalityProfileOmit<ExtArgs> | null
    /**
     * The data used to create many MunicipalityProfiles.
     */
    data: MunicipalityProfileCreateManyInput | MunicipalityProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipalityProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MunicipalityProfile update
   */
  export type MunicipalityProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MunicipalityProfile
     */
    select?: MunicipalityProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MunicipalityProfile
     */
    omit?: MunicipalityProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipalityProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a MunicipalityProfile.
     */
    data: XOR<MunicipalityProfileUpdateInput, MunicipalityProfileUncheckedUpdateInput>
    /**
     * Choose, which MunicipalityProfile to update.
     */
    where: MunicipalityProfileWhereUniqueInput
  }

  /**
   * MunicipalityProfile updateMany
   */
  export type MunicipalityProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MunicipalityProfiles.
     */
    data: XOR<MunicipalityProfileUpdateManyMutationInput, MunicipalityProfileUncheckedUpdateManyInput>
    /**
     * Filter which MunicipalityProfiles to update
     */
    where?: MunicipalityProfileWhereInput
    /**
     * Limit how many MunicipalityProfiles to update.
     */
    limit?: number
  }

  /**
   * MunicipalityProfile updateManyAndReturn
   */
  export type MunicipalityProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MunicipalityProfile
     */
    select?: MunicipalityProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MunicipalityProfile
     */
    omit?: MunicipalityProfileOmit<ExtArgs> | null
    /**
     * The data used to update MunicipalityProfiles.
     */
    data: XOR<MunicipalityProfileUpdateManyMutationInput, MunicipalityProfileUncheckedUpdateManyInput>
    /**
     * Filter which MunicipalityProfiles to update
     */
    where?: MunicipalityProfileWhereInput
    /**
     * Limit how many MunicipalityProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipalityProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MunicipalityProfile upsert
   */
  export type MunicipalityProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MunicipalityProfile
     */
    select?: MunicipalityProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MunicipalityProfile
     */
    omit?: MunicipalityProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipalityProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the MunicipalityProfile to update in case it exists.
     */
    where: MunicipalityProfileWhereUniqueInput
    /**
     * In case the MunicipalityProfile found by the `where` argument doesn't exist, create a new MunicipalityProfile with this data.
     */
    create: XOR<MunicipalityProfileCreateInput, MunicipalityProfileUncheckedCreateInput>
    /**
     * In case the MunicipalityProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MunicipalityProfileUpdateInput, MunicipalityProfileUncheckedUpdateInput>
  }

  /**
   * MunicipalityProfile delete
   */
  export type MunicipalityProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MunicipalityProfile
     */
    select?: MunicipalityProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MunicipalityProfile
     */
    omit?: MunicipalityProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipalityProfileInclude<ExtArgs> | null
    /**
     * Filter which MunicipalityProfile to delete.
     */
    where: MunicipalityProfileWhereUniqueInput
  }

  /**
   * MunicipalityProfile deleteMany
   */
  export type MunicipalityProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MunicipalityProfiles to delete
     */
    where?: MunicipalityProfileWhereInput
    /**
     * Limit how many MunicipalityProfiles to delete.
     */
    limit?: number
  }

  /**
   * MunicipalityProfile without action
   */
  export type MunicipalityProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MunicipalityProfile
     */
    select?: MunicipalityProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MunicipalityProfile
     */
    omit?: MunicipalityProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipalityProfileInclude<ExtArgs> | null
  }


  /**
   * Model Alert
   */

  export type AggregateAlert = {
    _count: AlertCountAggregateOutputType | null
    _avg: AlertAvgAggregateOutputType | null
    _sum: AlertSumAggregateOutputType | null
    _min: AlertMinAggregateOutputType | null
    _max: AlertMaxAggregateOutputType | null
  }

  export type AlertAvgAggregateOutputType = {
    id: number | null
    authorId: number | null
  }

  export type AlertSumAggregateOutputType = {
    id: number | null
    authorId: number | null
  }

  export type AlertMinAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    created_at: Date | null
    updated_at: Date | null
    authorId: number | null
  }

  export type AlertMaxAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    created_at: Date | null
    updated_at: Date | null
    authorId: number | null
  }

  export type AlertCountAggregateOutputType = {
    id: number
    title: number
    content: number
    created_at: number
    updated_at: number
    authorId: number
    _all: number
  }


  export type AlertAvgAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type AlertSumAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type AlertMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    created_at?: true
    updated_at?: true
    authorId?: true
  }

  export type AlertMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    created_at?: true
    updated_at?: true
    authorId?: true
  }

  export type AlertCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    created_at?: true
    updated_at?: true
    authorId?: true
    _all?: true
  }

  export type AlertAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alert to aggregate.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Alerts
    **/
    _count?: true | AlertCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlertAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlertSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlertMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlertMaxAggregateInputType
  }

  export type GetAlertAggregateType<T extends AlertAggregateArgs> = {
        [P in keyof T & keyof AggregateAlert]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlert[P]>
      : GetScalarType<T[P], AggregateAlert[P]>
  }




  export type AlertGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertWhereInput
    orderBy?: AlertOrderByWithAggregationInput | AlertOrderByWithAggregationInput[]
    by: AlertScalarFieldEnum[] | AlertScalarFieldEnum
    having?: AlertScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlertCountAggregateInputType | true
    _avg?: AlertAvgAggregateInputType
    _sum?: AlertSumAggregateInputType
    _min?: AlertMinAggregateInputType
    _max?: AlertMaxAggregateInputType
  }

  export type AlertGroupByOutputType = {
    id: number
    title: string
    content: string
    created_at: Date
    updated_at: Date
    authorId: number
    _count: AlertCountAggregateOutputType | null
    _avg: AlertAvgAggregateOutputType | null
    _sum: AlertSumAggregateOutputType | null
    _min: AlertMinAggregateOutputType | null
    _max: AlertMaxAggregateOutputType | null
  }

  type GetAlertGroupByPayload<T extends AlertGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlertGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlertGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlertGroupByOutputType[P]>
            : GetScalarType<T[P], AlertGroupByOutputType[P]>
        }
      >
    >


  export type AlertSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    created_at?: boolean
    updated_at?: boolean
    authorId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alert"]>

  export type AlertSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    created_at?: boolean
    updated_at?: boolean
    authorId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alert"]>

  export type AlertSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    created_at?: boolean
    updated_at?: boolean
    authorId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alert"]>

  export type AlertSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    created_at?: boolean
    updated_at?: boolean
    authorId?: boolean
  }

  export type AlertOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "created_at" | "updated_at" | "authorId", ExtArgs["result"]["alert"]>
  export type AlertInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AlertIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AlertIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AlertPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Alert"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      content: string
      created_at: Date
      updated_at: Date
      authorId: number
    }, ExtArgs["result"]["alert"]>
    composites: {}
  }

  type AlertGetPayload<S extends boolean | null | undefined | AlertDefaultArgs> = $Result.GetResult<Prisma.$AlertPayload, S>

  type AlertCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlertFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlertCountAggregateInputType | true
    }

  export interface AlertDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Alert'], meta: { name: 'Alert' } }
    /**
     * Find zero or one Alert that matches the filter.
     * @param {AlertFindUniqueArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlertFindUniqueArgs>(args: SelectSubset<T, AlertFindUniqueArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Alert that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlertFindUniqueOrThrowArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlertFindUniqueOrThrowArgs>(args: SelectSubset<T, AlertFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alert that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertFindFirstArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlertFindFirstArgs>(args?: SelectSubset<T, AlertFindFirstArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alert that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertFindFirstOrThrowArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlertFindFirstOrThrowArgs>(args?: SelectSubset<T, AlertFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Alerts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alerts
     * const alerts = await prisma.alert.findMany()
     * 
     * // Get first 10 Alerts
     * const alerts = await prisma.alert.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alertWithIdOnly = await prisma.alert.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlertFindManyArgs>(args?: SelectSubset<T, AlertFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Alert.
     * @param {AlertCreateArgs} args - Arguments to create a Alert.
     * @example
     * // Create one Alert
     * const Alert = await prisma.alert.create({
     *   data: {
     *     // ... data to create a Alert
     *   }
     * })
     * 
     */
    create<T extends AlertCreateArgs>(args: SelectSubset<T, AlertCreateArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Alerts.
     * @param {AlertCreateManyArgs} args - Arguments to create many Alerts.
     * @example
     * // Create many Alerts
     * const alert = await prisma.alert.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlertCreateManyArgs>(args?: SelectSubset<T, AlertCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Alerts and returns the data saved in the database.
     * @param {AlertCreateManyAndReturnArgs} args - Arguments to create many Alerts.
     * @example
     * // Create many Alerts
     * const alert = await prisma.alert.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Alerts and only return the `id`
     * const alertWithIdOnly = await prisma.alert.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlertCreateManyAndReturnArgs>(args?: SelectSubset<T, AlertCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Alert.
     * @param {AlertDeleteArgs} args - Arguments to delete one Alert.
     * @example
     * // Delete one Alert
     * const Alert = await prisma.alert.delete({
     *   where: {
     *     // ... filter to delete one Alert
     *   }
     * })
     * 
     */
    delete<T extends AlertDeleteArgs>(args: SelectSubset<T, AlertDeleteArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Alert.
     * @param {AlertUpdateArgs} args - Arguments to update one Alert.
     * @example
     * // Update one Alert
     * const alert = await prisma.alert.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlertUpdateArgs>(args: SelectSubset<T, AlertUpdateArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Alerts.
     * @param {AlertDeleteManyArgs} args - Arguments to filter Alerts to delete.
     * @example
     * // Delete a few Alerts
     * const { count } = await prisma.alert.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlertDeleteManyArgs>(args?: SelectSubset<T, AlertDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alerts
     * const alert = await prisma.alert.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlertUpdateManyArgs>(args: SelectSubset<T, AlertUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alerts and returns the data updated in the database.
     * @param {AlertUpdateManyAndReturnArgs} args - Arguments to update many Alerts.
     * @example
     * // Update many Alerts
     * const alert = await prisma.alert.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Alerts and only return the `id`
     * const alertWithIdOnly = await prisma.alert.updateManyAndReturn({
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
    updateManyAndReturn<T extends AlertUpdateManyAndReturnArgs>(args: SelectSubset<T, AlertUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Alert.
     * @param {AlertUpsertArgs} args - Arguments to update or create a Alert.
     * @example
     * // Update or create a Alert
     * const alert = await prisma.alert.upsert({
     *   create: {
     *     // ... data to create a Alert
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alert we want to update
     *   }
     * })
     */
    upsert<T extends AlertUpsertArgs>(args: SelectSubset<T, AlertUpsertArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Alerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertCountArgs} args - Arguments to filter Alerts to count.
     * @example
     * // Count the number of Alerts
     * const count = await prisma.alert.count({
     *   where: {
     *     // ... the filter for the Alerts we want to count
     *   }
     * })
    **/
    count<T extends AlertCountArgs>(
      args?: Subset<T, AlertCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlertCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Alert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlertAggregateArgs>(args: Subset<T, AlertAggregateArgs>): Prisma.PrismaPromise<GetAlertAggregateType<T>>

    /**
     * Group by Alert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertGroupByArgs} args - Group by arguments.
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
      T extends AlertGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlertGroupByArgs['orderBy'] }
        : { orderBy?: AlertGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AlertGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlertGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Alert model
   */
  readonly fields: AlertFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Alert.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlertClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Alert model
   */
  interface AlertFieldRefs {
    readonly id: FieldRef<"Alert", 'Int'>
    readonly title: FieldRef<"Alert", 'String'>
    readonly content: FieldRef<"Alert", 'String'>
    readonly created_at: FieldRef<"Alert", 'DateTime'>
    readonly updated_at: FieldRef<"Alert", 'DateTime'>
    readonly authorId: FieldRef<"Alert", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Alert findUnique
   */
  export type AlertFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert findUniqueOrThrow
   */
  export type AlertFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert findFirst
   */
  export type AlertFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alerts.
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alerts.
     */
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Alert findFirstOrThrow
   */
  export type AlertFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alerts.
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alerts.
     */
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Alert findMany
   */
  export type AlertFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alerts to fetch.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Alerts.
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Alert create
   */
  export type AlertCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * The data needed to create a Alert.
     */
    data: XOR<AlertCreateInput, AlertUncheckedCreateInput>
  }

  /**
   * Alert createMany
   */
  export type AlertCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Alerts.
     */
    data: AlertCreateManyInput | AlertCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Alert createManyAndReturn
   */
  export type AlertCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * The data used to create many Alerts.
     */
    data: AlertCreateManyInput | AlertCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Alert update
   */
  export type AlertUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * The data needed to update a Alert.
     */
    data: XOR<AlertUpdateInput, AlertUncheckedUpdateInput>
    /**
     * Choose, which Alert to update.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert updateMany
   */
  export type AlertUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Alerts.
     */
    data: XOR<AlertUpdateManyMutationInput, AlertUncheckedUpdateManyInput>
    /**
     * Filter which Alerts to update
     */
    where?: AlertWhereInput
    /**
     * Limit how many Alerts to update.
     */
    limit?: number
  }

  /**
   * Alert updateManyAndReturn
   */
  export type AlertUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * The data used to update Alerts.
     */
    data: XOR<AlertUpdateManyMutationInput, AlertUncheckedUpdateManyInput>
    /**
     * Filter which Alerts to update
     */
    where?: AlertWhereInput
    /**
     * Limit how many Alerts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Alert upsert
   */
  export type AlertUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * The filter to search for the Alert to update in case it exists.
     */
    where: AlertWhereUniqueInput
    /**
     * In case the Alert found by the `where` argument doesn't exist, create a new Alert with this data.
     */
    create: XOR<AlertCreateInput, AlertUncheckedCreateInput>
    /**
     * In case the Alert was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlertUpdateInput, AlertUncheckedUpdateInput>
  }

  /**
   * Alert delete
   */
  export type AlertDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter which Alert to delete.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert deleteMany
   */
  export type AlertDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alerts to delete
     */
    where?: AlertWhereInput
    /**
     * Limit how many Alerts to delete.
     */
    limit?: number
  }

  /**
   * Alert without action
   */
  export type AlertDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
  }


  /**
   * Model canton
   */

  export type AggregateCanton = {
    _count: CantonCountAggregateOutputType | null
    _avg: CantonAvgAggregateOutputType | null
    _sum: CantonSumAggregateOutputType | null
    _min: CantonMinAggregateOutputType | null
    _max: CantonMaxAggregateOutputType | null
  }

  export type CantonAvgAggregateOutputType = {
    canton_id: number | null
  }

  export type CantonSumAggregateOutputType = {
    canton_id: number | null
  }

  export type CantonMinAggregateOutputType = {
    canton_id: number | null
    canton_name: string | null
  }

  export type CantonMaxAggregateOutputType = {
    canton_id: number | null
    canton_name: string | null
  }

  export type CantonCountAggregateOutputType = {
    canton_id: number
    canton_name: number
    _all: number
  }


  export type CantonAvgAggregateInputType = {
    canton_id?: true
  }

  export type CantonSumAggregateInputType = {
    canton_id?: true
  }

  export type CantonMinAggregateInputType = {
    canton_id?: true
    canton_name?: true
  }

  export type CantonMaxAggregateInputType = {
    canton_id?: true
    canton_name?: true
  }

  export type CantonCountAggregateInputType = {
    canton_id?: true
    canton_name?: true
    _all?: true
  }

  export type CantonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which canton to aggregate.
     */
    where?: cantonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cantons to fetch.
     */
    orderBy?: cantonOrderByWithRelationInput | cantonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cantonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cantons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cantons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cantons
    **/
    _count?: true | CantonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CantonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CantonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CantonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CantonMaxAggregateInputType
  }

  export type GetCantonAggregateType<T extends CantonAggregateArgs> = {
        [P in keyof T & keyof AggregateCanton]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCanton[P]>
      : GetScalarType<T[P], AggregateCanton[P]>
  }




  export type cantonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cantonWhereInput
    orderBy?: cantonOrderByWithAggregationInput | cantonOrderByWithAggregationInput[]
    by: CantonScalarFieldEnum[] | CantonScalarFieldEnum
    having?: cantonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CantonCountAggregateInputType | true
    _avg?: CantonAvgAggregateInputType
    _sum?: CantonSumAggregateInputType
    _min?: CantonMinAggregateInputType
    _max?: CantonMaxAggregateInputType
  }

  export type CantonGroupByOutputType = {
    canton_id: number
    canton_name: string | null
    _count: CantonCountAggregateOutputType | null
    _avg: CantonAvgAggregateOutputType | null
    _sum: CantonSumAggregateOutputType | null
    _min: CantonMinAggregateOutputType | null
    _max: CantonMaxAggregateOutputType | null
  }

  type GetCantonGroupByPayload<T extends cantonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CantonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CantonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CantonGroupByOutputType[P]>
            : GetScalarType<T[P], CantonGroupByOutputType[P]>
        }
      >
    >


  export type cantonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    canton_id?: boolean
    canton_name?: boolean
    district?: boolean | canton$districtArgs<ExtArgs>
    report?: boolean | canton$reportArgs<ExtArgs>
    _count?: boolean | CantonCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["canton"]>

  export type cantonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    canton_id?: boolean
    canton_name?: boolean
  }, ExtArgs["result"]["canton"]>

  export type cantonSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    canton_id?: boolean
    canton_name?: boolean
  }, ExtArgs["result"]["canton"]>

  export type cantonSelectScalar = {
    canton_id?: boolean
    canton_name?: boolean
  }

  export type cantonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"canton_id" | "canton_name", ExtArgs["result"]["canton"]>
  export type cantonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    district?: boolean | canton$districtArgs<ExtArgs>
    report?: boolean | canton$reportArgs<ExtArgs>
    _count?: boolean | CantonCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type cantonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type cantonIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $cantonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "canton"
    objects: {
      district: Prisma.$districtPayload<ExtArgs>[]
      report: Prisma.$reportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      canton_id: number
      canton_name: string | null
    }, ExtArgs["result"]["canton"]>
    composites: {}
  }

  type cantonGetPayload<S extends boolean | null | undefined | cantonDefaultArgs> = $Result.GetResult<Prisma.$cantonPayload, S>

  type cantonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cantonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CantonCountAggregateInputType | true
    }

  export interface cantonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['canton'], meta: { name: 'canton' } }
    /**
     * Find zero or one Canton that matches the filter.
     * @param {cantonFindUniqueArgs} args - Arguments to find a Canton
     * @example
     * // Get one Canton
     * const canton = await prisma.canton.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cantonFindUniqueArgs>(args: SelectSubset<T, cantonFindUniqueArgs<ExtArgs>>): Prisma__cantonClient<$Result.GetResult<Prisma.$cantonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Canton that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cantonFindUniqueOrThrowArgs} args - Arguments to find a Canton
     * @example
     * // Get one Canton
     * const canton = await prisma.canton.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cantonFindUniqueOrThrowArgs>(args: SelectSubset<T, cantonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cantonClient<$Result.GetResult<Prisma.$cantonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Canton that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cantonFindFirstArgs} args - Arguments to find a Canton
     * @example
     * // Get one Canton
     * const canton = await prisma.canton.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cantonFindFirstArgs>(args?: SelectSubset<T, cantonFindFirstArgs<ExtArgs>>): Prisma__cantonClient<$Result.GetResult<Prisma.$cantonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Canton that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cantonFindFirstOrThrowArgs} args - Arguments to find a Canton
     * @example
     * // Get one Canton
     * const canton = await prisma.canton.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cantonFindFirstOrThrowArgs>(args?: SelectSubset<T, cantonFindFirstOrThrowArgs<ExtArgs>>): Prisma__cantonClient<$Result.GetResult<Prisma.$cantonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cantons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cantonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cantons
     * const cantons = await prisma.canton.findMany()
     * 
     * // Get first 10 Cantons
     * const cantons = await prisma.canton.findMany({ take: 10 })
     * 
     * // Only select the `canton_id`
     * const cantonWithCanton_idOnly = await prisma.canton.findMany({ select: { canton_id: true } })
     * 
     */
    findMany<T extends cantonFindManyArgs>(args?: SelectSubset<T, cantonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cantonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Canton.
     * @param {cantonCreateArgs} args - Arguments to create a Canton.
     * @example
     * // Create one Canton
     * const Canton = await prisma.canton.create({
     *   data: {
     *     // ... data to create a Canton
     *   }
     * })
     * 
     */
    create<T extends cantonCreateArgs>(args: SelectSubset<T, cantonCreateArgs<ExtArgs>>): Prisma__cantonClient<$Result.GetResult<Prisma.$cantonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cantons.
     * @param {cantonCreateManyArgs} args - Arguments to create many Cantons.
     * @example
     * // Create many Cantons
     * const canton = await prisma.canton.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cantonCreateManyArgs>(args?: SelectSubset<T, cantonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cantons and returns the data saved in the database.
     * @param {cantonCreateManyAndReturnArgs} args - Arguments to create many Cantons.
     * @example
     * // Create many Cantons
     * const canton = await prisma.canton.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cantons and only return the `canton_id`
     * const cantonWithCanton_idOnly = await prisma.canton.createManyAndReturn({
     *   select: { canton_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends cantonCreateManyAndReturnArgs>(args?: SelectSubset<T, cantonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cantonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Canton.
     * @param {cantonDeleteArgs} args - Arguments to delete one Canton.
     * @example
     * // Delete one Canton
     * const Canton = await prisma.canton.delete({
     *   where: {
     *     // ... filter to delete one Canton
     *   }
     * })
     * 
     */
    delete<T extends cantonDeleteArgs>(args: SelectSubset<T, cantonDeleteArgs<ExtArgs>>): Prisma__cantonClient<$Result.GetResult<Prisma.$cantonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Canton.
     * @param {cantonUpdateArgs} args - Arguments to update one Canton.
     * @example
     * // Update one Canton
     * const canton = await prisma.canton.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cantonUpdateArgs>(args: SelectSubset<T, cantonUpdateArgs<ExtArgs>>): Prisma__cantonClient<$Result.GetResult<Prisma.$cantonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cantons.
     * @param {cantonDeleteManyArgs} args - Arguments to filter Cantons to delete.
     * @example
     * // Delete a few Cantons
     * const { count } = await prisma.canton.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cantonDeleteManyArgs>(args?: SelectSubset<T, cantonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cantons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cantonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cantons
     * const canton = await prisma.canton.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cantonUpdateManyArgs>(args: SelectSubset<T, cantonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cantons and returns the data updated in the database.
     * @param {cantonUpdateManyAndReturnArgs} args - Arguments to update many Cantons.
     * @example
     * // Update many Cantons
     * const canton = await prisma.canton.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cantons and only return the `canton_id`
     * const cantonWithCanton_idOnly = await prisma.canton.updateManyAndReturn({
     *   select: { canton_id: true },
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
    updateManyAndReturn<T extends cantonUpdateManyAndReturnArgs>(args: SelectSubset<T, cantonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cantonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Canton.
     * @param {cantonUpsertArgs} args - Arguments to update or create a Canton.
     * @example
     * // Update or create a Canton
     * const canton = await prisma.canton.upsert({
     *   create: {
     *     // ... data to create a Canton
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Canton we want to update
     *   }
     * })
     */
    upsert<T extends cantonUpsertArgs>(args: SelectSubset<T, cantonUpsertArgs<ExtArgs>>): Prisma__cantonClient<$Result.GetResult<Prisma.$cantonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cantons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cantonCountArgs} args - Arguments to filter Cantons to count.
     * @example
     * // Count the number of Cantons
     * const count = await prisma.canton.count({
     *   where: {
     *     // ... the filter for the Cantons we want to count
     *   }
     * })
    **/
    count<T extends cantonCountArgs>(
      args?: Subset<T, cantonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CantonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Canton.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CantonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CantonAggregateArgs>(args: Subset<T, CantonAggregateArgs>): Prisma.PrismaPromise<GetCantonAggregateType<T>>

    /**
     * Group by Canton.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cantonGroupByArgs} args - Group by arguments.
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
      T extends cantonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cantonGroupByArgs['orderBy'] }
        : { orderBy?: cantonGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, cantonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCantonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the canton model
   */
  readonly fields: cantonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for canton.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cantonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    district<T extends canton$districtArgs<ExtArgs> = {}>(args?: Subset<T, canton$districtArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$districtPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    report<T extends canton$reportArgs<ExtArgs> = {}>(args?: Subset<T, canton$reportArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the canton model
   */
  interface cantonFieldRefs {
    readonly canton_id: FieldRef<"canton", 'Int'>
    readonly canton_name: FieldRef<"canton", 'String'>
  }
    

  // Custom InputTypes
  /**
   * canton findUnique
   */
  export type cantonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the canton
     */
    select?: cantonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the canton
     */
    omit?: cantonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cantonInclude<ExtArgs> | null
    /**
     * Filter, which canton to fetch.
     */
    where: cantonWhereUniqueInput
  }

  /**
   * canton findUniqueOrThrow
   */
  export type cantonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the canton
     */
    select?: cantonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the canton
     */
    omit?: cantonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cantonInclude<ExtArgs> | null
    /**
     * Filter, which canton to fetch.
     */
    where: cantonWhereUniqueInput
  }

  /**
   * canton findFirst
   */
  export type cantonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the canton
     */
    select?: cantonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the canton
     */
    omit?: cantonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cantonInclude<ExtArgs> | null
    /**
     * Filter, which canton to fetch.
     */
    where?: cantonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cantons to fetch.
     */
    orderBy?: cantonOrderByWithRelationInput | cantonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cantons.
     */
    cursor?: cantonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cantons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cantons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cantons.
     */
    distinct?: CantonScalarFieldEnum | CantonScalarFieldEnum[]
  }

  /**
   * canton findFirstOrThrow
   */
  export type cantonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the canton
     */
    select?: cantonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the canton
     */
    omit?: cantonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cantonInclude<ExtArgs> | null
    /**
     * Filter, which canton to fetch.
     */
    where?: cantonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cantons to fetch.
     */
    orderBy?: cantonOrderByWithRelationInput | cantonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cantons.
     */
    cursor?: cantonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cantons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cantons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cantons.
     */
    distinct?: CantonScalarFieldEnum | CantonScalarFieldEnum[]
  }

  /**
   * canton findMany
   */
  export type cantonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the canton
     */
    select?: cantonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the canton
     */
    omit?: cantonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cantonInclude<ExtArgs> | null
    /**
     * Filter, which cantons to fetch.
     */
    where?: cantonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cantons to fetch.
     */
    orderBy?: cantonOrderByWithRelationInput | cantonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cantons.
     */
    cursor?: cantonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cantons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cantons.
     */
    skip?: number
    distinct?: CantonScalarFieldEnum | CantonScalarFieldEnum[]
  }

  /**
   * canton create
   */
  export type cantonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the canton
     */
    select?: cantonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the canton
     */
    omit?: cantonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cantonInclude<ExtArgs> | null
    /**
     * The data needed to create a canton.
     */
    data?: XOR<cantonCreateInput, cantonUncheckedCreateInput>
  }

  /**
   * canton createMany
   */
  export type cantonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cantons.
     */
    data: cantonCreateManyInput | cantonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * canton createManyAndReturn
   */
  export type cantonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the canton
     */
    select?: cantonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the canton
     */
    omit?: cantonOmit<ExtArgs> | null
    /**
     * The data used to create many cantons.
     */
    data: cantonCreateManyInput | cantonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * canton update
   */
  export type cantonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the canton
     */
    select?: cantonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the canton
     */
    omit?: cantonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cantonInclude<ExtArgs> | null
    /**
     * The data needed to update a canton.
     */
    data: XOR<cantonUpdateInput, cantonUncheckedUpdateInput>
    /**
     * Choose, which canton to update.
     */
    where: cantonWhereUniqueInput
  }

  /**
   * canton updateMany
   */
  export type cantonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cantons.
     */
    data: XOR<cantonUpdateManyMutationInput, cantonUncheckedUpdateManyInput>
    /**
     * Filter which cantons to update
     */
    where?: cantonWhereInput
    /**
     * Limit how many cantons to update.
     */
    limit?: number
  }

  /**
   * canton updateManyAndReturn
   */
  export type cantonUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the canton
     */
    select?: cantonSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the canton
     */
    omit?: cantonOmit<ExtArgs> | null
    /**
     * The data used to update cantons.
     */
    data: XOR<cantonUpdateManyMutationInput, cantonUncheckedUpdateManyInput>
    /**
     * Filter which cantons to update
     */
    where?: cantonWhereInput
    /**
     * Limit how many cantons to update.
     */
    limit?: number
  }

  /**
   * canton upsert
   */
  export type cantonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the canton
     */
    select?: cantonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the canton
     */
    omit?: cantonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cantonInclude<ExtArgs> | null
    /**
     * The filter to search for the canton to update in case it exists.
     */
    where: cantonWhereUniqueInput
    /**
     * In case the canton found by the `where` argument doesn't exist, create a new canton with this data.
     */
    create: XOR<cantonCreateInput, cantonUncheckedCreateInput>
    /**
     * In case the canton was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cantonUpdateInput, cantonUncheckedUpdateInput>
  }

  /**
   * canton delete
   */
  export type cantonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the canton
     */
    select?: cantonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the canton
     */
    omit?: cantonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cantonInclude<ExtArgs> | null
    /**
     * Filter which canton to delete.
     */
    where: cantonWhereUniqueInput
  }

  /**
   * canton deleteMany
   */
  export type cantonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cantons to delete
     */
    where?: cantonWhereInput
    /**
     * Limit how many cantons to delete.
     */
    limit?: number
  }

  /**
   * canton.district
   */
  export type canton$districtArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the district
     */
    select?: districtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the district
     */
    omit?: districtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: districtInclude<ExtArgs> | null
    where?: districtWhereInput
    orderBy?: districtOrderByWithRelationInput | districtOrderByWithRelationInput[]
    cursor?: districtWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DistrictScalarFieldEnum | DistrictScalarFieldEnum[]
  }

  /**
   * canton.report
   */
  export type canton$reportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
    where?: reportWhereInput
    orderBy?: reportOrderByWithRelationInput | reportOrderByWithRelationInput[]
    cursor?: reportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * canton without action
   */
  export type cantonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the canton
     */
    select?: cantonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the canton
     */
    omit?: cantonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cantonInclude<ExtArgs> | null
  }


  /**
   * Model district
   */

  export type AggregateDistrict = {
    _count: DistrictCountAggregateOutputType | null
    _avg: DistrictAvgAggregateOutputType | null
    _sum: DistrictSumAggregateOutputType | null
    _min: DistrictMinAggregateOutputType | null
    _max: DistrictMaxAggregateOutputType | null
  }

  export type DistrictAvgAggregateOutputType = {
    district_id: number | null
    canton_id: number | null
  }

  export type DistrictSumAggregateOutputType = {
    district_id: number | null
    canton_id: number | null
  }

  export type DistrictMinAggregateOutputType = {
    district_id: number | null
    district_name: string | null
    canton_id: number | null
  }

  export type DistrictMaxAggregateOutputType = {
    district_id: number | null
    district_name: string | null
    canton_id: number | null
  }

  export type DistrictCountAggregateOutputType = {
    district_id: number
    district_name: number
    canton_id: number
    _all: number
  }


  export type DistrictAvgAggregateInputType = {
    district_id?: true
    canton_id?: true
  }

  export type DistrictSumAggregateInputType = {
    district_id?: true
    canton_id?: true
  }

  export type DistrictMinAggregateInputType = {
    district_id?: true
    district_name?: true
    canton_id?: true
  }

  export type DistrictMaxAggregateInputType = {
    district_id?: true
    district_name?: true
    canton_id?: true
  }

  export type DistrictCountAggregateInputType = {
    district_id?: true
    district_name?: true
    canton_id?: true
    _all?: true
  }

  export type DistrictAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which district to aggregate.
     */
    where?: districtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of districts to fetch.
     */
    orderBy?: districtOrderByWithRelationInput | districtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: districtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` districts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` districts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned districts
    **/
    _count?: true | DistrictCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DistrictAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DistrictSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DistrictMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DistrictMaxAggregateInputType
  }

  export type GetDistrictAggregateType<T extends DistrictAggregateArgs> = {
        [P in keyof T & keyof AggregateDistrict]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDistrict[P]>
      : GetScalarType<T[P], AggregateDistrict[P]>
  }




  export type districtGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: districtWhereInput
    orderBy?: districtOrderByWithAggregationInput | districtOrderByWithAggregationInput[]
    by: DistrictScalarFieldEnum[] | DistrictScalarFieldEnum
    having?: districtScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DistrictCountAggregateInputType | true
    _avg?: DistrictAvgAggregateInputType
    _sum?: DistrictSumAggregateInputType
    _min?: DistrictMinAggregateInputType
    _max?: DistrictMaxAggregateInputType
  }

  export type DistrictGroupByOutputType = {
    district_id: number
    district_name: string | null
    canton_id: number | null
    _count: DistrictCountAggregateOutputType | null
    _avg: DistrictAvgAggregateOutputType | null
    _sum: DistrictSumAggregateOutputType | null
    _min: DistrictMinAggregateOutputType | null
    _max: DistrictMaxAggregateOutputType | null
  }

  type GetDistrictGroupByPayload<T extends districtGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DistrictGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DistrictGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DistrictGroupByOutputType[P]>
            : GetScalarType<T[P], DistrictGroupByOutputType[P]>
        }
      >
    >


  export type districtSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    district_id?: boolean
    district_name?: boolean
    canton_id?: boolean
    canton?: boolean | district$cantonArgs<ExtArgs>
    report_report_districtTodistrict?: boolean | district$report_report_districtTodistrictArgs<ExtArgs>
    _count?: boolean | DistrictCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["district"]>

  export type districtSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    district_id?: boolean
    district_name?: boolean
    canton_id?: boolean
    canton?: boolean | district$cantonArgs<ExtArgs>
  }, ExtArgs["result"]["district"]>

  export type districtSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    district_id?: boolean
    district_name?: boolean
    canton_id?: boolean
    canton?: boolean | district$cantonArgs<ExtArgs>
  }, ExtArgs["result"]["district"]>

  export type districtSelectScalar = {
    district_id?: boolean
    district_name?: boolean
    canton_id?: boolean
  }

  export type districtOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"district_id" | "district_name" | "canton_id", ExtArgs["result"]["district"]>
  export type districtInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    canton?: boolean | district$cantonArgs<ExtArgs>
    report_report_districtTodistrict?: boolean | district$report_report_districtTodistrictArgs<ExtArgs>
    _count?: boolean | DistrictCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type districtIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    canton?: boolean | district$cantonArgs<ExtArgs>
  }
  export type districtIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    canton?: boolean | district$cantonArgs<ExtArgs>
  }

  export type $districtPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "district"
    objects: {
      canton: Prisma.$cantonPayload<ExtArgs> | null
      report_report_districtTodistrict: Prisma.$reportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      district_id: number
      district_name: string | null
      canton_id: number | null
    }, ExtArgs["result"]["district"]>
    composites: {}
  }

  type districtGetPayload<S extends boolean | null | undefined | districtDefaultArgs> = $Result.GetResult<Prisma.$districtPayload, S>

  type districtCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<districtFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DistrictCountAggregateInputType | true
    }

  export interface districtDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['district'], meta: { name: 'district' } }
    /**
     * Find zero or one District that matches the filter.
     * @param {districtFindUniqueArgs} args - Arguments to find a District
     * @example
     * // Get one District
     * const district = await prisma.district.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends districtFindUniqueArgs>(args: SelectSubset<T, districtFindUniqueArgs<ExtArgs>>): Prisma__districtClient<$Result.GetResult<Prisma.$districtPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one District that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {districtFindUniqueOrThrowArgs} args - Arguments to find a District
     * @example
     * // Get one District
     * const district = await prisma.district.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends districtFindUniqueOrThrowArgs>(args: SelectSubset<T, districtFindUniqueOrThrowArgs<ExtArgs>>): Prisma__districtClient<$Result.GetResult<Prisma.$districtPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first District that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {districtFindFirstArgs} args - Arguments to find a District
     * @example
     * // Get one District
     * const district = await prisma.district.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends districtFindFirstArgs>(args?: SelectSubset<T, districtFindFirstArgs<ExtArgs>>): Prisma__districtClient<$Result.GetResult<Prisma.$districtPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first District that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {districtFindFirstOrThrowArgs} args - Arguments to find a District
     * @example
     * // Get one District
     * const district = await prisma.district.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends districtFindFirstOrThrowArgs>(args?: SelectSubset<T, districtFindFirstOrThrowArgs<ExtArgs>>): Prisma__districtClient<$Result.GetResult<Prisma.$districtPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Districts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {districtFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Districts
     * const districts = await prisma.district.findMany()
     * 
     * // Get first 10 Districts
     * const districts = await prisma.district.findMany({ take: 10 })
     * 
     * // Only select the `district_id`
     * const districtWithDistrict_idOnly = await prisma.district.findMany({ select: { district_id: true } })
     * 
     */
    findMany<T extends districtFindManyArgs>(args?: SelectSubset<T, districtFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$districtPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a District.
     * @param {districtCreateArgs} args - Arguments to create a District.
     * @example
     * // Create one District
     * const District = await prisma.district.create({
     *   data: {
     *     // ... data to create a District
     *   }
     * })
     * 
     */
    create<T extends districtCreateArgs>(args: SelectSubset<T, districtCreateArgs<ExtArgs>>): Prisma__districtClient<$Result.GetResult<Prisma.$districtPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Districts.
     * @param {districtCreateManyArgs} args - Arguments to create many Districts.
     * @example
     * // Create many Districts
     * const district = await prisma.district.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends districtCreateManyArgs>(args?: SelectSubset<T, districtCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Districts and returns the data saved in the database.
     * @param {districtCreateManyAndReturnArgs} args - Arguments to create many Districts.
     * @example
     * // Create many Districts
     * const district = await prisma.district.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Districts and only return the `district_id`
     * const districtWithDistrict_idOnly = await prisma.district.createManyAndReturn({
     *   select: { district_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends districtCreateManyAndReturnArgs>(args?: SelectSubset<T, districtCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$districtPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a District.
     * @param {districtDeleteArgs} args - Arguments to delete one District.
     * @example
     * // Delete one District
     * const District = await prisma.district.delete({
     *   where: {
     *     // ... filter to delete one District
     *   }
     * })
     * 
     */
    delete<T extends districtDeleteArgs>(args: SelectSubset<T, districtDeleteArgs<ExtArgs>>): Prisma__districtClient<$Result.GetResult<Prisma.$districtPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one District.
     * @param {districtUpdateArgs} args - Arguments to update one District.
     * @example
     * // Update one District
     * const district = await prisma.district.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends districtUpdateArgs>(args: SelectSubset<T, districtUpdateArgs<ExtArgs>>): Prisma__districtClient<$Result.GetResult<Prisma.$districtPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Districts.
     * @param {districtDeleteManyArgs} args - Arguments to filter Districts to delete.
     * @example
     * // Delete a few Districts
     * const { count } = await prisma.district.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends districtDeleteManyArgs>(args?: SelectSubset<T, districtDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Districts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {districtUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Districts
     * const district = await prisma.district.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends districtUpdateManyArgs>(args: SelectSubset<T, districtUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Districts and returns the data updated in the database.
     * @param {districtUpdateManyAndReturnArgs} args - Arguments to update many Districts.
     * @example
     * // Update many Districts
     * const district = await prisma.district.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Districts and only return the `district_id`
     * const districtWithDistrict_idOnly = await prisma.district.updateManyAndReturn({
     *   select: { district_id: true },
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
    updateManyAndReturn<T extends districtUpdateManyAndReturnArgs>(args: SelectSubset<T, districtUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$districtPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one District.
     * @param {districtUpsertArgs} args - Arguments to update or create a District.
     * @example
     * // Update or create a District
     * const district = await prisma.district.upsert({
     *   create: {
     *     // ... data to create a District
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the District we want to update
     *   }
     * })
     */
    upsert<T extends districtUpsertArgs>(args: SelectSubset<T, districtUpsertArgs<ExtArgs>>): Prisma__districtClient<$Result.GetResult<Prisma.$districtPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Districts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {districtCountArgs} args - Arguments to filter Districts to count.
     * @example
     * // Count the number of Districts
     * const count = await prisma.district.count({
     *   where: {
     *     // ... the filter for the Districts we want to count
     *   }
     * })
    **/
    count<T extends districtCountArgs>(
      args?: Subset<T, districtCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DistrictCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a District.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrictAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DistrictAggregateArgs>(args: Subset<T, DistrictAggregateArgs>): Prisma.PrismaPromise<GetDistrictAggregateType<T>>

    /**
     * Group by District.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {districtGroupByArgs} args - Group by arguments.
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
      T extends districtGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: districtGroupByArgs['orderBy'] }
        : { orderBy?: districtGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, districtGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDistrictGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the district model
   */
  readonly fields: districtFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for district.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__districtClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    canton<T extends district$cantonArgs<ExtArgs> = {}>(args?: Subset<T, district$cantonArgs<ExtArgs>>): Prisma__cantonClient<$Result.GetResult<Prisma.$cantonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    report_report_districtTodistrict<T extends district$report_report_districtTodistrictArgs<ExtArgs> = {}>(args?: Subset<T, district$report_report_districtTodistrictArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the district model
   */
  interface districtFieldRefs {
    readonly district_id: FieldRef<"district", 'Int'>
    readonly district_name: FieldRef<"district", 'String'>
    readonly canton_id: FieldRef<"district", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * district findUnique
   */
  export type districtFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the district
     */
    select?: districtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the district
     */
    omit?: districtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: districtInclude<ExtArgs> | null
    /**
     * Filter, which district to fetch.
     */
    where: districtWhereUniqueInput
  }

  /**
   * district findUniqueOrThrow
   */
  export type districtFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the district
     */
    select?: districtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the district
     */
    omit?: districtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: districtInclude<ExtArgs> | null
    /**
     * Filter, which district to fetch.
     */
    where: districtWhereUniqueInput
  }

  /**
   * district findFirst
   */
  export type districtFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the district
     */
    select?: districtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the district
     */
    omit?: districtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: districtInclude<ExtArgs> | null
    /**
     * Filter, which district to fetch.
     */
    where?: districtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of districts to fetch.
     */
    orderBy?: districtOrderByWithRelationInput | districtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for districts.
     */
    cursor?: districtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` districts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` districts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of districts.
     */
    distinct?: DistrictScalarFieldEnum | DistrictScalarFieldEnum[]
  }

  /**
   * district findFirstOrThrow
   */
  export type districtFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the district
     */
    select?: districtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the district
     */
    omit?: districtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: districtInclude<ExtArgs> | null
    /**
     * Filter, which district to fetch.
     */
    where?: districtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of districts to fetch.
     */
    orderBy?: districtOrderByWithRelationInput | districtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for districts.
     */
    cursor?: districtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` districts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` districts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of districts.
     */
    distinct?: DistrictScalarFieldEnum | DistrictScalarFieldEnum[]
  }

  /**
   * district findMany
   */
  export type districtFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the district
     */
    select?: districtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the district
     */
    omit?: districtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: districtInclude<ExtArgs> | null
    /**
     * Filter, which districts to fetch.
     */
    where?: districtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of districts to fetch.
     */
    orderBy?: districtOrderByWithRelationInput | districtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing districts.
     */
    cursor?: districtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` districts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` districts.
     */
    skip?: number
    distinct?: DistrictScalarFieldEnum | DistrictScalarFieldEnum[]
  }

  /**
   * district create
   */
  export type districtCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the district
     */
    select?: districtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the district
     */
    omit?: districtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: districtInclude<ExtArgs> | null
    /**
     * The data needed to create a district.
     */
    data?: XOR<districtCreateInput, districtUncheckedCreateInput>
  }

  /**
   * district createMany
   */
  export type districtCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many districts.
     */
    data: districtCreateManyInput | districtCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * district createManyAndReturn
   */
  export type districtCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the district
     */
    select?: districtSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the district
     */
    omit?: districtOmit<ExtArgs> | null
    /**
     * The data used to create many districts.
     */
    data: districtCreateManyInput | districtCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: districtIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * district update
   */
  export type districtUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the district
     */
    select?: districtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the district
     */
    omit?: districtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: districtInclude<ExtArgs> | null
    /**
     * The data needed to update a district.
     */
    data: XOR<districtUpdateInput, districtUncheckedUpdateInput>
    /**
     * Choose, which district to update.
     */
    where: districtWhereUniqueInput
  }

  /**
   * district updateMany
   */
  export type districtUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update districts.
     */
    data: XOR<districtUpdateManyMutationInput, districtUncheckedUpdateManyInput>
    /**
     * Filter which districts to update
     */
    where?: districtWhereInput
    /**
     * Limit how many districts to update.
     */
    limit?: number
  }

  /**
   * district updateManyAndReturn
   */
  export type districtUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the district
     */
    select?: districtSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the district
     */
    omit?: districtOmit<ExtArgs> | null
    /**
     * The data used to update districts.
     */
    data: XOR<districtUpdateManyMutationInput, districtUncheckedUpdateManyInput>
    /**
     * Filter which districts to update
     */
    where?: districtWhereInput
    /**
     * Limit how many districts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: districtIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * district upsert
   */
  export type districtUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the district
     */
    select?: districtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the district
     */
    omit?: districtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: districtInclude<ExtArgs> | null
    /**
     * The filter to search for the district to update in case it exists.
     */
    where: districtWhereUniqueInput
    /**
     * In case the district found by the `where` argument doesn't exist, create a new district with this data.
     */
    create: XOR<districtCreateInput, districtUncheckedCreateInput>
    /**
     * In case the district was found with the provided `where` argument, update it with this data.
     */
    update: XOR<districtUpdateInput, districtUncheckedUpdateInput>
  }

  /**
   * district delete
   */
  export type districtDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the district
     */
    select?: districtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the district
     */
    omit?: districtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: districtInclude<ExtArgs> | null
    /**
     * Filter which district to delete.
     */
    where: districtWhereUniqueInput
  }

  /**
   * district deleteMany
   */
  export type districtDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which districts to delete
     */
    where?: districtWhereInput
    /**
     * Limit how many districts to delete.
     */
    limit?: number
  }

  /**
   * district.canton
   */
  export type district$cantonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the canton
     */
    select?: cantonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the canton
     */
    omit?: cantonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cantonInclude<ExtArgs> | null
    where?: cantonWhereInput
  }

  /**
   * district.report_report_districtTodistrict
   */
  export type district$report_report_districtTodistrictArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
    where?: reportWhereInput
    orderBy?: reportOrderByWithRelationInput | reportOrderByWithRelationInput[]
    cursor?: reportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * district without action
   */
  export type districtDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the district
     */
    select?: districtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the district
     */
    omit?: districtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: districtInclude<ExtArgs> | null
  }


  /**
   * Model problem
   */

  export type AggregateProblem = {
    _count: ProblemCountAggregateOutputType | null
    _avg: ProblemAvgAggregateOutputType | null
    _sum: ProblemSumAggregateOutputType | null
    _min: ProblemMinAggregateOutputType | null
    _max: ProblemMaxAggregateOutputType | null
  }

  export type ProblemAvgAggregateOutputType = {
    problem_id: number | null
    problem_type_id: number | null
  }

  export type ProblemSumAggregateOutputType = {
    problem_id: number | null
    problem_type_id: number | null
  }

  export type ProblemMinAggregateOutputType = {
    problem_id: number | null
    problem_type_id: number | null
    problem_name: string | null
  }

  export type ProblemMaxAggregateOutputType = {
    problem_id: number | null
    problem_type_id: number | null
    problem_name: string | null
  }

  export type ProblemCountAggregateOutputType = {
    problem_id: number
    problem_type_id: number
    problem_name: number
    _all: number
  }


  export type ProblemAvgAggregateInputType = {
    problem_id?: true
    problem_type_id?: true
  }

  export type ProblemSumAggregateInputType = {
    problem_id?: true
    problem_type_id?: true
  }

  export type ProblemMinAggregateInputType = {
    problem_id?: true
    problem_type_id?: true
    problem_name?: true
  }

  export type ProblemMaxAggregateInputType = {
    problem_id?: true
    problem_type_id?: true
    problem_name?: true
  }

  export type ProblemCountAggregateInputType = {
    problem_id?: true
    problem_type_id?: true
    problem_name?: true
    _all?: true
  }

  export type ProblemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which problem to aggregate.
     */
    where?: problemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of problems to fetch.
     */
    orderBy?: problemOrderByWithRelationInput | problemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: problemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` problems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` problems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned problems
    **/
    _count?: true | ProblemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProblemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProblemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProblemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProblemMaxAggregateInputType
  }

  export type GetProblemAggregateType<T extends ProblemAggregateArgs> = {
        [P in keyof T & keyof AggregateProblem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProblem[P]>
      : GetScalarType<T[P], AggregateProblem[P]>
  }




  export type problemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: problemWhereInput
    orderBy?: problemOrderByWithAggregationInput | problemOrderByWithAggregationInput[]
    by: ProblemScalarFieldEnum[] | ProblemScalarFieldEnum
    having?: problemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProblemCountAggregateInputType | true
    _avg?: ProblemAvgAggregateInputType
    _sum?: ProblemSumAggregateInputType
    _min?: ProblemMinAggregateInputType
    _max?: ProblemMaxAggregateInputType
  }

  export type ProblemGroupByOutputType = {
    problem_id: number
    problem_type_id: number | null
    problem_name: string | null
    _count: ProblemCountAggregateOutputType | null
    _avg: ProblemAvgAggregateOutputType | null
    _sum: ProblemSumAggregateOutputType | null
    _min: ProblemMinAggregateOutputType | null
    _max: ProblemMaxAggregateOutputType | null
  }

  type GetProblemGroupByPayload<T extends problemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProblemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProblemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProblemGroupByOutputType[P]>
            : GetScalarType<T[P], ProblemGroupByOutputType[P]>
        }
      >
    >


  export type problemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    problem_id?: boolean
    problem_type_id?: boolean
    problem_name?: boolean
    problem_type?: boolean | problem$problem_typeArgs<ExtArgs>
    report?: boolean | problem$reportArgs<ExtArgs>
    _count?: boolean | ProblemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problem"]>

  export type problemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    problem_id?: boolean
    problem_type_id?: boolean
    problem_name?: boolean
    problem_type?: boolean | problem$problem_typeArgs<ExtArgs>
  }, ExtArgs["result"]["problem"]>

  export type problemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    problem_id?: boolean
    problem_type_id?: boolean
    problem_name?: boolean
    problem_type?: boolean | problem$problem_typeArgs<ExtArgs>
  }, ExtArgs["result"]["problem"]>

  export type problemSelectScalar = {
    problem_id?: boolean
    problem_type_id?: boolean
    problem_name?: boolean
  }

  export type problemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"problem_id" | "problem_type_id" | "problem_name", ExtArgs["result"]["problem"]>
  export type problemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    problem_type?: boolean | problem$problem_typeArgs<ExtArgs>
    report?: boolean | problem$reportArgs<ExtArgs>
    _count?: boolean | ProblemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type problemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    problem_type?: boolean | problem$problem_typeArgs<ExtArgs>
  }
  export type problemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    problem_type?: boolean | problem$problem_typeArgs<ExtArgs>
  }

  export type $problemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "problem"
    objects: {
      problem_type: Prisma.$problem_typePayload<ExtArgs> | null
      report: Prisma.$reportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      problem_id: number
      problem_type_id: number | null
      problem_name: string | null
    }, ExtArgs["result"]["problem"]>
    composites: {}
  }

  type problemGetPayload<S extends boolean | null | undefined | problemDefaultArgs> = $Result.GetResult<Prisma.$problemPayload, S>

  type problemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<problemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProblemCountAggregateInputType | true
    }

  export interface problemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['problem'], meta: { name: 'problem' } }
    /**
     * Find zero or one Problem that matches the filter.
     * @param {problemFindUniqueArgs} args - Arguments to find a Problem
     * @example
     * // Get one Problem
     * const problem = await prisma.problem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends problemFindUniqueArgs>(args: SelectSubset<T, problemFindUniqueArgs<ExtArgs>>): Prisma__problemClient<$Result.GetResult<Prisma.$problemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Problem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {problemFindUniqueOrThrowArgs} args - Arguments to find a Problem
     * @example
     * // Get one Problem
     * const problem = await prisma.problem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends problemFindUniqueOrThrowArgs>(args: SelectSubset<T, problemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__problemClient<$Result.GetResult<Prisma.$problemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Problem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {problemFindFirstArgs} args - Arguments to find a Problem
     * @example
     * // Get one Problem
     * const problem = await prisma.problem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends problemFindFirstArgs>(args?: SelectSubset<T, problemFindFirstArgs<ExtArgs>>): Prisma__problemClient<$Result.GetResult<Prisma.$problemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Problem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {problemFindFirstOrThrowArgs} args - Arguments to find a Problem
     * @example
     * // Get one Problem
     * const problem = await prisma.problem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends problemFindFirstOrThrowArgs>(args?: SelectSubset<T, problemFindFirstOrThrowArgs<ExtArgs>>): Prisma__problemClient<$Result.GetResult<Prisma.$problemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Problems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {problemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Problems
     * const problems = await prisma.problem.findMany()
     * 
     * // Get first 10 Problems
     * const problems = await prisma.problem.findMany({ take: 10 })
     * 
     * // Only select the `problem_id`
     * const problemWithProblem_idOnly = await prisma.problem.findMany({ select: { problem_id: true } })
     * 
     */
    findMany<T extends problemFindManyArgs>(args?: SelectSubset<T, problemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$problemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Problem.
     * @param {problemCreateArgs} args - Arguments to create a Problem.
     * @example
     * // Create one Problem
     * const Problem = await prisma.problem.create({
     *   data: {
     *     // ... data to create a Problem
     *   }
     * })
     * 
     */
    create<T extends problemCreateArgs>(args: SelectSubset<T, problemCreateArgs<ExtArgs>>): Prisma__problemClient<$Result.GetResult<Prisma.$problemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Problems.
     * @param {problemCreateManyArgs} args - Arguments to create many Problems.
     * @example
     * // Create many Problems
     * const problem = await prisma.problem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends problemCreateManyArgs>(args?: SelectSubset<T, problemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Problems and returns the data saved in the database.
     * @param {problemCreateManyAndReturnArgs} args - Arguments to create many Problems.
     * @example
     * // Create many Problems
     * const problem = await prisma.problem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Problems and only return the `problem_id`
     * const problemWithProblem_idOnly = await prisma.problem.createManyAndReturn({
     *   select: { problem_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends problemCreateManyAndReturnArgs>(args?: SelectSubset<T, problemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$problemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Problem.
     * @param {problemDeleteArgs} args - Arguments to delete one Problem.
     * @example
     * // Delete one Problem
     * const Problem = await prisma.problem.delete({
     *   where: {
     *     // ... filter to delete one Problem
     *   }
     * })
     * 
     */
    delete<T extends problemDeleteArgs>(args: SelectSubset<T, problemDeleteArgs<ExtArgs>>): Prisma__problemClient<$Result.GetResult<Prisma.$problemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Problem.
     * @param {problemUpdateArgs} args - Arguments to update one Problem.
     * @example
     * // Update one Problem
     * const problem = await prisma.problem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends problemUpdateArgs>(args: SelectSubset<T, problemUpdateArgs<ExtArgs>>): Prisma__problemClient<$Result.GetResult<Prisma.$problemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Problems.
     * @param {problemDeleteManyArgs} args - Arguments to filter Problems to delete.
     * @example
     * // Delete a few Problems
     * const { count } = await prisma.problem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends problemDeleteManyArgs>(args?: SelectSubset<T, problemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Problems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {problemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Problems
     * const problem = await prisma.problem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends problemUpdateManyArgs>(args: SelectSubset<T, problemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Problems and returns the data updated in the database.
     * @param {problemUpdateManyAndReturnArgs} args - Arguments to update many Problems.
     * @example
     * // Update many Problems
     * const problem = await prisma.problem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Problems and only return the `problem_id`
     * const problemWithProblem_idOnly = await prisma.problem.updateManyAndReturn({
     *   select: { problem_id: true },
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
    updateManyAndReturn<T extends problemUpdateManyAndReturnArgs>(args: SelectSubset<T, problemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$problemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Problem.
     * @param {problemUpsertArgs} args - Arguments to update or create a Problem.
     * @example
     * // Update or create a Problem
     * const problem = await prisma.problem.upsert({
     *   create: {
     *     // ... data to create a Problem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Problem we want to update
     *   }
     * })
     */
    upsert<T extends problemUpsertArgs>(args: SelectSubset<T, problemUpsertArgs<ExtArgs>>): Prisma__problemClient<$Result.GetResult<Prisma.$problemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Problems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {problemCountArgs} args - Arguments to filter Problems to count.
     * @example
     * // Count the number of Problems
     * const count = await prisma.problem.count({
     *   where: {
     *     // ... the filter for the Problems we want to count
     *   }
     * })
    **/
    count<T extends problemCountArgs>(
      args?: Subset<T, problemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProblemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Problem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProblemAggregateArgs>(args: Subset<T, ProblemAggregateArgs>): Prisma.PrismaPromise<GetProblemAggregateType<T>>

    /**
     * Group by Problem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {problemGroupByArgs} args - Group by arguments.
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
      T extends problemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: problemGroupByArgs['orderBy'] }
        : { orderBy?: problemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, problemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProblemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the problem model
   */
  readonly fields: problemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for problem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__problemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    problem_type<T extends problem$problem_typeArgs<ExtArgs> = {}>(args?: Subset<T, problem$problem_typeArgs<ExtArgs>>): Prisma__problem_typeClient<$Result.GetResult<Prisma.$problem_typePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    report<T extends problem$reportArgs<ExtArgs> = {}>(args?: Subset<T, problem$reportArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the problem model
   */
  interface problemFieldRefs {
    readonly problem_id: FieldRef<"problem", 'Int'>
    readonly problem_type_id: FieldRef<"problem", 'Int'>
    readonly problem_name: FieldRef<"problem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * problem findUnique
   */
  export type problemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problem
     */
    select?: problemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problem
     */
    omit?: problemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemInclude<ExtArgs> | null
    /**
     * Filter, which problem to fetch.
     */
    where: problemWhereUniqueInput
  }

  /**
   * problem findUniqueOrThrow
   */
  export type problemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problem
     */
    select?: problemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problem
     */
    omit?: problemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemInclude<ExtArgs> | null
    /**
     * Filter, which problem to fetch.
     */
    where: problemWhereUniqueInput
  }

  /**
   * problem findFirst
   */
  export type problemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problem
     */
    select?: problemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problem
     */
    omit?: problemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemInclude<ExtArgs> | null
    /**
     * Filter, which problem to fetch.
     */
    where?: problemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of problems to fetch.
     */
    orderBy?: problemOrderByWithRelationInput | problemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for problems.
     */
    cursor?: problemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` problems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` problems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of problems.
     */
    distinct?: ProblemScalarFieldEnum | ProblemScalarFieldEnum[]
  }

  /**
   * problem findFirstOrThrow
   */
  export type problemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problem
     */
    select?: problemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problem
     */
    omit?: problemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemInclude<ExtArgs> | null
    /**
     * Filter, which problem to fetch.
     */
    where?: problemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of problems to fetch.
     */
    orderBy?: problemOrderByWithRelationInput | problemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for problems.
     */
    cursor?: problemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` problems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` problems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of problems.
     */
    distinct?: ProblemScalarFieldEnum | ProblemScalarFieldEnum[]
  }

  /**
   * problem findMany
   */
  export type problemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problem
     */
    select?: problemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problem
     */
    omit?: problemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemInclude<ExtArgs> | null
    /**
     * Filter, which problems to fetch.
     */
    where?: problemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of problems to fetch.
     */
    orderBy?: problemOrderByWithRelationInput | problemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing problems.
     */
    cursor?: problemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` problems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` problems.
     */
    skip?: number
    distinct?: ProblemScalarFieldEnum | ProblemScalarFieldEnum[]
  }

  /**
   * problem create
   */
  export type problemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problem
     */
    select?: problemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problem
     */
    omit?: problemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemInclude<ExtArgs> | null
    /**
     * The data needed to create a problem.
     */
    data?: XOR<problemCreateInput, problemUncheckedCreateInput>
  }

  /**
   * problem createMany
   */
  export type problemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many problems.
     */
    data: problemCreateManyInput | problemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * problem createManyAndReturn
   */
  export type problemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problem
     */
    select?: problemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the problem
     */
    omit?: problemOmit<ExtArgs> | null
    /**
     * The data used to create many problems.
     */
    data: problemCreateManyInput | problemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * problem update
   */
  export type problemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problem
     */
    select?: problemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problem
     */
    omit?: problemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemInclude<ExtArgs> | null
    /**
     * The data needed to update a problem.
     */
    data: XOR<problemUpdateInput, problemUncheckedUpdateInput>
    /**
     * Choose, which problem to update.
     */
    where: problemWhereUniqueInput
  }

  /**
   * problem updateMany
   */
  export type problemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update problems.
     */
    data: XOR<problemUpdateManyMutationInput, problemUncheckedUpdateManyInput>
    /**
     * Filter which problems to update
     */
    where?: problemWhereInput
    /**
     * Limit how many problems to update.
     */
    limit?: number
  }

  /**
   * problem updateManyAndReturn
   */
  export type problemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problem
     */
    select?: problemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the problem
     */
    omit?: problemOmit<ExtArgs> | null
    /**
     * The data used to update problems.
     */
    data: XOR<problemUpdateManyMutationInput, problemUncheckedUpdateManyInput>
    /**
     * Filter which problems to update
     */
    where?: problemWhereInput
    /**
     * Limit how many problems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * problem upsert
   */
  export type problemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problem
     */
    select?: problemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problem
     */
    omit?: problemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemInclude<ExtArgs> | null
    /**
     * The filter to search for the problem to update in case it exists.
     */
    where: problemWhereUniqueInput
    /**
     * In case the problem found by the `where` argument doesn't exist, create a new problem with this data.
     */
    create: XOR<problemCreateInput, problemUncheckedCreateInput>
    /**
     * In case the problem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<problemUpdateInput, problemUncheckedUpdateInput>
  }

  /**
   * problem delete
   */
  export type problemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problem
     */
    select?: problemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problem
     */
    omit?: problemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemInclude<ExtArgs> | null
    /**
     * Filter which problem to delete.
     */
    where: problemWhereUniqueInput
  }

  /**
   * problem deleteMany
   */
  export type problemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which problems to delete
     */
    where?: problemWhereInput
    /**
     * Limit how many problems to delete.
     */
    limit?: number
  }

  /**
   * problem.problem_type
   */
  export type problem$problem_typeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problem_type
     */
    select?: problem_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problem_type
     */
    omit?: problem_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problem_typeInclude<ExtArgs> | null
    where?: problem_typeWhereInput
  }

  /**
   * problem.report
   */
  export type problem$reportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
    where?: reportWhereInput
    orderBy?: reportOrderByWithRelationInput | reportOrderByWithRelationInput[]
    cursor?: reportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * problem without action
   */
  export type problemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problem
     */
    select?: problemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problem
     */
    omit?: problemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemInclude<ExtArgs> | null
  }


  /**
   * Model problem_type
   */

  export type AggregateProblem_type = {
    _count: Problem_typeCountAggregateOutputType | null
    _avg: Problem_typeAvgAggregateOutputType | null
    _sum: Problem_typeSumAggregateOutputType | null
    _min: Problem_typeMinAggregateOutputType | null
    _max: Problem_typeMaxAggregateOutputType | null
  }

  export type Problem_typeAvgAggregateOutputType = {
    problem_type_id: number | null
  }

  export type Problem_typeSumAggregateOutputType = {
    problem_type_id: number | null
  }

  export type Problem_typeMinAggregateOutputType = {
    problem_type_id: number | null
    type_name: string | null
  }

  export type Problem_typeMaxAggregateOutputType = {
    problem_type_id: number | null
    type_name: string | null
  }

  export type Problem_typeCountAggregateOutputType = {
    problem_type_id: number
    type_name: number
    _all: number
  }


  export type Problem_typeAvgAggregateInputType = {
    problem_type_id?: true
  }

  export type Problem_typeSumAggregateInputType = {
    problem_type_id?: true
  }

  export type Problem_typeMinAggregateInputType = {
    problem_type_id?: true
    type_name?: true
  }

  export type Problem_typeMaxAggregateInputType = {
    problem_type_id?: true
    type_name?: true
  }

  export type Problem_typeCountAggregateInputType = {
    problem_type_id?: true
    type_name?: true
    _all?: true
  }

  export type Problem_typeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which problem_type to aggregate.
     */
    where?: problem_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of problem_types to fetch.
     */
    orderBy?: problem_typeOrderByWithRelationInput | problem_typeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: problem_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` problem_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` problem_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned problem_types
    **/
    _count?: true | Problem_typeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Problem_typeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Problem_typeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Problem_typeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Problem_typeMaxAggregateInputType
  }

  export type GetProblem_typeAggregateType<T extends Problem_typeAggregateArgs> = {
        [P in keyof T & keyof AggregateProblem_type]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProblem_type[P]>
      : GetScalarType<T[P], AggregateProblem_type[P]>
  }




  export type problem_typeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: problem_typeWhereInput
    orderBy?: problem_typeOrderByWithAggregationInput | problem_typeOrderByWithAggregationInput[]
    by: Problem_typeScalarFieldEnum[] | Problem_typeScalarFieldEnum
    having?: problem_typeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Problem_typeCountAggregateInputType | true
    _avg?: Problem_typeAvgAggregateInputType
    _sum?: Problem_typeSumAggregateInputType
    _min?: Problem_typeMinAggregateInputType
    _max?: Problem_typeMaxAggregateInputType
  }

  export type Problem_typeGroupByOutputType = {
    problem_type_id: number
    type_name: string | null
    _count: Problem_typeCountAggregateOutputType | null
    _avg: Problem_typeAvgAggregateOutputType | null
    _sum: Problem_typeSumAggregateOutputType | null
    _min: Problem_typeMinAggregateOutputType | null
    _max: Problem_typeMaxAggregateOutputType | null
  }

  type GetProblem_typeGroupByPayload<T extends problem_typeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Problem_typeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Problem_typeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Problem_typeGroupByOutputType[P]>
            : GetScalarType<T[P], Problem_typeGroupByOutputType[P]>
        }
      >
    >


  export type problem_typeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    problem_type_id?: boolean
    type_name?: boolean
    problem?: boolean | problem_type$problemArgs<ExtArgs>
    _count?: boolean | Problem_typeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problem_type"]>

  export type problem_typeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    problem_type_id?: boolean
    type_name?: boolean
  }, ExtArgs["result"]["problem_type"]>

  export type problem_typeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    problem_type_id?: boolean
    type_name?: boolean
  }, ExtArgs["result"]["problem_type"]>

  export type problem_typeSelectScalar = {
    problem_type_id?: boolean
    type_name?: boolean
  }

  export type problem_typeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"problem_type_id" | "type_name", ExtArgs["result"]["problem_type"]>
  export type problem_typeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    problem?: boolean | problem_type$problemArgs<ExtArgs>
    _count?: boolean | Problem_typeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type problem_typeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type problem_typeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $problem_typePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "problem_type"
    objects: {
      problem: Prisma.$problemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      problem_type_id: number
      type_name: string | null
    }, ExtArgs["result"]["problem_type"]>
    composites: {}
  }

  type problem_typeGetPayload<S extends boolean | null | undefined | problem_typeDefaultArgs> = $Result.GetResult<Prisma.$problem_typePayload, S>

  type problem_typeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<problem_typeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Problem_typeCountAggregateInputType | true
    }

  export interface problem_typeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['problem_type'], meta: { name: 'problem_type' } }
    /**
     * Find zero or one Problem_type that matches the filter.
     * @param {problem_typeFindUniqueArgs} args - Arguments to find a Problem_type
     * @example
     * // Get one Problem_type
     * const problem_type = await prisma.problem_type.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends problem_typeFindUniqueArgs>(args: SelectSubset<T, problem_typeFindUniqueArgs<ExtArgs>>): Prisma__problem_typeClient<$Result.GetResult<Prisma.$problem_typePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Problem_type that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {problem_typeFindUniqueOrThrowArgs} args - Arguments to find a Problem_type
     * @example
     * // Get one Problem_type
     * const problem_type = await prisma.problem_type.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends problem_typeFindUniqueOrThrowArgs>(args: SelectSubset<T, problem_typeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__problem_typeClient<$Result.GetResult<Prisma.$problem_typePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Problem_type that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {problem_typeFindFirstArgs} args - Arguments to find a Problem_type
     * @example
     * // Get one Problem_type
     * const problem_type = await prisma.problem_type.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends problem_typeFindFirstArgs>(args?: SelectSubset<T, problem_typeFindFirstArgs<ExtArgs>>): Prisma__problem_typeClient<$Result.GetResult<Prisma.$problem_typePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Problem_type that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {problem_typeFindFirstOrThrowArgs} args - Arguments to find a Problem_type
     * @example
     * // Get one Problem_type
     * const problem_type = await prisma.problem_type.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends problem_typeFindFirstOrThrowArgs>(args?: SelectSubset<T, problem_typeFindFirstOrThrowArgs<ExtArgs>>): Prisma__problem_typeClient<$Result.GetResult<Prisma.$problem_typePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Problem_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {problem_typeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Problem_types
     * const problem_types = await prisma.problem_type.findMany()
     * 
     * // Get first 10 Problem_types
     * const problem_types = await prisma.problem_type.findMany({ take: 10 })
     * 
     * // Only select the `problem_type_id`
     * const problem_typeWithProblem_type_idOnly = await prisma.problem_type.findMany({ select: { problem_type_id: true } })
     * 
     */
    findMany<T extends problem_typeFindManyArgs>(args?: SelectSubset<T, problem_typeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$problem_typePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Problem_type.
     * @param {problem_typeCreateArgs} args - Arguments to create a Problem_type.
     * @example
     * // Create one Problem_type
     * const Problem_type = await prisma.problem_type.create({
     *   data: {
     *     // ... data to create a Problem_type
     *   }
     * })
     * 
     */
    create<T extends problem_typeCreateArgs>(args: SelectSubset<T, problem_typeCreateArgs<ExtArgs>>): Prisma__problem_typeClient<$Result.GetResult<Prisma.$problem_typePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Problem_types.
     * @param {problem_typeCreateManyArgs} args - Arguments to create many Problem_types.
     * @example
     * // Create many Problem_types
     * const problem_type = await prisma.problem_type.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends problem_typeCreateManyArgs>(args?: SelectSubset<T, problem_typeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Problem_types and returns the data saved in the database.
     * @param {problem_typeCreateManyAndReturnArgs} args - Arguments to create many Problem_types.
     * @example
     * // Create many Problem_types
     * const problem_type = await prisma.problem_type.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Problem_types and only return the `problem_type_id`
     * const problem_typeWithProblem_type_idOnly = await prisma.problem_type.createManyAndReturn({
     *   select: { problem_type_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends problem_typeCreateManyAndReturnArgs>(args?: SelectSubset<T, problem_typeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$problem_typePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Problem_type.
     * @param {problem_typeDeleteArgs} args - Arguments to delete one Problem_type.
     * @example
     * // Delete one Problem_type
     * const Problem_type = await prisma.problem_type.delete({
     *   where: {
     *     // ... filter to delete one Problem_type
     *   }
     * })
     * 
     */
    delete<T extends problem_typeDeleteArgs>(args: SelectSubset<T, problem_typeDeleteArgs<ExtArgs>>): Prisma__problem_typeClient<$Result.GetResult<Prisma.$problem_typePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Problem_type.
     * @param {problem_typeUpdateArgs} args - Arguments to update one Problem_type.
     * @example
     * // Update one Problem_type
     * const problem_type = await prisma.problem_type.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends problem_typeUpdateArgs>(args: SelectSubset<T, problem_typeUpdateArgs<ExtArgs>>): Prisma__problem_typeClient<$Result.GetResult<Prisma.$problem_typePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Problem_types.
     * @param {problem_typeDeleteManyArgs} args - Arguments to filter Problem_types to delete.
     * @example
     * // Delete a few Problem_types
     * const { count } = await prisma.problem_type.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends problem_typeDeleteManyArgs>(args?: SelectSubset<T, problem_typeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Problem_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {problem_typeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Problem_types
     * const problem_type = await prisma.problem_type.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends problem_typeUpdateManyArgs>(args: SelectSubset<T, problem_typeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Problem_types and returns the data updated in the database.
     * @param {problem_typeUpdateManyAndReturnArgs} args - Arguments to update many Problem_types.
     * @example
     * // Update many Problem_types
     * const problem_type = await prisma.problem_type.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Problem_types and only return the `problem_type_id`
     * const problem_typeWithProblem_type_idOnly = await prisma.problem_type.updateManyAndReturn({
     *   select: { problem_type_id: true },
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
    updateManyAndReturn<T extends problem_typeUpdateManyAndReturnArgs>(args: SelectSubset<T, problem_typeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$problem_typePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Problem_type.
     * @param {problem_typeUpsertArgs} args - Arguments to update or create a Problem_type.
     * @example
     * // Update or create a Problem_type
     * const problem_type = await prisma.problem_type.upsert({
     *   create: {
     *     // ... data to create a Problem_type
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Problem_type we want to update
     *   }
     * })
     */
    upsert<T extends problem_typeUpsertArgs>(args: SelectSubset<T, problem_typeUpsertArgs<ExtArgs>>): Prisma__problem_typeClient<$Result.GetResult<Prisma.$problem_typePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Problem_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {problem_typeCountArgs} args - Arguments to filter Problem_types to count.
     * @example
     * // Count the number of Problem_types
     * const count = await prisma.problem_type.count({
     *   where: {
     *     // ... the filter for the Problem_types we want to count
     *   }
     * })
    **/
    count<T extends problem_typeCountArgs>(
      args?: Subset<T, problem_typeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Problem_typeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Problem_type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Problem_typeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Problem_typeAggregateArgs>(args: Subset<T, Problem_typeAggregateArgs>): Prisma.PrismaPromise<GetProblem_typeAggregateType<T>>

    /**
     * Group by Problem_type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {problem_typeGroupByArgs} args - Group by arguments.
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
      T extends problem_typeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: problem_typeGroupByArgs['orderBy'] }
        : { orderBy?: problem_typeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, problem_typeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProblem_typeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the problem_type model
   */
  readonly fields: problem_typeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for problem_type.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__problem_typeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    problem<T extends problem_type$problemArgs<ExtArgs> = {}>(args?: Subset<T, problem_type$problemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$problemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the problem_type model
   */
  interface problem_typeFieldRefs {
    readonly problem_type_id: FieldRef<"problem_type", 'Int'>
    readonly type_name: FieldRef<"problem_type", 'String'>
  }
    

  // Custom InputTypes
  /**
   * problem_type findUnique
   */
  export type problem_typeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problem_type
     */
    select?: problem_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problem_type
     */
    omit?: problem_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problem_typeInclude<ExtArgs> | null
    /**
     * Filter, which problem_type to fetch.
     */
    where: problem_typeWhereUniqueInput
  }

  /**
   * problem_type findUniqueOrThrow
   */
  export type problem_typeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problem_type
     */
    select?: problem_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problem_type
     */
    omit?: problem_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problem_typeInclude<ExtArgs> | null
    /**
     * Filter, which problem_type to fetch.
     */
    where: problem_typeWhereUniqueInput
  }

  /**
   * problem_type findFirst
   */
  export type problem_typeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problem_type
     */
    select?: problem_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problem_type
     */
    omit?: problem_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problem_typeInclude<ExtArgs> | null
    /**
     * Filter, which problem_type to fetch.
     */
    where?: problem_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of problem_types to fetch.
     */
    orderBy?: problem_typeOrderByWithRelationInput | problem_typeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for problem_types.
     */
    cursor?: problem_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` problem_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` problem_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of problem_types.
     */
    distinct?: Problem_typeScalarFieldEnum | Problem_typeScalarFieldEnum[]
  }

  /**
   * problem_type findFirstOrThrow
   */
  export type problem_typeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problem_type
     */
    select?: problem_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problem_type
     */
    omit?: problem_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problem_typeInclude<ExtArgs> | null
    /**
     * Filter, which problem_type to fetch.
     */
    where?: problem_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of problem_types to fetch.
     */
    orderBy?: problem_typeOrderByWithRelationInput | problem_typeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for problem_types.
     */
    cursor?: problem_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` problem_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` problem_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of problem_types.
     */
    distinct?: Problem_typeScalarFieldEnum | Problem_typeScalarFieldEnum[]
  }

  /**
   * problem_type findMany
   */
  export type problem_typeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problem_type
     */
    select?: problem_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problem_type
     */
    omit?: problem_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problem_typeInclude<ExtArgs> | null
    /**
     * Filter, which problem_types to fetch.
     */
    where?: problem_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of problem_types to fetch.
     */
    orderBy?: problem_typeOrderByWithRelationInput | problem_typeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing problem_types.
     */
    cursor?: problem_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` problem_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` problem_types.
     */
    skip?: number
    distinct?: Problem_typeScalarFieldEnum | Problem_typeScalarFieldEnum[]
  }

  /**
   * problem_type create
   */
  export type problem_typeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problem_type
     */
    select?: problem_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problem_type
     */
    omit?: problem_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problem_typeInclude<ExtArgs> | null
    /**
     * The data needed to create a problem_type.
     */
    data?: XOR<problem_typeCreateInput, problem_typeUncheckedCreateInput>
  }

  /**
   * problem_type createMany
   */
  export type problem_typeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many problem_types.
     */
    data: problem_typeCreateManyInput | problem_typeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * problem_type createManyAndReturn
   */
  export type problem_typeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problem_type
     */
    select?: problem_typeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the problem_type
     */
    omit?: problem_typeOmit<ExtArgs> | null
    /**
     * The data used to create many problem_types.
     */
    data: problem_typeCreateManyInput | problem_typeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * problem_type update
   */
  export type problem_typeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problem_type
     */
    select?: problem_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problem_type
     */
    omit?: problem_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problem_typeInclude<ExtArgs> | null
    /**
     * The data needed to update a problem_type.
     */
    data: XOR<problem_typeUpdateInput, problem_typeUncheckedUpdateInput>
    /**
     * Choose, which problem_type to update.
     */
    where: problem_typeWhereUniqueInput
  }

  /**
   * problem_type updateMany
   */
  export type problem_typeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update problem_types.
     */
    data: XOR<problem_typeUpdateManyMutationInput, problem_typeUncheckedUpdateManyInput>
    /**
     * Filter which problem_types to update
     */
    where?: problem_typeWhereInput
    /**
     * Limit how many problem_types to update.
     */
    limit?: number
  }

  /**
   * problem_type updateManyAndReturn
   */
  export type problem_typeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problem_type
     */
    select?: problem_typeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the problem_type
     */
    omit?: problem_typeOmit<ExtArgs> | null
    /**
     * The data used to update problem_types.
     */
    data: XOR<problem_typeUpdateManyMutationInput, problem_typeUncheckedUpdateManyInput>
    /**
     * Filter which problem_types to update
     */
    where?: problem_typeWhereInput
    /**
     * Limit how many problem_types to update.
     */
    limit?: number
  }

  /**
   * problem_type upsert
   */
  export type problem_typeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problem_type
     */
    select?: problem_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problem_type
     */
    omit?: problem_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problem_typeInclude<ExtArgs> | null
    /**
     * The filter to search for the problem_type to update in case it exists.
     */
    where: problem_typeWhereUniqueInput
    /**
     * In case the problem_type found by the `where` argument doesn't exist, create a new problem_type with this data.
     */
    create: XOR<problem_typeCreateInput, problem_typeUncheckedCreateInput>
    /**
     * In case the problem_type was found with the provided `where` argument, update it with this data.
     */
    update: XOR<problem_typeUpdateInput, problem_typeUncheckedUpdateInput>
  }

  /**
   * problem_type delete
   */
  export type problem_typeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problem_type
     */
    select?: problem_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problem_type
     */
    omit?: problem_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problem_typeInclude<ExtArgs> | null
    /**
     * Filter which problem_type to delete.
     */
    where: problem_typeWhereUniqueInput
  }

  /**
   * problem_type deleteMany
   */
  export type problem_typeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which problem_types to delete
     */
    where?: problem_typeWhereInput
    /**
     * Limit how many problem_types to delete.
     */
    limit?: number
  }

  /**
   * problem_type.problem
   */
  export type problem_type$problemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problem
     */
    select?: problemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problem
     */
    omit?: problemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemInclude<ExtArgs> | null
    where?: problemWhereInput
    orderBy?: problemOrderByWithRelationInput | problemOrderByWithRelationInput[]
    cursor?: problemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProblemScalarFieldEnum | ProblemScalarFieldEnum[]
  }

  /**
   * problem_type without action
   */
  export type problem_typeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problem_type
     */
    select?: problem_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problem_type
     */
    omit?: problem_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problem_typeInclude<ExtArgs> | null
  }


  /**
   * Model report
   */

  export type AggregateReport = {
    _count: ReportCountAggregateOutputType | null
    _avg: ReportAvgAggregateOutputType | null
    _sum: ReportSumAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  export type ReportAvgAggregateOutputType = {
    report_id: number | null
    author_id: number | null
    problem_id: number | null
    canton_id: number | null
    district: number | null
  }

  export type ReportSumAggregateOutputType = {
    report_id: number | null
    author_id: number | null
    problem_id: number | null
    canton_id: number | null
    district: number | null
  }

  export type ReportMinAggregateOutputType = {
    report_id: number | null
    author_id: number | null
    report_title: string | null
    problem_id: number | null
    canton_id: number | null
    district: number | null
    neighborhood: string | null
    street: string | null
    report_date: Date | null
    report_time: Date | null
    status: string | null
    updated_at: Date | null
    viewedByMunicipality: boolean | null
  }

  export type ReportMaxAggregateOutputType = {
    report_id: number | null
    author_id: number | null
    report_title: string | null
    problem_id: number | null
    canton_id: number | null
    district: number | null
    neighborhood: string | null
    street: string | null
    report_date: Date | null
    report_time: Date | null
    status: string | null
    updated_at: Date | null
    viewedByMunicipality: boolean | null
  }

  export type ReportCountAggregateOutputType = {
    report_id: number
    author_id: number
    report_title: number
    problem_id: number
    canton_id: number
    district: number
    neighborhood: number
    street: number
    report_date: number
    report_time: number
    status: number
    updated_at: number
    viewedByMunicipality: number
    _all: number
  }


  export type ReportAvgAggregateInputType = {
    report_id?: true
    author_id?: true
    problem_id?: true
    canton_id?: true
    district?: true
  }

  export type ReportSumAggregateInputType = {
    report_id?: true
    author_id?: true
    problem_id?: true
    canton_id?: true
    district?: true
  }

  export type ReportMinAggregateInputType = {
    report_id?: true
    author_id?: true
    report_title?: true
    problem_id?: true
    canton_id?: true
    district?: true
    neighborhood?: true
    street?: true
    report_date?: true
    report_time?: true
    status?: true
    updated_at?: true
    viewedByMunicipality?: true
  }

  export type ReportMaxAggregateInputType = {
    report_id?: true
    author_id?: true
    report_title?: true
    problem_id?: true
    canton_id?: true
    district?: true
    neighborhood?: true
    street?: true
    report_date?: true
    report_time?: true
    status?: true
    updated_at?: true
    viewedByMunicipality?: true
  }

  export type ReportCountAggregateInputType = {
    report_id?: true
    author_id?: true
    report_title?: true
    problem_id?: true
    canton_id?: true
    district?: true
    neighborhood?: true
    street?: true
    report_date?: true
    report_time?: true
    status?: true
    updated_at?: true
    viewedByMunicipality?: true
    _all?: true
  }

  export type ReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which report to aggregate.
     */
    where?: reportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reports to fetch.
     */
    orderBy?: reportOrderByWithRelationInput | reportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: reportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reports
    **/
    _count?: true | ReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReportMaxAggregateInputType
  }

  export type GetReportAggregateType<T extends ReportAggregateArgs> = {
        [P in keyof T & keyof AggregateReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReport[P]>
      : GetScalarType<T[P], AggregateReport[P]>
  }




  export type reportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reportWhereInput
    orderBy?: reportOrderByWithAggregationInput | reportOrderByWithAggregationInput[]
    by: ReportScalarFieldEnum[] | ReportScalarFieldEnum
    having?: reportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReportCountAggregateInputType | true
    _avg?: ReportAvgAggregateInputType
    _sum?: ReportSumAggregateInputType
    _min?: ReportMinAggregateInputType
    _max?: ReportMaxAggregateInputType
  }

  export type ReportGroupByOutputType = {
    report_id: number
    author_id: number | null
    report_title: string | null
    problem_id: number | null
    canton_id: number | null
    district: number | null
    neighborhood: string | null
    street: string | null
    report_date: Date | null
    report_time: Date | null
    status: string | null
    updated_at: Date | null
    viewedByMunicipality: boolean | null
    _count: ReportCountAggregateOutputType | null
    _avg: ReportAvgAggregateOutputType | null
    _sum: ReportSumAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  type GetReportGroupByPayload<T extends reportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReportGroupByOutputType[P]>
            : GetScalarType<T[P], ReportGroupByOutputType[P]>
        }
      >
    >


  export type reportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    report_id?: boolean
    author_id?: boolean
    report_title?: boolean
    problem_id?: boolean
    canton_id?: boolean
    district?: boolean
    neighborhood?: boolean
    street?: boolean
    report_date?: boolean
    report_time?: boolean
    status?: boolean
    updated_at?: boolean
    viewedByMunicipality?: boolean
    canton?: boolean | report$cantonArgs<ExtArgs>
    district_report_districtTodistrict?: boolean | report$district_report_districtTodistrictArgs<ExtArgs>
    author?: boolean | report$authorArgs<ExtArgs>
    problem?: boolean | report$problemArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type reportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    report_id?: boolean
    author_id?: boolean
    report_title?: boolean
    problem_id?: boolean
    canton_id?: boolean
    district?: boolean
    neighborhood?: boolean
    street?: boolean
    report_date?: boolean
    report_time?: boolean
    status?: boolean
    updated_at?: boolean
    viewedByMunicipality?: boolean
    canton?: boolean | report$cantonArgs<ExtArgs>
    district_report_districtTodistrict?: boolean | report$district_report_districtTodistrictArgs<ExtArgs>
    author?: boolean | report$authorArgs<ExtArgs>
    problem?: boolean | report$problemArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type reportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    report_id?: boolean
    author_id?: boolean
    report_title?: boolean
    problem_id?: boolean
    canton_id?: boolean
    district?: boolean
    neighborhood?: boolean
    street?: boolean
    report_date?: boolean
    report_time?: boolean
    status?: boolean
    updated_at?: boolean
    viewedByMunicipality?: boolean
    canton?: boolean | report$cantonArgs<ExtArgs>
    district_report_districtTodistrict?: boolean | report$district_report_districtTodistrictArgs<ExtArgs>
    author?: boolean | report$authorArgs<ExtArgs>
    problem?: boolean | report$problemArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type reportSelectScalar = {
    report_id?: boolean
    author_id?: boolean
    report_title?: boolean
    problem_id?: boolean
    canton_id?: boolean
    district?: boolean
    neighborhood?: boolean
    street?: boolean
    report_date?: boolean
    report_time?: boolean
    status?: boolean
    updated_at?: boolean
    viewedByMunicipality?: boolean
  }

  export type reportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"report_id" | "author_id" | "report_title" | "problem_id" | "canton_id" | "district" | "neighborhood" | "street" | "report_date" | "report_time" | "status" | "updated_at" | "viewedByMunicipality", ExtArgs["result"]["report"]>
  export type reportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    canton?: boolean | report$cantonArgs<ExtArgs>
    district_report_districtTodistrict?: boolean | report$district_report_districtTodistrictArgs<ExtArgs>
    author?: boolean | report$authorArgs<ExtArgs>
    problem?: boolean | report$problemArgs<ExtArgs>
  }
  export type reportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    canton?: boolean | report$cantonArgs<ExtArgs>
    district_report_districtTodistrict?: boolean | report$district_report_districtTodistrictArgs<ExtArgs>
    author?: boolean | report$authorArgs<ExtArgs>
    problem?: boolean | report$problemArgs<ExtArgs>
  }
  export type reportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    canton?: boolean | report$cantonArgs<ExtArgs>
    district_report_districtTodistrict?: boolean | report$district_report_districtTodistrictArgs<ExtArgs>
    author?: boolean | report$authorArgs<ExtArgs>
    problem?: boolean | report$problemArgs<ExtArgs>
  }

  export type $reportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "report"
    objects: {
      canton: Prisma.$cantonPayload<ExtArgs> | null
      district_report_districtTodistrict: Prisma.$districtPayload<ExtArgs> | null
      author: Prisma.$UserPayload<ExtArgs> | null
      problem: Prisma.$problemPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      report_id: number
      author_id: number | null
      report_title: string | null
      problem_id: number | null
      canton_id: number | null
      district: number | null
      neighborhood: string | null
      street: string | null
      report_date: Date | null
      report_time: Date | null
      status: string | null
      updated_at: Date | null
      viewedByMunicipality: boolean | null
    }, ExtArgs["result"]["report"]>
    composites: {}
  }

  type reportGetPayload<S extends boolean | null | undefined | reportDefaultArgs> = $Result.GetResult<Prisma.$reportPayload, S>

  type reportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<reportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReportCountAggregateInputType | true
    }

  export interface reportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['report'], meta: { name: 'report' } }
    /**
     * Find zero or one Report that matches the filter.
     * @param {reportFindUniqueArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends reportFindUniqueArgs>(args: SelectSubset<T, reportFindUniqueArgs<ExtArgs>>): Prisma__reportClient<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Report that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {reportFindUniqueOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends reportFindUniqueOrThrowArgs>(args: SelectSubset<T, reportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__reportClient<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reportFindFirstArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends reportFindFirstArgs>(args?: SelectSubset<T, reportFindFirstArgs<ExtArgs>>): Prisma__reportClient<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reportFindFirstOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends reportFindFirstOrThrowArgs>(args?: SelectSubset<T, reportFindFirstOrThrowArgs<ExtArgs>>): Prisma__reportClient<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reports
     * const reports = await prisma.report.findMany()
     * 
     * // Get first 10 Reports
     * const reports = await prisma.report.findMany({ take: 10 })
     * 
     * // Only select the `report_id`
     * const reportWithReport_idOnly = await prisma.report.findMany({ select: { report_id: true } })
     * 
     */
    findMany<T extends reportFindManyArgs>(args?: SelectSubset<T, reportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Report.
     * @param {reportCreateArgs} args - Arguments to create a Report.
     * @example
     * // Create one Report
     * const Report = await prisma.report.create({
     *   data: {
     *     // ... data to create a Report
     *   }
     * })
     * 
     */
    create<T extends reportCreateArgs>(args: SelectSubset<T, reportCreateArgs<ExtArgs>>): Prisma__reportClient<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reports.
     * @param {reportCreateManyArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const report = await prisma.report.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends reportCreateManyArgs>(args?: SelectSubset<T, reportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reports and returns the data saved in the database.
     * @param {reportCreateManyAndReturnArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const report = await prisma.report.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reports and only return the `report_id`
     * const reportWithReport_idOnly = await prisma.report.createManyAndReturn({
     *   select: { report_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends reportCreateManyAndReturnArgs>(args?: SelectSubset<T, reportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Report.
     * @param {reportDeleteArgs} args - Arguments to delete one Report.
     * @example
     * // Delete one Report
     * const Report = await prisma.report.delete({
     *   where: {
     *     // ... filter to delete one Report
     *   }
     * })
     * 
     */
    delete<T extends reportDeleteArgs>(args: SelectSubset<T, reportDeleteArgs<ExtArgs>>): Prisma__reportClient<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Report.
     * @param {reportUpdateArgs} args - Arguments to update one Report.
     * @example
     * // Update one Report
     * const report = await prisma.report.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends reportUpdateArgs>(args: SelectSubset<T, reportUpdateArgs<ExtArgs>>): Prisma__reportClient<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reports.
     * @param {reportDeleteManyArgs} args - Arguments to filter Reports to delete.
     * @example
     * // Delete a few Reports
     * const { count } = await prisma.report.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends reportDeleteManyArgs>(args?: SelectSubset<T, reportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reports
     * const report = await prisma.report.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends reportUpdateManyArgs>(args: SelectSubset<T, reportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports and returns the data updated in the database.
     * @param {reportUpdateManyAndReturnArgs} args - Arguments to update many Reports.
     * @example
     * // Update many Reports
     * const report = await prisma.report.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reports and only return the `report_id`
     * const reportWithReport_idOnly = await prisma.report.updateManyAndReturn({
     *   select: { report_id: true },
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
    updateManyAndReturn<T extends reportUpdateManyAndReturnArgs>(args: SelectSubset<T, reportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Report.
     * @param {reportUpsertArgs} args - Arguments to update or create a Report.
     * @example
     * // Update or create a Report
     * const report = await prisma.report.upsert({
     *   create: {
     *     // ... data to create a Report
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Report we want to update
     *   }
     * })
     */
    upsert<T extends reportUpsertArgs>(args: SelectSubset<T, reportUpsertArgs<ExtArgs>>): Prisma__reportClient<$Result.GetResult<Prisma.$reportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reportCountArgs} args - Arguments to filter Reports to count.
     * @example
     * // Count the number of Reports
     * const count = await prisma.report.count({
     *   where: {
     *     // ... the filter for the Reports we want to count
     *   }
     * })
    **/
    count<T extends reportCountArgs>(
      args?: Subset<T, reportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReportAggregateArgs>(args: Subset<T, ReportAggregateArgs>): Prisma.PrismaPromise<GetReportAggregateType<T>>

    /**
     * Group by Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reportGroupByArgs} args - Group by arguments.
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
      T extends reportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reportGroupByArgs['orderBy'] }
        : { orderBy?: reportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, reportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the report model
   */
  readonly fields: reportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for report.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    canton<T extends report$cantonArgs<ExtArgs> = {}>(args?: Subset<T, report$cantonArgs<ExtArgs>>): Prisma__cantonClient<$Result.GetResult<Prisma.$cantonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    district_report_districtTodistrict<T extends report$district_report_districtTodistrictArgs<ExtArgs> = {}>(args?: Subset<T, report$district_report_districtTodistrictArgs<ExtArgs>>): Prisma__districtClient<$Result.GetResult<Prisma.$districtPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    author<T extends report$authorArgs<ExtArgs> = {}>(args?: Subset<T, report$authorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    problem<T extends report$problemArgs<ExtArgs> = {}>(args?: Subset<T, report$problemArgs<ExtArgs>>): Prisma__problemClient<$Result.GetResult<Prisma.$problemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the report model
   */
  interface reportFieldRefs {
    readonly report_id: FieldRef<"report", 'Int'>
    readonly author_id: FieldRef<"report", 'Int'>
    readonly report_title: FieldRef<"report", 'String'>
    readonly problem_id: FieldRef<"report", 'Int'>
    readonly canton_id: FieldRef<"report", 'Int'>
    readonly district: FieldRef<"report", 'Int'>
    readonly neighborhood: FieldRef<"report", 'String'>
    readonly street: FieldRef<"report", 'String'>
    readonly report_date: FieldRef<"report", 'DateTime'>
    readonly report_time: FieldRef<"report", 'DateTime'>
    readonly status: FieldRef<"report", 'String'>
    readonly updated_at: FieldRef<"report", 'DateTime'>
    readonly viewedByMunicipality: FieldRef<"report", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * report findUnique
   */
  export type reportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
    /**
     * Filter, which report to fetch.
     */
    where: reportWhereUniqueInput
  }

  /**
   * report findUniqueOrThrow
   */
  export type reportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
    /**
     * Filter, which report to fetch.
     */
    where: reportWhereUniqueInput
  }

  /**
   * report findFirst
   */
  export type reportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
    /**
     * Filter, which report to fetch.
     */
    where?: reportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reports to fetch.
     */
    orderBy?: reportOrderByWithRelationInput | reportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reports.
     */
    cursor?: reportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * report findFirstOrThrow
   */
  export type reportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
    /**
     * Filter, which report to fetch.
     */
    where?: reportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reports to fetch.
     */
    orderBy?: reportOrderByWithRelationInput | reportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reports.
     */
    cursor?: reportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * report findMany
   */
  export type reportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
    /**
     * Filter, which reports to fetch.
     */
    where?: reportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reports to fetch.
     */
    orderBy?: reportOrderByWithRelationInput | reportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reports.
     */
    cursor?: reportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reports.
     */
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * report create
   */
  export type reportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
    /**
     * The data needed to create a report.
     */
    data?: XOR<reportCreateInput, reportUncheckedCreateInput>
  }

  /**
   * report createMany
   */
  export type reportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reports.
     */
    data: reportCreateManyInput | reportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * report createManyAndReturn
   */
  export type reportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * The data used to create many reports.
     */
    data: reportCreateManyInput | reportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * report update
   */
  export type reportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
    /**
     * The data needed to update a report.
     */
    data: XOR<reportUpdateInput, reportUncheckedUpdateInput>
    /**
     * Choose, which report to update.
     */
    where: reportWhereUniqueInput
  }

  /**
   * report updateMany
   */
  export type reportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reports.
     */
    data: XOR<reportUpdateManyMutationInput, reportUncheckedUpdateManyInput>
    /**
     * Filter which reports to update
     */
    where?: reportWhereInput
    /**
     * Limit how many reports to update.
     */
    limit?: number
  }

  /**
   * report updateManyAndReturn
   */
  export type reportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * The data used to update reports.
     */
    data: XOR<reportUpdateManyMutationInput, reportUncheckedUpdateManyInput>
    /**
     * Filter which reports to update
     */
    where?: reportWhereInput
    /**
     * Limit how many reports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * report upsert
   */
  export type reportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
    /**
     * The filter to search for the report to update in case it exists.
     */
    where: reportWhereUniqueInput
    /**
     * In case the report found by the `where` argument doesn't exist, create a new report with this data.
     */
    create: XOR<reportCreateInput, reportUncheckedCreateInput>
    /**
     * In case the report was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reportUpdateInput, reportUncheckedUpdateInput>
  }

  /**
   * report delete
   */
  export type reportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
    /**
     * Filter which report to delete.
     */
    where: reportWhereUniqueInput
  }

  /**
   * report deleteMany
   */
  export type reportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reports to delete
     */
    where?: reportWhereInput
    /**
     * Limit how many reports to delete.
     */
    limit?: number
  }

  /**
   * report.canton
   */
  export type report$cantonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the canton
     */
    select?: cantonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the canton
     */
    omit?: cantonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cantonInclude<ExtArgs> | null
    where?: cantonWhereInput
  }

  /**
   * report.district_report_districtTodistrict
   */
  export type report$district_report_districtTodistrictArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the district
     */
    select?: districtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the district
     */
    omit?: districtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: districtInclude<ExtArgs> | null
    where?: districtWhereInput
  }

  /**
   * report.author
   */
  export type report$authorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * report.problem
   */
  export type report$problemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problem
     */
    select?: problemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problem
     */
    omit?: problemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemInclude<ExtArgs> | null
    where?: problemWhereInput
  }

  /**
   * report without action
   */
  export type reportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report
     */
    select?: reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report
     */
    omit?: reportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reportInclude<ExtArgs> | null
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
    email: 'email',
    password: 'password',
    role: 'role',
    created_at: 'created_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const NeighborProfileScalarFieldEnum: {
    id: 'id',
    first_name: 'first_name',
    last_name: 'last_name',
    second_last_name: 'second_last_name',
    identification: 'identification',
    phone_number: 'phone_number',
    userId: 'userId'
  };

  export type NeighborProfileScalarFieldEnum = (typeof NeighborProfileScalarFieldEnum)[keyof typeof NeighborProfileScalarFieldEnum]


  export const MunicipalityProfileScalarFieldEnum: {
    id: 'id',
    name: 'name',
    canton: 'canton',
    userId: 'userId'
  };

  export type MunicipalityProfileScalarFieldEnum = (typeof MunicipalityProfileScalarFieldEnum)[keyof typeof MunicipalityProfileScalarFieldEnum]


  export const AlertScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    created_at: 'created_at',
    updated_at: 'updated_at',
    authorId: 'authorId'
  };

  export type AlertScalarFieldEnum = (typeof AlertScalarFieldEnum)[keyof typeof AlertScalarFieldEnum]


  export const CantonScalarFieldEnum: {
    canton_id: 'canton_id',
    canton_name: 'canton_name'
  };

  export type CantonScalarFieldEnum = (typeof CantonScalarFieldEnum)[keyof typeof CantonScalarFieldEnum]


  export const DistrictScalarFieldEnum: {
    district_id: 'district_id',
    district_name: 'district_name',
    canton_id: 'canton_id'
  };

  export type DistrictScalarFieldEnum = (typeof DistrictScalarFieldEnum)[keyof typeof DistrictScalarFieldEnum]


  export const ProblemScalarFieldEnum: {
    problem_id: 'problem_id',
    problem_type_id: 'problem_type_id',
    problem_name: 'problem_name'
  };

  export type ProblemScalarFieldEnum = (typeof ProblemScalarFieldEnum)[keyof typeof ProblemScalarFieldEnum]


  export const Problem_typeScalarFieldEnum: {
    problem_type_id: 'problem_type_id',
    type_name: 'type_name'
  };

  export type Problem_typeScalarFieldEnum = (typeof Problem_typeScalarFieldEnum)[keyof typeof Problem_typeScalarFieldEnum]


  export const ReportScalarFieldEnum: {
    report_id: 'report_id',
    author_id: 'author_id',
    report_title: 'report_title',
    problem_id: 'problem_id',
    canton_id: 'canton_id',
    district: 'district',
    neighborhood: 'neighborhood',
    street: 'street',
    report_date: 'report_date',
    report_time: 'report_time',
    status: 'status',
    updated_at: 'updated_at',
    viewedByMunicipality: 'viewedByMunicipality'
  };

  export type ReportScalarFieldEnum = (typeof ReportScalarFieldEnum)[keyof typeof ReportScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    created_at?: DateTimeFilter<"User"> | Date | string
    neighborProfile?: XOR<NeighborProfileNullableScalarRelationFilter, NeighborProfileWhereInput> | null
    municipalityProfile?: XOR<MunicipalityProfileNullableScalarRelationFilter, MunicipalityProfileWhereInput> | null
    alerts?: AlertListRelationFilter
    reports?: ReportListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    neighborProfile?: NeighborProfileOrderByWithRelationInput
    municipalityProfile?: MunicipalityProfileOrderByWithRelationInput
    alerts?: AlertOrderByRelationAggregateInput
    reports?: reportOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    created_at?: DateTimeFilter<"User"> | Date | string
    neighborProfile?: XOR<NeighborProfileNullableScalarRelationFilter, NeighborProfileWhereInput> | null
    municipalityProfile?: XOR<MunicipalityProfileNullableScalarRelationFilter, MunicipalityProfileWhereInput> | null
    alerts?: AlertListRelationFilter
    reports?: ReportListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
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
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type NeighborProfileWhereInput = {
    AND?: NeighborProfileWhereInput | NeighborProfileWhereInput[]
    OR?: NeighborProfileWhereInput[]
    NOT?: NeighborProfileWhereInput | NeighborProfileWhereInput[]
    id?: IntFilter<"NeighborProfile"> | number
    first_name?: StringFilter<"NeighborProfile"> | string
    last_name?: StringFilter<"NeighborProfile"> | string
    second_last_name?: StringNullableFilter<"NeighborProfile"> | string | null
    identification?: IntFilter<"NeighborProfile"> | number
    phone_number?: IntNullableFilter<"NeighborProfile"> | number | null
    userId?: IntFilter<"NeighborProfile"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NeighborProfileOrderByWithRelationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    second_last_name?: SortOrderInput | SortOrder
    identification?: SortOrder
    phone_number?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NeighborProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    identification?: number
    userId?: number
    AND?: NeighborProfileWhereInput | NeighborProfileWhereInput[]
    OR?: NeighborProfileWhereInput[]
    NOT?: NeighborProfileWhereInput | NeighborProfileWhereInput[]
    first_name?: StringFilter<"NeighborProfile"> | string
    last_name?: StringFilter<"NeighborProfile"> | string
    second_last_name?: StringNullableFilter<"NeighborProfile"> | string | null
    phone_number?: IntNullableFilter<"NeighborProfile"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "identification" | "userId">

  export type NeighborProfileOrderByWithAggregationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    second_last_name?: SortOrderInput | SortOrder
    identification?: SortOrder
    phone_number?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: NeighborProfileCountOrderByAggregateInput
    _avg?: NeighborProfileAvgOrderByAggregateInput
    _max?: NeighborProfileMaxOrderByAggregateInput
    _min?: NeighborProfileMinOrderByAggregateInput
    _sum?: NeighborProfileSumOrderByAggregateInput
  }

  export type NeighborProfileScalarWhereWithAggregatesInput = {
    AND?: NeighborProfileScalarWhereWithAggregatesInput | NeighborProfileScalarWhereWithAggregatesInput[]
    OR?: NeighborProfileScalarWhereWithAggregatesInput[]
    NOT?: NeighborProfileScalarWhereWithAggregatesInput | NeighborProfileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"NeighborProfile"> | number
    first_name?: StringWithAggregatesFilter<"NeighborProfile"> | string
    last_name?: StringWithAggregatesFilter<"NeighborProfile"> | string
    second_last_name?: StringNullableWithAggregatesFilter<"NeighborProfile"> | string | null
    identification?: IntWithAggregatesFilter<"NeighborProfile"> | number
    phone_number?: IntNullableWithAggregatesFilter<"NeighborProfile"> | number | null
    userId?: IntWithAggregatesFilter<"NeighborProfile"> | number
  }

  export type MunicipalityProfileWhereInput = {
    AND?: MunicipalityProfileWhereInput | MunicipalityProfileWhereInput[]
    OR?: MunicipalityProfileWhereInput[]
    NOT?: MunicipalityProfileWhereInput | MunicipalityProfileWhereInput[]
    id?: IntFilter<"MunicipalityProfile"> | number
    name?: StringFilter<"MunicipalityProfile"> | string
    canton?: StringFilter<"MunicipalityProfile"> | string
    userId?: IntFilter<"MunicipalityProfile"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MunicipalityProfileOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    canton?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type MunicipalityProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: MunicipalityProfileWhereInput | MunicipalityProfileWhereInput[]
    OR?: MunicipalityProfileWhereInput[]
    NOT?: MunicipalityProfileWhereInput | MunicipalityProfileWhereInput[]
    name?: StringFilter<"MunicipalityProfile"> | string
    canton?: StringFilter<"MunicipalityProfile"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type MunicipalityProfileOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    canton?: SortOrder
    userId?: SortOrder
    _count?: MunicipalityProfileCountOrderByAggregateInput
    _avg?: MunicipalityProfileAvgOrderByAggregateInput
    _max?: MunicipalityProfileMaxOrderByAggregateInput
    _min?: MunicipalityProfileMinOrderByAggregateInput
    _sum?: MunicipalityProfileSumOrderByAggregateInput
  }

  export type MunicipalityProfileScalarWhereWithAggregatesInput = {
    AND?: MunicipalityProfileScalarWhereWithAggregatesInput | MunicipalityProfileScalarWhereWithAggregatesInput[]
    OR?: MunicipalityProfileScalarWhereWithAggregatesInput[]
    NOT?: MunicipalityProfileScalarWhereWithAggregatesInput | MunicipalityProfileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MunicipalityProfile"> | number
    name?: StringWithAggregatesFilter<"MunicipalityProfile"> | string
    canton?: StringWithAggregatesFilter<"MunicipalityProfile"> | string
    userId?: IntWithAggregatesFilter<"MunicipalityProfile"> | number
  }

  export type AlertWhereInput = {
    AND?: AlertWhereInput | AlertWhereInput[]
    OR?: AlertWhereInput[]
    NOT?: AlertWhereInput | AlertWhereInput[]
    id?: IntFilter<"Alert"> | number
    title?: StringFilter<"Alert"> | string
    content?: StringFilter<"Alert"> | string
    created_at?: DateTimeFilter<"Alert"> | Date | string
    updated_at?: DateTimeFilter<"Alert"> | Date | string
    authorId?: IntFilter<"Alert"> | number
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AlertOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    authorId?: SortOrder
    author?: UserOrderByWithRelationInput
  }

  export type AlertWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AlertWhereInput | AlertWhereInput[]
    OR?: AlertWhereInput[]
    NOT?: AlertWhereInput | AlertWhereInput[]
    title?: StringFilter<"Alert"> | string
    content?: StringFilter<"Alert"> | string
    created_at?: DateTimeFilter<"Alert"> | Date | string
    updated_at?: DateTimeFilter<"Alert"> | Date | string
    authorId?: IntFilter<"Alert"> | number
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AlertOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    authorId?: SortOrder
    _count?: AlertCountOrderByAggregateInput
    _avg?: AlertAvgOrderByAggregateInput
    _max?: AlertMaxOrderByAggregateInput
    _min?: AlertMinOrderByAggregateInput
    _sum?: AlertSumOrderByAggregateInput
  }

  export type AlertScalarWhereWithAggregatesInput = {
    AND?: AlertScalarWhereWithAggregatesInput | AlertScalarWhereWithAggregatesInput[]
    OR?: AlertScalarWhereWithAggregatesInput[]
    NOT?: AlertScalarWhereWithAggregatesInput | AlertScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Alert"> | number
    title?: StringWithAggregatesFilter<"Alert"> | string
    content?: StringWithAggregatesFilter<"Alert"> | string
    created_at?: DateTimeWithAggregatesFilter<"Alert"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Alert"> | Date | string
    authorId?: IntWithAggregatesFilter<"Alert"> | number
  }

  export type cantonWhereInput = {
    AND?: cantonWhereInput | cantonWhereInput[]
    OR?: cantonWhereInput[]
    NOT?: cantonWhereInput | cantonWhereInput[]
    canton_id?: IntFilter<"canton"> | number
    canton_name?: StringNullableFilter<"canton"> | string | null
    district?: DistrictListRelationFilter
    report?: ReportListRelationFilter
  }

  export type cantonOrderByWithRelationInput = {
    canton_id?: SortOrder
    canton_name?: SortOrderInput | SortOrder
    district?: districtOrderByRelationAggregateInput
    report?: reportOrderByRelationAggregateInput
  }

  export type cantonWhereUniqueInput = Prisma.AtLeast<{
    canton_id?: number
    AND?: cantonWhereInput | cantonWhereInput[]
    OR?: cantonWhereInput[]
    NOT?: cantonWhereInput | cantonWhereInput[]
    canton_name?: StringNullableFilter<"canton"> | string | null
    district?: DistrictListRelationFilter
    report?: ReportListRelationFilter
  }, "canton_id">

  export type cantonOrderByWithAggregationInput = {
    canton_id?: SortOrder
    canton_name?: SortOrderInput | SortOrder
    _count?: cantonCountOrderByAggregateInput
    _avg?: cantonAvgOrderByAggregateInput
    _max?: cantonMaxOrderByAggregateInput
    _min?: cantonMinOrderByAggregateInput
    _sum?: cantonSumOrderByAggregateInput
  }

  export type cantonScalarWhereWithAggregatesInput = {
    AND?: cantonScalarWhereWithAggregatesInput | cantonScalarWhereWithAggregatesInput[]
    OR?: cantonScalarWhereWithAggregatesInput[]
    NOT?: cantonScalarWhereWithAggregatesInput | cantonScalarWhereWithAggregatesInput[]
    canton_id?: IntWithAggregatesFilter<"canton"> | number
    canton_name?: StringNullableWithAggregatesFilter<"canton"> | string | null
  }

  export type districtWhereInput = {
    AND?: districtWhereInput | districtWhereInput[]
    OR?: districtWhereInput[]
    NOT?: districtWhereInput | districtWhereInput[]
    district_id?: IntFilter<"district"> | number
    district_name?: StringNullableFilter<"district"> | string | null
    canton_id?: IntNullableFilter<"district"> | number | null
    canton?: XOR<CantonNullableScalarRelationFilter, cantonWhereInput> | null
    report_report_districtTodistrict?: ReportListRelationFilter
  }

  export type districtOrderByWithRelationInput = {
    district_id?: SortOrder
    district_name?: SortOrderInput | SortOrder
    canton_id?: SortOrderInput | SortOrder
    canton?: cantonOrderByWithRelationInput
    report_report_districtTodistrict?: reportOrderByRelationAggregateInput
  }

  export type districtWhereUniqueInput = Prisma.AtLeast<{
    district_id?: number
    AND?: districtWhereInput | districtWhereInput[]
    OR?: districtWhereInput[]
    NOT?: districtWhereInput | districtWhereInput[]
    district_name?: StringNullableFilter<"district"> | string | null
    canton_id?: IntNullableFilter<"district"> | number | null
    canton?: XOR<CantonNullableScalarRelationFilter, cantonWhereInput> | null
    report_report_districtTodistrict?: ReportListRelationFilter
  }, "district_id">

  export type districtOrderByWithAggregationInput = {
    district_id?: SortOrder
    district_name?: SortOrderInput | SortOrder
    canton_id?: SortOrderInput | SortOrder
    _count?: districtCountOrderByAggregateInput
    _avg?: districtAvgOrderByAggregateInput
    _max?: districtMaxOrderByAggregateInput
    _min?: districtMinOrderByAggregateInput
    _sum?: districtSumOrderByAggregateInput
  }

  export type districtScalarWhereWithAggregatesInput = {
    AND?: districtScalarWhereWithAggregatesInput | districtScalarWhereWithAggregatesInput[]
    OR?: districtScalarWhereWithAggregatesInput[]
    NOT?: districtScalarWhereWithAggregatesInput | districtScalarWhereWithAggregatesInput[]
    district_id?: IntWithAggregatesFilter<"district"> | number
    district_name?: StringNullableWithAggregatesFilter<"district"> | string | null
    canton_id?: IntNullableWithAggregatesFilter<"district"> | number | null
  }

  export type problemWhereInput = {
    AND?: problemWhereInput | problemWhereInput[]
    OR?: problemWhereInput[]
    NOT?: problemWhereInput | problemWhereInput[]
    problem_id?: IntFilter<"problem"> | number
    problem_type_id?: IntNullableFilter<"problem"> | number | null
    problem_name?: StringNullableFilter<"problem"> | string | null
    problem_type?: XOR<Problem_typeNullableScalarRelationFilter, problem_typeWhereInput> | null
    report?: ReportListRelationFilter
  }

  export type problemOrderByWithRelationInput = {
    problem_id?: SortOrder
    problem_type_id?: SortOrderInput | SortOrder
    problem_name?: SortOrderInput | SortOrder
    problem_type?: problem_typeOrderByWithRelationInput
    report?: reportOrderByRelationAggregateInput
  }

  export type problemWhereUniqueInput = Prisma.AtLeast<{
    problem_id?: number
    AND?: problemWhereInput | problemWhereInput[]
    OR?: problemWhereInput[]
    NOT?: problemWhereInput | problemWhereInput[]
    problem_type_id?: IntNullableFilter<"problem"> | number | null
    problem_name?: StringNullableFilter<"problem"> | string | null
    problem_type?: XOR<Problem_typeNullableScalarRelationFilter, problem_typeWhereInput> | null
    report?: ReportListRelationFilter
  }, "problem_id">

  export type problemOrderByWithAggregationInput = {
    problem_id?: SortOrder
    problem_type_id?: SortOrderInput | SortOrder
    problem_name?: SortOrderInput | SortOrder
    _count?: problemCountOrderByAggregateInput
    _avg?: problemAvgOrderByAggregateInput
    _max?: problemMaxOrderByAggregateInput
    _min?: problemMinOrderByAggregateInput
    _sum?: problemSumOrderByAggregateInput
  }

  export type problemScalarWhereWithAggregatesInput = {
    AND?: problemScalarWhereWithAggregatesInput | problemScalarWhereWithAggregatesInput[]
    OR?: problemScalarWhereWithAggregatesInput[]
    NOT?: problemScalarWhereWithAggregatesInput | problemScalarWhereWithAggregatesInput[]
    problem_id?: IntWithAggregatesFilter<"problem"> | number
    problem_type_id?: IntNullableWithAggregatesFilter<"problem"> | number | null
    problem_name?: StringNullableWithAggregatesFilter<"problem"> | string | null
  }

  export type problem_typeWhereInput = {
    AND?: problem_typeWhereInput | problem_typeWhereInput[]
    OR?: problem_typeWhereInput[]
    NOT?: problem_typeWhereInput | problem_typeWhereInput[]
    problem_type_id?: IntFilter<"problem_type"> | number
    type_name?: StringNullableFilter<"problem_type"> | string | null
    problem?: ProblemListRelationFilter
  }

  export type problem_typeOrderByWithRelationInput = {
    problem_type_id?: SortOrder
    type_name?: SortOrderInput | SortOrder
    problem?: problemOrderByRelationAggregateInput
  }

  export type problem_typeWhereUniqueInput = Prisma.AtLeast<{
    problem_type_id?: number
    AND?: problem_typeWhereInput | problem_typeWhereInput[]
    OR?: problem_typeWhereInput[]
    NOT?: problem_typeWhereInput | problem_typeWhereInput[]
    type_name?: StringNullableFilter<"problem_type"> | string | null
    problem?: ProblemListRelationFilter
  }, "problem_type_id">

  export type problem_typeOrderByWithAggregationInput = {
    problem_type_id?: SortOrder
    type_name?: SortOrderInput | SortOrder
    _count?: problem_typeCountOrderByAggregateInput
    _avg?: problem_typeAvgOrderByAggregateInput
    _max?: problem_typeMaxOrderByAggregateInput
    _min?: problem_typeMinOrderByAggregateInput
    _sum?: problem_typeSumOrderByAggregateInput
  }

  export type problem_typeScalarWhereWithAggregatesInput = {
    AND?: problem_typeScalarWhereWithAggregatesInput | problem_typeScalarWhereWithAggregatesInput[]
    OR?: problem_typeScalarWhereWithAggregatesInput[]
    NOT?: problem_typeScalarWhereWithAggregatesInput | problem_typeScalarWhereWithAggregatesInput[]
    problem_type_id?: IntWithAggregatesFilter<"problem_type"> | number
    type_name?: StringNullableWithAggregatesFilter<"problem_type"> | string | null
  }

  export type reportWhereInput = {
    AND?: reportWhereInput | reportWhereInput[]
    OR?: reportWhereInput[]
    NOT?: reportWhereInput | reportWhereInput[]
    report_id?: IntFilter<"report"> | number
    author_id?: IntNullableFilter<"report"> | number | null
    report_title?: StringNullableFilter<"report"> | string | null
    problem_id?: IntNullableFilter<"report"> | number | null
    canton_id?: IntNullableFilter<"report"> | number | null
    district?: IntNullableFilter<"report"> | number | null
    neighborhood?: StringNullableFilter<"report"> | string | null
    street?: StringNullableFilter<"report"> | string | null
    report_date?: DateTimeNullableFilter<"report"> | Date | string | null
    report_time?: DateTimeNullableFilter<"report"> | Date | string | null
    status?: StringNullableFilter<"report"> | string | null
    updated_at?: DateTimeNullableFilter<"report"> | Date | string | null
    viewedByMunicipality?: BoolNullableFilter<"report"> | boolean | null
    canton?: XOR<CantonNullableScalarRelationFilter, cantonWhereInput> | null
    district_report_districtTodistrict?: XOR<DistrictNullableScalarRelationFilter, districtWhereInput> | null
    author?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    problem?: XOR<ProblemNullableScalarRelationFilter, problemWhereInput> | null
  }

  export type reportOrderByWithRelationInput = {
    report_id?: SortOrder
    author_id?: SortOrderInput | SortOrder
    report_title?: SortOrderInput | SortOrder
    problem_id?: SortOrderInput | SortOrder
    canton_id?: SortOrderInput | SortOrder
    district?: SortOrderInput | SortOrder
    neighborhood?: SortOrderInput | SortOrder
    street?: SortOrderInput | SortOrder
    report_date?: SortOrderInput | SortOrder
    report_time?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    viewedByMunicipality?: SortOrderInput | SortOrder
    canton?: cantonOrderByWithRelationInput
    district_report_districtTodistrict?: districtOrderByWithRelationInput
    author?: UserOrderByWithRelationInput
    problem?: problemOrderByWithRelationInput
  }

  export type reportWhereUniqueInput = Prisma.AtLeast<{
    report_id?: number
    AND?: reportWhereInput | reportWhereInput[]
    OR?: reportWhereInput[]
    NOT?: reportWhereInput | reportWhereInput[]
    author_id?: IntNullableFilter<"report"> | number | null
    report_title?: StringNullableFilter<"report"> | string | null
    problem_id?: IntNullableFilter<"report"> | number | null
    canton_id?: IntNullableFilter<"report"> | number | null
    district?: IntNullableFilter<"report"> | number | null
    neighborhood?: StringNullableFilter<"report"> | string | null
    street?: StringNullableFilter<"report"> | string | null
    report_date?: DateTimeNullableFilter<"report"> | Date | string | null
    report_time?: DateTimeNullableFilter<"report"> | Date | string | null
    status?: StringNullableFilter<"report"> | string | null
    updated_at?: DateTimeNullableFilter<"report"> | Date | string | null
    viewedByMunicipality?: BoolNullableFilter<"report"> | boolean | null
    canton?: XOR<CantonNullableScalarRelationFilter, cantonWhereInput> | null
    district_report_districtTodistrict?: XOR<DistrictNullableScalarRelationFilter, districtWhereInput> | null
    author?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    problem?: XOR<ProblemNullableScalarRelationFilter, problemWhereInput> | null
  }, "report_id">

  export type reportOrderByWithAggregationInput = {
    report_id?: SortOrder
    author_id?: SortOrderInput | SortOrder
    report_title?: SortOrderInput | SortOrder
    problem_id?: SortOrderInput | SortOrder
    canton_id?: SortOrderInput | SortOrder
    district?: SortOrderInput | SortOrder
    neighborhood?: SortOrderInput | SortOrder
    street?: SortOrderInput | SortOrder
    report_date?: SortOrderInput | SortOrder
    report_time?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    viewedByMunicipality?: SortOrderInput | SortOrder
    _count?: reportCountOrderByAggregateInput
    _avg?: reportAvgOrderByAggregateInput
    _max?: reportMaxOrderByAggregateInput
    _min?: reportMinOrderByAggregateInput
    _sum?: reportSumOrderByAggregateInput
  }

  export type reportScalarWhereWithAggregatesInput = {
    AND?: reportScalarWhereWithAggregatesInput | reportScalarWhereWithAggregatesInput[]
    OR?: reportScalarWhereWithAggregatesInput[]
    NOT?: reportScalarWhereWithAggregatesInput | reportScalarWhereWithAggregatesInput[]
    report_id?: IntWithAggregatesFilter<"report"> | number
    author_id?: IntNullableWithAggregatesFilter<"report"> | number | null
    report_title?: StringNullableWithAggregatesFilter<"report"> | string | null
    problem_id?: IntNullableWithAggregatesFilter<"report"> | number | null
    canton_id?: IntNullableWithAggregatesFilter<"report"> | number | null
    district?: IntNullableWithAggregatesFilter<"report"> | number | null
    neighborhood?: StringNullableWithAggregatesFilter<"report"> | string | null
    street?: StringNullableWithAggregatesFilter<"report"> | string | null
    report_date?: DateTimeNullableWithAggregatesFilter<"report"> | Date | string | null
    report_time?: DateTimeNullableWithAggregatesFilter<"report"> | Date | string | null
    status?: StringNullableWithAggregatesFilter<"report"> | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"report"> | Date | string | null
    viewedByMunicipality?: BoolNullableWithAggregatesFilter<"report"> | boolean | null
  }

  export type UserCreateInput = {
    email: string
    password: string
    role?: $Enums.Role
    created_at?: Date | string
    neighborProfile?: NeighborProfileCreateNestedOneWithoutUserInput
    municipalityProfile?: MunicipalityProfileCreateNestedOneWithoutUserInput
    alerts?: AlertCreateNestedManyWithoutAuthorInput
    reports?: reportCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    role?: $Enums.Role
    created_at?: Date | string
    neighborProfile?: NeighborProfileUncheckedCreateNestedOneWithoutUserInput
    municipalityProfile?: MunicipalityProfileUncheckedCreateNestedOneWithoutUserInput
    alerts?: AlertUncheckedCreateNestedManyWithoutAuthorInput
    reports?: reportUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    neighborProfile?: NeighborProfileUpdateOneWithoutUserNestedInput
    municipalityProfile?: MunicipalityProfileUpdateOneWithoutUserNestedInput
    alerts?: AlertUpdateManyWithoutAuthorNestedInput
    reports?: reportUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    neighborProfile?: NeighborProfileUncheckedUpdateOneWithoutUserNestedInput
    municipalityProfile?: MunicipalityProfileUncheckedUpdateOneWithoutUserNestedInput
    alerts?: AlertUncheckedUpdateManyWithoutAuthorNestedInput
    reports?: reportUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    role?: $Enums.Role
    created_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NeighborProfileCreateInput = {
    first_name: string
    last_name: string
    second_last_name?: string | null
    identification: number
    phone_number?: number | null
    user: UserCreateNestedOneWithoutNeighborProfileInput
  }

  export type NeighborProfileUncheckedCreateInput = {
    id?: number
    first_name: string
    last_name: string
    second_last_name?: string | null
    identification: number
    phone_number?: number | null
    userId: number
  }

  export type NeighborProfileUpdateInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    second_last_name?: NullableStringFieldUpdateOperationsInput | string | null
    identification?: IntFieldUpdateOperationsInput | number
    phone_number?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutNeighborProfileNestedInput
  }

  export type NeighborProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    second_last_name?: NullableStringFieldUpdateOperationsInput | string | null
    identification?: IntFieldUpdateOperationsInput | number
    phone_number?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type NeighborProfileCreateManyInput = {
    id?: number
    first_name: string
    last_name: string
    second_last_name?: string | null
    identification: number
    phone_number?: number | null
    userId: number
  }

  export type NeighborProfileUpdateManyMutationInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    second_last_name?: NullableStringFieldUpdateOperationsInput | string | null
    identification?: IntFieldUpdateOperationsInput | number
    phone_number?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type NeighborProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    second_last_name?: NullableStringFieldUpdateOperationsInput | string | null
    identification?: IntFieldUpdateOperationsInput | number
    phone_number?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type MunicipalityProfileCreateInput = {
    name: string
    canton: string
    user: UserCreateNestedOneWithoutMunicipalityProfileInput
  }

  export type MunicipalityProfileUncheckedCreateInput = {
    id?: number
    name: string
    canton: string
    userId: number
  }

  export type MunicipalityProfileUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    canton?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutMunicipalityProfileNestedInput
  }

  export type MunicipalityProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    canton?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type MunicipalityProfileCreateManyInput = {
    id?: number
    name: string
    canton: string
    userId: number
  }

  export type MunicipalityProfileUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    canton?: StringFieldUpdateOperationsInput | string
  }

  export type MunicipalityProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    canton?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type AlertCreateInput = {
    title: string
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    author: UserCreateNestedOneWithoutAlertsInput
  }

  export type AlertUncheckedCreateInput = {
    id?: number
    title: string
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    authorId: number
  }

  export type AlertUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutAlertsNestedInput
  }

  export type AlertUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type AlertCreateManyInput = {
    id?: number
    title: string
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    authorId: number
  }

  export type AlertUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type cantonCreateInput = {
    canton_name?: string | null
    district?: districtCreateNestedManyWithoutCantonInput
    report?: reportCreateNestedManyWithoutCantonInput
  }

  export type cantonUncheckedCreateInput = {
    canton_id?: number
    canton_name?: string | null
    district?: districtUncheckedCreateNestedManyWithoutCantonInput
    report?: reportUncheckedCreateNestedManyWithoutCantonInput
  }

  export type cantonUpdateInput = {
    canton_name?: NullableStringFieldUpdateOperationsInput | string | null
    district?: districtUpdateManyWithoutCantonNestedInput
    report?: reportUpdateManyWithoutCantonNestedInput
  }

  export type cantonUncheckedUpdateInput = {
    canton_id?: IntFieldUpdateOperationsInput | number
    canton_name?: NullableStringFieldUpdateOperationsInput | string | null
    district?: districtUncheckedUpdateManyWithoutCantonNestedInput
    report?: reportUncheckedUpdateManyWithoutCantonNestedInput
  }

  export type cantonCreateManyInput = {
    canton_id?: number
    canton_name?: string | null
  }

  export type cantonUpdateManyMutationInput = {
    canton_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cantonUncheckedUpdateManyInput = {
    canton_id?: IntFieldUpdateOperationsInput | number
    canton_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type districtCreateInput = {
    district_name?: string | null
    canton?: cantonCreateNestedOneWithoutDistrictInput
    report_report_districtTodistrict?: reportCreateNestedManyWithoutDistrict_report_districtTodistrictInput
  }

  export type districtUncheckedCreateInput = {
    district_id?: number
    district_name?: string | null
    canton_id?: number | null
    report_report_districtTodistrict?: reportUncheckedCreateNestedManyWithoutDistrict_report_districtTodistrictInput
  }

  export type districtUpdateInput = {
    district_name?: NullableStringFieldUpdateOperationsInput | string | null
    canton?: cantonUpdateOneWithoutDistrictNestedInput
    report_report_districtTodistrict?: reportUpdateManyWithoutDistrict_report_districtTodistrictNestedInput
  }

  export type districtUncheckedUpdateInput = {
    district_id?: IntFieldUpdateOperationsInput | number
    district_name?: NullableStringFieldUpdateOperationsInput | string | null
    canton_id?: NullableIntFieldUpdateOperationsInput | number | null
    report_report_districtTodistrict?: reportUncheckedUpdateManyWithoutDistrict_report_districtTodistrictNestedInput
  }

  export type districtCreateManyInput = {
    district_id?: number
    district_name?: string | null
    canton_id?: number | null
  }

  export type districtUpdateManyMutationInput = {
    district_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type districtUncheckedUpdateManyInput = {
    district_id?: IntFieldUpdateOperationsInput | number
    district_name?: NullableStringFieldUpdateOperationsInput | string | null
    canton_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type problemCreateInput = {
    problem_name?: string | null
    problem_type?: problem_typeCreateNestedOneWithoutProblemInput
    report?: reportCreateNestedManyWithoutProblemInput
  }

  export type problemUncheckedCreateInput = {
    problem_id?: number
    problem_type_id?: number | null
    problem_name?: string | null
    report?: reportUncheckedCreateNestedManyWithoutProblemInput
  }

  export type problemUpdateInput = {
    problem_name?: NullableStringFieldUpdateOperationsInput | string | null
    problem_type?: problem_typeUpdateOneWithoutProblemNestedInput
    report?: reportUpdateManyWithoutProblemNestedInput
  }

  export type problemUncheckedUpdateInput = {
    problem_id?: IntFieldUpdateOperationsInput | number
    problem_type_id?: NullableIntFieldUpdateOperationsInput | number | null
    problem_name?: NullableStringFieldUpdateOperationsInput | string | null
    report?: reportUncheckedUpdateManyWithoutProblemNestedInput
  }

  export type problemCreateManyInput = {
    problem_id?: number
    problem_type_id?: number | null
    problem_name?: string | null
  }

  export type problemUpdateManyMutationInput = {
    problem_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type problemUncheckedUpdateManyInput = {
    problem_id?: IntFieldUpdateOperationsInput | number
    problem_type_id?: NullableIntFieldUpdateOperationsInput | number | null
    problem_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type problem_typeCreateInput = {
    type_name?: string | null
    problem?: problemCreateNestedManyWithoutProblem_typeInput
  }

  export type problem_typeUncheckedCreateInput = {
    problem_type_id?: number
    type_name?: string | null
    problem?: problemUncheckedCreateNestedManyWithoutProblem_typeInput
  }

  export type problem_typeUpdateInput = {
    type_name?: NullableStringFieldUpdateOperationsInput | string | null
    problem?: problemUpdateManyWithoutProblem_typeNestedInput
  }

  export type problem_typeUncheckedUpdateInput = {
    problem_type_id?: IntFieldUpdateOperationsInput | number
    type_name?: NullableStringFieldUpdateOperationsInput | string | null
    problem?: problemUncheckedUpdateManyWithoutProblem_typeNestedInput
  }

  export type problem_typeCreateManyInput = {
    problem_type_id?: number
    type_name?: string | null
  }

  export type problem_typeUpdateManyMutationInput = {
    type_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type problem_typeUncheckedUpdateManyInput = {
    problem_type_id?: IntFieldUpdateOperationsInput | number
    type_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type reportCreateInput = {
    report_title?: string | null
    neighborhood?: string | null
    street?: string | null
    report_date?: Date | string | null
    report_time?: Date | string | null
    status?: string | null
    updated_at?: Date | string | null
    viewedByMunicipality?: boolean | null
    canton?: cantonCreateNestedOneWithoutReportInput
    district_report_districtTodistrict?: districtCreateNestedOneWithoutReport_report_districtTodistrictInput
    author?: UserCreateNestedOneWithoutReportsInput
    problem?: problemCreateNestedOneWithoutReportInput
  }

  export type reportUncheckedCreateInput = {
    report_id?: number
    author_id?: number | null
    report_title?: string | null
    problem_id?: number | null
    canton_id?: number | null
    district?: number | null
    neighborhood?: string | null
    street?: string | null
    report_date?: Date | string | null
    report_time?: Date | string | null
    status?: string | null
    updated_at?: Date | string | null
    viewedByMunicipality?: boolean | null
  }

  export type reportUpdateInput = {
    report_title?: NullableStringFieldUpdateOperationsInput | string | null
    neighborhood?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    report_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    report_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    viewedByMunicipality?: NullableBoolFieldUpdateOperationsInput | boolean | null
    canton?: cantonUpdateOneWithoutReportNestedInput
    district_report_districtTodistrict?: districtUpdateOneWithoutReport_report_districtTodistrictNestedInput
    author?: UserUpdateOneWithoutReportsNestedInput
    problem?: problemUpdateOneWithoutReportNestedInput
  }

  export type reportUncheckedUpdateInput = {
    report_id?: IntFieldUpdateOperationsInput | number
    author_id?: NullableIntFieldUpdateOperationsInput | number | null
    report_title?: NullableStringFieldUpdateOperationsInput | string | null
    problem_id?: NullableIntFieldUpdateOperationsInput | number | null
    canton_id?: NullableIntFieldUpdateOperationsInput | number | null
    district?: NullableIntFieldUpdateOperationsInput | number | null
    neighborhood?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    report_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    report_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    viewedByMunicipality?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type reportCreateManyInput = {
    report_id?: number
    author_id?: number | null
    report_title?: string | null
    problem_id?: number | null
    canton_id?: number | null
    district?: number | null
    neighborhood?: string | null
    street?: string | null
    report_date?: Date | string | null
    report_time?: Date | string | null
    status?: string | null
    updated_at?: Date | string | null
    viewedByMunicipality?: boolean | null
  }

  export type reportUpdateManyMutationInput = {
    report_title?: NullableStringFieldUpdateOperationsInput | string | null
    neighborhood?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    report_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    report_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    viewedByMunicipality?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type reportUncheckedUpdateManyInput = {
    report_id?: IntFieldUpdateOperationsInput | number
    author_id?: NullableIntFieldUpdateOperationsInput | number | null
    report_title?: NullableStringFieldUpdateOperationsInput | string | null
    problem_id?: NullableIntFieldUpdateOperationsInput | number | null
    canton_id?: NullableIntFieldUpdateOperationsInput | number | null
    district?: NullableIntFieldUpdateOperationsInput | number | null
    neighborhood?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    report_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    report_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    viewedByMunicipality?: NullableBoolFieldUpdateOperationsInput | boolean | null
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NeighborProfileNullableScalarRelationFilter = {
    is?: NeighborProfileWhereInput | null
    isNot?: NeighborProfileWhereInput | null
  }

  export type MunicipalityProfileNullableScalarRelationFilter = {
    is?: MunicipalityProfileWhereInput | null
    isNot?: MunicipalityProfileWhereInput | null
  }

  export type AlertListRelationFilter = {
    every?: AlertWhereInput
    some?: AlertWhereInput
    none?: AlertWhereInput
  }

  export type ReportListRelationFilter = {
    every?: reportWhereInput
    some?: reportWhereInput
    none?: reportWhereInput
  }

  export type AlertOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type reportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type NeighborProfileCountOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    second_last_name?: SortOrder
    identification?: SortOrder
    phone_number?: SortOrder
    userId?: SortOrder
  }

  export type NeighborProfileAvgOrderByAggregateInput = {
    id?: SortOrder
    identification?: SortOrder
    phone_number?: SortOrder
    userId?: SortOrder
  }

  export type NeighborProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    second_last_name?: SortOrder
    identification?: SortOrder
    phone_number?: SortOrder
    userId?: SortOrder
  }

  export type NeighborProfileMinOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    second_last_name?: SortOrder
    identification?: SortOrder
    phone_number?: SortOrder
    userId?: SortOrder
  }

  export type NeighborProfileSumOrderByAggregateInput = {
    id?: SortOrder
    identification?: SortOrder
    phone_number?: SortOrder
    userId?: SortOrder
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

  export type MunicipalityProfileCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    canton?: SortOrder
    userId?: SortOrder
  }

  export type MunicipalityProfileAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type MunicipalityProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    canton?: SortOrder
    userId?: SortOrder
  }

  export type MunicipalityProfileMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    canton?: SortOrder
    userId?: SortOrder
  }

  export type MunicipalityProfileSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type AlertCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    authorId?: SortOrder
  }

  export type AlertAvgOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
  }

  export type AlertMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    authorId?: SortOrder
  }

  export type AlertMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    authorId?: SortOrder
  }

  export type AlertSumOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
  }

  export type DistrictListRelationFilter = {
    every?: districtWhereInput
    some?: districtWhereInput
    none?: districtWhereInput
  }

  export type districtOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type cantonCountOrderByAggregateInput = {
    canton_id?: SortOrder
    canton_name?: SortOrder
  }

  export type cantonAvgOrderByAggregateInput = {
    canton_id?: SortOrder
  }

  export type cantonMaxOrderByAggregateInput = {
    canton_id?: SortOrder
    canton_name?: SortOrder
  }

  export type cantonMinOrderByAggregateInput = {
    canton_id?: SortOrder
    canton_name?: SortOrder
  }

  export type cantonSumOrderByAggregateInput = {
    canton_id?: SortOrder
  }

  export type CantonNullableScalarRelationFilter = {
    is?: cantonWhereInput | null
    isNot?: cantonWhereInput | null
  }

  export type districtCountOrderByAggregateInput = {
    district_id?: SortOrder
    district_name?: SortOrder
    canton_id?: SortOrder
  }

  export type districtAvgOrderByAggregateInput = {
    district_id?: SortOrder
    canton_id?: SortOrder
  }

  export type districtMaxOrderByAggregateInput = {
    district_id?: SortOrder
    district_name?: SortOrder
    canton_id?: SortOrder
  }

  export type districtMinOrderByAggregateInput = {
    district_id?: SortOrder
    district_name?: SortOrder
    canton_id?: SortOrder
  }

  export type districtSumOrderByAggregateInput = {
    district_id?: SortOrder
    canton_id?: SortOrder
  }

  export type Problem_typeNullableScalarRelationFilter = {
    is?: problem_typeWhereInput | null
    isNot?: problem_typeWhereInput | null
  }

  export type problemCountOrderByAggregateInput = {
    problem_id?: SortOrder
    problem_type_id?: SortOrder
    problem_name?: SortOrder
  }

  export type problemAvgOrderByAggregateInput = {
    problem_id?: SortOrder
    problem_type_id?: SortOrder
  }

  export type problemMaxOrderByAggregateInput = {
    problem_id?: SortOrder
    problem_type_id?: SortOrder
    problem_name?: SortOrder
  }

  export type problemMinOrderByAggregateInput = {
    problem_id?: SortOrder
    problem_type_id?: SortOrder
    problem_name?: SortOrder
  }

  export type problemSumOrderByAggregateInput = {
    problem_id?: SortOrder
    problem_type_id?: SortOrder
  }

  export type ProblemListRelationFilter = {
    every?: problemWhereInput
    some?: problemWhereInput
    none?: problemWhereInput
  }

  export type problemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type problem_typeCountOrderByAggregateInput = {
    problem_type_id?: SortOrder
    type_name?: SortOrder
  }

  export type problem_typeAvgOrderByAggregateInput = {
    problem_type_id?: SortOrder
  }

  export type problem_typeMaxOrderByAggregateInput = {
    problem_type_id?: SortOrder
    type_name?: SortOrder
  }

  export type problem_typeMinOrderByAggregateInput = {
    problem_type_id?: SortOrder
    type_name?: SortOrder
  }

  export type problem_typeSumOrderByAggregateInput = {
    problem_type_id?: SortOrder
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

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type DistrictNullableScalarRelationFilter = {
    is?: districtWhereInput | null
    isNot?: districtWhereInput | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ProblemNullableScalarRelationFilter = {
    is?: problemWhereInput | null
    isNot?: problemWhereInput | null
  }

  export type reportCountOrderByAggregateInput = {
    report_id?: SortOrder
    author_id?: SortOrder
    report_title?: SortOrder
    problem_id?: SortOrder
    canton_id?: SortOrder
    district?: SortOrder
    neighborhood?: SortOrder
    street?: SortOrder
    report_date?: SortOrder
    report_time?: SortOrder
    status?: SortOrder
    updated_at?: SortOrder
    viewedByMunicipality?: SortOrder
  }

  export type reportAvgOrderByAggregateInput = {
    report_id?: SortOrder
    author_id?: SortOrder
    problem_id?: SortOrder
    canton_id?: SortOrder
    district?: SortOrder
  }

  export type reportMaxOrderByAggregateInput = {
    report_id?: SortOrder
    author_id?: SortOrder
    report_title?: SortOrder
    problem_id?: SortOrder
    canton_id?: SortOrder
    district?: SortOrder
    neighborhood?: SortOrder
    street?: SortOrder
    report_date?: SortOrder
    report_time?: SortOrder
    status?: SortOrder
    updated_at?: SortOrder
    viewedByMunicipality?: SortOrder
  }

  export type reportMinOrderByAggregateInput = {
    report_id?: SortOrder
    author_id?: SortOrder
    report_title?: SortOrder
    problem_id?: SortOrder
    canton_id?: SortOrder
    district?: SortOrder
    neighborhood?: SortOrder
    street?: SortOrder
    report_date?: SortOrder
    report_time?: SortOrder
    status?: SortOrder
    updated_at?: SortOrder
    viewedByMunicipality?: SortOrder
  }

  export type reportSumOrderByAggregateInput = {
    report_id?: SortOrder
    author_id?: SortOrder
    problem_id?: SortOrder
    canton_id?: SortOrder
    district?: SortOrder
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

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NeighborProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<NeighborProfileCreateWithoutUserInput, NeighborProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: NeighborProfileCreateOrConnectWithoutUserInput
    connect?: NeighborProfileWhereUniqueInput
  }

  export type MunicipalityProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<MunicipalityProfileCreateWithoutUserInput, MunicipalityProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: MunicipalityProfileCreateOrConnectWithoutUserInput
    connect?: MunicipalityProfileWhereUniqueInput
  }

  export type AlertCreateNestedManyWithoutAuthorInput = {
    create?: XOR<AlertCreateWithoutAuthorInput, AlertUncheckedCreateWithoutAuthorInput> | AlertCreateWithoutAuthorInput[] | AlertUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutAuthorInput | AlertCreateOrConnectWithoutAuthorInput[]
    createMany?: AlertCreateManyAuthorInputEnvelope
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
  }

  export type reportCreateNestedManyWithoutAuthorInput = {
    create?: XOR<reportCreateWithoutAuthorInput, reportUncheckedCreateWithoutAuthorInput> | reportCreateWithoutAuthorInput[] | reportUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: reportCreateOrConnectWithoutAuthorInput | reportCreateOrConnectWithoutAuthorInput[]
    createMany?: reportCreateManyAuthorInputEnvelope
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
  }

  export type NeighborProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<NeighborProfileCreateWithoutUserInput, NeighborProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: NeighborProfileCreateOrConnectWithoutUserInput
    connect?: NeighborProfileWhereUniqueInput
  }

  export type MunicipalityProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<MunicipalityProfileCreateWithoutUserInput, MunicipalityProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: MunicipalityProfileCreateOrConnectWithoutUserInput
    connect?: MunicipalityProfileWhereUniqueInput
  }

  export type AlertUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<AlertCreateWithoutAuthorInput, AlertUncheckedCreateWithoutAuthorInput> | AlertCreateWithoutAuthorInput[] | AlertUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutAuthorInput | AlertCreateOrConnectWithoutAuthorInput[]
    createMany?: AlertCreateManyAuthorInputEnvelope
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
  }

  export type reportUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<reportCreateWithoutAuthorInput, reportUncheckedCreateWithoutAuthorInput> | reportCreateWithoutAuthorInput[] | reportUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: reportCreateOrConnectWithoutAuthorInput | reportCreateOrConnectWithoutAuthorInput[]
    createMany?: reportCreateManyAuthorInputEnvelope
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NeighborProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<NeighborProfileCreateWithoutUserInput, NeighborProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: NeighborProfileCreateOrConnectWithoutUserInput
    upsert?: NeighborProfileUpsertWithoutUserInput
    disconnect?: NeighborProfileWhereInput | boolean
    delete?: NeighborProfileWhereInput | boolean
    connect?: NeighborProfileWhereUniqueInput
    update?: XOR<XOR<NeighborProfileUpdateToOneWithWhereWithoutUserInput, NeighborProfileUpdateWithoutUserInput>, NeighborProfileUncheckedUpdateWithoutUserInput>
  }

  export type MunicipalityProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<MunicipalityProfileCreateWithoutUserInput, MunicipalityProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: MunicipalityProfileCreateOrConnectWithoutUserInput
    upsert?: MunicipalityProfileUpsertWithoutUserInput
    disconnect?: MunicipalityProfileWhereInput | boolean
    delete?: MunicipalityProfileWhereInput | boolean
    connect?: MunicipalityProfileWhereUniqueInput
    update?: XOR<XOR<MunicipalityProfileUpdateToOneWithWhereWithoutUserInput, MunicipalityProfileUpdateWithoutUserInput>, MunicipalityProfileUncheckedUpdateWithoutUserInput>
  }

  export type AlertUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<AlertCreateWithoutAuthorInput, AlertUncheckedCreateWithoutAuthorInput> | AlertCreateWithoutAuthorInput[] | AlertUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutAuthorInput | AlertCreateOrConnectWithoutAuthorInput[]
    upsert?: AlertUpsertWithWhereUniqueWithoutAuthorInput | AlertUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: AlertCreateManyAuthorInputEnvelope
    set?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    disconnect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    delete?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    update?: AlertUpdateWithWhereUniqueWithoutAuthorInput | AlertUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: AlertUpdateManyWithWhereWithoutAuthorInput | AlertUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: AlertScalarWhereInput | AlertScalarWhereInput[]
  }

  export type reportUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<reportCreateWithoutAuthorInput, reportUncheckedCreateWithoutAuthorInput> | reportCreateWithoutAuthorInput[] | reportUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: reportCreateOrConnectWithoutAuthorInput | reportCreateOrConnectWithoutAuthorInput[]
    upsert?: reportUpsertWithWhereUniqueWithoutAuthorInput | reportUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: reportCreateManyAuthorInputEnvelope
    set?: reportWhereUniqueInput | reportWhereUniqueInput[]
    disconnect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    delete?: reportWhereUniqueInput | reportWhereUniqueInput[]
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    update?: reportUpdateWithWhereUniqueWithoutAuthorInput | reportUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: reportUpdateManyWithWhereWithoutAuthorInput | reportUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: reportScalarWhereInput | reportScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NeighborProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<NeighborProfileCreateWithoutUserInput, NeighborProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: NeighborProfileCreateOrConnectWithoutUserInput
    upsert?: NeighborProfileUpsertWithoutUserInput
    disconnect?: NeighborProfileWhereInput | boolean
    delete?: NeighborProfileWhereInput | boolean
    connect?: NeighborProfileWhereUniqueInput
    update?: XOR<XOR<NeighborProfileUpdateToOneWithWhereWithoutUserInput, NeighborProfileUpdateWithoutUserInput>, NeighborProfileUncheckedUpdateWithoutUserInput>
  }

  export type MunicipalityProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<MunicipalityProfileCreateWithoutUserInput, MunicipalityProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: MunicipalityProfileCreateOrConnectWithoutUserInput
    upsert?: MunicipalityProfileUpsertWithoutUserInput
    disconnect?: MunicipalityProfileWhereInput | boolean
    delete?: MunicipalityProfileWhereInput | boolean
    connect?: MunicipalityProfileWhereUniqueInput
    update?: XOR<XOR<MunicipalityProfileUpdateToOneWithWhereWithoutUserInput, MunicipalityProfileUpdateWithoutUserInput>, MunicipalityProfileUncheckedUpdateWithoutUserInput>
  }

  export type AlertUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<AlertCreateWithoutAuthorInput, AlertUncheckedCreateWithoutAuthorInput> | AlertCreateWithoutAuthorInput[] | AlertUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutAuthorInput | AlertCreateOrConnectWithoutAuthorInput[]
    upsert?: AlertUpsertWithWhereUniqueWithoutAuthorInput | AlertUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: AlertCreateManyAuthorInputEnvelope
    set?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    disconnect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    delete?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    update?: AlertUpdateWithWhereUniqueWithoutAuthorInput | AlertUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: AlertUpdateManyWithWhereWithoutAuthorInput | AlertUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: AlertScalarWhereInput | AlertScalarWhereInput[]
  }

  export type reportUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<reportCreateWithoutAuthorInput, reportUncheckedCreateWithoutAuthorInput> | reportCreateWithoutAuthorInput[] | reportUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: reportCreateOrConnectWithoutAuthorInput | reportCreateOrConnectWithoutAuthorInput[]
    upsert?: reportUpsertWithWhereUniqueWithoutAuthorInput | reportUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: reportCreateManyAuthorInputEnvelope
    set?: reportWhereUniqueInput | reportWhereUniqueInput[]
    disconnect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    delete?: reportWhereUniqueInput | reportWhereUniqueInput[]
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    update?: reportUpdateWithWhereUniqueWithoutAuthorInput | reportUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: reportUpdateManyWithWhereWithoutAuthorInput | reportUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: reportScalarWhereInput | reportScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutNeighborProfileInput = {
    create?: XOR<UserCreateWithoutNeighborProfileInput, UserUncheckedCreateWithoutNeighborProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutNeighborProfileInput
    connect?: UserWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutNeighborProfileNestedInput = {
    create?: XOR<UserCreateWithoutNeighborProfileInput, UserUncheckedCreateWithoutNeighborProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutNeighborProfileInput
    upsert?: UserUpsertWithoutNeighborProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNeighborProfileInput, UserUpdateWithoutNeighborProfileInput>, UserUncheckedUpdateWithoutNeighborProfileInput>
  }

  export type UserCreateNestedOneWithoutMunicipalityProfileInput = {
    create?: XOR<UserCreateWithoutMunicipalityProfileInput, UserUncheckedCreateWithoutMunicipalityProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutMunicipalityProfileInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMunicipalityProfileNestedInput = {
    create?: XOR<UserCreateWithoutMunicipalityProfileInput, UserUncheckedCreateWithoutMunicipalityProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutMunicipalityProfileInput
    upsert?: UserUpsertWithoutMunicipalityProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMunicipalityProfileInput, UserUpdateWithoutMunicipalityProfileInput>, UserUncheckedUpdateWithoutMunicipalityProfileInput>
  }

  export type UserCreateNestedOneWithoutAlertsInput = {
    create?: XOR<UserCreateWithoutAlertsInput, UserUncheckedCreateWithoutAlertsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAlertsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAlertsNestedInput = {
    create?: XOR<UserCreateWithoutAlertsInput, UserUncheckedCreateWithoutAlertsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAlertsInput
    upsert?: UserUpsertWithoutAlertsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAlertsInput, UserUpdateWithoutAlertsInput>, UserUncheckedUpdateWithoutAlertsInput>
  }

  export type districtCreateNestedManyWithoutCantonInput = {
    create?: XOR<districtCreateWithoutCantonInput, districtUncheckedCreateWithoutCantonInput> | districtCreateWithoutCantonInput[] | districtUncheckedCreateWithoutCantonInput[]
    connectOrCreate?: districtCreateOrConnectWithoutCantonInput | districtCreateOrConnectWithoutCantonInput[]
    createMany?: districtCreateManyCantonInputEnvelope
    connect?: districtWhereUniqueInput | districtWhereUniqueInput[]
  }

  export type reportCreateNestedManyWithoutCantonInput = {
    create?: XOR<reportCreateWithoutCantonInput, reportUncheckedCreateWithoutCantonInput> | reportCreateWithoutCantonInput[] | reportUncheckedCreateWithoutCantonInput[]
    connectOrCreate?: reportCreateOrConnectWithoutCantonInput | reportCreateOrConnectWithoutCantonInput[]
    createMany?: reportCreateManyCantonInputEnvelope
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
  }

  export type districtUncheckedCreateNestedManyWithoutCantonInput = {
    create?: XOR<districtCreateWithoutCantonInput, districtUncheckedCreateWithoutCantonInput> | districtCreateWithoutCantonInput[] | districtUncheckedCreateWithoutCantonInput[]
    connectOrCreate?: districtCreateOrConnectWithoutCantonInput | districtCreateOrConnectWithoutCantonInput[]
    createMany?: districtCreateManyCantonInputEnvelope
    connect?: districtWhereUniqueInput | districtWhereUniqueInput[]
  }

  export type reportUncheckedCreateNestedManyWithoutCantonInput = {
    create?: XOR<reportCreateWithoutCantonInput, reportUncheckedCreateWithoutCantonInput> | reportCreateWithoutCantonInput[] | reportUncheckedCreateWithoutCantonInput[]
    connectOrCreate?: reportCreateOrConnectWithoutCantonInput | reportCreateOrConnectWithoutCantonInput[]
    createMany?: reportCreateManyCantonInputEnvelope
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
  }

  export type districtUpdateManyWithoutCantonNestedInput = {
    create?: XOR<districtCreateWithoutCantonInput, districtUncheckedCreateWithoutCantonInput> | districtCreateWithoutCantonInput[] | districtUncheckedCreateWithoutCantonInput[]
    connectOrCreate?: districtCreateOrConnectWithoutCantonInput | districtCreateOrConnectWithoutCantonInput[]
    upsert?: districtUpsertWithWhereUniqueWithoutCantonInput | districtUpsertWithWhereUniqueWithoutCantonInput[]
    createMany?: districtCreateManyCantonInputEnvelope
    set?: districtWhereUniqueInput | districtWhereUniqueInput[]
    disconnect?: districtWhereUniqueInput | districtWhereUniqueInput[]
    delete?: districtWhereUniqueInput | districtWhereUniqueInput[]
    connect?: districtWhereUniqueInput | districtWhereUniqueInput[]
    update?: districtUpdateWithWhereUniqueWithoutCantonInput | districtUpdateWithWhereUniqueWithoutCantonInput[]
    updateMany?: districtUpdateManyWithWhereWithoutCantonInput | districtUpdateManyWithWhereWithoutCantonInput[]
    deleteMany?: districtScalarWhereInput | districtScalarWhereInput[]
  }

  export type reportUpdateManyWithoutCantonNestedInput = {
    create?: XOR<reportCreateWithoutCantonInput, reportUncheckedCreateWithoutCantonInput> | reportCreateWithoutCantonInput[] | reportUncheckedCreateWithoutCantonInput[]
    connectOrCreate?: reportCreateOrConnectWithoutCantonInput | reportCreateOrConnectWithoutCantonInput[]
    upsert?: reportUpsertWithWhereUniqueWithoutCantonInput | reportUpsertWithWhereUniqueWithoutCantonInput[]
    createMany?: reportCreateManyCantonInputEnvelope
    set?: reportWhereUniqueInput | reportWhereUniqueInput[]
    disconnect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    delete?: reportWhereUniqueInput | reportWhereUniqueInput[]
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    update?: reportUpdateWithWhereUniqueWithoutCantonInput | reportUpdateWithWhereUniqueWithoutCantonInput[]
    updateMany?: reportUpdateManyWithWhereWithoutCantonInput | reportUpdateManyWithWhereWithoutCantonInput[]
    deleteMany?: reportScalarWhereInput | reportScalarWhereInput[]
  }

  export type districtUncheckedUpdateManyWithoutCantonNestedInput = {
    create?: XOR<districtCreateWithoutCantonInput, districtUncheckedCreateWithoutCantonInput> | districtCreateWithoutCantonInput[] | districtUncheckedCreateWithoutCantonInput[]
    connectOrCreate?: districtCreateOrConnectWithoutCantonInput | districtCreateOrConnectWithoutCantonInput[]
    upsert?: districtUpsertWithWhereUniqueWithoutCantonInput | districtUpsertWithWhereUniqueWithoutCantonInput[]
    createMany?: districtCreateManyCantonInputEnvelope
    set?: districtWhereUniqueInput | districtWhereUniqueInput[]
    disconnect?: districtWhereUniqueInput | districtWhereUniqueInput[]
    delete?: districtWhereUniqueInput | districtWhereUniqueInput[]
    connect?: districtWhereUniqueInput | districtWhereUniqueInput[]
    update?: districtUpdateWithWhereUniqueWithoutCantonInput | districtUpdateWithWhereUniqueWithoutCantonInput[]
    updateMany?: districtUpdateManyWithWhereWithoutCantonInput | districtUpdateManyWithWhereWithoutCantonInput[]
    deleteMany?: districtScalarWhereInput | districtScalarWhereInput[]
  }

  export type reportUncheckedUpdateManyWithoutCantonNestedInput = {
    create?: XOR<reportCreateWithoutCantonInput, reportUncheckedCreateWithoutCantonInput> | reportCreateWithoutCantonInput[] | reportUncheckedCreateWithoutCantonInput[]
    connectOrCreate?: reportCreateOrConnectWithoutCantonInput | reportCreateOrConnectWithoutCantonInput[]
    upsert?: reportUpsertWithWhereUniqueWithoutCantonInput | reportUpsertWithWhereUniqueWithoutCantonInput[]
    createMany?: reportCreateManyCantonInputEnvelope
    set?: reportWhereUniqueInput | reportWhereUniqueInput[]
    disconnect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    delete?: reportWhereUniqueInput | reportWhereUniqueInput[]
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    update?: reportUpdateWithWhereUniqueWithoutCantonInput | reportUpdateWithWhereUniqueWithoutCantonInput[]
    updateMany?: reportUpdateManyWithWhereWithoutCantonInput | reportUpdateManyWithWhereWithoutCantonInput[]
    deleteMany?: reportScalarWhereInput | reportScalarWhereInput[]
  }

  export type cantonCreateNestedOneWithoutDistrictInput = {
    create?: XOR<cantonCreateWithoutDistrictInput, cantonUncheckedCreateWithoutDistrictInput>
    connectOrCreate?: cantonCreateOrConnectWithoutDistrictInput
    connect?: cantonWhereUniqueInput
  }

  export type reportCreateNestedManyWithoutDistrict_report_districtTodistrictInput = {
    create?: XOR<reportCreateWithoutDistrict_report_districtTodistrictInput, reportUncheckedCreateWithoutDistrict_report_districtTodistrictInput> | reportCreateWithoutDistrict_report_districtTodistrictInput[] | reportUncheckedCreateWithoutDistrict_report_districtTodistrictInput[]
    connectOrCreate?: reportCreateOrConnectWithoutDistrict_report_districtTodistrictInput | reportCreateOrConnectWithoutDistrict_report_districtTodistrictInput[]
    createMany?: reportCreateManyDistrict_report_districtTodistrictInputEnvelope
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
  }

  export type reportUncheckedCreateNestedManyWithoutDistrict_report_districtTodistrictInput = {
    create?: XOR<reportCreateWithoutDistrict_report_districtTodistrictInput, reportUncheckedCreateWithoutDistrict_report_districtTodistrictInput> | reportCreateWithoutDistrict_report_districtTodistrictInput[] | reportUncheckedCreateWithoutDistrict_report_districtTodistrictInput[]
    connectOrCreate?: reportCreateOrConnectWithoutDistrict_report_districtTodistrictInput | reportCreateOrConnectWithoutDistrict_report_districtTodistrictInput[]
    createMany?: reportCreateManyDistrict_report_districtTodistrictInputEnvelope
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
  }

  export type cantonUpdateOneWithoutDistrictNestedInput = {
    create?: XOR<cantonCreateWithoutDistrictInput, cantonUncheckedCreateWithoutDistrictInput>
    connectOrCreate?: cantonCreateOrConnectWithoutDistrictInput
    upsert?: cantonUpsertWithoutDistrictInput
    disconnect?: cantonWhereInput | boolean
    delete?: cantonWhereInput | boolean
    connect?: cantonWhereUniqueInput
    update?: XOR<XOR<cantonUpdateToOneWithWhereWithoutDistrictInput, cantonUpdateWithoutDistrictInput>, cantonUncheckedUpdateWithoutDistrictInput>
  }

  export type reportUpdateManyWithoutDistrict_report_districtTodistrictNestedInput = {
    create?: XOR<reportCreateWithoutDistrict_report_districtTodistrictInput, reportUncheckedCreateWithoutDistrict_report_districtTodistrictInput> | reportCreateWithoutDistrict_report_districtTodistrictInput[] | reportUncheckedCreateWithoutDistrict_report_districtTodistrictInput[]
    connectOrCreate?: reportCreateOrConnectWithoutDistrict_report_districtTodistrictInput | reportCreateOrConnectWithoutDistrict_report_districtTodistrictInput[]
    upsert?: reportUpsertWithWhereUniqueWithoutDistrict_report_districtTodistrictInput | reportUpsertWithWhereUniqueWithoutDistrict_report_districtTodistrictInput[]
    createMany?: reportCreateManyDistrict_report_districtTodistrictInputEnvelope
    set?: reportWhereUniqueInput | reportWhereUniqueInput[]
    disconnect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    delete?: reportWhereUniqueInput | reportWhereUniqueInput[]
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    update?: reportUpdateWithWhereUniqueWithoutDistrict_report_districtTodistrictInput | reportUpdateWithWhereUniqueWithoutDistrict_report_districtTodistrictInput[]
    updateMany?: reportUpdateManyWithWhereWithoutDistrict_report_districtTodistrictInput | reportUpdateManyWithWhereWithoutDistrict_report_districtTodistrictInput[]
    deleteMany?: reportScalarWhereInput | reportScalarWhereInput[]
  }

  export type reportUncheckedUpdateManyWithoutDistrict_report_districtTodistrictNestedInput = {
    create?: XOR<reportCreateWithoutDistrict_report_districtTodistrictInput, reportUncheckedCreateWithoutDistrict_report_districtTodistrictInput> | reportCreateWithoutDistrict_report_districtTodistrictInput[] | reportUncheckedCreateWithoutDistrict_report_districtTodistrictInput[]
    connectOrCreate?: reportCreateOrConnectWithoutDistrict_report_districtTodistrictInput | reportCreateOrConnectWithoutDistrict_report_districtTodistrictInput[]
    upsert?: reportUpsertWithWhereUniqueWithoutDistrict_report_districtTodistrictInput | reportUpsertWithWhereUniqueWithoutDistrict_report_districtTodistrictInput[]
    createMany?: reportCreateManyDistrict_report_districtTodistrictInputEnvelope
    set?: reportWhereUniqueInput | reportWhereUniqueInput[]
    disconnect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    delete?: reportWhereUniqueInput | reportWhereUniqueInput[]
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    update?: reportUpdateWithWhereUniqueWithoutDistrict_report_districtTodistrictInput | reportUpdateWithWhereUniqueWithoutDistrict_report_districtTodistrictInput[]
    updateMany?: reportUpdateManyWithWhereWithoutDistrict_report_districtTodistrictInput | reportUpdateManyWithWhereWithoutDistrict_report_districtTodistrictInput[]
    deleteMany?: reportScalarWhereInput | reportScalarWhereInput[]
  }

  export type problem_typeCreateNestedOneWithoutProblemInput = {
    create?: XOR<problem_typeCreateWithoutProblemInput, problem_typeUncheckedCreateWithoutProblemInput>
    connectOrCreate?: problem_typeCreateOrConnectWithoutProblemInput
    connect?: problem_typeWhereUniqueInput
  }

  export type reportCreateNestedManyWithoutProblemInput = {
    create?: XOR<reportCreateWithoutProblemInput, reportUncheckedCreateWithoutProblemInput> | reportCreateWithoutProblemInput[] | reportUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: reportCreateOrConnectWithoutProblemInput | reportCreateOrConnectWithoutProblemInput[]
    createMany?: reportCreateManyProblemInputEnvelope
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
  }

  export type reportUncheckedCreateNestedManyWithoutProblemInput = {
    create?: XOR<reportCreateWithoutProblemInput, reportUncheckedCreateWithoutProblemInput> | reportCreateWithoutProblemInput[] | reportUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: reportCreateOrConnectWithoutProblemInput | reportCreateOrConnectWithoutProblemInput[]
    createMany?: reportCreateManyProblemInputEnvelope
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
  }

  export type problem_typeUpdateOneWithoutProblemNestedInput = {
    create?: XOR<problem_typeCreateWithoutProblemInput, problem_typeUncheckedCreateWithoutProblemInput>
    connectOrCreate?: problem_typeCreateOrConnectWithoutProblemInput
    upsert?: problem_typeUpsertWithoutProblemInput
    disconnect?: problem_typeWhereInput | boolean
    delete?: problem_typeWhereInput | boolean
    connect?: problem_typeWhereUniqueInput
    update?: XOR<XOR<problem_typeUpdateToOneWithWhereWithoutProblemInput, problem_typeUpdateWithoutProblemInput>, problem_typeUncheckedUpdateWithoutProblemInput>
  }

  export type reportUpdateManyWithoutProblemNestedInput = {
    create?: XOR<reportCreateWithoutProblemInput, reportUncheckedCreateWithoutProblemInput> | reportCreateWithoutProblemInput[] | reportUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: reportCreateOrConnectWithoutProblemInput | reportCreateOrConnectWithoutProblemInput[]
    upsert?: reportUpsertWithWhereUniqueWithoutProblemInput | reportUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: reportCreateManyProblemInputEnvelope
    set?: reportWhereUniqueInput | reportWhereUniqueInput[]
    disconnect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    delete?: reportWhereUniqueInput | reportWhereUniqueInput[]
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    update?: reportUpdateWithWhereUniqueWithoutProblemInput | reportUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: reportUpdateManyWithWhereWithoutProblemInput | reportUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: reportScalarWhereInput | reportScalarWhereInput[]
  }

  export type reportUncheckedUpdateManyWithoutProblemNestedInput = {
    create?: XOR<reportCreateWithoutProblemInput, reportUncheckedCreateWithoutProblemInput> | reportCreateWithoutProblemInput[] | reportUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: reportCreateOrConnectWithoutProblemInput | reportCreateOrConnectWithoutProblemInput[]
    upsert?: reportUpsertWithWhereUniqueWithoutProblemInput | reportUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: reportCreateManyProblemInputEnvelope
    set?: reportWhereUniqueInput | reportWhereUniqueInput[]
    disconnect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    delete?: reportWhereUniqueInput | reportWhereUniqueInput[]
    connect?: reportWhereUniqueInput | reportWhereUniqueInput[]
    update?: reportUpdateWithWhereUniqueWithoutProblemInput | reportUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: reportUpdateManyWithWhereWithoutProblemInput | reportUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: reportScalarWhereInput | reportScalarWhereInput[]
  }

  export type problemCreateNestedManyWithoutProblem_typeInput = {
    create?: XOR<problemCreateWithoutProblem_typeInput, problemUncheckedCreateWithoutProblem_typeInput> | problemCreateWithoutProblem_typeInput[] | problemUncheckedCreateWithoutProblem_typeInput[]
    connectOrCreate?: problemCreateOrConnectWithoutProblem_typeInput | problemCreateOrConnectWithoutProblem_typeInput[]
    createMany?: problemCreateManyProblem_typeInputEnvelope
    connect?: problemWhereUniqueInput | problemWhereUniqueInput[]
  }

  export type problemUncheckedCreateNestedManyWithoutProblem_typeInput = {
    create?: XOR<problemCreateWithoutProblem_typeInput, problemUncheckedCreateWithoutProblem_typeInput> | problemCreateWithoutProblem_typeInput[] | problemUncheckedCreateWithoutProblem_typeInput[]
    connectOrCreate?: problemCreateOrConnectWithoutProblem_typeInput | problemCreateOrConnectWithoutProblem_typeInput[]
    createMany?: problemCreateManyProblem_typeInputEnvelope
    connect?: problemWhereUniqueInput | problemWhereUniqueInput[]
  }

  export type problemUpdateManyWithoutProblem_typeNestedInput = {
    create?: XOR<problemCreateWithoutProblem_typeInput, problemUncheckedCreateWithoutProblem_typeInput> | problemCreateWithoutProblem_typeInput[] | problemUncheckedCreateWithoutProblem_typeInput[]
    connectOrCreate?: problemCreateOrConnectWithoutProblem_typeInput | problemCreateOrConnectWithoutProblem_typeInput[]
    upsert?: problemUpsertWithWhereUniqueWithoutProblem_typeInput | problemUpsertWithWhereUniqueWithoutProblem_typeInput[]
    createMany?: problemCreateManyProblem_typeInputEnvelope
    set?: problemWhereUniqueInput | problemWhereUniqueInput[]
    disconnect?: problemWhereUniqueInput | problemWhereUniqueInput[]
    delete?: problemWhereUniqueInput | problemWhereUniqueInput[]
    connect?: problemWhereUniqueInput | problemWhereUniqueInput[]
    update?: problemUpdateWithWhereUniqueWithoutProblem_typeInput | problemUpdateWithWhereUniqueWithoutProblem_typeInput[]
    updateMany?: problemUpdateManyWithWhereWithoutProblem_typeInput | problemUpdateManyWithWhereWithoutProblem_typeInput[]
    deleteMany?: problemScalarWhereInput | problemScalarWhereInput[]
  }

  export type problemUncheckedUpdateManyWithoutProblem_typeNestedInput = {
    create?: XOR<problemCreateWithoutProblem_typeInput, problemUncheckedCreateWithoutProblem_typeInput> | problemCreateWithoutProblem_typeInput[] | problemUncheckedCreateWithoutProblem_typeInput[]
    connectOrCreate?: problemCreateOrConnectWithoutProblem_typeInput | problemCreateOrConnectWithoutProblem_typeInput[]
    upsert?: problemUpsertWithWhereUniqueWithoutProblem_typeInput | problemUpsertWithWhereUniqueWithoutProblem_typeInput[]
    createMany?: problemCreateManyProblem_typeInputEnvelope
    set?: problemWhereUniqueInput | problemWhereUniqueInput[]
    disconnect?: problemWhereUniqueInput | problemWhereUniqueInput[]
    delete?: problemWhereUniqueInput | problemWhereUniqueInput[]
    connect?: problemWhereUniqueInput | problemWhereUniqueInput[]
    update?: problemUpdateWithWhereUniqueWithoutProblem_typeInput | problemUpdateWithWhereUniqueWithoutProblem_typeInput[]
    updateMany?: problemUpdateManyWithWhereWithoutProblem_typeInput | problemUpdateManyWithWhereWithoutProblem_typeInput[]
    deleteMany?: problemScalarWhereInput | problemScalarWhereInput[]
  }

  export type cantonCreateNestedOneWithoutReportInput = {
    create?: XOR<cantonCreateWithoutReportInput, cantonUncheckedCreateWithoutReportInput>
    connectOrCreate?: cantonCreateOrConnectWithoutReportInput
    connect?: cantonWhereUniqueInput
  }

  export type districtCreateNestedOneWithoutReport_report_districtTodistrictInput = {
    create?: XOR<districtCreateWithoutReport_report_districtTodistrictInput, districtUncheckedCreateWithoutReport_report_districtTodistrictInput>
    connectOrCreate?: districtCreateOrConnectWithoutReport_report_districtTodistrictInput
    connect?: districtWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReportsInput = {
    create?: XOR<UserCreateWithoutReportsInput, UserUncheckedCreateWithoutReportsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReportsInput
    connect?: UserWhereUniqueInput
  }

  export type problemCreateNestedOneWithoutReportInput = {
    create?: XOR<problemCreateWithoutReportInput, problemUncheckedCreateWithoutReportInput>
    connectOrCreate?: problemCreateOrConnectWithoutReportInput
    connect?: problemWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type cantonUpdateOneWithoutReportNestedInput = {
    create?: XOR<cantonCreateWithoutReportInput, cantonUncheckedCreateWithoutReportInput>
    connectOrCreate?: cantonCreateOrConnectWithoutReportInput
    upsert?: cantonUpsertWithoutReportInput
    disconnect?: cantonWhereInput | boolean
    delete?: cantonWhereInput | boolean
    connect?: cantonWhereUniqueInput
    update?: XOR<XOR<cantonUpdateToOneWithWhereWithoutReportInput, cantonUpdateWithoutReportInput>, cantonUncheckedUpdateWithoutReportInput>
  }

  export type districtUpdateOneWithoutReport_report_districtTodistrictNestedInput = {
    create?: XOR<districtCreateWithoutReport_report_districtTodistrictInput, districtUncheckedCreateWithoutReport_report_districtTodistrictInput>
    connectOrCreate?: districtCreateOrConnectWithoutReport_report_districtTodistrictInput
    upsert?: districtUpsertWithoutReport_report_districtTodistrictInput
    disconnect?: districtWhereInput | boolean
    delete?: districtWhereInput | boolean
    connect?: districtWhereUniqueInput
    update?: XOR<XOR<districtUpdateToOneWithWhereWithoutReport_report_districtTodistrictInput, districtUpdateWithoutReport_report_districtTodistrictInput>, districtUncheckedUpdateWithoutReport_report_districtTodistrictInput>
  }

  export type UserUpdateOneWithoutReportsNestedInput = {
    create?: XOR<UserCreateWithoutReportsInput, UserUncheckedCreateWithoutReportsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReportsInput
    upsert?: UserUpsertWithoutReportsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReportsInput, UserUpdateWithoutReportsInput>, UserUncheckedUpdateWithoutReportsInput>
  }

  export type problemUpdateOneWithoutReportNestedInput = {
    create?: XOR<problemCreateWithoutReportInput, problemUncheckedCreateWithoutReportInput>
    connectOrCreate?: problemCreateOrConnectWithoutReportInput
    upsert?: problemUpsertWithoutReportInput
    disconnect?: problemWhereInput | boolean
    delete?: problemWhereInput | boolean
    connect?: problemWhereUniqueInput
    update?: XOR<XOR<problemUpdateToOneWithWhereWithoutReportInput, problemUpdateWithoutReportInput>, problemUncheckedUpdateWithoutReportInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NeighborProfileCreateWithoutUserInput = {
    first_name: string
    last_name: string
    second_last_name?: string | null
    identification: number
    phone_number?: number | null
  }

  export type NeighborProfileUncheckedCreateWithoutUserInput = {
    id?: number
    first_name: string
    last_name: string
    second_last_name?: string | null
    identification: number
    phone_number?: number | null
  }

  export type NeighborProfileCreateOrConnectWithoutUserInput = {
    where: NeighborProfileWhereUniqueInput
    create: XOR<NeighborProfileCreateWithoutUserInput, NeighborProfileUncheckedCreateWithoutUserInput>
  }

  export type MunicipalityProfileCreateWithoutUserInput = {
    name: string
    canton: string
  }

  export type MunicipalityProfileUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    canton: string
  }

  export type MunicipalityProfileCreateOrConnectWithoutUserInput = {
    where: MunicipalityProfileWhereUniqueInput
    create: XOR<MunicipalityProfileCreateWithoutUserInput, MunicipalityProfileUncheckedCreateWithoutUserInput>
  }

  export type AlertCreateWithoutAuthorInput = {
    title: string
    content: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AlertUncheckedCreateWithoutAuthorInput = {
    id?: number
    title: string
    content: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AlertCreateOrConnectWithoutAuthorInput = {
    where: AlertWhereUniqueInput
    create: XOR<AlertCreateWithoutAuthorInput, AlertUncheckedCreateWithoutAuthorInput>
  }

  export type AlertCreateManyAuthorInputEnvelope = {
    data: AlertCreateManyAuthorInput | AlertCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type reportCreateWithoutAuthorInput = {
    report_title?: string | null
    neighborhood?: string | null
    street?: string | null
    report_date?: Date | string | null
    report_time?: Date | string | null
    status?: string | null
    updated_at?: Date | string | null
    viewedByMunicipality?: boolean | null
    canton?: cantonCreateNestedOneWithoutReportInput
    district_report_districtTodistrict?: districtCreateNestedOneWithoutReport_report_districtTodistrictInput
    problem?: problemCreateNestedOneWithoutReportInput
  }

  export type reportUncheckedCreateWithoutAuthorInput = {
    report_id?: number
    report_title?: string | null
    problem_id?: number | null
    canton_id?: number | null
    district?: number | null
    neighborhood?: string | null
    street?: string | null
    report_date?: Date | string | null
    report_time?: Date | string | null
    status?: string | null
    updated_at?: Date | string | null
    viewedByMunicipality?: boolean | null
  }

  export type reportCreateOrConnectWithoutAuthorInput = {
    where: reportWhereUniqueInput
    create: XOR<reportCreateWithoutAuthorInput, reportUncheckedCreateWithoutAuthorInput>
  }

  export type reportCreateManyAuthorInputEnvelope = {
    data: reportCreateManyAuthorInput | reportCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type NeighborProfileUpsertWithoutUserInput = {
    update: XOR<NeighborProfileUpdateWithoutUserInput, NeighborProfileUncheckedUpdateWithoutUserInput>
    create: XOR<NeighborProfileCreateWithoutUserInput, NeighborProfileUncheckedCreateWithoutUserInput>
    where?: NeighborProfileWhereInput
  }

  export type NeighborProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: NeighborProfileWhereInput
    data: XOR<NeighborProfileUpdateWithoutUserInput, NeighborProfileUncheckedUpdateWithoutUserInput>
  }

  export type NeighborProfileUpdateWithoutUserInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    second_last_name?: NullableStringFieldUpdateOperationsInput | string | null
    identification?: IntFieldUpdateOperationsInput | number
    phone_number?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type NeighborProfileUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    second_last_name?: NullableStringFieldUpdateOperationsInput | string | null
    identification?: IntFieldUpdateOperationsInput | number
    phone_number?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MunicipalityProfileUpsertWithoutUserInput = {
    update: XOR<MunicipalityProfileUpdateWithoutUserInput, MunicipalityProfileUncheckedUpdateWithoutUserInput>
    create: XOR<MunicipalityProfileCreateWithoutUserInput, MunicipalityProfileUncheckedCreateWithoutUserInput>
    where?: MunicipalityProfileWhereInput
  }

  export type MunicipalityProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: MunicipalityProfileWhereInput
    data: XOR<MunicipalityProfileUpdateWithoutUserInput, MunicipalityProfileUncheckedUpdateWithoutUserInput>
  }

  export type MunicipalityProfileUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    canton?: StringFieldUpdateOperationsInput | string
  }

  export type MunicipalityProfileUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    canton?: StringFieldUpdateOperationsInput | string
  }

  export type AlertUpsertWithWhereUniqueWithoutAuthorInput = {
    where: AlertWhereUniqueInput
    update: XOR<AlertUpdateWithoutAuthorInput, AlertUncheckedUpdateWithoutAuthorInput>
    create: XOR<AlertCreateWithoutAuthorInput, AlertUncheckedCreateWithoutAuthorInput>
  }

  export type AlertUpdateWithWhereUniqueWithoutAuthorInput = {
    where: AlertWhereUniqueInput
    data: XOR<AlertUpdateWithoutAuthorInput, AlertUncheckedUpdateWithoutAuthorInput>
  }

  export type AlertUpdateManyWithWhereWithoutAuthorInput = {
    where: AlertScalarWhereInput
    data: XOR<AlertUpdateManyMutationInput, AlertUncheckedUpdateManyWithoutAuthorInput>
  }

  export type AlertScalarWhereInput = {
    AND?: AlertScalarWhereInput | AlertScalarWhereInput[]
    OR?: AlertScalarWhereInput[]
    NOT?: AlertScalarWhereInput | AlertScalarWhereInput[]
    id?: IntFilter<"Alert"> | number
    title?: StringFilter<"Alert"> | string
    content?: StringFilter<"Alert"> | string
    created_at?: DateTimeFilter<"Alert"> | Date | string
    updated_at?: DateTimeFilter<"Alert"> | Date | string
    authorId?: IntFilter<"Alert"> | number
  }

  export type reportUpsertWithWhereUniqueWithoutAuthorInput = {
    where: reportWhereUniqueInput
    update: XOR<reportUpdateWithoutAuthorInput, reportUncheckedUpdateWithoutAuthorInput>
    create: XOR<reportCreateWithoutAuthorInput, reportUncheckedCreateWithoutAuthorInput>
  }

  export type reportUpdateWithWhereUniqueWithoutAuthorInput = {
    where: reportWhereUniqueInput
    data: XOR<reportUpdateWithoutAuthorInput, reportUncheckedUpdateWithoutAuthorInput>
  }

  export type reportUpdateManyWithWhereWithoutAuthorInput = {
    where: reportScalarWhereInput
    data: XOR<reportUpdateManyMutationInput, reportUncheckedUpdateManyWithoutAuthorInput>
  }

  export type reportScalarWhereInput = {
    AND?: reportScalarWhereInput | reportScalarWhereInput[]
    OR?: reportScalarWhereInput[]
    NOT?: reportScalarWhereInput | reportScalarWhereInput[]
    report_id?: IntFilter<"report"> | number
    author_id?: IntNullableFilter<"report"> | number | null
    report_title?: StringNullableFilter<"report"> | string | null
    problem_id?: IntNullableFilter<"report"> | number | null
    canton_id?: IntNullableFilter<"report"> | number | null
    district?: IntNullableFilter<"report"> | number | null
    neighborhood?: StringNullableFilter<"report"> | string | null
    street?: StringNullableFilter<"report"> | string | null
    report_date?: DateTimeNullableFilter<"report"> | Date | string | null
    report_time?: DateTimeNullableFilter<"report"> | Date | string | null
    status?: StringNullableFilter<"report"> | string | null
    updated_at?: DateTimeNullableFilter<"report"> | Date | string | null
    viewedByMunicipality?: BoolNullableFilter<"report"> | boolean | null
  }

  export type UserCreateWithoutNeighborProfileInput = {
    email: string
    password: string
    role?: $Enums.Role
    created_at?: Date | string
    municipalityProfile?: MunicipalityProfileCreateNestedOneWithoutUserInput
    alerts?: AlertCreateNestedManyWithoutAuthorInput
    reports?: reportCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutNeighborProfileInput = {
    id?: number
    email: string
    password: string
    role?: $Enums.Role
    created_at?: Date | string
    municipalityProfile?: MunicipalityProfileUncheckedCreateNestedOneWithoutUserInput
    alerts?: AlertUncheckedCreateNestedManyWithoutAuthorInput
    reports?: reportUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutNeighborProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNeighborProfileInput, UserUncheckedCreateWithoutNeighborProfileInput>
  }

  export type UserUpsertWithoutNeighborProfileInput = {
    update: XOR<UserUpdateWithoutNeighborProfileInput, UserUncheckedUpdateWithoutNeighborProfileInput>
    create: XOR<UserCreateWithoutNeighborProfileInput, UserUncheckedCreateWithoutNeighborProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNeighborProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNeighborProfileInput, UserUncheckedUpdateWithoutNeighborProfileInput>
  }

  export type UserUpdateWithoutNeighborProfileInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    municipalityProfile?: MunicipalityProfileUpdateOneWithoutUserNestedInput
    alerts?: AlertUpdateManyWithoutAuthorNestedInput
    reports?: reportUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutNeighborProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    municipalityProfile?: MunicipalityProfileUncheckedUpdateOneWithoutUserNestedInput
    alerts?: AlertUncheckedUpdateManyWithoutAuthorNestedInput
    reports?: reportUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserCreateWithoutMunicipalityProfileInput = {
    email: string
    password: string
    role?: $Enums.Role
    created_at?: Date | string
    neighborProfile?: NeighborProfileCreateNestedOneWithoutUserInput
    alerts?: AlertCreateNestedManyWithoutAuthorInput
    reports?: reportCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutMunicipalityProfileInput = {
    id?: number
    email: string
    password: string
    role?: $Enums.Role
    created_at?: Date | string
    neighborProfile?: NeighborProfileUncheckedCreateNestedOneWithoutUserInput
    alerts?: AlertUncheckedCreateNestedManyWithoutAuthorInput
    reports?: reportUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutMunicipalityProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMunicipalityProfileInput, UserUncheckedCreateWithoutMunicipalityProfileInput>
  }

  export type UserUpsertWithoutMunicipalityProfileInput = {
    update: XOR<UserUpdateWithoutMunicipalityProfileInput, UserUncheckedUpdateWithoutMunicipalityProfileInput>
    create: XOR<UserCreateWithoutMunicipalityProfileInput, UserUncheckedCreateWithoutMunicipalityProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMunicipalityProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMunicipalityProfileInput, UserUncheckedUpdateWithoutMunicipalityProfileInput>
  }

  export type UserUpdateWithoutMunicipalityProfileInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    neighborProfile?: NeighborProfileUpdateOneWithoutUserNestedInput
    alerts?: AlertUpdateManyWithoutAuthorNestedInput
    reports?: reportUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutMunicipalityProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    neighborProfile?: NeighborProfileUncheckedUpdateOneWithoutUserNestedInput
    alerts?: AlertUncheckedUpdateManyWithoutAuthorNestedInput
    reports?: reportUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserCreateWithoutAlertsInput = {
    email: string
    password: string
    role?: $Enums.Role
    created_at?: Date | string
    neighborProfile?: NeighborProfileCreateNestedOneWithoutUserInput
    municipalityProfile?: MunicipalityProfileCreateNestedOneWithoutUserInput
    reports?: reportCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutAlertsInput = {
    id?: number
    email: string
    password: string
    role?: $Enums.Role
    created_at?: Date | string
    neighborProfile?: NeighborProfileUncheckedCreateNestedOneWithoutUserInput
    municipalityProfile?: MunicipalityProfileUncheckedCreateNestedOneWithoutUserInput
    reports?: reportUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutAlertsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAlertsInput, UserUncheckedCreateWithoutAlertsInput>
  }

  export type UserUpsertWithoutAlertsInput = {
    update: XOR<UserUpdateWithoutAlertsInput, UserUncheckedUpdateWithoutAlertsInput>
    create: XOR<UserCreateWithoutAlertsInput, UserUncheckedCreateWithoutAlertsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAlertsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAlertsInput, UserUncheckedUpdateWithoutAlertsInput>
  }

  export type UserUpdateWithoutAlertsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    neighborProfile?: NeighborProfileUpdateOneWithoutUserNestedInput
    municipalityProfile?: MunicipalityProfileUpdateOneWithoutUserNestedInput
    reports?: reportUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutAlertsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    neighborProfile?: NeighborProfileUncheckedUpdateOneWithoutUserNestedInput
    municipalityProfile?: MunicipalityProfileUncheckedUpdateOneWithoutUserNestedInput
    reports?: reportUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type districtCreateWithoutCantonInput = {
    district_name?: string | null
    report_report_districtTodistrict?: reportCreateNestedManyWithoutDistrict_report_districtTodistrictInput
  }

  export type districtUncheckedCreateWithoutCantonInput = {
    district_id?: number
    district_name?: string | null
    report_report_districtTodistrict?: reportUncheckedCreateNestedManyWithoutDistrict_report_districtTodistrictInput
  }

  export type districtCreateOrConnectWithoutCantonInput = {
    where: districtWhereUniqueInput
    create: XOR<districtCreateWithoutCantonInput, districtUncheckedCreateWithoutCantonInput>
  }

  export type districtCreateManyCantonInputEnvelope = {
    data: districtCreateManyCantonInput | districtCreateManyCantonInput[]
    skipDuplicates?: boolean
  }

  export type reportCreateWithoutCantonInput = {
    report_title?: string | null
    neighborhood?: string | null
    street?: string | null
    report_date?: Date | string | null
    report_time?: Date | string | null
    status?: string | null
    updated_at?: Date | string | null
    viewedByMunicipality?: boolean | null
    district_report_districtTodistrict?: districtCreateNestedOneWithoutReport_report_districtTodistrictInput
    author?: UserCreateNestedOneWithoutReportsInput
    problem?: problemCreateNestedOneWithoutReportInput
  }

  export type reportUncheckedCreateWithoutCantonInput = {
    report_id?: number
    author_id?: number | null
    report_title?: string | null
    problem_id?: number | null
    district?: number | null
    neighborhood?: string | null
    street?: string | null
    report_date?: Date | string | null
    report_time?: Date | string | null
    status?: string | null
    updated_at?: Date | string | null
    viewedByMunicipality?: boolean | null
  }

  export type reportCreateOrConnectWithoutCantonInput = {
    where: reportWhereUniqueInput
    create: XOR<reportCreateWithoutCantonInput, reportUncheckedCreateWithoutCantonInput>
  }

  export type reportCreateManyCantonInputEnvelope = {
    data: reportCreateManyCantonInput | reportCreateManyCantonInput[]
    skipDuplicates?: boolean
  }

  export type districtUpsertWithWhereUniqueWithoutCantonInput = {
    where: districtWhereUniqueInput
    update: XOR<districtUpdateWithoutCantonInput, districtUncheckedUpdateWithoutCantonInput>
    create: XOR<districtCreateWithoutCantonInput, districtUncheckedCreateWithoutCantonInput>
  }

  export type districtUpdateWithWhereUniqueWithoutCantonInput = {
    where: districtWhereUniqueInput
    data: XOR<districtUpdateWithoutCantonInput, districtUncheckedUpdateWithoutCantonInput>
  }

  export type districtUpdateManyWithWhereWithoutCantonInput = {
    where: districtScalarWhereInput
    data: XOR<districtUpdateManyMutationInput, districtUncheckedUpdateManyWithoutCantonInput>
  }

  export type districtScalarWhereInput = {
    AND?: districtScalarWhereInput | districtScalarWhereInput[]
    OR?: districtScalarWhereInput[]
    NOT?: districtScalarWhereInput | districtScalarWhereInput[]
    district_id?: IntFilter<"district"> | number
    district_name?: StringNullableFilter<"district"> | string | null
    canton_id?: IntNullableFilter<"district"> | number | null
  }

  export type reportUpsertWithWhereUniqueWithoutCantonInput = {
    where: reportWhereUniqueInput
    update: XOR<reportUpdateWithoutCantonInput, reportUncheckedUpdateWithoutCantonInput>
    create: XOR<reportCreateWithoutCantonInput, reportUncheckedCreateWithoutCantonInput>
  }

  export type reportUpdateWithWhereUniqueWithoutCantonInput = {
    where: reportWhereUniqueInput
    data: XOR<reportUpdateWithoutCantonInput, reportUncheckedUpdateWithoutCantonInput>
  }

  export type reportUpdateManyWithWhereWithoutCantonInput = {
    where: reportScalarWhereInput
    data: XOR<reportUpdateManyMutationInput, reportUncheckedUpdateManyWithoutCantonInput>
  }

  export type cantonCreateWithoutDistrictInput = {
    canton_name?: string | null
    report?: reportCreateNestedManyWithoutCantonInput
  }

  export type cantonUncheckedCreateWithoutDistrictInput = {
    canton_id?: number
    canton_name?: string | null
    report?: reportUncheckedCreateNestedManyWithoutCantonInput
  }

  export type cantonCreateOrConnectWithoutDistrictInput = {
    where: cantonWhereUniqueInput
    create: XOR<cantonCreateWithoutDistrictInput, cantonUncheckedCreateWithoutDistrictInput>
  }

  export type reportCreateWithoutDistrict_report_districtTodistrictInput = {
    report_title?: string | null
    neighborhood?: string | null
    street?: string | null
    report_date?: Date | string | null
    report_time?: Date | string | null
    status?: string | null
    updated_at?: Date | string | null
    viewedByMunicipality?: boolean | null
    canton?: cantonCreateNestedOneWithoutReportInput
    author?: UserCreateNestedOneWithoutReportsInput
    problem?: problemCreateNestedOneWithoutReportInput
  }

  export type reportUncheckedCreateWithoutDistrict_report_districtTodistrictInput = {
    report_id?: number
    author_id?: number | null
    report_title?: string | null
    problem_id?: number | null
    canton_id?: number | null
    neighborhood?: string | null
    street?: string | null
    report_date?: Date | string | null
    report_time?: Date | string | null
    status?: string | null
    updated_at?: Date | string | null
    viewedByMunicipality?: boolean | null
  }

  export type reportCreateOrConnectWithoutDistrict_report_districtTodistrictInput = {
    where: reportWhereUniqueInput
    create: XOR<reportCreateWithoutDistrict_report_districtTodistrictInput, reportUncheckedCreateWithoutDistrict_report_districtTodistrictInput>
  }

  export type reportCreateManyDistrict_report_districtTodistrictInputEnvelope = {
    data: reportCreateManyDistrict_report_districtTodistrictInput | reportCreateManyDistrict_report_districtTodistrictInput[]
    skipDuplicates?: boolean
  }

  export type cantonUpsertWithoutDistrictInput = {
    update: XOR<cantonUpdateWithoutDistrictInput, cantonUncheckedUpdateWithoutDistrictInput>
    create: XOR<cantonCreateWithoutDistrictInput, cantonUncheckedCreateWithoutDistrictInput>
    where?: cantonWhereInput
  }

  export type cantonUpdateToOneWithWhereWithoutDistrictInput = {
    where?: cantonWhereInput
    data: XOR<cantonUpdateWithoutDistrictInput, cantonUncheckedUpdateWithoutDistrictInput>
  }

  export type cantonUpdateWithoutDistrictInput = {
    canton_name?: NullableStringFieldUpdateOperationsInput | string | null
    report?: reportUpdateManyWithoutCantonNestedInput
  }

  export type cantonUncheckedUpdateWithoutDistrictInput = {
    canton_id?: IntFieldUpdateOperationsInput | number
    canton_name?: NullableStringFieldUpdateOperationsInput | string | null
    report?: reportUncheckedUpdateManyWithoutCantonNestedInput
  }

  export type reportUpsertWithWhereUniqueWithoutDistrict_report_districtTodistrictInput = {
    where: reportWhereUniqueInput
    update: XOR<reportUpdateWithoutDistrict_report_districtTodistrictInput, reportUncheckedUpdateWithoutDistrict_report_districtTodistrictInput>
    create: XOR<reportCreateWithoutDistrict_report_districtTodistrictInput, reportUncheckedCreateWithoutDistrict_report_districtTodistrictInput>
  }

  export type reportUpdateWithWhereUniqueWithoutDistrict_report_districtTodistrictInput = {
    where: reportWhereUniqueInput
    data: XOR<reportUpdateWithoutDistrict_report_districtTodistrictInput, reportUncheckedUpdateWithoutDistrict_report_districtTodistrictInput>
  }

  export type reportUpdateManyWithWhereWithoutDistrict_report_districtTodistrictInput = {
    where: reportScalarWhereInput
    data: XOR<reportUpdateManyMutationInput, reportUncheckedUpdateManyWithoutDistrict_report_districtTodistrictInput>
  }

  export type problem_typeCreateWithoutProblemInput = {
    type_name?: string | null
  }

  export type problem_typeUncheckedCreateWithoutProblemInput = {
    problem_type_id?: number
    type_name?: string | null
  }

  export type problem_typeCreateOrConnectWithoutProblemInput = {
    where: problem_typeWhereUniqueInput
    create: XOR<problem_typeCreateWithoutProblemInput, problem_typeUncheckedCreateWithoutProblemInput>
  }

  export type reportCreateWithoutProblemInput = {
    report_title?: string | null
    neighborhood?: string | null
    street?: string | null
    report_date?: Date | string | null
    report_time?: Date | string | null
    status?: string | null
    updated_at?: Date | string | null
    viewedByMunicipality?: boolean | null
    canton?: cantonCreateNestedOneWithoutReportInput
    district_report_districtTodistrict?: districtCreateNestedOneWithoutReport_report_districtTodistrictInput
    author?: UserCreateNestedOneWithoutReportsInput
  }

  export type reportUncheckedCreateWithoutProblemInput = {
    report_id?: number
    author_id?: number | null
    report_title?: string | null
    canton_id?: number | null
    district?: number | null
    neighborhood?: string | null
    street?: string | null
    report_date?: Date | string | null
    report_time?: Date | string | null
    status?: string | null
    updated_at?: Date | string | null
    viewedByMunicipality?: boolean | null
  }

  export type reportCreateOrConnectWithoutProblemInput = {
    where: reportWhereUniqueInput
    create: XOR<reportCreateWithoutProblemInput, reportUncheckedCreateWithoutProblemInput>
  }

  export type reportCreateManyProblemInputEnvelope = {
    data: reportCreateManyProblemInput | reportCreateManyProblemInput[]
    skipDuplicates?: boolean
  }

  export type problem_typeUpsertWithoutProblemInput = {
    update: XOR<problem_typeUpdateWithoutProblemInput, problem_typeUncheckedUpdateWithoutProblemInput>
    create: XOR<problem_typeCreateWithoutProblemInput, problem_typeUncheckedCreateWithoutProblemInput>
    where?: problem_typeWhereInput
  }

  export type problem_typeUpdateToOneWithWhereWithoutProblemInput = {
    where?: problem_typeWhereInput
    data: XOR<problem_typeUpdateWithoutProblemInput, problem_typeUncheckedUpdateWithoutProblemInput>
  }

  export type problem_typeUpdateWithoutProblemInput = {
    type_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type problem_typeUncheckedUpdateWithoutProblemInput = {
    problem_type_id?: IntFieldUpdateOperationsInput | number
    type_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type reportUpsertWithWhereUniqueWithoutProblemInput = {
    where: reportWhereUniqueInput
    update: XOR<reportUpdateWithoutProblemInput, reportUncheckedUpdateWithoutProblemInput>
    create: XOR<reportCreateWithoutProblemInput, reportUncheckedCreateWithoutProblemInput>
  }

  export type reportUpdateWithWhereUniqueWithoutProblemInput = {
    where: reportWhereUniqueInput
    data: XOR<reportUpdateWithoutProblemInput, reportUncheckedUpdateWithoutProblemInput>
  }

  export type reportUpdateManyWithWhereWithoutProblemInput = {
    where: reportScalarWhereInput
    data: XOR<reportUpdateManyMutationInput, reportUncheckedUpdateManyWithoutProblemInput>
  }

  export type problemCreateWithoutProblem_typeInput = {
    problem_name?: string | null
    report?: reportCreateNestedManyWithoutProblemInput
  }

  export type problemUncheckedCreateWithoutProblem_typeInput = {
    problem_id?: number
    problem_name?: string | null
    report?: reportUncheckedCreateNestedManyWithoutProblemInput
  }

  export type problemCreateOrConnectWithoutProblem_typeInput = {
    where: problemWhereUniqueInput
    create: XOR<problemCreateWithoutProblem_typeInput, problemUncheckedCreateWithoutProblem_typeInput>
  }

  export type problemCreateManyProblem_typeInputEnvelope = {
    data: problemCreateManyProblem_typeInput | problemCreateManyProblem_typeInput[]
    skipDuplicates?: boolean
  }

  export type problemUpsertWithWhereUniqueWithoutProblem_typeInput = {
    where: problemWhereUniqueInput
    update: XOR<problemUpdateWithoutProblem_typeInput, problemUncheckedUpdateWithoutProblem_typeInput>
    create: XOR<problemCreateWithoutProblem_typeInput, problemUncheckedCreateWithoutProblem_typeInput>
  }

  export type problemUpdateWithWhereUniqueWithoutProblem_typeInput = {
    where: problemWhereUniqueInput
    data: XOR<problemUpdateWithoutProblem_typeInput, problemUncheckedUpdateWithoutProblem_typeInput>
  }

  export type problemUpdateManyWithWhereWithoutProblem_typeInput = {
    where: problemScalarWhereInput
    data: XOR<problemUpdateManyMutationInput, problemUncheckedUpdateManyWithoutProblem_typeInput>
  }

  export type problemScalarWhereInput = {
    AND?: problemScalarWhereInput | problemScalarWhereInput[]
    OR?: problemScalarWhereInput[]
    NOT?: problemScalarWhereInput | problemScalarWhereInput[]
    problem_id?: IntFilter<"problem"> | number
    problem_type_id?: IntNullableFilter<"problem"> | number | null
    problem_name?: StringNullableFilter<"problem"> | string | null
  }

  export type cantonCreateWithoutReportInput = {
    canton_name?: string | null
    district?: districtCreateNestedManyWithoutCantonInput
  }

  export type cantonUncheckedCreateWithoutReportInput = {
    canton_id?: number
    canton_name?: string | null
    district?: districtUncheckedCreateNestedManyWithoutCantonInput
  }

  export type cantonCreateOrConnectWithoutReportInput = {
    where: cantonWhereUniqueInput
    create: XOR<cantonCreateWithoutReportInput, cantonUncheckedCreateWithoutReportInput>
  }

  export type districtCreateWithoutReport_report_districtTodistrictInput = {
    district_name?: string | null
    canton?: cantonCreateNestedOneWithoutDistrictInput
  }

  export type districtUncheckedCreateWithoutReport_report_districtTodistrictInput = {
    district_id?: number
    district_name?: string | null
    canton_id?: number | null
  }

  export type districtCreateOrConnectWithoutReport_report_districtTodistrictInput = {
    where: districtWhereUniqueInput
    create: XOR<districtCreateWithoutReport_report_districtTodistrictInput, districtUncheckedCreateWithoutReport_report_districtTodistrictInput>
  }

  export type UserCreateWithoutReportsInput = {
    email: string
    password: string
    role?: $Enums.Role
    created_at?: Date | string
    neighborProfile?: NeighborProfileCreateNestedOneWithoutUserInput
    municipalityProfile?: MunicipalityProfileCreateNestedOneWithoutUserInput
    alerts?: AlertCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutReportsInput = {
    id?: number
    email: string
    password: string
    role?: $Enums.Role
    created_at?: Date | string
    neighborProfile?: NeighborProfileUncheckedCreateNestedOneWithoutUserInput
    municipalityProfile?: MunicipalityProfileUncheckedCreateNestedOneWithoutUserInput
    alerts?: AlertUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutReportsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReportsInput, UserUncheckedCreateWithoutReportsInput>
  }

  export type problemCreateWithoutReportInput = {
    problem_name?: string | null
    problem_type?: problem_typeCreateNestedOneWithoutProblemInput
  }

  export type problemUncheckedCreateWithoutReportInput = {
    problem_id?: number
    problem_type_id?: number | null
    problem_name?: string | null
  }

  export type problemCreateOrConnectWithoutReportInput = {
    where: problemWhereUniqueInput
    create: XOR<problemCreateWithoutReportInput, problemUncheckedCreateWithoutReportInput>
  }

  export type cantonUpsertWithoutReportInput = {
    update: XOR<cantonUpdateWithoutReportInput, cantonUncheckedUpdateWithoutReportInput>
    create: XOR<cantonCreateWithoutReportInput, cantonUncheckedCreateWithoutReportInput>
    where?: cantonWhereInput
  }

  export type cantonUpdateToOneWithWhereWithoutReportInput = {
    where?: cantonWhereInput
    data: XOR<cantonUpdateWithoutReportInput, cantonUncheckedUpdateWithoutReportInput>
  }

  export type cantonUpdateWithoutReportInput = {
    canton_name?: NullableStringFieldUpdateOperationsInput | string | null
    district?: districtUpdateManyWithoutCantonNestedInput
  }

  export type cantonUncheckedUpdateWithoutReportInput = {
    canton_id?: IntFieldUpdateOperationsInput | number
    canton_name?: NullableStringFieldUpdateOperationsInput | string | null
    district?: districtUncheckedUpdateManyWithoutCantonNestedInput
  }

  export type districtUpsertWithoutReport_report_districtTodistrictInput = {
    update: XOR<districtUpdateWithoutReport_report_districtTodistrictInput, districtUncheckedUpdateWithoutReport_report_districtTodistrictInput>
    create: XOR<districtCreateWithoutReport_report_districtTodistrictInput, districtUncheckedCreateWithoutReport_report_districtTodistrictInput>
    where?: districtWhereInput
  }

  export type districtUpdateToOneWithWhereWithoutReport_report_districtTodistrictInput = {
    where?: districtWhereInput
    data: XOR<districtUpdateWithoutReport_report_districtTodistrictInput, districtUncheckedUpdateWithoutReport_report_districtTodistrictInput>
  }

  export type districtUpdateWithoutReport_report_districtTodistrictInput = {
    district_name?: NullableStringFieldUpdateOperationsInput | string | null
    canton?: cantonUpdateOneWithoutDistrictNestedInput
  }

  export type districtUncheckedUpdateWithoutReport_report_districtTodistrictInput = {
    district_id?: IntFieldUpdateOperationsInput | number
    district_name?: NullableStringFieldUpdateOperationsInput | string | null
    canton_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserUpsertWithoutReportsInput = {
    update: XOR<UserUpdateWithoutReportsInput, UserUncheckedUpdateWithoutReportsInput>
    create: XOR<UserCreateWithoutReportsInput, UserUncheckedCreateWithoutReportsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReportsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReportsInput, UserUncheckedUpdateWithoutReportsInput>
  }

  export type UserUpdateWithoutReportsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    neighborProfile?: NeighborProfileUpdateOneWithoutUserNestedInput
    municipalityProfile?: MunicipalityProfileUpdateOneWithoutUserNestedInput
    alerts?: AlertUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutReportsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    neighborProfile?: NeighborProfileUncheckedUpdateOneWithoutUserNestedInput
    municipalityProfile?: MunicipalityProfileUncheckedUpdateOneWithoutUserNestedInput
    alerts?: AlertUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type problemUpsertWithoutReportInput = {
    update: XOR<problemUpdateWithoutReportInput, problemUncheckedUpdateWithoutReportInput>
    create: XOR<problemCreateWithoutReportInput, problemUncheckedCreateWithoutReportInput>
    where?: problemWhereInput
  }

  export type problemUpdateToOneWithWhereWithoutReportInput = {
    where?: problemWhereInput
    data: XOR<problemUpdateWithoutReportInput, problemUncheckedUpdateWithoutReportInput>
  }

  export type problemUpdateWithoutReportInput = {
    problem_name?: NullableStringFieldUpdateOperationsInput | string | null
    problem_type?: problem_typeUpdateOneWithoutProblemNestedInput
  }

  export type problemUncheckedUpdateWithoutReportInput = {
    problem_id?: IntFieldUpdateOperationsInput | number
    problem_type_id?: NullableIntFieldUpdateOperationsInput | number | null
    problem_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AlertCreateManyAuthorInput = {
    id?: number
    title: string
    content: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type reportCreateManyAuthorInput = {
    report_id?: number
    report_title?: string | null
    problem_id?: number | null
    canton_id?: number | null
    district?: number | null
    neighborhood?: string | null
    street?: string | null
    report_date?: Date | string | null
    report_time?: Date | string | null
    status?: string | null
    updated_at?: Date | string | null
    viewedByMunicipality?: boolean | null
  }

  export type AlertUpdateWithoutAuthorInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reportUpdateWithoutAuthorInput = {
    report_title?: NullableStringFieldUpdateOperationsInput | string | null
    neighborhood?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    report_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    report_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    viewedByMunicipality?: NullableBoolFieldUpdateOperationsInput | boolean | null
    canton?: cantonUpdateOneWithoutReportNestedInput
    district_report_districtTodistrict?: districtUpdateOneWithoutReport_report_districtTodistrictNestedInput
    problem?: problemUpdateOneWithoutReportNestedInput
  }

  export type reportUncheckedUpdateWithoutAuthorInput = {
    report_id?: IntFieldUpdateOperationsInput | number
    report_title?: NullableStringFieldUpdateOperationsInput | string | null
    problem_id?: NullableIntFieldUpdateOperationsInput | number | null
    canton_id?: NullableIntFieldUpdateOperationsInput | number | null
    district?: NullableIntFieldUpdateOperationsInput | number | null
    neighborhood?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    report_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    report_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    viewedByMunicipality?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type reportUncheckedUpdateManyWithoutAuthorInput = {
    report_id?: IntFieldUpdateOperationsInput | number
    report_title?: NullableStringFieldUpdateOperationsInput | string | null
    problem_id?: NullableIntFieldUpdateOperationsInput | number | null
    canton_id?: NullableIntFieldUpdateOperationsInput | number | null
    district?: NullableIntFieldUpdateOperationsInput | number | null
    neighborhood?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    report_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    report_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    viewedByMunicipality?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type districtCreateManyCantonInput = {
    district_id?: number
    district_name?: string | null
  }

  export type reportCreateManyCantonInput = {
    report_id?: number
    author_id?: number | null
    report_title?: string | null
    problem_id?: number | null
    district?: number | null
    neighborhood?: string | null
    street?: string | null
    report_date?: Date | string | null
    report_time?: Date | string | null
    status?: string | null
    updated_at?: Date | string | null
    viewedByMunicipality?: boolean | null
  }

  export type districtUpdateWithoutCantonInput = {
    district_name?: NullableStringFieldUpdateOperationsInput | string | null
    report_report_districtTodistrict?: reportUpdateManyWithoutDistrict_report_districtTodistrictNestedInput
  }

  export type districtUncheckedUpdateWithoutCantonInput = {
    district_id?: IntFieldUpdateOperationsInput | number
    district_name?: NullableStringFieldUpdateOperationsInput | string | null
    report_report_districtTodistrict?: reportUncheckedUpdateManyWithoutDistrict_report_districtTodistrictNestedInput
  }

  export type districtUncheckedUpdateManyWithoutCantonInput = {
    district_id?: IntFieldUpdateOperationsInput | number
    district_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type reportUpdateWithoutCantonInput = {
    report_title?: NullableStringFieldUpdateOperationsInput | string | null
    neighborhood?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    report_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    report_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    viewedByMunicipality?: NullableBoolFieldUpdateOperationsInput | boolean | null
    district_report_districtTodistrict?: districtUpdateOneWithoutReport_report_districtTodistrictNestedInput
    author?: UserUpdateOneWithoutReportsNestedInput
    problem?: problemUpdateOneWithoutReportNestedInput
  }

  export type reportUncheckedUpdateWithoutCantonInput = {
    report_id?: IntFieldUpdateOperationsInput | number
    author_id?: NullableIntFieldUpdateOperationsInput | number | null
    report_title?: NullableStringFieldUpdateOperationsInput | string | null
    problem_id?: NullableIntFieldUpdateOperationsInput | number | null
    district?: NullableIntFieldUpdateOperationsInput | number | null
    neighborhood?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    report_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    report_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    viewedByMunicipality?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type reportUncheckedUpdateManyWithoutCantonInput = {
    report_id?: IntFieldUpdateOperationsInput | number
    author_id?: NullableIntFieldUpdateOperationsInput | number | null
    report_title?: NullableStringFieldUpdateOperationsInput | string | null
    problem_id?: NullableIntFieldUpdateOperationsInput | number | null
    district?: NullableIntFieldUpdateOperationsInput | number | null
    neighborhood?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    report_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    report_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    viewedByMunicipality?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type reportCreateManyDistrict_report_districtTodistrictInput = {
    report_id?: number
    author_id?: number | null
    report_title?: string | null
    problem_id?: number | null
    canton_id?: number | null
    neighborhood?: string | null
    street?: string | null
    report_date?: Date | string | null
    report_time?: Date | string | null
    status?: string | null
    updated_at?: Date | string | null
    viewedByMunicipality?: boolean | null
  }

  export type reportUpdateWithoutDistrict_report_districtTodistrictInput = {
    report_title?: NullableStringFieldUpdateOperationsInput | string | null
    neighborhood?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    report_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    report_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    viewedByMunicipality?: NullableBoolFieldUpdateOperationsInput | boolean | null
    canton?: cantonUpdateOneWithoutReportNestedInput
    author?: UserUpdateOneWithoutReportsNestedInput
    problem?: problemUpdateOneWithoutReportNestedInput
  }

  export type reportUncheckedUpdateWithoutDistrict_report_districtTodistrictInput = {
    report_id?: IntFieldUpdateOperationsInput | number
    author_id?: NullableIntFieldUpdateOperationsInput | number | null
    report_title?: NullableStringFieldUpdateOperationsInput | string | null
    problem_id?: NullableIntFieldUpdateOperationsInput | number | null
    canton_id?: NullableIntFieldUpdateOperationsInput | number | null
    neighborhood?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    report_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    report_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    viewedByMunicipality?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type reportUncheckedUpdateManyWithoutDistrict_report_districtTodistrictInput = {
    report_id?: IntFieldUpdateOperationsInput | number
    author_id?: NullableIntFieldUpdateOperationsInput | number | null
    report_title?: NullableStringFieldUpdateOperationsInput | string | null
    problem_id?: NullableIntFieldUpdateOperationsInput | number | null
    canton_id?: NullableIntFieldUpdateOperationsInput | number | null
    neighborhood?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    report_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    report_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    viewedByMunicipality?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type reportCreateManyProblemInput = {
    report_id?: number
    author_id?: number | null
    report_title?: string | null
    canton_id?: number | null
    district?: number | null
    neighborhood?: string | null
    street?: string | null
    report_date?: Date | string | null
    report_time?: Date | string | null
    status?: string | null
    updated_at?: Date | string | null
    viewedByMunicipality?: boolean | null
  }

  export type reportUpdateWithoutProblemInput = {
    report_title?: NullableStringFieldUpdateOperationsInput | string | null
    neighborhood?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    report_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    report_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    viewedByMunicipality?: NullableBoolFieldUpdateOperationsInput | boolean | null
    canton?: cantonUpdateOneWithoutReportNestedInput
    district_report_districtTodistrict?: districtUpdateOneWithoutReport_report_districtTodistrictNestedInput
    author?: UserUpdateOneWithoutReportsNestedInput
  }

  export type reportUncheckedUpdateWithoutProblemInput = {
    report_id?: IntFieldUpdateOperationsInput | number
    author_id?: NullableIntFieldUpdateOperationsInput | number | null
    report_title?: NullableStringFieldUpdateOperationsInput | string | null
    canton_id?: NullableIntFieldUpdateOperationsInput | number | null
    district?: NullableIntFieldUpdateOperationsInput | number | null
    neighborhood?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    report_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    report_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    viewedByMunicipality?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type reportUncheckedUpdateManyWithoutProblemInput = {
    report_id?: IntFieldUpdateOperationsInput | number
    author_id?: NullableIntFieldUpdateOperationsInput | number | null
    report_title?: NullableStringFieldUpdateOperationsInput | string | null
    canton_id?: NullableIntFieldUpdateOperationsInput | number | null
    district?: NullableIntFieldUpdateOperationsInput | number | null
    neighborhood?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    report_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    report_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    viewedByMunicipality?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type problemCreateManyProblem_typeInput = {
    problem_id?: number
    problem_name?: string | null
  }

  export type problemUpdateWithoutProblem_typeInput = {
    problem_name?: NullableStringFieldUpdateOperationsInput | string | null
    report?: reportUpdateManyWithoutProblemNestedInput
  }

  export type problemUncheckedUpdateWithoutProblem_typeInput = {
    problem_id?: IntFieldUpdateOperationsInput | number
    problem_name?: NullableStringFieldUpdateOperationsInput | string | null
    report?: reportUncheckedUpdateManyWithoutProblemNestedInput
  }

  export type problemUncheckedUpdateManyWithoutProblem_typeInput = {
    problem_id?: IntFieldUpdateOperationsInput | number
    problem_name?: NullableStringFieldUpdateOperationsInput | string | null
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