<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="UTF-8" isELIgnored="false" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ taglib prefix="snk" uri="/WEB-INF/tld/sankhyaUtil.tld" %>
<html lang="en"> <head>
<snk:load></snk:load>
<script type="text/javascript" id="sankhyaVariable">var Params = {};
        localStorage.setItem("base_folder", "${BASE_FOLDER}");window.baseFolder="${BASE_FOLDER}";</script>
<script type="text/javascript">window.resolveAsset = function (url) { url = String(url); if (url[0] == ".") { url = url.slice(1, url.length); } if (url[0] == "/") { url = url.slice(1, url.length); } const base_folder = window.localStorage.getItem("base_folder"); if (base_folder) { const finalUrl = "./mge/"+base_folder + url; return finalUrl; } else { return url; } };</script>
<script></script>
<script type="module">import{injectIntoGlobalHook}from"http://192.168.0.115:5173/@react-refresh";injectIntoGlobalHook(window);window.$RefreshReg$=()=>{};window.$RefreshSig$=()=>(type)=>type</script> <script type="module" src="/@vite/client"></script> <meta charset="UTF-8"> <link rel="icon" type="image/svg+xml" href=${BASE_FOLDER}/vite.svg> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Vite + React + TS</title> </head> <body> <div id="root"></div> <script type="module" src="http://192.168.0.115:5173/src/main.tsx"></script> </body> </html>