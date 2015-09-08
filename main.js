var app = b4w.require("app");
var data = b4w.require("data");

app.init({
canvas_container_id: "container_id",
physics_enabled: false,
autoresize: true,
callback: load_cb
});

function load_cb() {
    data.load("logo.json", loaded_cb);
}

function loaded_cb() {
//что-то там
//например можно включить управление камерой в сцене
    app.enable_controls();
    app.enable_camera_controls();
}