const urlHost = new URL("https://programmerzamannow.net/")

urlHost.host = "www.programmerzamannow.net"
urlHost.searchParams.append("status", "premium")

console.info(urlHost.toString());
console.info(urlHost.href);
console.info(urlHost.protocol);
console.info(urlHost.pathname);
console.info(urlHost.searchParams);