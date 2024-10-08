package com.cfwebintegrationrn


import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ViewManager


class CfWebViewPackage : ReactPackage {

    override fun createViewManagers(context: ReactApplicationContext): MutableList<ViewManager<*, *>> {
        val list = mutableListOf<ViewManager<*, *>>().apply {
            add(CFWebViewModule(context))
            add(CFRNCWebViewManager(context))
        }
        return list
    }

    override fun createNativeModules(context: ReactApplicationContext): MutableList<NativeModule> {
        val list = mutableListOf<NativeModule>().apply {
            add(CFWebViewModule(context))
            add(CFRNCWebViewManager(context))
        }
        return list
    }
}