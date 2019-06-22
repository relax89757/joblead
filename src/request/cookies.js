export function setCookie(c_name, value, expires) {
    var exdate = new Date();
    exdate.setTime(exdate.getTime() + expires);
    document.cookie = c_name + "=" + escape(value)
            + (expires == null ? "" : "; expires=" + exdate.toGMTString());
}