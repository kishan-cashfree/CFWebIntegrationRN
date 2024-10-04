package com.cfwebintegrationrn

import android.app.Activity
import android.content.Intent
import android.webkit.WebView
import com.facebook.react.bridge.ActivityEventListener
import com.facebook.react.bridge.LifecycleEventListener
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.annotations.ReactModule
import com.facebook.react.uimanager.ThemedReactContext
import com.reactnativecommunity.webview.RNCWebView
import com.reactnativecommunity.webview.RNCWebViewClient
import com.reactnativecommunity.webview.RNCWebViewManager
import com.reactnativecommunity.webview.RNCWebViewWrapper

@ReactModule(name = CFRNCWebViewManager.REACT_CLASS)
class CFRNCWebViewManager(private val context: ReactApplicationContext) : RNCWebViewManager(),
    ActivityEventListener, LifecycleEventListener {
    companion object {
        const val REACT_CLASS: String = "CFRNWebViewManager"
    }

    private var webView: WebView? = null

    init {
        context.addActivityEventListener(this)
        context.addLifecycleEventListener(this)
    }

    private class CFWebViewClient : RNCWebViewClient()
    private class CFCustomWebView(reactContext: ThemedReactContext) : RNCWebView(reactContext) {
        init {
            addJavascriptInterface(CFJsBridge(reactContext), "Android")
        }
    }

    override fun createViewInstance(context: ThemedReactContext): RNCWebViewWrapper {
        webView  = CFCustomWebView(context)
        return super.createViewInstance(context, webView as CFCustomWebView)
    }

    override fun getName(): String = REACT_CLASS

    override fun addEventEmitters(
        reactContext: ThemedReactContext,
        viewWrapper: RNCWebViewWrapper
    ) {
        viewWrapper.webView.webViewClient = CFWebViewClient()
    }

    override fun onHostDestroy() {
        context.removeActivityEventListener(this)
        context.removeLifecycleEventListener(this)
    }

    override fun onHostPause() {}

    override fun onHostResume() {}
    override fun onActivityResult(p0: Activity?, p1: Int, p2: Int, p3: Intent?) {
        if (p1 == 1000 && p2 == Activity.RESULT_OK && webView !=null) {
            webView?.evaluateJavascript("window.showVerifyUI()") {}
        }
    }

    override fun onNewIntent(p0: Intent?) {
    }
}