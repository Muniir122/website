if (self.CavalryLogger) {
    CavalryLogger.start_js_script(document.currentScript);
} /*FB_PKG_DELIM*/

__d("JavascriptWebErrorFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1828905");
    c = b("FalcoLoggerInternal").create("javascript_web_error", a);
    e.exports = c
}), null);
__d("ErrorTransport", ["JavascriptWebErrorFalcoEvent"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        c("JavascriptWebErrorFalcoEvent").log(function() {
            return a
        })
    }
    g.log = a
}), 98);
__d("ErrorSetup", ["fb-error"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("fb-error").ErrorSetup
}), 98);
__d("ErrorLogging", ["ClientConsistency", "Env", "ErrorGuard", "ErrorSetup", "ErrorTransport", "JSErrorLoggingConfig", "ScriptPath", "SiteData", "WebSession", "setTimeout"], (function(a, b, c, d, e, f, g) {
    "use strict";
    c("ErrorGuard").skipGuardGlobal(c("Env").nocatch), d("JSErrorLoggingConfig").sampleWeight != null && c("setTimeout")(function() {
        c("ErrorSetup").setup({
            additional_client_revisions: c("ClientConsistency").getAdditionalRevisions(),
            appId: d("JSErrorLoggingConfig").appId,
            client_revision: c("SiteData").client_revision,
            extra: d("JSErrorLoggingConfig").extra,
            loggingFramework: c("SiteData").haste_site === "mobile" ? "mobile" : "blue",
            server_revision: c("SiteData").server_revision,
            spin: c("SiteData").spin,
            projectBlocklist: d("JSErrorLoggingConfig").projectBlocklist,
            push_phase: c("SiteData").push_phase,
            report_source: d("JSErrorLoggingConfig").report_source,
            report_source_ref: d("JSErrorLoggingConfig").report_source_ref,
            sample_weight: d("JSErrorLoggingConfig").sampleWeight,
            script_path: c("ScriptPath").getScriptPath(),
            web_session_id: d("WebSession").getId()
        }, d("ErrorTransport").log)
    }, 0), c("ErrorSetup").preSetup()
}), 34);
__d("XChatPluginNotificationMessagesManageController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/plugins/customer_chat/notification_messages_manage/", {
        token_ent_id: {
            type: "String",
            required: !0
        },
        user_action: {
            type: "Int",
            required: !0
        }
    })
}), null);