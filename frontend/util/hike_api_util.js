export const fetchHike = hikeId => (
    $.ajax({
        url: `/api/hikes/${hikeId}`,
        method: "GET"
    })
)
