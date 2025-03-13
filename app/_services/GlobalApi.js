import { gql, request } from "graphql-request";

const MASTER_URL =
    "https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/" +
    process.env.NEXT_PUBLIC_MASTER_URL_KEY +
    "/master";

const getCategory = async () => {
    const query = gql`
    query Category {
      categories {
        bgcolor {
          hex
        }
        id
        name
        icon {
          url
        }
      }
    }
  `;

    const result = await request(MASTER_URL, query);
    return result;
};

const getAllBusinessList = async () => {
    const query = gql`
    query BusinessList {
      businessLists {
        about
        address
        category {
          name
        }
        contactPerson
        email
        images {
          url
        }
        id
        name
      }
    }
  `;

    const result = await request(MASTER_URL, query);
    return result;
};

const getBusinessByCategory = async (category) => {
    const query = gql`
        query MyQuery {
            businessLists(where: { category_some: { name: "${category}" } }) {
                about
                address
                category {
                    name
                }
                contactPerson
                email
                id
                name
                images {
                    url
                }
            }
        }
    `;

    const result = await request(MASTER_URL, query);
    return result;
};

const getBusinessById = async (id) => {
    const query =
        gql`
        query GetBusinessById {
            businessList(where: { id: "` +
        id +
        `" }) {
                about
                address
                category {
                    name
                }
                contactPerson
                email
                id
                name
                images {
                    url
                }
            }
        }
    `;
    const result = await request(MASTER_URL, query);
    return result;
};

const createNewBooking = async (
    businessId,
    date,
    time,
    userEmail,
    userName
) => {
    const mutationQuery = gql`
        mutation CreateBooking {
            createBooking(
                data: {
                    bookingStatus: booked,
                    businessList: { connect: { id: "${businessId}" } },
                    date: "${date}",
                    time: "${time}",
                    userEmail: "${userEmail}",
                    userName: "${userName}"
                }
            ) {
                id
            }
            publishManyBookingsConnection(to: PUBLISHED) {
                aggregate {
                    count
                }
            }
        }
    `;

    const result = await request(MASTER_URL, mutationQuery);
    return result;
};

const BusinessBookedSlot = async (businessId, date) => {
    const query = gql`
    query BusinessBookedSlot {
        bookings(where: { 
            businessList: { id: "${businessId}" }, 
            date: "${date}" 
        }) {
            date
            time
        }
    }
`;
    const result = await request(MASTER_URL, query);
    return result;
};

const GetUserBookingHistory = async (userEmail) => {
    const query = gql`
    query GetUserBookingHistory {
        bookings(where: { userEmail: "${userEmail}" }
        orderBy: publishedAt_DESC ) {
        businessList {
        name
        images {
            url
        }
        contactPerson
        address
        }
        date
        time
        }
    }
    `;
    const result = await request(MASTER_URL, query);
    return result;
};




const createNewUtente = async (
    userName,
    userEmail,
) => {
    const mutationQuery = gql`
    mutation CreateUtente {
        createUtente(data: {name: "${userName}", email: "${userEmail}"}) {
            id
        }
        publishManyUtentiConnection {
            aggregate {
                count
            }
        }
    }
    `;

    const result = await request(MASTER_URL, mutationQuery);
    return result;
};

const createNewBusiness = async (businessName,businessEmail,contactPerson,address,categoryId,phoneNumber) => {
    const mutationQuery = gql`
    mutation CreateBusiness {
        createBusinessList(
            data: {name: "${businessName}", email: "${businessEmail}", contactPerson: "${contactPerson}", address: "${address}", category: {connect: {id: "${categoryId}"}}, phoneNumber: ${phoneNumber}}
        ) {
            id
        }
        publishManyBusinessListsConnection {
        aggregate {
            count
        }
        }
    }
    `;
    const result = await request(MASTER_URL, mutationQuery);
    return result;
};


const getCategoryId=async(categoryName)=>{
    const query=gql`
        query getCategoryId {
            category(where: {name: "${categoryName}"}) 
            {
                id
            }
}
`;
    const result = await request(MASTER_URL, query);
    return result;
};



const getReviewsByBusinessId=async(businessId)=>{
    const query=gql`
        query getReviewsByBusinessId {
            businessList(where: {id: "${businessId}"}) {
            id
            }
            reviews {
            id
            title
            stars
            description {
                text
            }
            }
        }
`;
    const result = await request(MASTER_URL, query);
    return result;
};




export default {
    getCategory,
    getAllBusinessList,
    getBusinessByCategory,
    getBusinessById,
    createNewBooking,
    BusinessBookedSlot,
    GetUserBookingHistory,
    createNewUtente,
    createNewBusiness,
    getCategoryId,
    getReviewsByBusinessId,
};
