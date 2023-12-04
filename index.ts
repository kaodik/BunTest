/**
 * triggerCSVImportSS.ts
 * @NScriptName Trigger CSV Import - Scheduled
 * @NScriptType ScheduledScript
 * @NApiVersion 2.1
 */

// import { EntryPoints } from 'N/types';
// // import log from ('N/log');
// import * as log from 'N/log';

// export let pageInit: EntryPoints.Client.pageInit = (
//   context: EntryPoints.Client.pageInitContext
// ) => {
//   //Your IDE will now autocomplete from the context argument. For instance use this to access context.mode and context.currentRecord in this pageInit example

//   log.audit('execute', 'Execution complete');
// };

import log = require('N/log');

export function execute() {
  log.audit('execute', 'Execution Complete');
}
