/**
 * Created by alexanderleonovich on 18.07.16.
 */
Ext.onReady(
    function () {
        var ceLinks = Ext.select("ul[id=navbar] li");
        ceLinks.on("mouseover", function (e, t) {
            Ext.get(this).addClass("hovered");
        });
        ceLinks.on("mouseout", function(e, t) {
           Ext.get(this).removeClass("hovered");
        });
    }
);
