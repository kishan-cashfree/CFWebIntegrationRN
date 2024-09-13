package com.cfwebintegrationrn


import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import java.util.Collections


class CfWebViewPackage : ReactPackage {

    override fun createViewManagers(context: ReactApplicationContext): MutableList<CFWebViewModule> {
        return Collections.singletonList(CFWebViewModule(context))
    }

    override fun createNativeModules(context: ReactApplicationContext): MutableList<NativeModule> {
        return  Collections.emptyList()
    }
}