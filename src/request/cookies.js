export function setCookie(c_name, value, expires) {
    var exdate = new Date();
    exdate.setTime(exdate.getTime() + expires);
    document.cookie = c_name + "=" + escape(value)
        + (expires == null ? "" : "; expires=" + exdate.toGMTString());
}

export function getCookie(c_name) {
    if (document.cookie.length > 0) {
        var c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            var c_end = document.cookie.indexOf(";", c_start);

            if (c_end == -1) {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}