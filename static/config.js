require.config({
  waitSeconds: 0,
  paths: {
    // Miscellaneous
    tls_1_0: '/common/tls_1_0/tls_1_0',
    // require js plugins (also need to be placed in require_app_paths.js)
    css : '/common/cms/js/libs/require/css-0.1.1.min',
    'normalize' : '/common/cms/js/libs/require/normalize',
    'css-builder' : '/common/cms/js/libs/require/css-builder',
    text: '/common/cms/js/libs/require/text',
    // libraries
    d3: '/common/cms/js/libs/d3/d3.min',
    json2: '/common/cms/js/libs/json2.min',
    'jquery-base': '/common/cms/js/jquery/jquery-1.8.2.min',
    jquery: '/common/cms/js/dii-core/dii-jquery',
    bootstrap: '/common/cms/js/libs/bootstrap-3.2.0-dist/js/bootstrap.min',
    html5Upload: '/common/cms/js/libs/html5Upload',
    flashcanvas: '/common/cms/js/jquery/plugins/signature-pad/assets/flashcanvas',
    sneeze: '/common/cms/js/libs/sneeze',
    'promise-polyfill': '/common/cms/js/libs/polyfills/promise.min',
    'FileSaver': '/common/cms/js/libs/fileSaver.min',
    'Blob': '/common/cms/js/libs/blob',
    'on-load': '/common/cms/js/dii-core/dii-core-public-ondomready-stub',
    'jquery-no-conflict': '/common/cms/js/dii-core/dii-core-jquery-no-conflict',
    'jquery-ui': '/common/cms/js/jquery/jquery-ui-1.9.0.full.min',
    'jquery.postmessage': '/common/cms/js/jquery/plugins/jquery.postmessage.min',
    'jquery.validate.base': '/common/cms/js/jquery/plugins/validation/jquery.validate.min',
    'jquery.validate': '/common/cms/js/dii-core/jquery.dii.validate',
    'jquery.validate.methods': '/common/cms/js/jquery/plugins/validation/additional-methods',
    'jquery.inputmask.base':'/common/cms/js/jquery/plugins/jquery.inputmask-2.x/jquery.inputmask',
    'jquery.inputmask.date':"/common/cms/js/jquery/plugins/jquery.inputmask-2.x/jquery.inputmask.date.extensions",
    'jquery.inputmask':"/common/cms/js/jquery/plugins/jquery.inputmask-2.x/jquery.inputmask.numeric.extensions",
    'jquery.maskMoney': '/common/cms/js/jquery/plugins/jquery.maskMoney/maskMoney',
    'dii.left-menu-display-button': '/common/cms/js/dii-lib/dii-backbone-elements/left-menu-display-ams/button',
    'dii.left-menu-display-menu-item': '/common/cms/js/dii-lib/dii-backbone-elements/left-menu-display-ams/left-menu-item',
    'dii.left-menu-display-menu': '/common/cms/js/dii-lib/dii-backbone-elements/left-menu-display-ams/left-menu',
    'dii.left-menu-display': '/common/cms/js/dii-lib/dii-backbone-elements/left-menu-display-ams/left-menu-display',
    'dii.payments-panel': '/common/cms/js/dii-lib/dii-payments-panel/payments',
    'dii.payments-panel-types': '/common/cms/js/dii-lib/dii-payments-panel/payment_types',
    'jquery.form': '/common/cms/js/jquery/plugins/ajax-form/jquery.form',
    'jquery.cookie': '/common/cms/js/jquery/plugins/jquery.cookie',
    'jquery.cropit': '/common/cms/js/jquery/plugins/jquery.cropit',
    'jquery.textfill': '/common/cms/js/jquery/plugins/jquery-textfill/jquery.textfill.min',
    'jquery.printThis': '/common/cms/js/jquery/plugins/printThis/printThis',
    'jquery.toastmessage': '/common/cms/js/jquery/plugins/toastmessage/jquery.toastmessage',
    'jquery.sliderAccess': '/common/cms/js/jquery/plugins/timePicker/v1.1.1/jquery-ui-sliderAccess',
    'jquery.datetimepicker': '/common/cms/js/jquery/plugins/timePicker/v1.1.1/jquery-ui-timepicker-addon',
    'jquery.spectrum': '/common/cms/js/jquery/plugins/bgrins-spectrum/spectrum',
    'jquery.tokenInput': '/common/cms/js/jquery/plugins/tokeninput/jquery.tokeninput',
    'tmpl': '/common/cms/js/jquery/plugins/jQuery-File-Upload-9.5.7/js/tmpl.min',
    'jquery.iframeTransport': '/common/cms/js/jquery/plugins/jQuery-File-Upload-9.5.7/js/jquery.iframe-transport',
    'jquery.ui.widget' : '/common/cms/js/jquery/plugins/jQuery-File-Upload-9.5.7/js/vendor/jquery.ui.widget',
    'jquery.ajax.fileupload': '/common/cms/js/jquery/plugins/ajax-file-upload/ajax-file-uploader',
    'jquery.fileupload-jquery-ui': '/common/cms/js/jquery/plugins/jQuery-File-Upload-9.5.7/js/jquery.fileupload-jquery-ui',
    'jquery.fileupload-process': '/common/cms/js/jquery/plugins/jQuery-File-Upload-9.5.7/js/jquery.fileupload-process',
    'jquery.fileupload-ui': '/common/cms/js/jquery/plugins/jQuery-File-Upload-9.5.7/js/jquery.fileupload-ui',
    'jquery.fileupload': '/common/cms/js/jquery/plugins/jQuery-File-Upload-9.5.7/js/jquery.fileupload',
    'jquery.timepicker': '/common/cms/js/jquery/plugins/timePicker/v1.1.1/jquery-ui-timepicker-addon',
    'jquery.slider': '/common/cms/js/jquery/plugins/timePicker/v1.1.1/jquery-ui-sliderAccess',
    'jquery.miniColors': '/common/cms/js/jquery/plugins/miniColors/jquery.miniColors.min',
    'jquery.spin': '/common/cms/js/jquery/plugins/jquery-spin',
    'jquery.layout': '/common/cms/js/jquery/plugins/jquery.layout/jquery.layout-latest.min',
    'jquery.nestedSortable': '/common/cms/js/jquery/plugins/jquery.ui.nestedSortable-1.3.5',
    'jquery.fullCalendar': '/common/cms/js/jquery/plugins/fullcalendar-1.6.1/fullcalendar/fullcalendar.min',
    'jquery.signaturePad': '/common/cms/js/jquery/plugins/signature-pad/jquery.signaturepad',
    'jquery.endlessScroll': '/common/cms/js/jquery/plugins/endlessScroll/jquery.endlessScroll',
    'jquery.truncate': '/common/cms/js/jquery/plugins/truncate/jquery.truncate',
    // dii-jQuery plugins
    'jquery.dataGrid': '/common/cms/js/dii-lib/dii-dataGrid-3/jquery.dataGrid.3.0.0',
    'jquery.diiDataGrid3': '/common/cms/js/dii-lib/dii-dataGrid-3/jquery.diiDataGrid',
    'diiDataGrid3.selectFilterVals': '/common/cms/js/dii-lib/dii-dataGrid-3/selectFilterStrVals',
    'jquery.diiDataGrid': '/common/cms/js/dii-lib/dii-dataGrid/jquery.diiDataGrid',
    'jquery.diiTreeList': '/common/cms/js/dii-lib/dii-tree-list/0.0.1/jquery.diiTreeList',
    'jquery.diiSignature': '/common/cms/js/dii-lib/dii-signature/jquery.diiSignature',
    'jquery.diiProfilePhoto': '/common/cms/js/dii-lib/dii-profile-photo/jquery.diiProfilePhoto',
    'jquery.diiAddressPanel': '/common/cms/js/dii-lib/dii-address-panel/jquery.diiAddressPanel',
    'jquery.diiValidateUserEmail': '/common/cms/js/dii-lib/dii-validateUserEmail/jquery.diiValidateUserEmail',
    'jquery.diiValidateUserEmail2': '/common/cms/js/dii-lib/dii-validateUserEmail/jquery.diiValidateUserEmail2',
    'dii.validate.email.found.user.dlg': '/common/cms/js/dii-lib/dii-validateUserEmail/foundUserDlg',
    'jquery.diiRadioButtons': '/common/cms/js/dii-lib/dii-radio-buttons/jquery.diiRadioButtons-0.1.1',
    'jquery.diiUUIDPersonLookup': '/common/cms/js/dii-lib/dii-uuid-person-lookup/jquery.diiUUIDPersonLookup',
    'jquery.diiUUIDTeamLookup': '/common/cms/js/dii-lib/dii-uuid-team-lookup/jquery.diiUUIDTeamLookup',
    'jquery.diiEmailPersonLookup': '/common/cms/js/dii-lib/dii-email-person-lookup/jquery.diiEmailPersonLookup',
    // Backbone libs
    underscore: '/common/cms/js/libs/underscore/underscore-1.5.2.min',
    backbone: '/common/cms/js/libs/backbone/backbone-1.1.0.min',
    // other libs
    'mustache': '/common/cms/js/libs/mustache',
    'yepnope': '/common/cms/js/libs/yepnope/yepnope.1.5.4-min',
    'moment': '/common/cms/js/libs/moment-2.10.6.min',
    'moment.tz': '/common/cms/js/libs/moment-timezone-with-data.min',
    //'moment': '/common/cms/js/libs/moment-2.5.1.min',
    //'moment.tz': '/common/cms/js/libs/moment-timezone.min',
    //'moment.tz.data': '/common/cms/js/libs/moment-timezone-data-ams',
    'ckeditor': '/common/cms/js/libs/texteditor/ckeditor471/ckeditor',
    //'ckeditor-core':'/common/cms/js/libs/texteditor/ckeditor433/ckeditor',
    //'ckeditor-jquery':'/common/cms/js/libs/texteditor/ckeditor433/adapters/jquery',
    // dii libraries
    'iframeResizer': '/common/cms/js/libs/iFrameResizer.min',
    'iframeResizer.window': '/common/cms/js/libs/iFrameResizer.contentWindow.min',
    'dii.frameResizer': '/common/cms/js/dii-lib/diiFrameResizerOpts',
    'dii.d3.ajax': '/common/cms/js/dii-core/dii-d3-ajax',
    'dii.ajax.error': '/common/cms/js/dii-core/dii-core-ajax-error',
    'dii.template.manager': '/common/cms/js/dii-core/dii-core-backbone-template-manager',
    'dii.currency': '/common/cms/js/dii-core/dii-core-public-currency',
    'dii.public.procedures': '/common/cms/js/dii-core/dii-core-public-procedures',
    'dii.teamnet.procedures': '/common/cms/js/dii-core/dii-core-teamnet-procedures',
    'dii.icons': '/common/cms/js/dii-core/dii-core-public-icons',
    'dii.olark': '/common/cms/js/dii-core/dii-core-admin-olark',
    'dii.stylize': '/common/cms/js/dii-core/dii-core-public-stylize',
    'dii.table.sort': '/common/cms/js/dii-core/dii-core-public-table-sort',
    'dii.append': '/common/cms/js/dii-core/dii-core-public-append',
    'dii.permissions': '/common/cms/js/dii-core/dii-core-public-permissions',
    'dii.dialog': '/common/cms/js/dii-core/dii-core-admin-dialog',
    'dii.userBar': '/common/cms/js/dii-core/dii-core-public-userbar',
    'dii.ww.sitemap': '/common/cms/js/dii-webwriter/ww-page-sitemap',
    'dii.backbone.app': '/common/cms/js/dii-core/dii-core-backbone-app',
    'dii.backbone.view': '/common/cms/js/dii-core/dii-core-backbone-view',
    'dii.backbone.dialog': '/common/cms/js/dii-core/dii-core-backbone-dialog',
    'dii.backbone.save.dlg': '/common/cms/js/dii-core/dii-core-backbone-save-dialog',
    'dii.backbone.model': '/common/cms/js/dii-core/dii-core-backbone-model',
    'dii.backbone.collection': '/common/cms/js/dii-core/dii-core-backbone-collection',
    'dii.backbone.router': '/common/cms/js/dii-core/dii-core-backbone-router',
    'dii.bootstrap': '/common/cms/js/dii-core/dii-core-bootstrap',
    'dii.display.customData': '/common/cms/js/dii-core/dii-display-custom-data',
    'dii.collect.customData': '/common/cms/js/dii-core/dii-collect-custom-data',
    'dii.modal.spinner': '/common/cms/js/dii-core/dii-modal-spinner',
    'dii.inputmask.currency': '/common/cms/js/dii-lib/dii-input-mask/dii-input-mask-currency',
    'dii.payment.iframe': '/common/cms/js/dii-core/dii-payment-iframe',
    'dii.update.signature': '/common/cms/js/dii-lib/dii-signature/updateSignatureDlg',
    'dii.signature.fonts': '/common/cms/js/dii-lib/dii-signature/fonts',
    'dii.print.preview.dlg': '/common/cms/js/dii-lib/diiPrintPreviewDlg',
    'dii.countries': '/common/cms/js/dii-lib/dii-countries/countries',
    'dii.countries.view': '/common/cms/js/dii-lib/dii-countries/index',
    'dii.persistentTeamInfo': '/common/cms/js/dii-lib/dii-persistent-team-info/index',
    'dii.ndc.player.view': '/common/cms/js/dii-lib/dii-ndc/player/index',
    'dii.underscore.mixins': '/common/cms/js/dii-lib/dii-underscore-mixins/index',
    'dii.addEditPersonDlg': '/common/cms/js/dii-lib/dii-add-edit-person/dialog',
    'dii.addEditPersonPersonLookup': '/common/cms/js/dii-lib/dii-add-edit-person/personLookup',
    'dii.addEditPersonAddressLookup': '/common/cms/js/dii-lib/dii-add-edit-person/addressLookup',
    // application paths
    'chiron' : '/_chiron',
    'crux' : '/_crux',
    'cygnus' : '/_cygnus',
    'deimos' : '/_deimos',
    'dorado' : '/_dorado',
    'hydra'  : '/_hydra',
    'juno'   : '/_juno',
    'jupiter': '/_jupiter',
    'oberon' : '/_oberon',
    'saturn' : '/_saturn',
    'neptune': '/_neptune',
    'venus': '/_venus',
    'vela' : '/_vela',
    'europa' : '/_europa',
    'aquarius': '/_aquarius',
    'sinope':'/_sinope',
    // bootstraps
    'saturn_rpt_filters': '/_saturn/apps/filter_manager/views/index',
    'hydra_email_compose': '/_hydra/apps/email/views/email_compose_action_view',
    'neptune_page_builder': '/_neptune/src/publicPageBuilder'
  },
  shim: {
    'jquery': {
      exports: '$',
      deps: ['jquery-base']
    },
    'jquery-base': {
      exports: '$',
      deps: ['on-load']
    },
    'jquery-no-conflict': {
      exports: '$',
      deps: ['jquery']
    },
    'jquery-ui': {
      deps: ['jquery', 'jquery-no-conflict']
    },
    'jquery.validate.base': {
      exports: 'jQuery.fn.validate',
      deps: ['jquery']
    },
    'jquery.validate.methods': {
      exports: 'jQuery.fn.validate',
      deps: ['jquery', 'jquery.validate.base']
    },
    'jquery.inputmask.base':{
      exports: 'jQuery.fn.inputmask',
      deps: ['jquery']
    },
    'jquery.inputmask.date':{
      deps: ['jquery', 'jquery.inputmask.base']
    },
    'jquery.spectrum':{
      deps: ['jquery']
    },
    'jquery.inputmask':{
      deps: ['jquery', 'jquery.inputmask.date']
    },
    'jquery.maskMoney': {
      exports: 'jQuery.fn.maskMoney',
      deps: ['jquery']
    },
    'jquery.form': {
      exports: 'jQuery.fn.ajaxForm',
      deps: ['jquery']
    },
    'jquery.cookie': {
      exports: 'jQuery.cookie',
      deps: ['jquery']
    },
    'jquery.textfill': {
      exports: 'jQuery.fn.textfill',
      deps: ['jquery']
    },
    'jquery.printThis': {
      exports: 'jQuery.fn.printThis',
      deps: ['jquery', 'iframeResizer']
    },
    'jquery.toastmessage': {
      exports: 'jQuery.fn.toastmessage',
      deps: ['jquery']
    },
    'jquery.sliderAccess': {
      exports: 'jQuery.fn.sliderAccess',
      deps: ['jquery-ui']
    },
    'jquery.datetimepicker': {
      exports: 'jQuery.fn.datetimepicker',
      deps: ['jquery.sliderAccess']
    },
    'jquery.tokenInput': {
      exports: 'jQuery.fn.tokenInput',
      deps: ['jquery']
    },
    'jquery.iframeTransport': {
      exports: 'jQuery.ajaxTransport',
      deps: ['jquery']
    },
    'jquery.ajax.fileupload': {
      deps: ['jquery']
    },
    'jquery.fileupload': {
      exports: 'jQuery.fileupload',
      deps: ['jquery-ui', 'jquery.iframeTransport', 'jquery.ui.widget']
    },
    'jquery.fileupload-ui': {
      deps: ['jquery.fileupload', 'tmpl', 'jquery.fileupload-process']
    },
    'jquery.fileupload-jquery-ui': {
      deps: ['jquery.fileupload-ui']
    },
    'jquery.slider': {
      exports: 'jQuery.slider'
    },
    'jquery.timepicker': {
      exports: 'jQuery.datetimepicker',
      deps: ['jquery-ui', 'jquery.slider']
    },
    'jquery.miniColors': {
      exports: 'jQuery.minicolors',
      deps: ['jquery']
    },
    'jquery.postmessage': {
      deps: ['jquery']
    },
    'jquery.layout': {
      exports: 'jQuery.layout',
      deps: ['jquery-ui']
    },
    'jquery.nestedSortable': {
      exports: 'jQuery.nestedSortable',
      deps: ['jquery-ui']
    },
    'jquery.fullCalendar': {
      exports: 'jQuery.fullCalendar',
      deps: ['jquery-ui']
    },
    'jquery.signaturePad': {
      exports: 'jQuery.fn.signaturePad',
      deps: ['jquery']
    },
    'jquery.endlessScroll': {
      exports: 'jQuery.fn.endlessScroll',
      deps: ['jquery']
    },
    'jquery.truncate': {
      exports: 'jQuery.fn.truncate',
      deps: ['jquery']
    },
    // Dii jQuery plugins
    'jquery.diiAddressPanel': {
      exports: 'jQuery.fn.diiAddressPanel',
      deps: ['jquery', 'dii.countries']
    },
    'jquery.diiValidateUserEmail': {
      exports: 'jQuery.fn.diiValidateUserEmail',
      deps: ['jquery']
    },
    'jquery.diiRadioButtons': {
      exports: 'jQuery.fn.diiRadioButtons',
      deps: ['jquery']
    },
    'jquery.diiUUIDPersonLookup': {
      exports: 'jQuery.fn.diiUUIDPersonLookup',
      deps: ['jquery']
    },
    'jquery.diiUUIDTeamLookup': {
      exports: 'jQuery.fn.diiUUIDTeamLookup',
      deps: ['jquery']
    },
    'jquery.diiEmailPersonLookup': {
      exports: 'jQuery.fn.diiEmailPersonLookup',
      deps: ['jquery']
    },
    'jquery.diiTreeList': {
      exports: 'jQuery.fn.diiTreeList',
      deps: ['jquery']
    },
    flashcanvas: {
      deps: ['jquery']
    },
    // Bootstrap libs
    bootstrap: {
      exports: 'Bootstrap',
      deps: ['jquery']
    },
    // Backbone libs
    underscore: {
      exports: '_'
    },
    backbone: {
      exports: 'Backbone',
      deps: ['underscore', 'jquery']
    },
    // other libraries
    'mustache': {
      exports: 'mustache'
    },
    'moment': {
      exports: 'moment'
    },
    'moment.tz': {
      exports: 'moment',
      deps: ['moment']
    },

    FileSaver: {
      exports: 'saveAs',
      deps: ['Blob']
    },

    Blob: {
      exports: 'Blob'
    },
    /*'moment.tz.data': {
      exports: 'moment',
      deps: ['moment', 'moment.tz']
    },*/
    'iframeResizer': {
      exports: 'jQuery.fn.iFrameResize',
      deps: ['jquery']
    },
    'yepnope': {
      exports: 'yepnope'
    },
    'ckeditor': {
      exports: 'CKEDITOR'
      //deps:['jquery','ckeditor-core']
    },
    // dii libraries
    'dii.template.manager': {
      exports: 'TemplateManager',
      deps: ['jquery']
    },
    'dii.currency': {
      exports: 'diiCorePublicCurrency'
    },
    'dii.public.procedures': {
      exports: 'diiCorePublicProcedures',
      deps: ['dii.template.manager','jquery-ui', 'jquery.cookie', 'jquery.toastmessage']
    },
    'dii.icons': {
      exports: 'diiCorePublicIcons',
      deps: ['jquery']
    },
    'dii.table.sort': {
      exports: 'diiCorePublicTableSort',
      deps: ['jquery-ui']
    },
    'dii.stylize': {
      exports: 'diiCorePublicStylize',
      deps: ['jquery-ui', 'jquery.datetimepicker', 'dii.icons']
    },
    'dii.append': {
      exports: 'diiCorePublicAppend',
      deps: ['jquery', 'dii.icons']
    },
    'dii.permissions': {
      exports: 'diiPermissions',
      deps: ['jquery-no-conflict']
    },
    'dii.dialog': {
      exports: 'diiCoreAdminDialog',
      deps: ['jquery-ui', 'dii.public.procedures', 'dii.icons']
    },
    'dii.userBar': {
      exports: 'diiUserBar',
      deps: ['jquery-ui', 'neptune_page_builder']
    },
    'dii.ww.sitemap': {
      exports: 'diiSiteMap',
      deps: ['jquery.nestedSortable']
    },
    'dii.backbone.view': {
      exports: 'diiCorePublicIcons',
      deps: ['backbone']
    },
    'dii.inputmask.currency': {
      exports: 'diiCurrencyMasks'
    },
    'dii.underscore.mixins': {
      deps: ['underscore'],
      exports: 'diiUnderscoreMixins'
    }
  }
});
