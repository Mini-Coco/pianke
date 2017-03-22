;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-shezhi" viewBox="0 0 1000 1000">' +
    '' +
    '<path d="M884.0768 385.6485l-58.7806-6.1878c-6.4999-21.5414-15.1553-42.4033-25.8435-62.2968l37.2123-45.9738c15.0574-18.6074 12.3731-47.6647-6.1141-66.1521l-57.8911-57.8878c-10.1086-10.1071-23.8508-15.9052-37.703-15.9052-10.7042 0-20.5419 3.3837-28.4549 9.7864l-45.9727 37.2118c-19.8933-10.6888-40.755-19.3429-62.2963-25.8425l-6.1911-58.7791c-2.5074-23.8049-24.9581-42.4522-51.1104-42.4522h-81.85885590878611c-26.1503 0-48.601 18.6474-51.1114 42.4532l-6.1881 58.7771c-21.5363 6.4976-42.395 15.1507-62.2923 25.8415l-45.9827-37.2148c-7.909-6.4007-17.7477-9.7844-28.4529-9.7844-13.8542 0-27.5964 5.7971-37.705 15.9062l-57.8841 57.8808c-18.4892 18.4905-21.1805 47.5508-6.1211 66.1601l37.2203 45.9708c-10.6902 19.8935-19.3437 40.7524-25.8435 62.2918l-58.7915 6.1908c-23.8038 2.5093-42.452 24.9581-42.452 51.1063v81.85550196966457c0 26.1523 18.6471 48.604 42.453 51.1113l58.7856 6.1848c6.4999 21.5384 15.1553 42.4003 25.8425 62.2908l-37.2173 45.9808c-15.0574 18.6074-12.3711 47.6667 6.1161 66.1551l57.8861 57.8818c10.1106 10.1121 23.8548 15.9102 37.708 15.9102 10.7022 0 20.5409-3.3837 28.4549-9.7854l45.9757-37.2198c19.8943 10.6888 40.758 19.3419 62.2923 25.8425l6.1941 58.7801c2.5044 23.8089 24.9511 42.4572 51.1014 42.4572h81.86385272581366c26.1503 0 48.601-18.6444 51.1134-42.4502l6.1861-58.7811c21.5463-6.5006 42.406-15.1537 62.2963-25.8425l45.9717 37.2048c7.913 6.4087 17.7577 9.7964 28.4679 9.7964 13.8522 0 27.5924-5.7981 37.695-15.9012l57.8891-57.8888c18.4892-18.4885 21.1785-47.5458 6.1211-66.1521l-37.2173-45.9748c10.6912-19.8935 19.3477-40.7544 25.8485-62.2918l58.7726-6.1938c23.8118-2.5043 42.463-24.9521 42.463-51.1034v-81.86049858196142C926.5308 410.6066 907.8837 388.1588 884.0768 385.6485zM886.1845 518.6154c0 5.9809-3.7836 10.7117-6.341 10.9786L793.4945 538.6968l-3.4808 13.5808c-6.9796 27.2175-17.8246 53.3538-32.2325 77.6803l-7.1464 12.0698 54.6692 67.5322c1.612 1.9946 0.9444 8.0136-3.2869 12.2467l-57.8911 57.8888c-2.5194 2.5183-6.0312 4.0802-9.1662 4.0802-1.3242 0-2.4454-0.2908-3.08-0.8035l-67.539-54.6609-12.0653 7.1452c-24.3205 14.4012-50.4579 25.2429-77.6895 32.2222l-13.5843 3.4826-9.0872 86.3545c-0.2698 2.5503-5.0028 6.3347-10.99 6.3347h-81.86385272581366c-5.9812 0-10.7092-3.7844-10.978-6.3387l-9.0982-86.3545-13.5823-3.4826c-27.2167-6.9773-53.354-17.8209-77.6875-32.2262l-12.0683-7.1442-67.532 54.6699c-0.6296 0.5087-1.7489 0.8015-3.071 0.8015-3.137 0-6.6548-1.5689-9.1792-4.0932l-57.8851-57.8808c-4.2293-4.2301-4.8969-10.253-3.2829-12.2487l54.6642-67.5382-7.1434-12.0668c-14.4018-24.3255-25.2439-50.4608-32.2245-77.6833l-3.4828-13.5838-86.362-9.0888c-2.5494-0.2678-6.332-5.0016-6.332-10.9885v-81.85550196966457c0-5.9849 3.7856-10.7147 6.335-10.9836l86.362-9.0948 3.4818-13.5828c6.9806-27.2215 17.8236-53.3598 32.2275-77.6853l7.1464-12.0688-54.6712-67.5272c-1.614-1.9946-0.9424-8.0166 3.2899-12.2507l57.8841-57.8798c2.5224-2.5223 6.0382-4.0892 9.1762-4.0892 1.3232 0 2.4434 0.2918 3.071 0.8005l67.54 54.6639 12.0683-7.1442c24.3345-14.4062 50.4718-25.2479 77.6845-32.2232l13.5853-3.4816 9.0912-86.3515c0.2698-2.5513 5.0008-6.3377 10.988-6.3377h81.85885590878611c5.9842 0 10.7172 3.7844 10.986 6.3347l9.0962 86.3525 13.5823 3.4826c27.2247 6.9803 53.363 17.8219 77.6905 32.2252l12.0673 7.1462 67.531-54.6629c0.6286-0.5087 1.7479-0.8005 3.071-0.8005 3.137 0 6.6528 1.5659 9.1772 4.0892l57.8871 57.8858c4.2303 4.2301 4.8959 10.251 3.2819 12.2447l-54.6602 67.5292 7.1434 12.0678c14.4028 24.3255 25.2469 50.4648 32.2295 77.6903l3.4808 13.5818 86.354 9.0918c2.5494 0.2698 6.333 4.9996 6.333 10.9836V518.6153787731918zM499.9995 343.8129c-73.819 0-133.8747 60.0533-133.8747 133.8682 0 73.816 60.0557 133.8692 133.8747 133.8692 73.817 0 133.8747-60.0543 133.8747-133.8692C633.8742 403.8662 573.8165 343.8129 499.9995 343.8129zM499.9995 571.2057c-51.5721 0-93.5284-41.9526-93.5284-93.5236 0-51.57 41.9563-93.5246 93.5284-93.5246 51.5721 0 93.5284 41.9546 93.5284 93.5246C593.5279 529.2532 551.5716 571.2057 499.9995 571.2057z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-pintu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M489.515 144.737c36.536 5.914 64.434 37.605 64.434 75.81 0 42.416-34.384 76.8-76.8 76.8s-76.8-34.384-76.8-76.8c0-32.17 19.779-59.722 47.842-71.153l-12.643-36.307c-43.063 16.683-73.599 58.506-73.599 107.461 0 63.623 51.577 115.2 115.2 115.2 63.621 0 115.2-51.577 115.2-115.2 0-45.507-26.387-84.852-64.698-103.568l0.003-15.771h174.081v330.398l38.4-0.13v-368.667h-250.879l0.259 81.928z"  ></path>' +
    '' +
    '<path d="M174.334 432.472c5.914-36.537 37.605-64.434 75.81-64.434 42.416 0 76.8 34.384 76.8 76.8 0 42.414-34.384 76.8-76.8 76.8-32.171 0-59.723-19.781-71.154-47.843l-36.306 12.643c16.682 43.063 58.506 73.6 107.461 73.6 63.623 0 115.2-51.579 115.2-115.2 0-63.623-51.579-115.2-115.2-115.2-45.506 0-84.849 26.385-103.567 64.691h-15.773v-293.12h311.263v-38.4h-349.663c0 0 0.381 366.278 0 369.921l81.928-0.258z"  ></path>' +
    '' +
    '<path d="M489.515 739.472c36.536 5.914 64.434 37.605 64.434 75.81 0 42.416-34.384 76.8-76.8 76.8s-76.8-34.384-76.8-76.8c0-32.17 19.779-59.722 47.842-71.153l-12.643-36.305c-43.063 16.683-73.599 58.504-73.599 107.461 0 63.623 51.577 115.2 115.2 115.2 63.621 0 115.2-51.577 115.2-115.2 0-45.502-26.383-84.847-64.689-103.564l-0.006-1.722h212.481v-221.364h-38.4v182.962h-212.479l0.259 67.875z"  ></path>' +
    '' +
    '<path d="M770.876 431.272c5.914-36.537 37.605-64.434 75.81-64.434 42.418 0 76.8 34.384 76.8 76.8 0 42.414-34.382 76.8-76.8 76.8-32.169 0-59.721-19.781-71.153-47.843l-36.306 12.643c16.684 43.063 58.504 73.6 107.461 73.6 63.624 0 115.2-51.579 115.2-115.2 0-63.623-51.576-115.2-115.2-115.2-48.090 0-89.298 29.467-106.553 71.331l0.002 31.708 30.737-0.204z"  ></path>' +
    '' +
    '<path d="M442.069 671.597h-311.263v-184.014h-38.4v222.906l349.663-0.49z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-ttpodicon" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M514.945075 278.849916c-12.81998 0-23.224957 10.381441-23.224957 23.224957l0 341.169263-88.76465-88.741114c-9.080819-9.080819-23.781636-9.080819-32.839943 0-9.080819 9.057283-9.080819 23.759123 0 32.839943l128.408555 128.385019c4.529153 4.551666 10.474562 6.804986 16.419971 6.804986 5.945409 0 11.890818-2.25332 16.419971-6.804986l128.408555-128.385019c9.080819-9.080819 9.080819-23.781636 0-32.839943-9.080819-9.080819-23.781636-9.080819-32.839943 0l-88.76465 88.741114L538.167986 302.074873C538.169009 289.231357 527.765055 278.849916 514.945075 278.849916zM810.129005 759.134587c-4.319375 4.761444-8.755408 9.428743-13.284561 13.957897-9.080819 9.080819-9.080819 23.759123 0 32.839943 4.529153 4.529153 10.474562 6.804986 16.419971 6.804986 5.945409 0 11.867282-2.275833 16.419971-6.804986 5.063319-5.085832 10.009981-10.264784 14.84101-15.58393 8.616238-9.499351 7.919367-24.176632-1.578961-32.79287C833.423547 748.915851 818.745243 749.635235 810.129005 759.134587zM925.856749 344.715019C874.693486 218.745003 772.737396 123.895775 646.11758 84.506672 503.425717 40.148395 343.128895 71.593572 227.91178 166.67509 113.832582 260.827447 52.264341 410.834926 67.220984 558.125527c14.700817 144.967696 103.651708 278.346449 232.106312 348.159468 65.865103 35.765575 139.719158 53.67241 213.573213 53.67241s147.684574-17.905812 213.549677-53.67241c11.263531-6.108115 15.467273-20.228717 9.336646-31.492248-6.154163-11.241019-20.205181-15.421224-31.515784-9.336646-118.027114 64.123436-264.713964 64.145949-382.764614 0-115.171066-62.566988-194.900945-182.103478-208.068849-311.998897-13.423731-132.078131 41.780569-266.571265 144.06207-350.946954 103.233176-85.234243 246.854201-113.405863 374.821711-73.621764 113.289206 35.208896 204.585515 120.256898 250.500241 233.313813 45.89119 112.917746 39.760562 237.424434-16.814967 341.564259-6.131651 11.263531-1.950422 25.361621 9.31311 31.492248 11.310603 6.108115 25.361621 1.904373 31.492248-9.31311C970.053344 609.522104 976.9975 470.591915 925.856749 344.715019z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-yingsaitong" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M894.773 451.456l-310.135-322.8c-19.269-20.041-45.033-31.070-72.64-31.070-27.61 0-53.371 11.028-72.639 31.070l-310.133 322.8c-32.002 33.319-27.882 62.118-22.591 74.147 3.772 8.535 16.501 31.997 53.17 31.997h45.458v248.324c0 56.38 40.487 109.463 98.027 109.463h132.026v-262.802c0-28.174-4.268-43.874 24.514-43.874h104.341c28.783 0 24.512 15.701 24.512 43.874v262.804h132.025c57.54 0 98.031-53.084 98.031-109.463v-248.325h45.455c36.671 0 49.403-23.461 53.171-31.997 5.29-12.030 9.41-40.829-22.591-74.148z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tongzhi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M856.789 766.663l-66.039-116.184v-242.822c0-50.631-18.393-104.010-51.791-150.305-33.975-47.098-81.676-83.95-134.308-103.772-0.307-0.115-0.616-0.223-0.927-0.324-1.207-0.389-5.693-1.822-12.283-3.716v-8.088c0-43.811-35.643-79.454-79.454-79.454s-79.454 35.643-79.454 79.454v7.506c-6.138 1.753-10.029 3.001-10.476 3.146-0.232 0.074-0.462 0.154-0.69 0.237-53.438 19.349-101.952 56.163-136.608 103.657-34.025 46.627-52.76 100.489-52.76 151.659v242.823l-70.669 124.374c-8.502 14.823-8.449 33.277 0.147 48.171 8.543 14.797 24.535 23.987 41.736 23.987h174.634c10.013 65.032 66.352 114.987 134.141 114.987s124.13-49.957 134.141-114.987h174.605c26.619 0 48.275-21.629 48.275-48.214 0-12.069-4.314-23.356-12.218-32.136zM511.988 103.475c20.293 0 36.921 15.998 37.93 36.045-4.257-0.806-8.568-1.543-12.854-2.168-1.837-0.266-3.672-0.281-5.463-0.068-0.739-0.108-1.492-0.22-2.255-0.338-5.298-0.8-11.303-1.705-18.002-1.705-6.692 0-12.694 0.906-17.992 1.703-0.649 0.097-1.288 0.194-1.92 0.288-1.856-0.25-3.758-0.253-5.665 0.015-3.907 0.549-7.822 1.189-11.679 1.89 1.198-19.865 17.735-35.663 37.899-35.663zM511.988 920.525c-44.842 0-82.446-31.492-91.921-73.512h183.845c-9.477 42.022-47.079 73.512-91.923 73.512zM820.733 805.538h-617.519c-2.431 0-4.66-1.247-5.816-3.248-1.234-2.137-1.268-4.742-0.048-6.871l73.417-129.212c1.775-3.121 2.708-6.653 2.708-10.245v-248.305c0-89.757 69.46-182.625 161.637-216.184 3.030-0.957 26.868-8.359 50.913-12.311 1.431 0.157 2.889 0.167 4.357 0.017 3.236-0.329 6.245-0.784 9.154-1.222 4.413-0.666 8.224-1.24 11.805-1.24 3.588 0 7.401 0.575 11.816 1.241 2.906 0.439 5.912 0.892 9.143 1.221 1.328 0.134 2.647 0.141 3.944 0.025 24.954 4.18 50.419 12.146 54.261 13.371 90.551 34.327 158.77 126.702 158.77 215.083v248.303c0 3.593 0.934 7.124 2.708 10.247l70.016 123.18c0.978 1.721 2.198 3.296 3.623 4.671 1.231 1.189 1.909 2.871 1.909 4.738-0.002 3.78-2.988 6.742-6.802 6.742z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-heart" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M486.4 972.8c-4.3008 0-8.5504-1.0752-12.4416-3.2256-4.8128-2.6624-119.0912-66.6112-235.1104-171.3664-68.6592-61.952-123.4432-125.3376-162.9696-188.416-50.3808-80.4352-75.8784-160.7168-75.8784-238.592 0-148.224 120.576-268.8 268.8-268.8 50.176 0 103.4752 18.7904 150.0672 52.9408 27.2384 19.968 50.432 44.032 67.5328 69.5808 17.1008-25.5488 40.2944-49.6128 67.5328-69.5808 46.592-34.1504 99.8912-52.9408 150.0672-52.9408 148.224 0 268.8 120.576 268.8 268.8 0 77.8752-25.5488 158.1568-75.8784 238.592-39.4752 63.0784-94.3104 126.464-162.9184 188.416-116.0192 104.7552-230.2976 168.704-235.1104 171.3664-3.8912 2.1504-8.1408 3.2256-12.4416 3.2256zM268.8 153.6c-119.9616 0-217.6 97.6384-217.6 217.6 0 155.648 120.32 297.0624 221.2352 388.352 90.112 81.5104 181.4528 138.6496 213.9648 158.0544 32.512-19.4048 123.8528-76.544 213.9648-158.0544 100.9152-91.2384 221.2352-232.704 221.2352-388.352 0-119.9616-97.6384-217.6-217.6-217.6-87.1936 0-171.8784 71.7312-193.3312 136.0896-3.4816 10.4448-13.2608 17.5104-24.2688 17.5104s-20.7872-7.0656-24.2688-17.5104c-21.4528-64.3584-106.1376-136.0896-193.3312-136.0896z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-wode2" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M871.664 894.639c-1.967-152.878-100.036-282.676-236.318-332.689 74.93-42.983 125.623-123.593 125.623-215.958-0.001-137.305-111.76-249.011-249.149-249.011s-249.148 111.707-249.148 249.010c0 92.37 50.697 172.982 125.633 215.964-137.681 50.526-236.365 182.482-236.365 337.394 0 15.284 12.399 27.667 27.683 27.667h664.395c0.143 0.008 0.271 0 0.361 0 15.302 0 27.683-12.384 27.683-27.667 0-1.602-0.126-3.178-0.397-4.709z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-group28" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M841.365 137.983h-71.579l-26.842-71.842-26.843 71.842h-71.58l58.159 44.903-26.845 80.822 67.109-49.394 67.104 49.394-26.843-80.822 58.159-44.903zM663.967 371.907h-51.373l-19.263-51.561-19.266 51.561h-51.373l41.741 32.227-19.267 58.004 48.164-35.45 48.159 35.45-19.265-58.004 41.741-32.227zM839.229 629.721h-38.937l-14.602-39.080-14.603 39.080h-38.936l31.636 24.425-14.603 43.964 36.505-26.869 36.502 26.869-14.602-43.964 31.637-24.425z"  ></path>' +
    '' +
    '<path d="M496.508 118.873c-200.218 18.646-357.025 187.865-357.025 394.117 0 218.702 176.275 395.973 393.688 395.973 123.081 0 249.919-56.881 322.108-145.855-12.077 1.139-41.328 1.877-53.683 1.877-217.413-0.001-393.687-177.293-393.687-395.994 0-94.891 33.258-181.889 88.599-250.117z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-youjian" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M826.711 887.207h-623.72c-75.227 0-136.446-61.22-136.446-136.426v-477.563c0-75.228 61.22-136.426 136.446-136.426h623.72c75.248 0 136.446 61.198 136.446 136.446v477.541c0 75.207-61.198 136.426-136.446 136.426zM202.991 175.782c-53.739 0-97.459 43.718-97.459 97.459v477.541c0 53.739 43.74 97.459 97.459 97.459h623.72c53.761 0 97.479-43.718 97.479-97.459v-477.563c0-53.739-43.718-97.459-97.479-97.459h-623.72zM505.12 530.285c-3.844 0-7.707-1.136-10.991-3.41l-345.992-236.549c-8.884-6.074-11.157-18.203-5.103-27.087 6.074-8.864 18.202-11.137 27.107-5.103l335.289 229.236 354.546-229.483c9.029-5.868 21.115-3.264 26.983 5.765 5.827 9.049 3.244 21.115-5.785 26.963l-365.475 236.509c-3.224 2.107-6.901 3.161-10.579 3.161z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-fangdajing" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M902.142 856.802l-114.162-94.677c23.627-29.6 42.833-62.486 57.251-98.159 19.468-48.17 29.339-99.309 29.339-152.002 0-52.692-9.872-103.834-29.339-152.002-18.83-46.588-45.798-88.443-80.157-124.401-34.443-36.044-74.582-64.357-119.306-84.154-46.405-20.54-95.695-30.955-146.505-30.955s-100.102 10.415-146.507 30.955c-44.724 19.796-84.864 48.111-119.306 84.154-34.36 35.958-61.328 77.812-80.159 124.401-19.468 48.169-29.339 99.309-29.339 152.002 0 52.692 9.872 103.835 29.339 152.002 18.831 46.588 45.799 88.442 80.159 124.4 34.441 36.043 74.583 64.357 119.306 84.153 46.406 20.54 95.697 30.955 146.507 30.955s100.101-10.415 146.505-30.955c38.949-17.241 74.419-40.945 105.68-70.586l116.248 96.406c5.037 4.178 11.14 6.214 17.209 6.214 7.753 0 15.448-3.324 20.783-9.759 9.514-11.467 7.926-28.478-3.545-37.989zM499.262 849.509c-177.192 0-321.348-151.422-321.348-337.547s144.157-337.548 321.348-337.548c177.19 0 321.344 151.423 321.344 337.548s-144.155 337.547-321.344 337.547z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-biaoqian" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M758.094 167.557v646.348l-246.094-164.092-27.334 18.193-218.76 145.898v-646.348h492.188M758.094 118.338h-492.188c-27.158 0-49.219 22.060-49.219 49.219v738.281l295.313-196.875 295.313 196.875v-738.281c0-27.158-22.060-49.219-49.219-49.219v0z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-dingyue" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M201.595 733.158c-29.012 0-52.528 23.498-52.528 52.509 0 29.011 23.516 52.527 52.528 52.527s52.528-23.516 52.528-52.527c0-29.011-23.516-52.509-52.528-52.509z"  ></path>' +
    '' +
    '<path d="M510.318 598.697c-34.252-52.83-79.981-95.485-135.915-126.778-94.451-52.842-185.137-54.751-188.95-54.805-0.152-0.002-0.302-0.003-0.453-0.003-16.685 0-30.368 13.403-30.61 30.14-0.246 16.89 13.211 30.781 30.1 31.026 0.8 0.016 81.030 2.090 162.155 48.217 46.66 26.53 84.741 62.457 113.185 106.784 35.995 56.094 56.929 126.335 62.217 208.768 1.038 16.192 14.493 28.629 30.492 28.629 0.658 0 1.322-0.022 1.987-0.065 16.857-1.081 29.646-15.623 28.564-32.48-6.007-93.66-30.492-174.216-72.773-239.433z"  ></path>' +
    '' +
    '<path d="M885.797 841.367c-8.196-155.709-50.001-289.163-124.253-396.654-59.685-86.404-140.089-155.954-238.98-206.715-87.311-44.818-173.192-66.341-229.862-76.506-61.711-11.068-102.848-11.512-104.569-11.525-16.838-0.158-30.656 13.433-30.805 30.312-0.151 16.878 13.417 30.686 30.295 30.857 0.383 0.004 39.098 0.505 96.488 10.965 52.567 9.58 132.103 29.732 212.495 71.333 89.346 46.236 161.811 109.208 215.381 187.165 67.236 97.842 105.162 220.304 112.725 363.983 0.86 16.323 14.362 28.978 30.517 28.978 0.541 0 1.087-0.014 1.634-0.043 16.867-0.889 29.821-15.283 28.934-32.152z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-wenzhang" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M819.5 378.111v484.095c0 31.64-25.676 57.294-57.357 57.294h-575.287c-31.744 0-57.357-25.587-57.357-57.402v-650.195c0-31.625 25.797-57.402 57.31-57.402h484.195c9.666 0 17.5-7.836 17.5-17.5s-7.836-17.5-17.5-17.5h-484.195c-50.837 0-92.31 41.441-92.31 92.403v650.195c0 51.153 41.292 92.403 92.357 92.403h575.287c51.005 0 92.357-41.318 92.357-92.294v-548.416c0-9.666-7.836-17.5-17.5-17.5-9.666 0-17.5 7.836-17.5 17.5v64.322z"  ></path>' +
    '' +
    '<path d="M237 412h249.999v35h-249.999v-35z"  ></path>' +
    '' +
    '<path d="M237 612h450v35h-450v-35z"  ></path>' +
    '' +
    '<path d="M899.34 65.787l24.749 24.749-353.553 353.553-24.749-24.749 353.553-353.553z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shequ" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M886.993 62h-749.983c-27.625 0-49.999 22.401-49.999 49.999v600.011c0 27.602 22.373 49.972 49.999 49.972h118.397l-18.423 199.794 239.816-199.794h410.192c27.598 0 49.994-22.373 49.994-49.972v-600.015c0-27.598-22.396-49.994-49.994-49.994zM512 586.984c-86.996 0-162.297-49.449-199.746-121.695l44.922-21.847c29.299 55.597 87.6 93.544 154.823 93.544 71.125 0 132.198-42.497 159.571-103.421l44.922 21.875c-35.522 77.547-113.622 131.545-204.492 131.545z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shouye_taiyang_shijiantixing1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M521.232 230.674c144.099 0 261.629 117.531 261.629 261.643 0 144.099-117.543 261.6-261.629 261.6-144.099 0-261.643-117.517-261.643-261.6 0-144.113 117.531-261.643 261.643-261.643zM521.204 44.411l36.452 139.914c-10.938-1.367-23.597-2.149-36.437-2.149s-25.5 0.781-37.932 2.297l37.919-140.061zM643.599 207.414c46.661 20.467 85.812 50.386 116.469 87.569l-14.89-190.562-101.58 102.995zM769.499 306.832c28.541 37.748 48.877 83.271 57.473 132.827l82.13-171.3-139.603 38.474zM829.183 455.892l139.927 36.425-139.927 36.425c1.382-10.935 2.172-23.588 2.172-36.425s-0.788-25.49-2.319-37.911zM806.093 614.655c-20.565 46.784-50.602 86.035-87.916 116.765l190.923-15.158-103.008-101.611zM706.691 740.527c-37.949 28.685-83.709 49.133-133.514 57.801l171.99 81.861-38.474-139.659zM557.655 800.239l-36.452 139.984-36.425-139.984c10.939 1.395 23.596 2.19 36.437 2.19s25.499-0.796 37.922-2.341zM398.851 777.149c-46.678-20.493-85.839-50.443-116.496-87.658l14.889 190.697 101.611-103.037zM273.009 677.789c-28.583-37.772-48.951-83.332-57.568-132.929l-82.119 171.401 139.687-38.474zM213.266 528.771l-139.957-36.452 139.957-36.437c-1.367 10.94-2.15 23.604-2.15 36.448s0.782 25.504 2.299 37.939zM236.357 369.966c20.551-46.806 50.571-86.079 87.869-116.843l-190.906 15.236 103.037 101.611zM335.731 244.023c37.888-28.62 83.575-49.014 133.297-57.649l-171.772-81.953 38.474 139.603z" fill="#F29135" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)