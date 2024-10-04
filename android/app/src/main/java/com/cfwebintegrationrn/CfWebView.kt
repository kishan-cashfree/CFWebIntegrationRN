package com.cfwebintegrationrn

import android.content.Context
import android.graphics.Bitmap
import android.util.Log
import android.util.Xml
import android.webkit.ConsoleMessage
import android.webkit.WebChromeClient
import android.webkit.WebResourceRequest
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient
import java.io.BufferedReader
import java.io.IOException
import java.io.InputStreamReader

class CfWebView(private val context: Context) : WebView(context) {

    init {
        initWebView()
    }

    private fun initWebView() {
        settings.run {
            javaScriptEnabled = true
            domStorageEnabled = true
            mixedContentMode = WebSettings.MIXED_CONTENT_NEVER_ALLOW
            allowContentAccess = false
            allowFileAccess = false
        }
        webChromeClient = object : WebChromeClient() {
            override fun onConsoleMessage(consoleMessage: ConsoleMessage?): Boolean {
                Log.d(
                    "WebView Log : ",
                    consoleMessage?.message() + " at " + consoleMessage?.sourceId() + ":" + consoleMessage?.lineNumber()
                )
                return super.onConsoleMessage(consoleMessage)
            }
        }
        webViewClient = object : WebViewClient() {

            override fun shouldOverrideUrlLoading(
                view: WebView?,
                request: WebResourceRequest?
            ): Boolean {
                return false
            }

            override fun onPageStarted(view: WebView?, url: String?, favicon: Bitmap?) {
                Log.d("WebView onPageStarted Log : ", "$url")
                super.onPageStarted(view, url, favicon)
            }

            override fun onPageFinished(view: WebView?, url: String?) {
                Log.d("WebView onPageFinished Log : ", "$url")
                super.onPageFinished(view, url)
            }
        }
        addJavascriptInterface(CFJsBridge(context), "Android")
    }

    fun loadCFPayForm(paymentSessionId: String, env: String) {
        loadDataWithBaseURL(
            "",
            getCFPayForm(paymentSessionId, env),
            "text/html",
            Xml.Encoding.UTF_8.name,
            ""
        )
    }

    private fun getCFPayForm(paymentSessionId: String, env: String): String {
        val iStream = resources.openRawResource(R.raw.cashfree_pay_form)
        val formTemplate = StringBuilder()

        try {
            val reader = BufferedReader(InputStreamReader(iStream))
            var line: String?

            while ((reader.readLine().also { line = it }) != null) {
                formTemplate.append(line)
            }
            reader.close()
        } catch (ignored: IOException) {
            Log.d("HTML Exception", "${ignored.message}")
        }

        val body = String.format(formTemplate.toString(), env, paymentSessionId)
        return body
    }
}