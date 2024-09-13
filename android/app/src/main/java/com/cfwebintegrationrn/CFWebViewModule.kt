package com.cfwebintegrationrn

import android.app.Activity
import android.content.Intent
import com.facebook.react.bridge.ActivityEventListener
import com.facebook.react.bridge.LifecycleEventListener
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.annotations.ReactModule
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.annotations.ReactProp


@ReactModule(name = CFWebViewModule.REACT_CLASS)
class CFWebViewModule(private val context: ReactApplicationContext) :
    SimpleViewManager<CfWebView>(),
    ActivityEventListener, LifecycleEventListener {

    init {
        context.addActivityEventListener(this)
        context.addLifecycleEventListener(this)
    }

    companion object {
        const val REACT_CLASS = "CFWebViewModule"
    }

    private lateinit var cfWebView: CfWebView


    override fun getName(): String {
        return REACT_CLASS
    }

    override fun createViewInstance(context: ThemedReactContext): CfWebView {
        cfWebView = CfWebView(context)
        return cfWebView
    }

    @ReactProp(name = "paymentSessionId")
    fun setPaymentSessionId(view: CfWebView, paymentSessionId: String) {
        view.loadCFPayForm(paymentSessionId)
    }

    override fun onActivityResult(activty: Activity?, requestCode: Int, p2: Int, p3: Intent?) {
        if (requestCode == 1000 && p2 == Activity.RESULT_OK && ::cfWebView.isInitialized) {
            cfWebView.evaluateJavascript("window.showVerifyUI()") {}
        }
    }

    override fun onNewIntent(p0: Intent?) {}

    override fun onHostDestroy() {
        context.removeActivityEventListener(this)
        context.removeLifecycleEventListener(this)
    }

    override fun onHostPause() {}

    override fun onHostResume() {}
}