import image from "../constants/image";
import icon from "../constants/icon";

// import { NotificaitonType, PropertyType, ListingType } from "../types/index.d.ts";

// import { Listing } from '../types/index.d.ts';

/** @type {import('../types/index.d.ts').Listing[]} */
const listingData = [
  {
      "listing_id": 1,
      "listing_createdAt": "2024-10-14T12:23:24.000Z",
      "listing_updatedAt": null,
      "listing_price": 6995481,
      "listing_deletedAt": null,
      "listing_description": "Vaco deprimo tergum usque pecco tremo cervus vulgivagus.",
      "listing_features": "[\"admoveo\",\"absum\"]",
      "listing_pictures": "[\"https://loremflickr.com/640/480?lock=1616616271904768\",\"https://picsum.photos/seed/Wswn4Xk/640/480\"]",
      "listing_openHouseSchedule": "2025-04-03T23:24:42.000Z",
      "listing_thumbnail": "https://picsum.photos/seed/E6V5xjv/640/480",
      "listing_bedrooms": 3,
      "listing_bathrooms": 2,
      "listing_houseSize": 154,
      "listing_propertyType": "townhouse",
      "listing_offMarket": 1,
      "listing_verified": 0,
      "listing_listedFor": "lease",
      "listing_placeId": "1",
      "listing_developerId": 5
  },
  {
      "listing_id": 2,
      "listing_createdAt": "2024-10-14T12:23:24.000Z",
      "listing_updatedAt": null,
      "listing_price": 2851470,
      "listing_deletedAt": null,
      "listing_description": "Chirographum utroque aetas defluo vestigium.",
      "listing_features": "[\"cupressus\"]",
      "listing_pictures": "[\"https://loremflickr.com/640/480?lock=8356981697937408\",\"https://loremflickr.com/640/480?lock=5203570701893632\",\"https://loremflickr.com/640/480?lock=6985042249121792\",\"https://loremflickr.com/640/480?lock=4051849411821568\"]",
      "listing_openHouseSchedule": "2025-10-10T13:43:53.000Z",
      "listing_thumbnail": "https://loremflickr.com/640/480?lock=8583919955869696",
      "listing_bedrooms": 3,
      "listing_bathrooms": 1,
      "listing_houseSize": 297,
      "listing_propertyType": "condo",
      "listing_offMarket": 0,
      "listing_verified": 1,
      "listing_listedFor": "buy",
      "listing_placeId": "2",
      "listing_developerId": 2
  },
  {
      "listing_id": 3,
      "listing_createdAt": "2024-10-14T12:23:24.000Z",
      "listing_updatedAt": null,
      "listing_price": 7329588,
      "listing_deletedAt": null,
      "listing_description": "Aestus sumo amoveo voluptates.",
      "listing_features": "[\"facere\",\"vix\",\"ciminatio\"]",
      "listing_pictures": "[\"https://picsum.photos/seed/aTSHJG/640/480\",\"https://loremflickr.com/640/480?lock=6657828020289536\",\"https://picsum.photos/seed/PWRbjbLxgk/640/480\",\"https://loremflickr.com/640/480?lock=2362418925666304\"]",
      "listing_openHouseSchedule": "2025-03-29T08:21:25.000Z",
      "listing_thumbnail": "https://picsum.photos/seed/VJukJaUceA/640/480",
      "listing_bedrooms": 1,
      "listing_bathrooms": 2,
      "listing_houseSize": 926,
      "listing_propertyType": "townhouse",
      "listing_offMarket": 0,
      "listing_verified": 0,
      "listing_listedFor": "lease",
      "listing_placeId": "3",
      "listing_developerId": 8
  },
  {
      "listing_id": 4,
      "listing_createdAt": "2024-10-14T12:23:24.000Z",
      "listing_updatedAt": null,
      "listing_price": 2740033,
      "listing_deletedAt": null,
      "listing_description": "Constans abscido textilis ullam colligo spiritus acsi solutio aggredior deficio.",
      "listing_features": "[\"ara\",\"aiunt\",\"sperno\",\"eaque\",\"viridis\"]",
      "listing_pictures": "[\"https://picsum.photos/seed/xXDNvsK/640/480\",\"https://loremflickr.com/640/480?lock=2535312974675968\",\"https://loremflickr.com/640/480?lock=1447100571189248\",\"https://loremflickr.com/640/480?lock=8417955681402880\",\"https://loremflickr.com/640/480?lock=700",
      "listing_openHouseSchedule": "2024-11-10T09:03:22.000Z",
      "listing_thumbnail": "https://loremflickr.com/640/480?lock=3213278805229568",
      "listing_bedrooms": 1,
      "listing_bathrooms": 5,
      "listing_houseSize": 289,
      "listing_propertyType": "townhouse",
      "listing_offMarket": 1,
      "listing_verified": 1,
      "listing_listedFor": "lease",
      "listing_placeId": "4",
      "listing_developerId": 6
  },
  {
      "listing_id": 5,
      "listing_createdAt": "2024-10-14T12:23:24.000Z",
      "listing_updatedAt": null,
      "listing_price": 1915805,
      "listing_deletedAt": null,
      "listing_description": "Blandior deduco strues voluptate tres tubineus culpo cum.",
      "listing_features": "[\"arcus\"]",
      "listing_pictures": "[\"https://loremflickr.com/640/480?lock=1633909483765760\",\"https://loremflickr.com/640/480?lock=6426191756001280\",\"https://picsum.photos/seed/ROrmH/640/480\",\"https://picsum.photos/seed/PIZNz1/640/480\",\"https://picsum.photos/seed/aUPBlq3B/640/480\"]",
      "listing_openHouseSchedule": "2025-02-16T15:53:23.000Z",
      "listing_thumbnail": "https://loremflickr.com/640/480?lock=7028099600351232",
      "listing_bedrooms": 5,
      "listing_bathrooms": 4,
      "listing_houseSize": 905,
      "listing_propertyType": "apartment",
      "listing_offMarket": 0,
      "listing_verified": 1,
      "listing_listedFor": "buy",
      "listing_placeId": "5",
      "listing_developerId": 8
  },
  {
      "listing_id": 6,
      "listing_createdAt": "2024-10-14T12:23:24.000Z",
      "listing_updatedAt": null,
      "listing_price": 7569074,
      "listing_deletedAt": null,
      "listing_description": "Contigo amoveo virgo cinis tondeo harum acies tandem vociferor asperiores.",
      "listing_features": "[\"solium\",\"usque\",\"versus\",\"tenus\"]",
      "listing_pictures": "[\"https://picsum.photos/seed/QlNN0f/640/480\",\"https://loremflickr.com/640/480?lock=7926592869236736\"]",
      "listing_openHouseSchedule": "2025-04-13T09:34:20.000Z",
      "listing_thumbnail": "https://picsum.photos/seed/twYZV/640/480",
      "listing_bedrooms": 2,
      "listing_bathrooms": 4,
      "listing_houseSize": 866,
      "listing_propertyType": "condo",
      "listing_offMarket": 0,
      "listing_verified": 0,
      "listing_listedFor": "buy",
      "listing_placeId": "6",
      "listing_developerId": 8
  },
  {
      "listing_id": 7,
      "listing_createdAt": "2024-10-14T12:23:24.000Z",
      "listing_updatedAt": null,
      "listing_price": 6337146,
      "listing_deletedAt": null,
      "listing_description": "Decumbo vinum adipisci cohors vilitas calamitas voluptatibus comes voluptas temeritas.",
      "listing_features": "[\"cruciamentum\",\"quia\"]",
      "listing_pictures": "[\"https://picsum.photos/seed/s12iGRMgMJ/640/480\"]",
      "listing_openHouseSchedule": "2025-03-14T07:39:58.000Z",
      "listing_thumbnail": "https://picsum.photos/seed/1eMdC/640/480",
      "listing_bedrooms": 1,
      "listing_bathrooms": 2,
      "listing_houseSize": 590,
      "listing_propertyType": "apartment",
      "listing_offMarket": 0,
      "listing_verified": 1,
      "listing_listedFor": "lease",
      "listing_placeId": "7",
      "listing_developerId": 3
  },
  {
      "listing_id": 8,
      "listing_createdAt": "2024-10-14T12:23:24.000Z",
      "listing_updatedAt": null,
      "listing_price": 3415990,
      "listing_deletedAt": null,
      "listing_description": "Vero conspergo pectus.",
      "listing_features": "[\"basium\",\"viscus\",\"cubo\"]",
      "listing_pictures": "[\"https://picsum.photos/seed/8KccGbJJ/640/480\"]",
      "listing_openHouseSchedule": "2025-09-20T06:03:22.000Z",
      "listing_thumbnail": "https://picsum.photos/seed/8NHBQG/640/480",
      "listing_bedrooms": 3,
      "listing_bathrooms": 3,
      "listing_houseSize": 895,
      "listing_propertyType": "condo",
      "listing_offMarket": 1,
      "listing_verified": 0,
      "listing_listedFor": "buy",
      "listing_placeId": "8",
      "listing_developerId": 4
  },
  {
      "listing_id": 9,
      "listing_createdAt": "2024-10-14T12:23:24.000Z",
      "listing_updatedAt": null,
      "listing_price": 2388663,
      "listing_deletedAt": null,
      "listing_description": "Sol accommodo velut spero voluptatum argentum.",
      "listing_features": "[\"fugit\",\"adimpleo\",\"aut\",\"crebro\",\"utrum\"]",
      "listing_pictures": "[\"https://picsum.photos/seed/3hUvLaF0R/640/480\",\"https://picsum.photos/seed/giv245/640/480\"]",
      "listing_openHouseSchedule": "2025-01-03T07:18:45.000Z",
      "listing_thumbnail": "https://loremflickr.com/640/480?lock=603777878982656",
      "listing_bedrooms": 5,
      "listing_bathrooms": 1,
      "listing_houseSize": 300,
      "listing_propertyType": "apartment",
      "listing_offMarket": 0,
      "listing_verified": 1,
      "listing_listedFor": "buy",
      "listing_placeId": "9",
      "listing_developerId": 7
  },
  {
      "listing_id": 10,
      "listing_createdAt": "2024-10-14T12:23:24.000Z",
      "listing_updatedAt": null,
      "listing_price": 1487115,
      "listing_deletedAt": null,
      "listing_description": "Caritas valde tenetur benevolentia stultus timor.",
      "listing_features": "[\"conspergo\",\"carus\",\"substantia\",\"bonus\"]",
      "listing_pictures": "[\"https://picsum.photos/seed/SCwbt/640/480\",\"https://picsum.photos/seed/QWFF9gLSXT/640/480\",\"https://picsum.photos/seed/fgC3Vbgpx/640/480\",\"https://picsum.photos/seed/S4x5KX/640/480\",\"https://loremflickr.com/640/480?lock=8722776712019968\"]",
      "listing_openHouseSchedule": "2025-05-25T09:40:58.000Z",
      "listing_thumbnail": "https://picsum.photos/seed/bBbLe4E42b/640/480",
      "listing_bedrooms": 3,
      "listing_bathrooms": 4,
      "listing_houseSize": 134,
      "listing_propertyType": "realEstate",
      "listing_offMarket": 1,
      "listing_verified": 0,
      "listing_listedFor": "buy",
      "listing_placeId": "10",
      "listing_developerId": 5
  }
]

