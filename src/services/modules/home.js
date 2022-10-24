import luRequest from "@/services"
const getHomeGoodPriceData = () => {
    return luRequest.get({
        url: "/home/goodprice"
    })
}
export {
    getHomeGoodPriceData
}