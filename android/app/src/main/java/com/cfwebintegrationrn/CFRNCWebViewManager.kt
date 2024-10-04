package com.cfwebintegrationrn

import com.facebook.react.module.annotations.ReactModule
import com.facebook.react.uimanager.ThemedReactContext
import com.reactnativecommunity.webview.RNCWebView
import com.reactnativecommunity.webview.RNCWebViewClient
import com.reactnativecommunity.webview.RNCWebViewManager
import com.reactnativecommunity.webview.RNCWebViewWrapper

@ReactModule(name = CFRNCWebViewManager.REACT_CLASS)
class CFRNCWebViewManager : RNCWebViewManager() {
    companion object {
        const val REACT_CLASS: String = "CFRNWebViewManager"
    }

    private class CFWebViewClient : RNCWebViewClient()
    private class CFCustomWebView(reactContext: ThemedReactContext) : RNCWebView(reactContext) {
        init {
            addJavascriptInterface(CFJsBridge(reactContext), "Android")
        }
    }

    override fun createViewInstance(context: ThemedReactContext): RNCWebViewWrapper {
        return super.createViewInstance(context, CFCustomWebView(context))
    }

    override fun getName(): String = REACT_CLASS

    override fun addEventEmitters(
        reactContext: ThemedReactContext,
        viewWrapper: RNCWebViewWrapper
    ) {
        viewWrapper.webView.webViewClient = CFWebViewClient()
    }
}