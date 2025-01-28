<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="UTF-8" isELIgnored="false" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ taglib prefix="snk" uri="/WEB-INF/tld/sankhyaUtil.tld" %>
<%@ page import="br.com.sankhya.modelcore.util.EntityFacadeFactory" %><!doctype html>
<html lang="en">
<head>
<snk:load></snk:load>
<script type="text/javascript" id="sankhyaVariable">
    var Params = {};
    var base_path = "${BASE_FOLDER}/".replace("\\", "");
    localStorage.setItem("base_folder", base_path);
    window.baseFolder = base_path;
    window.resolveAsset = function (url) {
        url = String(url);
        if (url[0] == ".") {
            url = url.slice(1, url.length);
        }
        if (url[0] == "/") {
            url = url.slice(1, url.length);
        }
        //   const origin = window.location.origin;
        const path = window.location.pathname.replace(/\/[^/]*\.(.*)$/, "");

        const base_folder = window.localStorage.getItem("base_folder");
        const urlFinal = (path + "/" + base_folder + url).replace("//", "/");
        // remove first "/"
        if (urlFinal[0] == "/") {
            return urlFinal.slice(1, urlFinal.length);
        }
        return urlFinal;
    };
    window.dbDialect = "<%=EntityFacadeFactory.getDWFFacade().getJdbcWrapper().getDataSource().getConnection().getMetaData().getDatabaseProductName()%>"
</script>
<script></script>
<script type="module">import{injectIntoGlobalHook}from"http://192.168.0.115:5173/@react-refresh";injectIntoGlobalHook(window);window.$RefreshReg$=()=>{};window.$RefreshSig$=()=>(type)=>type</script>
<script type="module" src="http://192.168.0.115:5173/@vite/client"></script>
<meta charset="UTF-8"/>
<link rel="icon" type="image/svg+xml" href="http://192.168.0.115:5173/vite.svg"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Vite + React + TS</title>
<script type="text/javascript">var __size__nodes = 0;var isDev = true;window.__HOST_IP__ = "http://192.168.0.115:5173";function getAttr() {
  var srcNodeList = document.querySelectorAll("[src],[href]");
  if (__size__nodes < srcNodeList.length) {
    __size__nodes = srcNodeList.length;
    for (var i = 0; i < srcNodeList.length; ++i) {
      var item = srcNodeList[i];
      var srcValue = item.src;
      var hrefValue = item.href;
      if (srcValue !== null) {
        if (isDev) {
          if (
            item.src != undefined &&
            String(item.src).startsWith(window.location.origin)
          ) {
            srcValue =
              window.__HOST_IP__ + item.src.replace(window.location.origin, "");
            item.src = srcValue;
            console.log(srcValue);
          }
        }
      }
      if (hrefValue !== null) {
        if (isDev) {
          if (
            item.href != undefined &&
            String(item.href).startsWith(window.location.origin)
          ) {
            // Change to match ip __HOST_IP__
            hrefValue =
              window.__HOST_IP__ +
              item.href.replace(window.location.origin, "");
            item.href = hrefValue;
            console.log(hrefValue);
          }
        }
      }
    }
  }
}; setInterval(getAttr, 50);</script></head>
<body>
<div id="root"></div>
<script type="module" src="http://192.168.0.115:5173/src/main.tsx"></script>
</body>
</html>