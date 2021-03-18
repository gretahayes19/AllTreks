export const fetchPark = parkId => (
    $.ajax({
        url: `/api/parks/${parkId}`,
        method: "GET"
    })
)