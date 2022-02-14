import { Knex } from 'knex';

export async function incrementUpsert (
  db: Knex<any, unknown[]>,
  tableName: string,
  data: Record<string, any> | Record<string, any>[],
  incrementColumns?: string[] | null,
  updateColumns?: string[] | null,
  trx?: Knex.Transaction,
): Promise<number[]> {
  const mergeData: Record<string, Knex.Raw<any>> = {};
  if (incrementColumns) {
    for (const colName of incrementColumns) {
      mergeData[colName] = db.raw('?? + values(??)', [ colName, colName ]);
    }
  }
  if (updateColumns) {
    for (const colName of updateColumns) {
      mergeData[colName] = db.raw('values(??)', [ colName ]);
    }
  }

  let result: number[];

  if (trx) {
    result = await db(tableName)
      .insert(data)
      .onConflict()
      .merge(mergeData)
      .transacting(trx);
  } else {
    result = await db(tableName)
      .insert(data)
      .onConflict()
      .merge(mergeData);
  }

  return result;
}