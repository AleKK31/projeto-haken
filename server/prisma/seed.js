import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

const cars = [
    {
        veiculo: "gol quadrado",
        marca: "wolksvagen",
        ano: 1990,
        desc: "quadrado igual o mine",
        vendido: false,
    },
    {
        veiculo: "maverick",
        marca: "sla",
        ano: 1998,
        desc: "tunado",
        vendido: false,
    }, 
    {
        veiculo: "camaro",
        marca: "transformers",
        ano: 2016,
        desc: "bumblebbe",
        vendido: false,
    },


];

async function main() {
    for (let car of cars) {
        await prisma.car.create({
            data: car
        });
    }
}

main().catch(e => {
    console.log(e);
    process.exit(1)
}).finally(() => {
    prisma.$disconnect();
})