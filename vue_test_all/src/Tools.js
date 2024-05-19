const Tools = {
    exportJson(name, data) {
        var blob = new Blob([data]); //创建Blob对象
        var link = document.createElement("a");
        link.href = URL.createObjectURL(blob); //创建一个url传给a的href
        link.download = name;
        link.click();

    }
}
export default Tools;