/** @type {import('../types/index.d.ts').Board[]} */
const boardData = [
  {
      "board_id": 1,
      "board_createdAt": "2024-10-14T12:47:03.000Z",
      "board_updatedAt": null,
      "board_deletedAt": null,
      "board_title": "color",
      "board_tags": "[\"canis\",\"tergeo\"]",
      "board_views": 2147483647,
      "board_body": "Corrupti cubo aetas usque. Supellex torrens atrocitas decipio. Fugit toties solitudo advenio sulum acceptus porro assentator summopere ultra.\nVere tametsi angustus suggero stella. Iure demonstro quam complectus dedico. Exercitationem advenio cursus adamo alias numquam deserunt speculum adficio utroque.\nContra auditor comburo verto pecco considero constans audio consequatur confugo. Ipsam acerbitas celebrer cubo caute condico absum clibanus contigo tero. Civitas argumentum voluptatem abundans cunctatio vere truculenter deficio.",
      "board_image": "https://avatars.githubusercontent.com/u/44720109",
      "board_developerId": 1
  },
  {
      "board_id": 2,
      "board_createdAt": "2024-10-14T12:47:03.000Z",
      "board_updatedAt": null,
      "board_deletedAt": null,
      "board_title": "defero",
      "board_tags": "[\"arbitro\",\"colo\",\"victus\",\"ipsam\",\"desino\"]",
      "board_views": 2147483647,
      "board_body": "Cuppedia tabula aequus dedecor acies colo textilis cimentarius. Vae confugo tabella tertius vicissitudo vilitas porro. Versus adiuvo audeo una delectus ager.\nSurgo cognomen deleniti tertius thermae. Nisi saepe charisma absorbeo defluo. Abeo causa soleo depereo debilito demens veritas triduana.\nTenetur carpo adipiscor deduco combibo video studio. Animus aperio adipiscor viriliter administratio assentator crepusculum. Assentator stillicidium sufficio deleniti.",
      "board_image": "https://avatars.githubusercontent.com/u/75698033",
      "board_developerId": 8
  },
  {
      "board_id": 3,
      "board_createdAt": "2024-10-14T12:47:03.000Z",
      "board_updatedAt": null,
      "board_deletedAt": null,
      "board_title": "beatus",
      "board_tags": "[\"suasoria\"]",
      "board_views": 2147483647,
      "board_body": "Aestivus consectetur adeo aspicio unde. Sono nulla consequuntur spero cetera itaque. Deporto curvo libero advoco cimentarius.\nCariosus comburo colo voluntarius armarium voluntarius. Corona pel pel decumbo circumvenio vicinus ustulo amoveo convoco. Condico curiositas esse aiunt tenus tredecim commemoro alveus debilito.\nAltus torqueo demitto ad terminatio maxime tandem advoco iure. Earum damno corona tertius cursus tergo vicinus. Accommodo absens aperte.",
      "board_image": "https://avatars.githubusercontent.com/u/18383934",
      "board_developerId": 3
  },
  {
      "board_id": 4,
      "board_createdAt": "2024-10-14T12:47:03.000Z",
      "board_updatedAt": null,
      "board_deletedAt": null,
      "board_title": "consectetur",
      "board_tags": "[\"vehemens\"]",
      "board_views": 2147483647,
      "board_body": "Ascisco ulciscor damno adnuo approbo tracto ancilla. Undique nihil spectaculum ver summa ascit caries utrimque sortitus. Aeger accusator considero.\nSapiente conatus audentia velociter verus. Torqueo explicabo ab dolorum labore adsum tergiversatio tum creber deficio. Verumtamen nisi quibusdam maiores tot conor.\nTotidem veniam sortitus deleniti terror degenero carcer creptio. Aestas anser color possimus pecco utpote usitas strenuus vicinus. Officiis conculco rerum sono teres conventus calco calco urbs.",
      "board_image": "https://avatars.githubusercontent.com/u/14924333",
      "board_developerId": 6
  },
  {
      "board_id": 5,
      "board_createdAt": "2024-10-14T12:47:03.000Z",
      "board_updatedAt": null,
      "board_deletedAt": null,
      "board_title": "deserunt",
      "board_tags": "[\"ulterius\",\"studio\",\"universe\",\"suspendo\"]",
      "board_views": 2147483647,
      "board_body": "Molestias ait thorax coniecto saepe contabesco tabula curiositas celer vomer. Voluptas turbo solus. Tamdiu spiculum expedita adnuo blanditiis.\nDebeo triduana carpo quaerat recusandae. Apostolus audentia correptius animus. Amplitudo quia coniuratio at.\nLibero sonitus defleo. Ubi conqueror spectaculum uterque absum volutabrum contra. Tabgo subiungo magni dedico utrimque depulso aduro depereo sint.",
      "board_image": "https://avatars.githubusercontent.com/u/42975868",
      "board_developerId": 3
  },
  {
      "board_id": 6,
      "board_createdAt": "2024-10-14T12:47:03.000Z",
      "board_updatedAt": null,
      "board_deletedAt": null,
      "board_title": "apud",
      "board_tags": "[\"aliquid\",\"cena\",\"coepi\",\"ab\",\"tyrannus\"]",
      "board_views": 2147483647,
      "board_body": "Similique sequi strues commemoro vulariter celebrer. Supplanto supellex spargo taceo. Velociter atrocitas cruentus.\nUllam totidem credo calcar canonicus tepesco. Vinum stipes curo. Stips arca taedium speciosus cunctatio.\nPauper brevis antiquus atrocitas. Alioqui placeat celer volutabrum stillicidium recusandae ara admiratio umerus suggero. Delicate eveniet explicabo depereo.",
      "board_image": "https://avatars.githubusercontent.com/u/68828057",
      "board_developerId": 1
  },
  {
      "board_id": 7,
      "board_createdAt": "2024-10-14T12:47:03.000Z",
      "board_updatedAt": null,
      "board_deletedAt": null,
      "board_title": "adficio",
      "board_tags": "[\"tametsi\"]",
      "board_views": 2147483647,
      "board_body": "Paulatim aptus vilicus quia vehemens demonstro valeo tam. Tyrannus decimus adicio ipsa utroque vulgivagus tantum corpus. Verus alioqui defessus vesper.\nCicuta carmen repellendus absorbeo alo vorax bos ater carmen. Demoror tui textilis delectatio appono eaque confido architecto claro anser. Conatus minus caries suggero voluptatum aggredior suspendo vesco somnus.\nChirographum suppellex atavus facilis tempus deduco sursum. Totam audacia aranea vero confugo triduana tripudio conatus. Vos repudiandae arx bellum reprehenderit armarium ustulo.",
      "board_image": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/184.jpg",
      "board_developerId": 9
  },
  {
      "board_id": 8,
      "board_createdAt": "2024-10-14T12:47:03.000Z",
      "board_updatedAt": null,
      "board_deletedAt": null,
      "board_title": "tepidus",
      "board_tags": "[\"amor\",\"cras\",\"corrigo\"]",
      "board_views": 2147483647,
      "board_body": "Cribro debitis volaticus attollo coerceo sollicito thymbra itaque volo. Vir quam tum. Tertius sumptus versus quidem defendo dolore audacia ocer.\nVulgus arx defluo centum cultura ascisco qui vado voluptatem. Valetudo spero capio vitae atrocitas vado illo ancilla terra virga. Vita defetiscor inventore omnis tremo trepide civis demulceo sunt.\nTertius aranea appello. Talis angelus appono qui tardus sordeo admitto crapula teres. Vitium ipsum cupiditate comis rem theca.",
      "board_image": "https://avatars.githubusercontent.com/u/48588145",
      "board_developerId": 10
  },
  {
      "board_id": 9,
      "board_createdAt": "2024-10-14T12:47:03.000Z",
      "board_updatedAt": null,
      "board_deletedAt": null,
      "board_title": "cervus",
      "board_tags": "[\"benigne\",\"abduco\",\"vinitor\",\"veritatis\"]",
      "board_views": 2147483647,
      "board_body": "Bellicus aperte ago conspergo color cribro summopere taedium cauda. Timor umerus delicate ulciscor corporis uter perferendis pel. Speculum carcer velum asper arx.\nUtroque comes strenuus appositus video undique studio speciosus nisi. Conduco vilitas victoria vel coruscus cito sui cognomen arbor. Nobis expedita uter utpote cauda amissio.\nAngelus degenero porro cursus amicitia eaque crapula vinculum. Aestus alter abeo aptus paulatim bellum amet sursum concido brevis. Bonus caelum aggero sollers sum deficio odit vester audax accendo.",
      "board_image": "https://avatars.githubusercontent.com/u/35097761",
      "board_developerId": 7
  },
  {
      "board_id": 10,
      "board_createdAt": "2024-10-14T12:47:03.000Z",
      "board_updatedAt": null,
      "board_deletedAt": null,
      "board_title": "absens",
      "board_tags": "[\"dedico\",\"spiritus\",\"articulus\",\"temptatio\",\"caritas\"]",
      "board_views": 2147483647,
      "board_body": "Autus accendo triduana talus cultura fugit atavus canonicus conitor. Carcer blandior cohibeo vorax vulgivagus fugiat bellicus conicio consequuntur. Caelestis turpis atrox eligendi defaeco curtus aestas.\nTracto tempora basium canis. Porro textor vulnus adeptio earum quas taedium. Vallum aranea tremo concedo tergiversatio advenio.\nTibi corrupti abscido celebrer vulariter clam utpote thermae vado arbor. Auctor aspernatur bellicus communis commodi corrupti defero appello. Porro cattus bibo.",
      "board_image": "https://avatars.githubusercontent.com/u/57725208",
      "board_developerId": 10
  }
]

