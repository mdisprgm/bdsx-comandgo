import { MinecraftPacketIds } from "bdsx/bds/packetids";
import { events } from "bdsx/event";

events.packetSend(MinecraftPacketIds.Text).on((pkt) => {
    const name = pkt.params.get(0);
    if (pkt.message === "§e%multiplayer.player.joined") {
        pkt.message = `[ §a+§r ] §7${name}`;
        return;
    }
    if (pkt.message === "§e%multiplayer.player.left") {
        pkt.message = `[ §c-§r ] §7${name}`;
        return;
    }
});
/*
events.packetSend(MinecraftPacketIds.Text).on((pkt, ni) => {
    if (
        pkt.message === "§e%multiplayer.player.joined" ||
        pkt.message === "§e%multiplayer.player.left"
    ) {
        const name = pkt.params.get(0);
        let symbol: string;
        if (pkt.message.includes("joined")) symbol = "§a+§r";
        else symbol = "§c-§r";
        pkt.message = "[ " + symbol + " ] §7" + name;
        return CANCEL;
    }
});*/
