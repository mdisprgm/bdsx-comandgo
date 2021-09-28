import { events } from "bdsx/event";

events.serverOpen.on(() => {
    import("./src/main");
})