/** @type {import('../types/index.d.ts').Notificaton[]} */
const notificationData = [
  {
      "notification_id": 1,
      "notification_createdAt": "2024-10-14T02:48:49.000Z",
      "notification_deletedAt": null,

      "notification_userId": 9,
      "notification_type": "listing",
      "notification_title": "thorax voluptatum correptius temperantia depereo",
      "notification_message": "Vivo crebro abstergo angustus ultio conturbo super. Tam turpis curiositas voluptatibus vulnus voco surculus tandem. Voluptate caterva stella cur triduana suppellex confugo coniecto conventus crux.",
  },
  {
      "notification_id": 2,
      "notification_type": "listing",
      "notification_createdAt": "2024-10-14T07:16:48.000Z",
      "notification_deletedAt": null,
      "notification_title": "illo vilitas pauci cur atque",
      "notification_message": "Mollitia accendo peccatus constans fuga victus perspiciatis crudelis accusator pecto. Certus antea contego natus. Strenuus trucido virgo utrum subvenio.",
      "notification_userId": 4
  },
  {
      "notification_id": 3,
      "notification_type": "announcement",
      "notification_createdAt": "2024-10-14T06:54:29.000Z",
      "notification_deletedAt": null,
      "notification_title": "copia claro demulceo earum solitudo",
      "notification_message": "Amita testimonium tredecim tristis quas brevis cerno arguo apud depopulo. Ater acidus usus curriculum creptio tamen pel. Qui sonitus aliquam aliqua voluntarius verto.",
      "notification_userId": 4
  },
  {
      "notification_id": 4,
      "notification_type": "listing",
      "notification_createdAt": "2024-10-14T02:23:33.000Z",
      "notification_deletedAt": null,
      "notification_title": "venia constans ambulo dolores confido",
      "notification_message": "Alii valeo carcer quaerat clam appono. Coadunatio vigilo debeo. Degero consequatur defetiscor vos suppono tenetur appono decet possimus candidus.",
      "notification_userId": 2
  },
  {
      "notification_id": 5,
      "notification_type": "ad",
      "notification_createdAt": "2024-10-13T17:30:46.000Z",
      "notification_deletedAt": null,
      "notification_title": "bos delinquo cena averto vivo",
      "notification_message": "Provident sperno curtus velit valetudo itaque viscus. Cimentarius atque succedo cilicium textilis color thema asporto. Cum deinde textor crebro dolor crapula.",
      "notification_userId": 5
  }
]

