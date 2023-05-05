export async function chartAvis(ctx, data, axe = "x") {
    new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["5", "4", "3", "2", "1"],
            datasets: [{
                label: "Étoiles attribuées",
                data: data,
                backgroundColor: [
                    "#ff2a2a33",
                    "#00000033",
                    "#d4af3733",
                    "#c0c0c033",
                    " #b8733333"
                ],
                borderColor: [
                    "#ff2a2a",
                    "#000",
                    "#d4af37",
                    "#c0c0c0",
                    " #b87333",
                ],
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: axe,
        }
    });
}

export function chartPieces(ctx, data, axe = "x") {
    new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["Disponible", "Non disponible"],
            datasets: [{
                label: "Pieces disponible",
                data: data,
                backgroundColor: [
                    "#ff2a2a33",
                    "#00000033"
                ],
                borderColor: [
                    "#ff2a2a",
                    "#000"
                ],
                borderWidth: 1
            }]
        }
    });
}