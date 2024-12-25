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
        bookings(where: { userEmail: "${userEmail}" }) {
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

export default {
    getCategory,
    getAllBusinessList,
    getBusinessByCategory,
    getBusinessById,
    createNewBooking,
    BusinessBookedSlot,
    GetUserBookingHistory
};
