export enum ColumnType {
	STRING, INT, DECIMAL, DATETIME, BOOLEAN, JSON
}

export interface Column {
	type: ColumnType;
}

export interface ColumnStr<Length extends number = number> extends Column {
	type: ColumnType.STRING;
	length?: Length;
}

export interface ColumnInt<Digits extends number = number> extends Column {
	type: ColumnType.INT;
	digits?: Digits;
}

export interface ColumnDecimal<IntegralDigits extends number = number, FractionDigits extends number = number> extends Column {
	type: ColumnType.DECIMAL;
	/** default -1, no limit */
	integralDigits?: IntegralDigits;
	/** default -1, no limit */
	fractionDigits?: FractionDigits;
}

export interface ColumnDatetime extends Column {
	type: ColumnType.DATETIME;
}

export interface ColumnBoolean<BaseOnInt extends boolean = boolean> extends Column {
	type: ColumnType.BOOLEAN;
	/** default true */
	baseOnInt?: BaseOnInt;
}

export interface ColumnJson<Type extends any = any> extends Column {
	type: ColumnType.JSON;
	/** default any */
	json?: Type;
}

export type AvailableColumnTypes = ColumnStr | ColumnInt | ColumnDecimal | ColumnDatetime | ColumnBoolean | ColumnJson;
// export type AllColumnNames<E extends EntityDef> = { [C in keyof E]: E[C] extends AvailableColumnTypes ? C : never; } [keyof E];

export type LastElement<T extends any[]> = T extends [...infer _, infer Last] ? Last : never;

export type EntityBase = { [k: string]: AvailableColumnTypes };
// export type Entity<E extends {} = EntityBase> = {
// 	[K in keyof E]: E[K] extends AvailableColumnTypes ? E[K] : never;
// }

export type BindValue = {}
export type JoinOnExpressions<_ES extends Array<{}>> = {}

export interface ExpressionHelper<ES extends Array<{}>> {
	and(...expressions: JoinOnExpressions<ES>[]): JoinOnExpressions<ES>;
	or(...expressions: JoinOnExpressions<ES>[]): JoinOnExpressions<ES>;
	bind(prop: string): BindValue;
}

export interface Operand<CT extends AvailableColumnTypes, ES extends Array<{}>> {
	add(right: RightOperand<CT, ES>): RightOperand<CT, ES>;
	subtract(right: RightOperand<CT, ES>): RightOperand<CT, ES>;
	multiply(right: RightOperand<CT, ES>): RightOperand<CT, ES>;
	divide(right: RightOperand<CT, ES>): RightOperand<CT, ES>;
}

export type RightOperand<CT extends AvailableColumnTypes, ES extends Array<{}>> =
	Operand<CT, ES> | BindValue | string | number | boolean;

export interface LeftOperand<CT extends AvailableColumnTypes, ES extends Array<{}>> extends Operand<CT, ES> {
	isNull(): JoinOnExpressions<ES>;
	isNotNull(): JoinOnExpressions<ES>;
	equals(right: RightOperand<CT, ES>): JoinOnExpressions<ES>;
	notEquals(right: RightOperand<CT, ES>): JoinOnExpressions<ES>;
}

export type BooleanLeftOperand<ES extends Array<{}>> = LeftOperand<ColumnBoolean, ES>;
export type JsonLeftOperand<ES extends Array<{}>> = Omit<LeftOperand<ColumnJson, ES>, 'equals' | 'notEquals'>;

export interface DateTimeLeftOperand<ES extends Array<{}>> extends LeftOperand<ColumnDatetime, ES> {
	isBefore(right: RightOperand<AvailableColumnTypes, ES>): JoinOnExpressions<ES>;
}

export interface NumericLeftOperand<CT extends ColumnInt | ColumnDecimal, ES extends Array<{}>> extends LeftOperand<CT, ES> {
}

export interface StrLeftOperand<ES extends Array<{}>> extends LeftOperand<ColumnStr, ES> {
}

export type Entity4Expression<E extends {}, ES extends Array<{}>> = {
	[K in keyof E]: E[K] extends ColumnJson ? JsonLeftOperand<ES>
		: E[K] extends ColumnBoolean ? BooleanLeftOperand<ES>
			: E[K] extends ColumnDatetime ? DateTimeLeftOperand<ES>
				: E[K] extends ColumnDecimal | ColumnInt ? NumericLeftOperand<E[K], ES>
					: E[K] extends ColumnStr ? StrLeftOperand<ES>
						: never;
}

export type Entities4Expression<ES extends Array<{}>> = {
	[K in keyof ES]: Entity4Expression<ES[K], ES>;
};

export interface Aliasable<_E extends {}, Aliased> {
	alias(alias: string): Aliased;
}

export interface JoinOnBuilder<ES extends Array<{}>> {
	on(expressions: (entities: Entities4Expression<ES>, helper: ExpressionHelper<ES>) => JoinOnExpressions<ES>): JoinBuilder<ES>;
}

export interface AliasableJoinOnBuilder<ES extends Array<{}>> extends JoinBuilder<ES>, Aliasable<LastElement<ES>, JoinOnBuilder<ES>> {
}

export interface JoinBuilder<BaseES extends Array<{}>> {
	join<TableOrViewOrClause extends {} = EntityBase>(name: string): AliasableJoinOnBuilder<[...BaseES, TableOrViewOrClause]>;
	join<TableOrViewOrClause extends {} = EntityBase>(name: string, alias: string): JoinOnBuilder<[...BaseES, TableOrViewOrClause]>;
}

export interface TableBuilder<Table extends {}> extends JoinBuilder<[Table]> {
}

export interface AliasableTableBuilder<Table extends {}> extends TableBuilder<Table>, Aliasable<Table, TableBuilder<Table>> {
}

export interface ISqlBuilder {
	table<Table extends {} = EntityBase>(name: string): AliasableTableBuilder<Table>;
	table<Table extends {} = EntityBase>(name: string, alias: string): TableBuilder<Table>;
}

// @ts-ignore
const Sql = (): ISqlBuilder => {
};

interface X {
	id: ColumnInt;
	createdAt: ColumnDatetime;
}

interface Y {
	xid: ColumnInt;
	amount: ColumnDecimal;
}

Sql().table<X>('x').alias('a')
	.join<Y>('y').alias('b')
	.on(([x, y], {and, or, bind}) => {
		return and(x.id.equals(y.xid), x.id.isNotNull(), y.xid.isNotNull(), or(y.amount.equals(bind('amount'))));
	})
	.join<Y>('y').alias('c')
	.on(([x, _, y], {or, bind}) => {
		return or(x.createdAt.isBefore(bind('date')), x.id.equals(y.xid));
	});
