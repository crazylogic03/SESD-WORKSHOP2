import axios from 'axios';

class IpCommand {
    program: any;

    constructor(program: any) {
        this.program = program;
    }

    register() {
        this.program
            .command("ip")
            .description("Get your public IP address")
            .action(async () => this.getIp());
    }

    async getIp() {
        try {
            const res = await axios.get("https://api.ipify.org?format=json");
            console.log(`🌐 Public IP: ${res.data.ip}`);
        } catch {
            console.log("Could not fetch IP address.");
        }
    }
}
export = IpCommand;
