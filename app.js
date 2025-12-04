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
  const tabButtons = document.querySelectorAll(".tab-btn[data-target]");
  const tabContents = document.querySelectorAll(".tab-content");

  const switchTab = (targetId) => {
    tabButtons.forEach((btn) => {
      const isTarget = btn.dataset.target === targetId;
      btn.classList.toggle("active", isTarget);
    });

    tabContents.forEach((section) => {
      section.classList.toggle("active", section.id === targetId);
    });
  };

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => switchTab(btn.dataset.target));
  });

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

  // ---------------------------
  // Driver ID Search
  // ---------------------------
  const driverAuthStatus = document.getElementById("driverAuthStatus");
  const driverAuthCard = document.getElementById("driverAuthCard");
  const driverSearchCard = document.getElementById("driverSearchCard");
  const driverAuthSuccessPill = document.getElementById("driverAuthSuccessPill");
  const driverEmailInput = document.getElementById("driverEmail");
  const driverPasswordInput = document.getElementById("driverPassword");
  const multiDriverInput = document.getElementById("multiDriverInput");
  const singleDriverInput = document.getElementById("singleDriverInput");
  const multiSearchStatus = document.getElementById("multiSearchStatus");
  const singleSearchStatus = document.getElementById("singleSearchStatus");
  const multiSearchLoader = document.getElementById("multiSearchLoader");
  const singleSearchLoader = document.getElementById("singleSearchLoader");
  const multiResults = document.getElementById("multiResults");
  const singleDriverProfile = document.getElementById("singleDriverProfile");
  const searchTabButtons = document.querySelectorAll(".search-tab-btn");
  const searchPanels = document.querySelectorAll(".search-tab-panel");

  let driverAuthToken = null;

  const placeholderAvatar =
    "https://api.dicebear.com/7.x/initials/svg?seed=Driver&backgroundColor=b6b8c3";

  const d = (value, fallback = "(empty)") => {
    if (value === null || value === undefined) return fallback;
    if (typeof value === "string" && value.trim() === "") return fallback;
    return value;
  };

  const db = (value) => {
    if (value === null || value === undefined) return "(empty)";
    const truthy =
      value === true || value === "true" || value === "Yes" || value === "yes";
    const falsy = value === false || value === "false" || value === "No" || value === "no";
    if (truthy) return "Yes";
    if (falsy) return "No";
    return String(value);
  };

  const df = (value) => {
    if (!value) return "(empty)";
    const tryParse = (str) => {
      const parsed = new Date(str);
      if (!Number.isNaN(parsed.getTime())) return parsed;
      // handle dd/mm/yyyy
      const parts = String(str).split("/");
      if (parts.length === 3) {
        const [dPart, mPart, yPart] = parts.map((p) => Number(p));
        const alt = new Date(yPart, mPart - 1, dPart);
        if (!Number.isNaN(alt.getTime())) return alt;
      }
      return null;
    };

    const parsed = tryParse(value);
    if (!parsed) return String(value);

    const day = String(parsed.getDate()).padStart(2, "0");
    const month = parsed.toLocaleString("en-US", { month: "short" });
    const year = parsed.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const setDriverStatus = (el, message, type = "neutral") => {
    el.textContent = message || "";
    el.className = "status-text " + type;
  };

  const statusClass = (status) => {
    if (!status) return "neutral";
    const lower = String(status).toLowerCase();
    if (lower.includes("active")) return "success";
    if (lower.includes("pending")) return "warning";
    if (lower.includes("inactive")) return "danger";
    return "neutral";
  };

  const kycClass = (status) => {
    if (!status) return "neutral";
    return String(status).toLowerCase().includes("pending") ? "warning" : "success";
  };

  const toggleSearchTab = (tabKey) => {
    searchTabButtons.forEach((btn) => {
      const isActive = btn.dataset.searchTab === tabKey;
      btn.classList.toggle("active", isActive);
    });
    searchPanels.forEach((panel) => {
      const isActive = panel.dataset.searchPanel === tabKey;
      panel.classList.toggle("active", isActive);
    });
  };

  searchTabButtons.forEach((btn) => {
    btn.addEventListener("click", () => toggleSearchTab(btn.dataset.searchTab));
  });

  const handleDriverAuth = async () => {
    const email = driverEmailInput.value.trim();
    const password = driverPasswordInput.value.trim();

    if (!email || !password) {
      setDriverStatus(driverAuthStatus, "Please enter email and password.", "err");
      return;
    }

    setDriverStatus(driverAuthStatus, "Authenticating...", "neutral");

    try {
      const res = await fetch("https://blb-admin-api.emooving.in/login/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          emailId: email,
          password,
          userType: "other"
        })
      });

      const data = await res.json();
      if (data && data.token) {
        driverAuthToken = data.token;
        setDriverStatus(driverAuthStatus, "Authentication successful.", "ok");
        driverAuthCard.classList.add("hidden");
        driverSearchCard.classList.remove("hidden");
        driverAuthSuccessPill.classList.remove("hidden");
      } else {
        setDriverStatus(
          driverAuthStatus,
          "Authentication failed. Please check credentials and retry.",
          "err"
        );
      }
    } catch (err) {
      setDriverStatus(driverAuthStatus, "Login failed: " + err.message, "err");
    }
  };

  const ensureToken = (statusEl) => {
    if (!driverAuthToken) {
      setDriverStatus(
        statusEl,
        "Authentication token is missing or expired. Please fetch token again.",
        "err"
      );
      driverAuthCard.classList.remove("hidden");
      driverSearchCard.classList.add("hidden");
      return false;
    }
    return true;
  };

  const fetchDriverById = async (driverId) => {
    try {
      const res = await fetch("https://blb-admin-api.emooving.in/driver/getById", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: driverAuthToken
        },
        body: JSON.stringify({ driverId: Number(driverId) })
      });

      if (res.status === 401 || res.status === 403) {
        throw new Error("Authentication token is missing or expired. Please fetch token again.");
      }

      const data = await res.json();
      if (data && data.status === "success" && data.data) {
        return { ok: true, data: data.data };
      }

      return { ok: false, error: "Driver not found or an error occurred." };
    } catch (err) {
      return { ok: false, error: err.message };
    }
  };

  const renderSummaryCard = (driver, driverId) => {
    const card = document.createElement("div");
    card.className = "driver-summary-card";

    const imgSrc = driver.driverImg || placeholderAvatar;
    const statusCls = statusClass(driver.driverStatus);
    const kycCls = kycClass(driver.kycStatus);
    const franchise = driver.franchiseName || driver.fpName || "(empty)";

    card.innerHTML = `
      <div class="driver-summary-header">
        <img src="${imgSrc}" alt="Driver" class="driver-avatar" />
        <div>
          <div class="driver-summary-title">${d(driver.driverName, "(No name)")}</div>
          <div class="small-muted">ID: ${d(driver.blbDriverId || driverId)} • Franchise: ${d(franchise)}</div>
          <div class="d-flex flex-wrap gap-2 mt-2">
            <span class="pill status-pill ${statusCls}">${d(driver.driverStatus, "-")}</span>
            <span class="pill status-pill ${kycCls}">KYC: ${d(driver.kycStatus, "-")}</span>
          </div>
        </div>
      </div>
      <div class="key-info-grid">
        <div>
          <div class="label-text">Mobile</div>
          <div class="value-text">${d(driver.mobileNumber, "-")}</div>
        </div>
        <div>
          <div class="label-text">Vehicle Number</div>
          <div class="value-text">${d(driver.vehicleNumber, "-")}</div>
        </div>
        <div>
          <div class="label-text">Onboarding Date</div>
          <div class="value-text">${df(driver.onboardingDate)}</div>
        </div>
        <div>
          <div class="label-text">KYC Status</div>
          <div class="value-text">${d(driver.kycStatus, "-")}</div>
        </div>
      </div>
    `;

    return card;
  };

  const renderNotFoundCard = (driverId, error) => {
    const card = document.createElement("div");
    card.className = "not-found-card";
    card.innerHTML = `
      <div class="driver-summary-title">Driver ID: ${driverId}</div>
      <div>${error || "Driver not found or an error occurred."}</div>
    `;
    return card;
  };

  const renderFieldItem = (label, value) => {
    return `
      <div class="field-item">
        <span class="label-text">${label}</span>
        <div class="value-text">${value}</div>
      </div>
    `;
  };

  const renderFieldGrid = (fields, data) => {
    return (
      `<div class="field-grid">` +
      fields
        .map((field) => {
          const raw = data ? data[field.key] : null;
          const formatted = field.format ? field.format(raw) : d(raw);
          return renderFieldItem(field.label, formatted);
        })
        .join("") +
      `</div>`
    );
  };

  const renderDocLinks = (docs, data) => {
    return (
      `<div class="document-links">` +
      docs
        .map((doc) => {
          const href = data ? data[doc.key] : null;
          const display = href
            ? `<a href="${href}" target="_blank" rel="noopener noreferrer">View</a>`
            : "<span class=\"small-muted\">(empty)</span>";
          return `
            <div class="doc-link">
              <span class="label-text">${doc.label}</span>
              ${display}
            </div>
          `;
        })
        .join("") +
      `</div>`
    );
  };

  const renderSingleProfile = (driver, driverId) => {
    if (!driver) return "";

    const header = `
      <div class="profile-card">
        <div class="driver-profile-header">
          <div class="d-flex gap-3 align-items-center">
            <img src="${driver.driverImg || placeholderAvatar}" alt="Driver" class="profile-avatar-lg" />
            <div>
              <div class="driver-summary-title mb-1">${d(driver.driverName, "(No name)")}</div>
              <div class="driver-profile-meta">
                <span>Driver ID: ${d(driver.blbDriverId || driverId)}</span>
                <span>• Franchise: ${d(driver.franchiseName || driver.fpName, "(empty)")}</span>
              </div>
              <div class="d-flex flex-wrap gap-2 mt-2">
                <span class="pill status-pill ${statusClass(driver.driverStatus)}">${d(
      driver.driverStatus,
      "-"
    )}</span>
                <span class="pill status-pill ${kycClass(driver.kycStatus)}">KYC: ${d(
      driver.kycStatus,
      "-"
    )}</span>
                <span class="pill status-pill warning">Agreement: ${d(
      driver.agreementStatus,
      "-"
    )}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    const basicFields = [
      { label: "Father's Name", key: "fatherName" },
      { label: "Gender", key: "gender" },
      { label: "Date of Birth", key: "dateOfBirth", format: df },
      { label: "Mobile Number", key: "mobileNumber" },
      { label: "Alternate Mobile", key: "alternateMobileNumber" },
      { label: "Emergency Contact", key: "emergencyContactNumber" },
      { label: "Blood Group", key: "bloodgroup" },
      { label: "Aadhaar Number", key: "aadharNumber" },
      { label: "PAN Number", key: "panNumber" },
      { label: "Customer Type", key: "customerType" },
      { label: "Driver Status", key: "driverStatus" },
      { label: "Onboarding Date", key: "onboardingDate", format: df },
      { label: "Onboarded On", key: "onboardedOn", format: df },
      { label: "Onboard Approval Date", key: "onboardApprovalDate", format: df },
      { label: "Created By", key: "createdBy" },
      { label: "Onboarded By", key: "onboardedBy" },
      { label: "FNF Status", key: "fnfStatus" },
      { label: "FNF Date", key: "fnfDate", format: df }
    ];

    const referralFields = [
      { label: "Referral applicable", key: "referralApplicable", format: db },
      { label: "Referral amount", key: "referralAmount" },
      { label: "Payment method", key: "referralPaymentMethod" },
      { label: "Referrer name", key: "referrerName" },
      { label: "Referrer contact", key: "referrerContact" },
      { label: "Referrer UPI ID", key: "referrerUpiID" },
      { label: "Account number", key: "refAccountNumber" },
      { label: "Bank name", key: "refBankName" },
      { label: "Branch", key: "refBranchName" },
      { label: "IFSC", key: "refIfscCode" }
    ];

    const currentAddressFields = [
      { label: "Flat / House", key: "current_flat" },
      { label: "House", key: "current_house" },
      { label: "Building", key: "current_building" },
      { label: "Floor", key: "current_floor" },
      { label: "Colony", key: "current_colony" },
      { label: "Locality", key: "current_locality" },
      { label: "Street", key: "current_street" },
      { label: "Landmark", key: "current_landmark" },
      { label: "Village / Town / City", key: "current_village" },
      { label: "Town", key: "current_town" },
      { label: "City", key: "current_city" },
      { label: "District", key: "current_district" },
      { label: "Sub District", key: "current_sub_district" },
      { label: "State", key: "current_state" },
      { label: "Country", key: "current_country" },
      { label: "Pincode", key: "current_pincode" },
      { label: "Residing since", key: "residingSince", format: df },
      { label: "Residing since in years", key: "residingSinceInYears" }
    ];

    const permanentAddressFields = [
      { label: "Care of", key: "permanent_care_of" },
      { label: "Flat / House", key: "permanent_flat" },
      { label: "House", key: "permanent_house" },
      { label: "Building", key: "permanent_building" },
      { label: "Floor", key: "permanent_floor" },
      { label: "Colony", key: "permanent_colony" },
      { label: "Locality", key: "permanent_locality" },
      { label: "Street", key: "permanent_street" },
      { label: "Landmark", key: "permanent_landmark" },
      { label: "Village / Town / City", key: "permanent_village" },
      { label: "Town", key: "permanent_town" },
      { label: "City", key: "permanent_city" },
      { label: "District", key: "permanent_district" },
      { label: "Sub District", key: "permanent_sub_district" },
      { label: "State", key: "permanent_state" },
      { label: "Country", key: "permanent_country" },
      { label: "Pincode", key: "permanent_pincode" }
    ];

    const vehicleFields = [
      { label: "Own vehicle", key: "isOwnVehicle", format: db },
      { label: "Vehicle number", key: "vehicleNumber" },
      { label: "Brand", key: "brand" },
      { label: "Model year", key: "vehicleModel" },
      { label: "Chassis number", key: "chasisNumber" },
      { label: "Max speed", key: "maxSpeed" },
      { label: "Controller rating", key: "vehicleControllRating" },
      { label: "Motor rating", key: "vehicleMotorRating" },
      { label: "Weight without battery", key: "weightWithOutBattery" },
      { label: "Parking address", key: "parkingAddress" },
      { label: "Registration date", key: "registrationDate", format: df },
      { label: "Registration expiry", key: "expiryDateOfVehicle", format: df },
      { label: "Vehicle age", key: "vehicleAge" },
      { label: "E-rickshaw owner name", key: "eRickshawOwnerName" },
      { label: "E-rickshaw owner number", key: "eRickshawOwnerNumber" },
      { label: "Distance to franchise", key: "distance" },
      { label: "Asset status", key: "assetStatus" }
    ];

    const planFields = [
      { label: "Plan ID", key: "planId" },
      { label: "Plan name", key: "planName" },
      { label: "Plan amount (per EMI)", key: "planAmount" },
      { label: "Monthly rent", key: "monthlyRent" },
      { label: "Onboarding charges", key: "onboardingCharges" },
      { label: "Security amount", key: "securityAmount" },
      { label: "Non refundable SD", key: "nonRefundableSecurityDeposit" },
      { label: "Refundable SD", key: "refundableSecurityDeposit" },
      { label: "Fitment charges", key: "fitmentCharges" },
      { label: "BGV charges", key: "bgvCharges" },
      { label: "Collected amount", key: "collectedAmount" },
      { label: "Spare asset quantity", key: "spareAssetQuantiy" },
      { label: "Payment mode", key: "paymentMode" },
      { label: "Transaction ID", key: "transactionID" },
      { label: "Cash kept by", key: "cashKeptBy" },
      { label: "Payment date and time", key: "dateAndTime", format: df },
      { label: "Plan start date", key: "planStartDate", format: df },
      { label: "Plan end date", key: "planEndDate", format: df },
      { label: "Franchise SAP", key: "franchiseSap" },
      { label: "Franchise name", key: "franchiseName" }
    ];

    const assetFields = [
      { label: "Battery S/N", key: "batterySlNumber" },
      { label: "Charger S/N", key: "chargerSlNumber" },
      { label: "SOC Meter S/N", key: "socMeterSlNumber" },
      { label: "Service battery", key: "serviceAssetBattery" },
      { label: "Service charger", key: "serviceAssetCharger" },
      { label: "Service SOC", key: "serviceAssetSoc" },
      { label: "Assigned kit", key: "assignedkit" }
    ];

    const docLinks = [
      { label: "Driver photo", key: "driverImg" },
      { label: "Driver & vehicle image", key: "driverAndVehicleImg" },
      { label: "Vehicle front image", key: "driverWithVehicleFrontImg" },
      { label: "Vehicle back image", key: "driverWithVehicleBack" },
      { label: "RC image", key: "rcImg" },
      { label: "Driver license", key: "driverLicense" },
      { label: "Referrer Aadhaar", key: "referrerAadhaarImg" },
      { label: "Onboarding form (front)", key: "onboardingFormImg" },
      { label: "Onboarding form (back)", key: "onboardingFormImgBack" },
      { label: "Onboarding documents", key: "onboardingDocuments" },
      { label: "KYC document PDF", key: "kycDocumentImg" },
      { label: "BGV document", key: "bgvDocumentImg" },
      { label: "PAN card", key: "panCard" },
      { label: "Cheque 1", key: "cheque1" },
      { label: "Cheque 2", key: "cheque2" },
      { label: "Cheque 3", key: "cheque3" }
    ];

    const bankFields = [
      { label: "Bank name", key: "bankName" },
      { label: "Bank branch", key: "bankBranch" },
      { label: "Account number", key: "bankAccountNumber" },
      { label: "IFSC", key: "ifscCode" },
      { label: "UPI ID", key: "upiId" },
      { label: "UDC Bank Name", key: "udcBankName" }
    ];

    return (
      header +
      `<div class="profile-card">
        <div class="section-title">Basic Information</div>
        ${renderFieldGrid(basicFields, driver)}
      </div>
      <div class="profile-card">
        <div class="section-title">Referral Details</div>
        ${renderFieldGrid(referralFields, driver)}
      </div>
      <div class="profile-card">
        <div class="section-title">Addresses</div>
        <div class="row g-3">
          <div class="col-md-6">
            <div class="section-title mb-2">Current Address</div>
            ${renderFieldGrid(currentAddressFields, driver)}
          </div>
          <div class="col-md-6">
            <div class="section-title mb-2">Permanent Address</div>
            ${renderFieldGrid(permanentAddressFields, driver)}
          </div>
        </div>
      </div>
      <div class="profile-card">
        <div class="section-title">Vehicle & Ownership</div>
        ${renderFieldGrid(vehicleFields, driver)}
      </div>
      <div class="profile-card">
        <div class="section-title">Plan & Financials</div>
        ${renderFieldGrid(planFields, driver)}
      </div>
      <div class="profile-card">
        <div class="section-title">Assets (Main + Service)</div>
        ${renderFieldGrid(assetFields, driver)}
      </div>
      <div class="profile-card">
        <div class="section-title">KYC & Documents</div>
        <div class="field-grid">
          ${renderFieldItem("KYC Status", d(driver.kycStatus))}
          ${renderFieldItem("KYC verified CO Name", d(driver.kycVerifiedCOName))}
          ${renderFieldItem("KYC verified Name", d(driver.kycVerifiedName))}
          ${renderFieldItem("KYC verified DOB", df(driver.kycVerifiedDOB))}
          ${renderFieldItem("KYC verified Address", d(driver.kycVerifiedAddress))}
          ${renderFieldItem("KYC verified State", d(driver.kycVerifiedState))}
          ${renderFieldItem("KYC verified Pincode", d(driver.kycVerifiedPincode))}
          ${renderFieldItem("Cheque numbers", d([driver.cheque1No, driver.cheque2No, driver.cheque3No].filter(Boolean).join(", ") || "(empty)"))}
        </div>
        <div class="mt-3">${renderDocLinks(docLinks, driver)}</div>
      </div>
      <div class="profile-card">
        <div class="section-title">Bank / Payment Details (Driver)</div>
        ${renderFieldGrid(bankFields, driver)}
      </div>`
    );
  };

  const handleMultiSearch = async () => {
    if (!ensureToken(multiSearchStatus)) return;

    const raw = multiDriverInput.value
      .split(",")
      .map((id) => id.trim())
      .filter((id) => id);

    if (!raw.length) {
      setDriverStatus(multiSearchStatus, "Please enter at least one Driver ID.", "err");
      return;
    }

    setDriverStatus(multiSearchStatus, "Searching drivers...", "neutral");
    multiResults.innerHTML = "";
    multiSearchLoader.classList.remove("hidden");

    const lookups = await Promise.allSettled(raw.map((id) => fetchDriverById(id)));
    multiSearchLoader.classList.add("hidden");

    lookups.forEach((result, index) => {
      const driverId = raw[index];
      if (result.status === "fulfilled" && result.value.ok) {
        multiResults.appendChild(renderSummaryCard(result.value.data, driverId));
      } else if (result.status === "fulfilled") {
        multiResults.appendChild(renderNotFoundCard(driverId, result.value.error));
      } else {
        multiResults.appendChild(renderNotFoundCard(driverId, result.reason));
      }
    });

    setDriverStatus(multiSearchStatus, `Completed. Processed ${raw.length} ID(s).`, "ok");
  };

  const handleSingleSearch = async () => {
    if (!ensureToken(singleSearchStatus)) return;

    const driverId = singleDriverInput.value.trim();
    if (!driverId) {
      setDriverStatus(singleSearchStatus, "Please enter a Driver ID.", "err");
      return;
    }

    setDriverStatus(singleSearchStatus, "Searching driver...", "neutral");
    singleDriverProfile.innerHTML = "";
    singleSearchLoader.classList.remove("hidden");

    const result = await fetchDriverById(driverId);
    singleSearchLoader.classList.add("hidden");

    if (result.ok) {
      singleDriverProfile.innerHTML = renderSingleProfile(result.data, driverId);
      setDriverStatus(singleSearchStatus, "Driver profile loaded.", "ok");
    } else {
      setDriverStatus(
        singleSearchStatus,
        `Failed to fetch details for Driver ID ${driverId}. ${result.error || ""}`,
        "err"
      );
    }
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

  document.getElementById("driverAuthBtn").addEventListener("click", handleDriverAuth);
  document
    .getElementById("multiDriverSearchBtn")
    .addEventListener("click", handleMultiSearch);
  document
    .getElementById("singleDriverSearchBtn")
    .addEventListener("click", handleSingleSearch);

  // Initial load
  renderFpList();
});
