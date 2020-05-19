declare module 'swisseph' {
  export type CalculationResult = {
    distance: number;
    distanceSpeed: number;
    latitude: number;
    latitudeSpeed: number;
    longitude: number;
    longitudeSpeed: number;
    rflag: number;
  };
  const exported = {
    SEFLG_ASTROMETRIC: 1536,
    SEFLG_BARYCTR: 16384,
    SEFLG_DEFAULTEPH: 2,
    SEFLG_DPSIDEPS_1980: 262144,
    SEFLG_EQUATORIAL: 2048,
    SEFLG_HELCTR: 8,
    SEFLG_ICRS: 131072,
    SEFLG_J2000: 32,
    SEFLG_JPLEPH: 1,
    SEFLG_JPLHOR: 262144,
    SEFLG_JPLHOR_APPROX: 524288,
    SEFLG_MOSEPH: 4,
    SEFLG_NOABERR: 1024,
    SEFLG_NOGDEFL: 512,
    SEFLG_NONUT: 64,
    SEFLG_ORBEL_AA: 32768,
    SEFLG_RADIANS: 8192,
    SEFLG_SIDEREAL: 65536,
    SEFLG_SPEED: 256,
    SEFLG_SPEED3: 128,
    SEFLG_SWIEPH: 2,
    SEFLG_TOPOCTR: 32768,
    SEFLG_TRUEPOS: 16,
    SEFLG_XYZ: 4096,
    SE_ACRONYCHAL_RISING: 5,
    SE_ACRONYCHAL_SETTING: 6,
    SE_ADMETOS: 45,
    SE_APOLLON: 44,
    SE_APP_TO_TRUE: 1,
    SE_ARMC: 2,
    SE_ASC: 0,
    SE_AST_OFFSET: 10000,
    SE_AUNIT_TO_KM: 149597870.7,
    SE_AUNIT_TO_LIGHTYEAR: 0.000015812507409819728,
    SE_AUNIT_TO_PARSEC: 0.000004848136811095274,
    SE_BIT_ASTRO_TWILIGHT: 4096,
    SE_BIT_CIVIL_TWILIGHT: 1024,
    SE_BIT_DISC_BOTTOM: 8192,
    SE_BIT_DISC_CENTER: 256,
    SE_BIT_FIXED_DISC_SIZE: 16384,
    SE_BIT_GEOCTR_NO_ECL_LAT: 128,
    SE_BIT_NAUTIC_TWILIGHT: 2048,
    SE_BIT_NO_REFRACTION: 512,
    SE_CALC_ITRANSIT: 8,
    SE_CALC_MTRANSIT: 4,
    SE_CALC_RISE: 1,
    SE_CALC_SET: 2,
    SE_CERES: 17,
    SE_CHIRON: 15,
    SE_COASC1: 5,
    SE_COASC2: 6,
    SE_COMET_OFFSET: 1000,
    SE_COSMICAL_SETTING: 6,
    SE_CUPIDO: 40,
    SE_EARTH: 14,
    SE_ECL2HOR: 0,
    SE_ECL_1ST_VISIBLE: 512,
    SE_ECL_2ND_VISIBLE: 1024,
    SE_ECL_3RD_VISIBLE: 2048,
    SE_ECL_4TH_VISIBLE: 4096,
    SE_ECL_ALLTYPES_LUNAR: 84,
    SE_ECL_ALLTYPES_SOLAR: 63,
    SE_ECL_ANNULAR: 8,
    SE_ECL_ANNULAR_TOTAL: 32,
    SE_ECL_CENTRAL: 1,
    SE_ECL_MAX_VISIBLE: 256,
    SE_ECL_NONCENTRAL: 2,
    SE_ECL_NUT: -1,
    SE_ECL_OCC_BEG_DAYLIGHT: 8192,
    SE_ECL_OCC_END_DAYLIGHT: 16384,
    SE_ECL_ONE_TRY: 32768,
    SE_ECL_PARTBEG_VISIBLE: 512,
    SE_ECL_PARTEND_VISIBLE: 4096,
    SE_ECL_PARTIAL: 16,
    SE_ECL_PENUMBBEG_VISIBLE: 8192,
    SE_ECL_PENUMBEND_VISIBLE: 16384,
    SE_ECL_PENUMBRAL: 64,
    SE_ECL_TOTAL: 4,
    SE_ECL_TOTBEG_VISIBLE: 1024,
    SE_ECL_TOTEND_VISIBLE: 2048,
    SE_ECL_VISIBLE: 128,
    SE_EQU2HOR: 1,
    SE_EQUASC: 4,
    SE_EVENING_FIRST: 3,
    SE_EVENING_LAST: 2,
    SE_FICT_MAX: 999,
    SE_FICT_OFFSET: 40,
    SE_FICT_OFFSET_1: 39,
    SE_FIXSTAR: -10,
    SE_GREG_CAL: 1,
    SE_HADES: 41,
    SE_HARRINGTON: 50,
    SE_HELFLAG_AVKIND: 491520,
    SE_HELFLAG_AVKIND_MIN7: 131072,
    SE_HELFLAG_AVKIND_MIN9: 262144,
    SE_HELFLAG_AVKIND_PTO: 65536,
    SE_HELFLAG_AVKIND_VR: 32768,
    SE_HELFLAG_HIGH_PRECISION: 256,
    SE_HELFLAG_LONG_SEARCH: 128,
    SE_HELFLAG_NO_DETAILS: 1024,
    SE_HELFLAG_OPTICAL_PARAMS: 512,
    SE_HELFLAG_SEARCH_1_PERIOD: 2048,
    SE_HELFLAG_VISLIM_DARK: 4096,
    SE_HELFLAG_VISLIM_NOMOON: 8192,
    SE_HELFLAG_VISLIM_PHOTOPIC: 16384,
    SE_HELIACAL_RISING: 1,
    SE_HELIACAL_SETTING: 2,
    SE_HOR2ECL: 0,
    SE_HOR2EQU: 1,
    SE_INTP_APOG: 21,
    SE_INTP_PERG: 22,
    SE_ISIS: 48,
    SE_JUL_CAL: 0,
    SE_JUNO: 19,
    SE_JUPITER: 5,
    SE_KRONOS: 43,
    SE_MARS: 4,
    SE_MAX_STNAME: 256,
    SE_MC: 1,
    SE_MEAN_APOG: 12,
    SE_MEAN_NODE: 10,
    SE_MERCURY: 2,
    SE_MIXEDOPIC_FLAG: 2,
    SE_MOON: 1,
    SE_MORNING_FIRST: 1,
    SE_MORNING_LAST: 4,
    SE_NALL_NAT_POINTS: 38,
    SE_NASCMC: 8,
    SE_NEPTUNE: 8,
    SE_NEPTUNE_ADAMS: 52,
    SE_NEPTUNE_LEVERRIER: 51,
    SE_NFICT_ELEM: 15,
    SE_NIBIRU: 49,
    SE_NODBIT_FOPOINT: 256,
    SE_NODBIT_MEAN: 1,
    SE_NODBIT_OSCU: 2,
    SE_NODBIT_OSCU_BAR: 4,
    SE_NPLANETS: 23,
    SE_NSIDM_PREDEF: 43,
    SE_OSCU_APOG: 13,
    SE_PALLAS: 18,
    SE_PHOLUS: 16,
    SE_PHOTOPIC_FLAG: 0,
    SE_PLUTO: 9,
    SE_PLUTO_LOWELL: 53,
    SE_PLUTO_PICKERING: 54,
    SE_POLASC: 7,
    SE_POSEIDON: 47,
    SE_PROSERPINA: 57,
    SE_SATURN: 6,
    SE_SCOTOPIC_FLAG: 1,
    SE_SIDBITS: 256,
    SE_SIDBIT_ECL_T0: 256,
    SE_SIDBIT_SSY_PLANE: 512,
    SE_SIDBIT_USER_UT: 1024,
    SE_SIDM_ALDEBARAN_15TAU: 14,
    SE_SIDM_ARYABHATA: 23,
    SE_SIDM_ARYABHATA_522: 37,
    SE_SIDM_ARYABHATA_MSUN: 24,
    SE_SIDM_B1950: 20,
    SE_SIDM_BABYL_BRITTON: 38,
    SE_SIDM_BABYL_ETPSC: 13,
    SE_SIDM_BABYL_HUBER: 12,
    SE_SIDM_BABYL_KUGLER1: 9,
    SE_SIDM_BABYL_KUGLER2: 10,
    SE_SIDM_BABYL_KUGLER3: 11,
    SE_SIDM_DELUCE: 2,
    SE_SIDM_DJWHAL_KHUL: 6,
    SE_SIDM_FAGAN_BRADLEY: 0,
    SE_SIDM_GALALIGN_MARDYKS: 34,
    SE_SIDM_GALCENT_0SAG: 17,
    SE_SIDM_GALCENT_COCHRANE: 40,
    SE_SIDM_GALCENT_MULA_WILHELM: 36,
    SE_SIDM_GALCENT_RGILBRAND: 30,
    SE_SIDM_GALEQU_FIORENZA: 41,
    SE_SIDM_GALEQU_IAU1958: 31,
    SE_SIDM_GALEQU_MULA: 33,
    SE_SIDM_GALEQU_TRUE: 32,
    SE_SIDM_HIPPARCHOS: 15,
    SE_SIDM_J1900: 19,
    SE_SIDM_J2000: 18,
    SE_SIDM_JN_BHASIN: 8,
    SE_SIDM_KRISHNAMURTI: 5,
    SE_SIDM_LAHIRI: 1,
    SE_SIDM_RAMAN: 3,
    SE_SIDM_SASSANIAN: 16,
    SE_SIDM_SS_CITRA: 26,
    SE_SIDM_SS_REVATI: 25,
    SE_SIDM_SURYASIDDHANTA: 21,
    SE_SIDM_SURYASIDDHANTA_MSUN: 22,
    SE_SIDM_TRUE_CITRA: 27,
    SE_SIDM_TRUE_MULA: 35,
    SE_SIDM_TRUE_PUSHYA: 29,
    SE_SIDM_TRUE_REVATI: 28,
    SE_SIDM_TRUE_SHEORAN: 39,
    SE_SIDM_USER: 255,
    SE_SIDM_USHASHASHI: 4,
    SE_SIDM_VALENS_MOON: 42,
    SE_SIDM_YUKTESHWAR: 7,
    SE_SPLIT_DEG_KEEP_DEG: 32,
    SE_SPLIT_DEG_KEEP_SIGN: 16,
    SE_SPLIT_DEG_NAKSHATRA: 1024,
    SE_SPLIT_DEG_ROUND_DEG: 4,
    SE_SPLIT_DEG_ROUND_MIN: 2,
    SE_SPLIT_DEG_ROUND_SEC: 1,
    SE_SPLIT_DEG_ZODIACAL: 8,
    SE_SUN: 0,
    SE_TRUE_NODE: 11,
    SE_TRUE_TO_APP: 0,
    SE_URANUS: 7,
    SE_VARUNA: 30000,
    SE_VENUS: 3,
    SE_VERTEX: 3,
    SE_VESTA: 20,
    SE_VULCAN: 55,
    SE_VULKANUS: 46,
    SE_WALDEMATH: 58,
    SE_WHITE_MOON: 56,
    SE_ZEUS: 42,
    SIMULATE_VICTORVB: 1,
    TJD_INVALID: 99999999,
    ephemeris: {},
    calc: (options, callback) => any,
    swe_azalt: () => any,
    swe_azalt_rev: () => any,
    swe_calc: () => any,
    swe_calc_ut: (julianDate, planetCode: number, flag, callaback) =>
      CalculationResult,
    swe_close: () => any,
    swe_cotrans: () => any,
    swe_cotrans_sp: () => any,
    swe_cs2degstr: () => any,
    swe_cs2lonlatstr: () => any,
    swe_cs2timestr: () => any,
    swe_csnorm: () => any,
    swe_csroundsec: () => any,
    swe_d2l: () => any,
    swe_date_conversion: () => any,
    swe_day_of_week: () => any,
    swe_deg_midp: () => any,
    swe_degnorm: () => any,
    swe_deltat: () => any,
    swe_difcs2n: () => any,
    swe_difcsn: () => any,
    swe_difdeg2n: () => any,
    swe_difdegn: () => any,
    swe_difrad2n: () => any,
    swe_fixstar: () => any,
    swe_fixstar2: () => any,
    swe_fixstar2_mag: () => any,
    swe_fixstar2_ut: () => any,
    swe_fixstar_mag: () => any,
    swe_fixstar_ut: () => any,
    swe_gauquelin_sector: () => any,
    swe_get_ayanamsa: () => any,
    swe_get_ayanamsa_ex: () => any,
    swe_get_ayanamsa_ex_ut: () => any,
    swe_get_ayanamsa_name: () => any,
    swe_get_ayanamsa_ut: () => any,
    swe_get_orbital_elements: () => any,
    swe_get_planet_name: () => any,
    swe_get_tid_acc: () => any,
    swe_heliacal_pheno_ut: () => any,
    swe_heliacal_ut: () => any,
    swe_houses: () => any,
    swe_houses_armc: () => any,
    swe_houses_ex: () => any,
    swe_houses_pos: () => any,
    swe_jdet_to_utc: () => any,
    swe_jdut1_to_utc: () => any,
    swe_julday: (
      year: number,
      month: number,
      day: number,
      hour: number,
      calendar: number,
      callback: (result: any) => void
    ) => any,
    swe_lun_eclipse_how: () => any,
    swe_lun_eclipse_when: () => any,
    swe_lun_eclipse_when_loc: () => any,
    swe_lun_occult_when_glob: () => any,
    swe_lun_occult_when_loc: () => any,
    swe_lun_occult_where: () => any,
    swe_nod_aps: () => any,
    swe_nod_aps_ut: () => any,
    swe_orbit_max_min_true_distance: () => any,
    swe_pheno: () => any,
    swe_pheno_ut: () => any,
    swe_rad_midp: () => any,
    swe_radnorm: () => any,
    swe_refrac: () => any,
    swe_refrac_extended: () => any,
    swe_revjul: () => any,
    swe_rise_trans: () => any,
    swe_rise_trans_true_hor: () => any,
    swe_set_ephe_path: () => any,
    swe_set_jpl_file: () => any,
    swe_set_lapse_rate: () => any,
    swe_set_sid_mode: () => any,
    swe_set_tid_acc: () => any,
    swe_set_topo: () => any,
    swe_sidtime: () => any,
    swe_sidtime0: () => any,
    swe_sol_eclipse_how: () => any,
    swe_sol_eclipse_when_glob: () => any,
    swe_sol_eclipse_when_loc: () => any,
    swe_sol_eclipse_where: () => any,
    swe_split_deg: () => any,
    swe_time_equ: () => any,
    swe_utc_time_zone: () => any,
    swe_utc_to_jd: () => any,
    swe_version: () => any,
    swe_vis_limit_mag: () => any
  };

  export default exported;
}
