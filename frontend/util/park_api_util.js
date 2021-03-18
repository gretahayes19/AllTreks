export const fetchPark = parkId => (
    $.ajax({
        url: `/api/parks/${parkId}`,
        method: "GET"
    })
)


export const fetchParkHikes = parkId => (
    $.ajax({
        url: `api/parks/${parkId}/hikes`,
        method: "GET"
    })
)