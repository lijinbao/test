function FindProxyForURL(url, host) {
	if(shExpMatch(url,"*dnebank.com*")||shExpMatch(url,"*ip138*")){
		return "PROXY http://qxw1099050062.my3w.com/";
	}
               return"DIRECT";
}