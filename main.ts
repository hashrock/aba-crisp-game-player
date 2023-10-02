import { SizeHint, Webview } from "https://deno.land/x/webview@0.7.6/mod.ts";

const os = Deno.build.os;
let height = 600;
if (os === "darwin") {
  // osx seems to have a 28px title bar
  height = 628;
}

const webview = new Webview(true, {
  width: 600,
  height,
  hint: SizeHint.NONE
});

webview.title = "ABAGames - crisp-games [BACKSPACE to MENU]";
webview.navigate("http://www.asahi-net.or.jp/~cs8k-cyu/browser.html");
webview.run();