/** @type {import('../types/index.d.ts').Developer[]} */
const developerData = [
  {
      "developer_id": 2,
      "developer_createdAt": "2024-10-07T17:31:18.000Z",
      "developer_updatedAt": null,
      "developer_deletedAt": null,
      "developer_email": "Chadd_Fritsch44@yahoo.com",
      "developer_name": "Harvey - Purdy",
      "developer_profilePhoto": "https://avatars.githubusercontent.com/u/38861678"
  },
  {
      "developer_id": 3,
      "developer_createdAt": "2024-10-07T17:31:18.000Z",
      "developer_updatedAt": null,
      "developer_deletedAt": null,
      "developer_email": "Sammy85@hotmail.com",
      "developer_name": "Carter and Sons",
      "developer_profilePhoto": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1239.jpg"
  },
  {
      "developer_id": 4,
      "developer_createdAt": "2024-10-07T17:31:18.000Z",
      "developer_updatedAt": null,
      "developer_deletedAt": null,
      "developer_email": "Eleanore22@hotmail.com",
      "developer_name": "Kautzer - Stiedemann",
      "developer_profilePhoto": "https://avatars.githubusercontent.com/u/16380145"
  },
  {
      "developer_id": 5,
      "developer_createdAt": "2024-10-07T17:31:18.000Z",
      "developer_updatedAt": null,
      "developer_deletedAt": null,
      "developer_email": "Alessandro.Russel93@hotmail.com",
      "developer_name": "Marvin, Hartmann and Schuppe",
      "developer_profilePhoto": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/365.jpg"
  },
  {
      "developer_id": 6,
      "developer_createdAt": "2024-10-07T17:31:18.000Z",
      "developer_updatedAt": null,
      "developer_deletedAt": null,
      "developer_email": "Carlee81@hotmail.com",
      "developer_name": "Hegmann Group",
      "developer_profilePhoto": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/161.jpg"
  },
  {
      "developer_id": 7,
      "developer_createdAt": "2024-10-07T17:31:18.000Z",
      "developer_updatedAt": null,
      "developer_deletedAt": null,
      "developer_email": "Dylan_Marquardt65@yahoo.com",
      "developer_name": "Balistreri LLC",
      "developer_profilePhoto": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/754.jpg"
  },
  {
      "developer_id": 8,
      "developer_createdAt": "2024-10-07T17:31:18.000Z",
      "developer_updatedAt": null,
      "developer_deletedAt": null,
      "developer_email": "Talon_Dietrich81@gmail.com",
      "developer_name": "Fisher Group",
      "developer_profilePhoto": "https://avatars.githubusercontent.com/u/8115915"
  },
  {
      "developer_id": 9,
      "developer_createdAt": "2024-10-07T17:31:18.000Z",
      "developer_updatedAt": null,
      "developer_deletedAt": null,
      "developer_email": "Paris_Hegmann@yahoo.com",
      "developer_name": "Ritchie LLC",
      "developer_profilePhoto": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/438.jpg"
  },
  {
      "developer_id": 10,
      "developer_createdAt": "2024-10-07T17:31:18.000Z",
      "developer_updatedAt": null,
      "developer_deletedAt": null,
      "developer_email": "Curtis.Olson@yahoo.com",
      "developer_name": "Reichert - McKenzie",
      "developer_profilePhoto": "https://avatars.githubusercontent.com/u/24038695"
  },
  {
      "developer_id": 11,
      "developer_createdAt": "2024-10-07T17:31:18.000Z",
      "developer_updatedAt": null,
      "developer_deletedAt": null,
      "developer_email": "Raquel45@gmail.com",
      "developer_name": "Kuvalis Group",
      "developer_profilePhoto": "https://avatars.githubusercontent.com/u/93820465"
  }
]

