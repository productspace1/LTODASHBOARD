// Master franchise data (kept as-is from existing tool)
const FP_DATA = [
  { id: 12368, name: "Trontek Plant", sapCode: "28112025" },
  { id: 12367, name: "COCO-Dehradun_L2O", sapCode: "1000000016" },
  { id: 12366, name: "COCO Dehradun", sapCode: "1000000015" },
  { id: 12365, name: "ARSHITA AUTOS", sapCode: "1212191099" },
  { id: 12364, name: "COCO-Patna_L2O", sapCode: "1000000014" },
  { id: 12363, name: "COCO-Aligarh_L2O", sapCode: "1000000013" },
  { id: 12362, name: "COCO-Unnao_L2O", sapCode: "1000000012" },
  { id: 12361, name: "COCO-Gorakhpur_L2O", sapCode: "1000000011" },
  { id: 12360, name: "COCO-Raebarali_L2O", sapCode: "1000000010" },
  { id: 12359, name: "COCO-Ballia_L2O", sapCode: "1000000009" },
  { id: 12358, name: "COCO-Varanasi_L2O", sapCode: "1000000008" },
  { id: 12357, name: "COCO-Patna", sapCode: "1000000007" },
  { id: 12356, name: "COCO-Aligarh", sapCode: "1000000006" },
  { id: 12355, name: "COCO-Unnao", sapCode: "1000000005" },
  { id: 12354, name: "COCO-Gorakhpur", sapCode: "1000000004" },
  { id: 12353, name: "COCO-Raebarali", sapCode: "1000000003" },
  { id: 12352, name: "COCO-Ballia", sapCode: "1000000002" },
  { id: 12351, name: "COCO-Varanasi", sapCode: "1000000001" },
  { id: 12350, name: "SINGH AUTOMOBILE_L20", sapCode: "1212009295" },
  { id: 12349, name: "COCO-Prayagraj_L20", sapCode: "1212110082" },
  { id: 12348, name: "COCO-Prayagraj", sapCode: "1212110090" },
  { id: 12347, name: "COCO-Bahraich_L20", sapCode: "1212110087" },
  { id: 12346, name: "COCO-Bahraich", sapCode: "1212110081" },
  { id: 12345, name: "M/S SHARMA BATTERY_L2O", sapCode: "1212085444" },
  { id: 12344, name: "Bhawani Enterprises_L2O", sapCode: "1212077119" },
  { id: 12343, name: "TRONTEK Plant", sapCode: "1211716721" },
  { id: 12342, name: "K B Mobility", sapCode: "1212049991" },
  { id: 12341, name: "GUPTA BATTERY RICKSHAW_L20", sapCode: "1212045289" },
  { id: 12340, name: "Coco-Lucknow_L20", sapCode: "1212064156" },
  { id: 12339, name: "Coco-Lucknow", sapCode: "1212064153" },
  { id: 12338, name: "Coco-Muzaffarnagar_L20", sapCode: "1212064150" },
  { id: 12337, name: "Coco-Muzaffarnagar", sapCode: "1212064164" },
  { id: 12336, name: "Coco-Agra_L20", sapCode: "1212064161" },
  { id: 12335, name: "Coco-Agra", sapCode: "1212064149" },
  { id: 12334, name: "ASIA BATTERY & CO._L20", sapCode: "1212049992" },
  { id: 12333, name: "I.S.Enterprises_l2o", sapCode: "1212009292" },
  { id: 12332, name: "LKSH Technocrafts_L20", sapCode: "1212000724" },
  { id: 12331, name: "A.K Enterprises-Ballia_l2o", sapCode: "1212036621" },
  { id: 12330, name: "coco-Haldwani_L2o", sapCode: "1212032152" },
  { id: 12329, name: "coco-Haldwani", sapCode: "1212032149" },
  { id: 12328, name: "RIDDHIMA ENTERPRISES", sapCode: "1212000727" },
  { id: 12327, name: "Test Normal_LTO_only", sapCode: "8764730002" },
  { id: 12326, name: "Test Normal_Lease_only", sapCode: "8764730001" },
  { id: 12325, name: "coco-Haridwar_l2o", sapCode: "1211994637" },
  { id: 12324, name: "coco-Deoband_L2o", sapCode: "1211994633" },
  { id: 12323, name: "coco-Jaipur_L2o", sapCode: "1211994612" },
  { id: 12322, name: "coco-Moradabad_l2o", sapCode: "1211994619" },
  { id: 12321, name: "coco-Moradabad", sapCode: "1211994629" },
  { id: 12320, name: "coco-Kanpur_l2o", sapCode: "1211994616" },
  { id: 12319, name: "coco-Kanpur", sapCode: "1211994626" },
  { id: 12318, name: "coco-Meerut_l2o", sapCode: "1211994613" },
  { id: 12317, name: "coco-Meerut", sapCode: "1211994622" },
  { id: 12316, name: "COCO-Haridwar", sapCode: "1211966089" },
  { id: 12315, name: "COCO-Deoband", sapCode: "1211945733" },
  { id: 12314, name: "COCO -Jaipur", sapCode: "1211936445" },
  { id: 12313, name: "PRAYAGRAJ ENTERPRISES", sapCode: "1211924831" },
  { id: 12312, name: "Raghunandan Enterprises", sapCode: "1211907575" },
  { id: 12311, name: "AVADH ENTERPRISES", sapCode: "1211907572" },
  { id: 12310, name: "JYOTI ASSOCIATES", sapCode: "1211892438" },
  { id: 12309, name: "SHIV ELECTRONICS INDIA", sapCode: "1211817828" },
  { id: 12307, name: "Harsh E Motors", sapCode: "1211892434" },
  { id: 12229, name: "Jai Sriram ENTERPRISES TEST", sapCode: "12229" },
  { id: 12228, name: "JAI MATADI ENTERPRISES", sapCode: "1211827863" },
  { id: 12188, name: "GS POWER", sapCode: "1211877866" },
  { id: 12186, name: "JAI MATADI ENTERPRISES", sapCode: "1211877863" },
  { id: 12119, name: "ADYA ELECTRONICS", sapCode: "1211817821" },
  { id: 12074, name: "KAVYA TRADERS", sapCode: "1211784964" },
  { id: 11940, name: "ANU JAIN BATTERY AND ELECTRIC SERVICE", sapCode: "1211745883" },
  { id: 11843, name: "VISHWKARMA  AUTO", sapCode: "1211778492" },
  { id: 11842, name: "HARNEEL  ENTERPRISES", sapCode: "1211778489" },
  { id: 11833, name: "PALAK ENTERPRISES", sapCode: "1211773365" },
  { id: 11796, name: "New A.B. Battery", sapCode: "1211773364" },
  { id: 11795, name: "Adhikar Battery Point", sapCode: "1211773370" },
  { id: 11712, name: "NIKHUMBH  ENTERPRISES", sapCode: "1211763267" },
  { id: 11711, name: "Zam Zam Battery and Inverter", sapCode: "1211779160" },
  { id: 11710, name: "Dhamora Battery House", sapCode: "1211745880" },
  { id: 11624, name: "Bhatia Batteries", sapCode: "1211779140" },
  { id: 11623, name: "DIPAK ENTERPRISES", sapCode: "1211745886" },
  { id: 11496, name: "Anurag Batteries", sapCode: "1211762062" },
  { id: 11392, name: " Walia electrical", sapCode: "1211754648" },
  { id: 11100, name: "Battery Wala", sapCode: "1211743465" },
  { id: 10611, name: "BHARAT BATTRIES", sapCode: "1211737223" },
  { id: 10603, name: "NEW INDIA BATTERIES", sapCode: "1211717809" },
  { id: 10601, name: "KRISHNA INVERTER AND BATTERY", sapCode: "1211717806" },
  { id: 10599, name: "Pragya Power Solution", sapCode: "1211710154" },
  { id: 10348, name: "Star Battery", sapCode: "1211724506" },
  { id: 9835, name: "Modern Battery Auto Electric", sapCode: "1211679436" },
  { id: 9620, name: "Anurag International Construction & Trading Com.", sapCode: "1211692120" },
  { id: 9440, name: "Shree ganesh traders", sapCode: "1211686079" },
  { id: 9344, name: "A K ENTERPRISE (Ballia) ", sapCode: "1211680643" },
  { id: 9321, name: "ANURAJ ENTERPRISES", sapCode: "1211678545" },
  { id: 9299, name: "M/S AJAD BATTERY SERVICE", sapCode: "1211658274" },
  { id: 9275, name: "KHUSHAHAL AUTO AGENCY", sapCode: "1211656899" },
  { id: 9189, name: "Sahil Electricals", sapCode: "1211649533" },
  { id: 9188, name: "Gagan Enterprises", sapCode: "1211649536" },
  { id: 9187, name: "M/S Genius Solar System", sapCode: "1211649539" },
  { id: 9164, name: "Suresh Kumar Contractor (Deoband)", sapCode: "1211656902" },
  { id: 9151, name: "Sandeep Electronics", sapCode: "1211655436" },
  { id: 9133, name: "NEW PRIYA BATTERY & ELECTRONICS", sapCode: "1211646628" },
  { id: 8882, name: "Jai Maa Vindhavasini Store", sapCode: "1211645932" },
  { id: 8874, name: "VECMOCON TECHNOLOGIES PRIVATE LIMITED", sapCode: "1211645177" },
  { id: 8836, name: "Lucknow Warehouse", sapCode: "5314" },
  { id: 8589, name: "Mahadev Enterprises", sapCode: "1211616966" },
  { id: 8562, name: "Shree Rama Enterprises", sapCode: "1211609732" },
  { id: 8447, name: "Manesar Plant", sapCode: "6660001273" },
  { id: 8222, name: "Shri Hari Trading Company", sapCode: "1211579528" },
  { id: 8220, name: "Arihant Corporation", sapCode: "1212029158" },
  { id: 8147, name: "Shiva Enterprises", sapCode: "1211591967" },
  { id: 8067, name: "VIJAYA SALES", sapCode: "1211587247" },
  { id: 8029, name: "Siddiqui Electrical Kashipur", sapCode: "1211570923" },
  { id: 7974, name: "Jyoti Enterprises", sapCode: "1211576119" },
  { id: 7918, name: "BARKAT ELECTRONICS  & ELECTRICALS", sapCode: "1211579525" },
  { id: 7634, name: "Sagar Metal Works", sapCode: "1211565139" },
  { id: 7412, name: "Krishna Safeline IBPL", sapCode: "1211521194" },
  { id: 7358, name: "Ghaziabad Warehouse", sapCode: "5304" },
  { id: 7357, name: "Panchgaon Warehouse", sapCode: "5312" },
  { id: 7356, name: "Dehradun Warehouse", sapCode: "5307" },
  { id: 7355, name: "Patna Warehouse", sapCode: "5306" },
  { id: 7328, name: "Jaipur Warehouse", sapCode: "5311" },
  { id: 7286, name: "Coco Kanpur", sapCode: "1211510917" },
  { id: 7285, name: "Hanuman Batteries", sapCode: "1211474717" },
  { id: 4740, name: "SANDUJA ENTERPRISES        ", sapCode: "1211407542" },
  { id: 4739, name: "Sk Ev Solutions-GHZ ", sapCode: "1211460971" },
  { id: 4719, name: "Ambika Enterprises", sapCode: "1211342080" },
  { id: 4507, name: "Sk Ev Solutions-Bulandshahr", sapCode: "1211349951" },
  { id: 4471, name: "ATHARV TECH ENTERPRISES", sapCode: "1211327429" },
  { id: 4122, name: "SK EV SOLUTIONS Aligarh", sapCode: "1211342081" },
  { id: 3735, name: "Anamika Enterprises_Ghaziabad", sapCode: "1211288650" },
  { id: 3711, name: "Production Franchise TEST", sapCode: "876473" },
  { id: 3660, name: "COCO Haridwar", sapCode: "1211311196" },
  { id: 3648, name: "Sumit Electricals", sapCode: "1211150875" },
  { id: 3532, name: "Tanya enterprise", sapCode: "1211257546" },
  { id: 3433, name: "Sharda Enterprises", sapCode: "1211246531" },
  { id: 3177, name: "Anamika Enterprises-Dehradun", sapCode: "1211270472" },
  { id: 3117, name: "Shiv Kumar Contractor", sapCode: "1211264893" },
  { id: 3091, name: "COCO_Lucknow", sapCode: "1211467890" },
  { id: 3090, name: "Ansh Enterprises", sapCode: "1211257799" },
  { id: 3063, name: "Om Sai Enterprises", sapCode: "1211275696" },
  { id: 3061, name: "Vishal Enterprises", sapCode: "1211270448" },
  { id: 3027, name: "A.K.ENTERPRISES", sapCode: "1211266851" },
  { id: 2965, name: "RAJ AUTO BATTERY WORKS", sapCode: "1211253828" },
  { id: 2825, name: "Yasar E-Rickshaw Services", sapCode: "1211232625" },
  { id: 2781, name: "Megha Udhyog ", sapCode: "1211260583" },
  { id: 2590, name: "Saini Distributors", sapCode: "1211216451" },
  { id: 2515, name: "Extra Power batteries", sapCode: "1211249568" },
  { id: 2389, name: "Empire Solar Solutions", sapCode: "1212057910" },
  { id: 2289, name: "Vishal Auto Electrician", sapCode: "1211225205" },
  { id: 2245, name: "Mishra Enterprises E Rickshaw Battery Services", sapCode: "1211236952" },
  { id: 2243, name: "Vidyut Vaahan", sapCode: "1211236976" },
  { id: 2242, name: "Pujita Enterprises", sapCode: "1211249095" },
  { id: 2130, name: "P2G MOBILTY TECH PRIVATE LIMITED", sapCode: "1211229636" },
  { id: 2076, name: "Ganga Jamuna Transport", sapCode: "1211227571" },
  { id: 2075, name: "Jattari Auto Sales", sapCode: "1211202858" },
  { id: 2072, name: "Swati Shree Enterprise", sapCode: "1211245588" },
  { id: 2071, name: "LKSH TECHNOCRAFTS", sapCode: "1211248615" },
  { id: 1797, name: "Jai Shree Traders", sapCode: "1211236082" },
  { id: 1689, name: "R K Enterprises", sapCode: "1211199313" },
  { id: 1688, name: "Freedom Batteries", sapCode: "1211212254" },
  { id: 1687, name: "G S Power", sapCode: "1211212255" },
  { id: 1686, name: "S K Trading Company", sapCode: "1211197393" },
  { id: 1092, name: "Krishna Developers And Financers", sapCode: "1211177483" },
  { id: 1091, name: "Electromotiv Sales", sapCode: "1211190253" },
  { id: 1090, name: "Neel Kanth Enterprises", sapCode: "1211192084" },
  { id: 836, name: "Jigyasha Enterprises", sapCode: "1211190172" },
  { id: 835, name: "Soni Motors", sapCode: "1211191698" },
  { id: 663, name: "Sun Light Solar System", sapCode: "1211180714" },
  { id: 659, name: "BK Solar and Batteries Private Limited", sapCode: "1211183544" },
  { id: 618, name: "K B Enterprises", sapCode: "1211170053" },
  { id: 617, name: "Nyra Enterprises", sapCode: "1211175032" },
  { id: 616, name: "Asia Battery and Company", sapCode: "1211175914" },
  { id: 615, name: "Flora Electronics Service", sapCode: "1211174457" },
  { id: 614, name: "Krishna Solar Solution", sapCode: "1211175552" },
  { id: 613, name: "Anamika Enterprises", sapCode: "1211173535" },
  { id: 611, name: "B N Singh and Traders", sapCode: "1211169540" },
  { id: 610, name: "Om Enterprises", sapCode: "1211167793" },
  { id: 609, name: "Suresh Kumar Contractor", sapCode: "1211167792" },
  { id: 608, name: "Saurabh Gupta", sapCode: "1211167794" },
  { id: 577, name: "I S Enterprises", sapCode: "1211167499" },
  { id: 576, name: "Izna Enterprises", sapCode: "1211158066" },
  { id: 575, name: "Kumkum Electric India Private Limited", sapCode: "1211032648" },
  { id: 574, name: "Siddharth Electricals", sapCode: "1211163719" },
  { id: 573, name: "M K Battery", sapCode: "1211150879" },
  { id: 572, name: "Goel Enterprises", sapCode: "1211150874" },
  { id: 565, name: "COCO_Nathupur", sapCode: "5002" },
  { id: 564, name: "COCO_Peeragarhi", sapCode: "5003" },
  { id: 563, name: "A M Communications", sapCode: "1211174456" },
  { id: 562, name: "Aditi Enterprises", sapCode: "1211171924" },
  { id: 312, name: "Shri Balaji Enterprises", sapCode: "1211157806" },
  { id: 308, name: "Prem General Store", sapCode: "1211165738" },
  { id: 307, name: "Power Battery", sapCode: "1211159885" },
  { id: 306, name: "Chandra Traders", sapCode: "1211152000" },
  { id: 305, name: "I K Battery And Electronics", sapCode: "1211148348" },
  { id: 304, name: "Amol Enterprises", sapCode: "1211087591" },
  { id: 259, name: "C K Enterprises", sapCode: "1211167795" },
  { id: 258, name: "Balaji Inverter and Batteries", sapCode: "1211167469" },
  { id: 257, name: "Bhawani Enterprises", sapCode: "1211164083" },
  { id: 256, name: "R K AUTOMOBILES", sapCode: "1211154141" },
  { id: 252, name: "Siddhi Enterprises", sapCode: "1212055449" },
  { id: 251, name: "Keshav Automobiles", sapCode: "1211165159" },
  { id: 250, name: "SSM Infotech", sapCode: "1211159590" },
  { id: 228, name: "VINAY ELECTRICALS AND STAR WEIGHING", sapCode: "1211092776" },
  { id: 227, name: "Sheetla Trading Company", sapCode: "1211129077" },
  { id: 161, name: "Jeet Enterprises", sapCode: "1211150877" },
  { id: 160, name: "Jai Shree Electronics and Electricals", sapCode: "1211150876" },
  { id: 103, name: "Rajo Trader", sapCode: "1211145934" },
  { id: 102, name: "Shree Enterprises", sapCode: "1211146321" },
  { id: 99, name: "SHYAM ENTERPRISES", sapCode: "1211139651" },
  { id: 77, name: "Siddique Electrical", sapCode: "1211098253" },
  { id: 75, name: "Mridul Enterprises", sapCode: "1211089391" },
  { id: 74, name: "Hani Tyagi", sapCode: "1211106500" },
  { id: 30, name: "JYOTI EV MART", sapCode: "1211280869" }
];

