// import { util } from '@aws-appsync/utils';
//
// /**
//  * Gets items from the DynamoDB tables in batches with the provided `id`` keys
//  * @param {import('@aws-appsync/utils').Context} ctx the context
//  * @returns {import('@aws-appsync/utils').DynamoDBBatchPutItemRequest} the request
//  */
// export function request(ctx) {
//   return {
//     operation: 'BatchPutItem',
//     tables: {
//       "Card-7padanpwxje3xhcmn2mijnt6cy-NONE": ctx.args?.cards?.map((card) => util.dynamodb.toMapValues(card)),
//     },
//   };
// }
//
// /**
//  * Returns the BatchPutItem table results
//  * @param {import('@aws-appsync/utils').Context} ctx the context
//  * @returns {[*]} the items
//  */
// export function response(ctx) {
//   if (ctx.error) {
//     util.error(ctx.error.message, ctx.error.type);
//   }
//   return ctx.result.data['Card-7padanpwxje3xhcmn2mijnt6cy-NONE'];
// }

// ## [Start] Stash resolver specific context.. **
// $util.qr($ctx.stash.put("typeName", "Mutation"))
// $util.qr($ctx.stash.put("fieldName", "batchCreateCards"))
// {
//   "version": "2017-02-28",
//   "operation": "BatchInvoke",
//   "payload": {
//   "field": "batchCreateCards",
//     "args":  $utils.toJson($ctx.arguments)
// }
// }
// ## [End] Stash resolver specific context.. **
// $util.toJson($context.result)
