/*eslint-disable*/
// jshint ignore: start
/** 
 * DO NOT MODIFY!
 * This file was automatically generated and will be overwritten in the next build
 */

(function (name, definition){
   if (typeof define === 'function'){
     define(definition);
   } else if (typeof module !== 'undefined' && module.exports) {
     var moduleDef = definition();
     for (var key in moduleDef) {
       if (moduleDef.hasOwnProperty(key)) {
         module.exports[key] = moduleDef[key];
       }
     }
   } else {
     var theModule = definition(), global = this, old = global[name];
     theModule.noConflict = function () {
       global[name] = old;
       return theModule;
     };
     global[name] = theModule;
   }
 })('PhoenixJsRoutes', function () {
   return { 
     
     pageIndex: function pageIndex() {
       return '/';
     }, 
     
     pageIndex: function pageIndex() {
       return '/';
     }, 
     
     liveDashboardHome: function liveDashboardHome() {
       return '/dashboard';
     }, 
     
     liveDashboardHome: function liveDashboardHome(node) {
       return '/dashboard/' + node + '/home';
     }, 
     
     liveDashboardOsMon: function liveDashboardOsMon(node) {
       return '/dashboard/' + node + '/os_mon';
     }, 
     
     liveDashboardMetrics: function liveDashboardMetrics(node) {
       return '/dashboard/' + node + '/metrics';
     }, 
     
     liveDashboardApplications: function liveDashboardApplications(node) {
       return '/dashboard/' + node + '/applications';
     }, 
     
     liveDashboardProcesses: function liveDashboardProcesses(node) {
       return '/dashboard/' + node + '/processes';
     }, 
     
     liveDashboardPorts: function liveDashboardPorts(node) {
       return '/dashboard/' + node + '/ports';
     }, 
     
     liveDashboardSockets: function liveDashboardSockets(node) {
       return '/dashboard/' + node + '/sockets';
     }, 
     
     liveDashboardEts: function liveDashboardEts(node) {
       return '/dashboard/' + node + '/ets';
     }, 
     
     liveDashboardRequestLogger: function liveDashboardRequestLogger(node) {
       return '/dashboard/' + node + '/request_logger';
     }, 
     
     liveDashboardPage: function liveDashboardPage(node, page) {
       return '/dashboard/' + node + '/' + page;
     }, 
   }
 });