// Initialize Dropdown Master once DOM is ready
window.addEventListener("DOMContentLoaded", () => {
  const fpById = FP_DATA.reduce((acc, fp) => {
    acc[String(fp.id)] = fp;
    return acc;
  }, {});

  const statusDiv = document.getElementById("status");
  const tokenPreview = document.getElementById("tokenPreview");
  const configCard = document.getElementById("configCard");
  const resultsCard = document.getElementById("resultsCard");
  const resultsLoader = document.getElementById("resultsLoader");
  const fpListContainer = document.getElementById("fpListContainer");
  const fpSearchInput = document.getElementById("fpSearchInput");
  const resultsTableBody = document.getElementById("resultsTableBody");
  const resultsInfo = document.getElementById("resultsInfo");
  const resultsWarning = document.getElementById("resultsWarning");
  const searchInput = document.getElementById("searchInput");

  let authToken = null;
  let allAssets = [];
  let currentFpFilterText = "";

  const setStatus = (message, type = "neutral") => {
    statusDiv.textContent = message || "";
    statusDiv.className = "status-text " + type;
  };

  // Render the franchise checkbox list
  const renderFpList = () => {
    const filter = currentFpFilterText.toLowerCase();
    fpListContainer.innerHTML = "";

    const sorted = [...FP_DATA].sort((a, b) => a.name.localeCompare(b.name));
    sorted.forEach((fp) => {
      const text = (fp.name + " " + fp.id + " " + fp.sapCode).toLowerCase();
      if (filter && !text.includes(filter)) return;

      const row = document.createElement("div");
      row.className = "franchise-item";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "form-check-input";
      checkbox.value = String(fp.id);
      checkbox.id = "fp_" + fp.id;

      const label = document.createElement("label");
      label.className = "form-check-label";
      label.setAttribute("for", checkbox.id);
      label.textContent = `${fp.name} (${fp.id})`;

      row.appendChild(checkbox);
      row.appendChild(label);
      fpListContainer.appendChild(row);
    });
  };

  const getSelectedFranchiseIds = () => {
    const checkboxes = fpListContainer.querySelectorAll("input[type='checkbox']");
    const ids = [];
    checkboxes.forEach((cb) => {
      if (cb.checked) ids.push(cb.value);
    });
    return ids;
  };

  const selectAllFranchises = () => {
    const checkboxes = fpListContainer.querySelectorAll("input[type='checkbox']");
    checkboxes.forEach((cb) => (cb.checked = true));
  };

  const deselectAllFranchises = () => {
    const checkboxes = fpListContainer.querySelectorAll("input[type='checkbox']");
    checkboxes.forEach((cb) => (cb.checked = false));
  };

  // Authenticate user and fetch token
  const fetchAuthToken = async () => {
    const mobile = document.getElementById("mobileInput").value.trim();
    const otp = document.getElementById("otpInput").value.trim();

    if (!mobile || !otp) {
      setStatus("Please enter both mobile and OTP.", "err");
      return;
    }

    setStatus("Authenticating...", "neutral");
    tokenPreview.textContent = "";

    try {
      const res = await fetch("https://blb-api.emooving.in/login/verifyOtp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mobileNumber: Number(mobile),
          otp: Number(otp)
        })
      });

      if (!res.ok) {
        setStatus("Login API failed with HTTP " + res.status, "err");
        return;
      }

      const data = await res.json();
      if (data && data.status === "success" && data.result && data.result.oAuthId) {
        authToken = data.result.oAuthId;
        setStatus("Auth token fetched successfully.", "ok");
        const preview = authToken.length > 40
          ? authToken.slice(0, 20) + "..." + authToken.slice(-10)
          : authToken;
        tokenPreview.textContent = "Token (preview): " + preview;

        if (configCard.classList.contains("hidden")) {
          configCard.classList.remove("hidden");
        }
      } else {
        setStatus("Could not find oAuthId in response.", "err");
        console.log("Login response:", data);
      }
    } catch (err) {
      console.error(err);
      setStatus("Error calling login API: " + err.message, "err");
    }
  };

  const getAssetEndpoint = (assetType) => {
    if (assetType === "battery") return "getBatteryForDropdown";
    if (assetType === "charger") return "getChargerForDropdown";
    if (assetType === "soc") return "getSocMeterForDropdown";
    return null;
  };

  // Fetch dropdown assets for selected franchises
  const fetchAssetsForSelectedFps = async () => {
    if (!authToken) {
      setStatus("Please fetch auth token first.", "err");
      return;
    }

    const franchiseIds = getSelectedFranchiseIds();
    if (!franchiseIds.length) {
      setStatus("Please select at least one franchise.", "err");
      return;
    }

    const assetCategory = document.getElementById("assetCategory").value;
    const assetType = document.getElementById("assetType").value;
    const endpoint = getAssetEndpoint(assetType);

    if (!endpoint) {
      setStatus("Invalid asset type.", "err");
      return;
    }

    setStatus("Fetching dropdowns for " + franchiseIds.length + " franchise(s)...", "neutral");
    allAssets = [];
    renderTable();

    if (resultsCard.classList.contains("hidden")) {
      resultsCard.classList.remove("hidden");
    }
    resultsLoader.classList.remove("hidden");

    for (const franchiseId of franchiseIds) {
      const fpInfo = fpById[franchiseId] || {};
      const url =
        "https://blb-api.emooving.in/userAsset/" +
        endpoint +
        "?franchiseId=" + encodeURIComponent(franchiseId) +
        "&assetCategory=" + encodeURIComponent(assetCategory);

      try {
        const res = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: authToken
          }
        });

        if (!res.ok) {
          console.warn("Failed for FP", franchiseId, "HTTP", res.status);
          continue;
        }

        const data = await res.json();
        if (data && data.status === "success" && Array.isArray(data.data)) {
          const rows = data.data.map((item) => ({
            franchiseId,
            fpName: fpInfo.name || "",
            sapCode: fpInfo.sapCode || "",
            assetCategory,
            assetType,
            assetId: item.id,
            assetName: item.name
          }));
          allAssets.push(...rows);
        } else {
          console.warn("Unexpected dropdown response for FP", franchiseId, data);
        }
      } catch (err) {
        console.error("Error fetching assets for FP", franchiseId, err);
      }
    }

    resultsLoader.classList.add("hidden");
    setStatus("Fetch complete. Total assets: " + allAssets.length + ".", "ok");
    renderTable();
  };

  // Render table with optional filter
  const renderTable = () => {
    const filterText = searchInput.value.trim().toLowerCase();
    resultsTableBody.innerHTML = "";
    resultsWarning.classList.add("hidden");

    let filtered = allAssets;
    if (filterText) {
      filtered = allAssets.filter((row) => {
        const haystack = (
          (row.assetName || "") +
          " " +
          (row.fpName || "") +
          " " +
          (row.franchiseId || "")
        ).toLowerCase();
        return haystack.includes(filterText);
      });
    }

    const limit = 500;
    if (filtered.length > limit) {
      resultsWarning.classList.remove("hidden");
    }

    const shown = filtered.slice(0, limit);

    shown.forEach((row) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${row.franchiseId}</td>
        <td>${row.fpName}</td>
        <td>${row.assetType}</td>
        <td>${row.assetId}</td>
        <td class="asset-name-cell">${row.assetName}</td>
      `;
      resultsTableBody.appendChild(tr);
    });

    resultsInfo.textContent =
      "Showing " +
      shown.length +
      " of " +
      filtered.length +
      " (total " +
      allAssets.length +
      " records).";
  };

  // Export current results to CSV
  const exportCsv = () => {
    if (!allAssets.length) {
      alert("No data to export.");
      return;
    }

    const filterText = searchInput.value.trim().toLowerCase();
    let rowsToExport = allAssets;
    if (filterText) {
      rowsToExport = allAssets.filter((row) => {
        const haystack = (
          (row.assetName || "") +
          " " +
          (row.fpName || "") +
          " " +
          (row.franchiseId || "")
        ).toLowerCase();
        return haystack.includes(filterText);
      });
    }

    if (!rowsToExport.length) {
      alert("No rows match the current filter.");
      return;
    }

    const headers = [
      "FranchiseId",
      "FranchiseName",
      "SapCode",
      "AssetCategory",
      "AssetType",
      "AssetDbId",
      "AssetSerial"
    ];

    const lines = [];
    lines.push(headers.join(","));

    rowsToExport.forEach((row) => {
      const values = [
        row.franchiseId,
        row.fpName,
        row.sapCode,
        row.assetCategory,
        row.assetType,
        row.assetId,
        row.assetName
      ].map((v) => {
        const s = String(v == null ? "" : v);
        if (s.includes(",") || s.includes('"') || s.includes("\n")) {
          return '"' + s.replace(/"/g, '""') + '"';
        }
        return s;
      });
      lines.push(values.join(","));
    });

    const csvContent = lines.join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "asset_dropdowns.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Event bindings
  document.getElementById("authBtn").addEventListener("click", fetchAuthToken);
  document.getElementById("fetchAssetsBtn").addEventListener("click", fetchAssetsForSelectedFps);
  document.getElementById("exportCsvBtn").addEventListener("click", exportCsv);

  fpSearchInput.addEventListener("input", () => {
    currentFpFilterText = fpSearchInput.value;
    renderFpList();
  });

  document.getElementById("selectAllFps").addEventListener("click", selectAllFranchises);
  document.getElementById("deselectAllFps").addEventListener("click", deselectAllFranchises);

  searchInput.addEventListener("input", renderTable);

  // Initial load
  renderFpList();
});