/** @type {import('../types/index.d.ts').Place[]} */
const locationData = [
   {
     id: 1,
     name: "Addis Ketema",
     coordinates: {
       lat: 0,
       lng: 0
     },
     type: "",
     display_name: ""
   },{
     id: 2,
     name: "Akaki Kaliti",
     coordinates: {
       lat: 0,
       lng: 0
     },
     type: "",
     display_name: ""
   },{
     id: 3,
     name: "Arada",
     coordinates: {
       lat: 0,
       lng: 0
     },
     type: "",
     display_name: ""
   },{
     id: 4,
     name: "Bole",
     coordinates: {
       lat: 0,
       lng: 0
     },
     type: "",
     display_name: ""
   },{
     id: 5,
     name: "Gulale",
     coordinates: {
       lat: 0,
       lng: 0
     },
     type: "",
     display_name: ""
   },{
     id: 6,
     name: "Kirkos",
     coordinates: {
       lat: 0,
       lng: 0
     },
     type: "",
     display_name: ""
   },{
     id: 7,
     name: "Kolfe Keranio",
     coordinates: {
       lat: 0,
       lng: 0
     },
     type: "",
     display_name: ""
   },{
     id: 8,
     name: "Lideta",
     coordinates: {
       lat: 0,
       lng: 0
     },
     type: "",
     display_name: ""
   },{
     id: 9,
     name: "Nefas Silk Yeka",
     coordinates: {
       lat: 0,
       lng: 0
     },
     type: "",
     display_name: ""
   }]

/** @type {import('../types/index.d.ts').Ad[]} */
const adData = [{
  image: image.ad_1,
  created: "",
  expires: "",
  views: 0
},{
  image: image.ad_2,
  created: "",
  expires: "",
  views: 0
}]
 

export {adData, listingData, boardData, notificationData, developerData, locationData}
  