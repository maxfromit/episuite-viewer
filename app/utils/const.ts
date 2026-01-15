export const rawData = {
  parameters: {
    cas: '002921-88-2',
    smiles: null,
    caseNumber: null,
    userLogKow: {
      value: -999,
      units: '',
      valueType: 'USER_PROVIDED'
    },
    userMeltingPoint: {
      value: -999,
      units: 'celsius',
      valueType: 'USER_PROVIDED'
    },
    userBoilingPoint: {
      value: -999,
      units: 'celsius',
      valueType: 'USER_PROVIDED'
    },
    userWaterSolubility: {
      value: -999,
      units: 'mg/L',
      valueType: 'USER_PROVIDED'
    },
    userVaporPressure: {
      value: -999,
      units: 'mmHg',
      valueType: 'USER_PROVIDED'
    },
    userHenrysLawConstant: {
      value: -999,
      units: 'atm-m3/mol',
      valueType: 'USER_PROVIDED'
    },
    userLogKoa: {
      value: -999,
      units: '',
      valueType: 'USER_PROVIDED'
    },
    userLogKoc: {
      value: -999,
      units: 'L/kg',
      valueType: 'USER_PROVIDED'
    },
    userHydroxylReactionRateConstant: {
      value: -999,
      units: 'cm3/molecule-sec',
      valueType: 'USER_PROVIDED'
    },
    userDermalPermeabilityCoefficient: {
      value: -999,
      units: 'cm/hr',
      valueType: 'USER_PROVIDED'
    },
    userBiodegradationRateRemoveMetals: {
      value: true,
      units: 'boolean',
      valueType: 'USER_PROVIDED'
    },
    userAtmosphericHydroxylRadicalConcentration: {
      value: 1500000,
      units: 'radicals/cm3',
      valueType: 'USER_PROVIDED'
    },
    userAtmosphericOzoneConcentration: {
      value: 700000000000,
      units: 'molecules/cm3',
      valueType: 'USER_PROVIDED'
    },
    userAtmosphericDaylightHours: {
      value: 12,
      units: 'hours',
      valueType: 'USER_PROVIDED'
    },
    userStpHalfLifePrimaryClarifier: {
      value: 10000,
      units: 'hours',
      valueType: 'USER_PROVIDED'
    },
    userStpHalfLifeAerationVessel: {
      value: 10000,
      units: 'hours',
      valueType: 'USER_PROVIDED'
    },
    userStpHalfLifeSettlingTank: {
      value: 10000,
      units: 'hours',
      valueType: 'USER_PROVIDED'
    },
    userFugacityHalfLifeAir: {
      value: 0,
      units: 'hours',
      valueType: 'USER_PROVIDED'
    },
    userFugacityHalfLifeWater: {
      value: 0,
      units: 'hours',
      valueType: 'USER_PROVIDED'
    },
    userFugacityHalfLifeSoil: {
      value: 0,
      units: 'hours',
      valueType: 'USER_PROVIDED'
    },
    userFugacityHalfLifeSediment: {
      value: 0,
      units: 'hours',
      valueType: 'USER_PROVIDED'
    },
    userFugacityEmissionRateAir: {
      value: 1000,
      units: 'kg/hour',
      valueType: 'USER_PROVIDED'
    },
    userFugacityEmissionRateWater: {
      value: 1000,
      units: 'kg/hour',
      valueType: 'USER_PROVIDED'
    },
    userFugacityEmissionRateSoil: {
      value: 1000,
      units: 'kg/hour',
      valueType: 'USER_PROVIDED'
    },
    userFugacityEmissionRateSediment: {
      value: 0,
      units: 'kg/hour',
      valueType: 'USER_PROVIDED'
    },
    userFugacityAdvectionTimeAir: {
      value: 100,
      units: 'hours',
      valueType: 'USER_PROVIDED'
    },
    userFugacityAdvectionTimeWater: {
      value: 1000,
      units: 'hours',
      valueType: 'USER_PROVIDED'
    },
    userFugacityAdvectionTimeSoil: {
      value: 0,
      units: 'hours',
      valueType: 'USER_PROVIDED'
    },
    userFugacityAdvectionTimeSediment: {
      value: 50000,
      units: 'hours',
      valueType: 'USER_PROVIDED'
    },
    modules: []
  },
  chemicalProperties: {
    name: 'CHLORPYRIFOS',
    systematicName: null,
    cas: '002921-88-2',
    smiles: 'CCOP(=S)(OCC)OC1=NC(=C(C=C1Cl)Cl)Cl',
    molecularWeight: 350.58754871051,
    molecularFormula: 'C9H11Cl3NO3PS',
    molecularFormulaHtml:
      'C\u003Csub\u003E9\u003C/sub\u003EH\u003Csub\u003E11\u003C/sub\u003ECl\u003Csub\u003E3\u003C/sub\u003ENO\u003Csub\u003E3\u003C/sub\u003EPS',
    organic: true,
    organicAcid: false,
    aminoAcid: false,
    nonStandardMetal: false,
    flags: null
  },
  logKow: {
    parameters: {
      smiles: 'CCOP(=S)(OCC)OC1=NC(=C(C=C1Cl)Cl)Cl',
      cas: '002921-88-2'
    },
    estimatedValue: {
      model: {
        logKow: 5.1082000695169,
        factors: [
          {
            type: 'Fragment',
            description: '-CH3    [aliphatic carbon]',
            fragmentCount: 2,
            coefficient: 0.547299981117249,
            contribution: 1.0945999622345,
            trainingCount: 13,
            validationCount: 20
          },
          {
            type: 'Fragment',
            description: '-CH2-   [aliphatic carbon]',
            fragmentCount: 2,
            coefficient: 0.491100013256073,
            contribution: 0.982200026512146,
            trainingCount: 18,
            validationCount: 28
          },
          {
            type: 'Fragment',
            description: 'Aromatic Carbon',
            fragmentCount: 5,
            coefficient: 0.293999999761581,
            contribution: 1.47000002861023,
            trainingCount: 24,
            validationCount: 30
          },
          {
            type: 'Fragment',
            description: 'Aromatic Nitrogen',
            fragmentCount: 1,
            coefficient: -0.732400000095367,
            contribution: -0.732400000095367,
            trainingCount: 4,
            validationCount: 4
          },
          {
            type: 'Fragment',
            description: '-CL     [chlorine, aromatic attach]',
            fragmentCount: 3,
            coefficient: 0.644500017166138,
            contribution: 1.93350005149841,
            trainingCount: 6,
            validationCount: 10
          },
          {
            type: 'Fragment',
            description: 'S=P     [thio=phosphorus]',
            fragmentCount: 1,
            coefficient: -0.658699989318848,
            contribution: -0.658699989318848,
            trainingCount: 2,
            validationCount: 1
          },
          {
            type: 'Fragment',
            description: '-O-P    [aliphatic attach]',
            fragmentCount: 2,
            coefficient: -0.0162000004202127,
            contribution: -0.0324000008404255,
            trainingCount: 4,
            validationCount: 3
          },
          {
            type: 'Fragment',
            description: '-O-P    [aromatic attach]',
            fragmentCount: 1,
            coefficient: 0.534500002861023,
            contribution: 0.534500002861023,
            trainingCount: 3,
            validationCount: 2
          },
          {
            type: 'Factor',
            description: 'Pyridine ring (non-fused)  correction',
            fragmentCount: 1,
            coefficient: -0.162100002169609,
            contribution: -0.162100002169609,
            trainingCount: 2,
            validationCount: 3
          },
          {
            type: 'Factor',
            description: 'Ring rx: S=P(O)(O)O / aromat N + halogen',
            fragmentCount: 1,
            coefficient: 0.449999988079071,
            contribution: 0.449999988079071,
            trainingCount: 0,
            validationCount: 1
          },
          {
            type: 'Constant',
            description: 'Equation Constant',
            fragmentCount: 0,
            coefficient: 0,
            contribution: 0.229000002145767,
            trainingCount: 0,
            validationCount: 0
          }
        ],
        output:
          '-------+-----+--------------------------------------------+---------+--------\n TYPE  | NUM |        LOGKOW FRAGMENT DESCRIPTION         |  COEFF  |  VALUE \n-------+-----+--------------------------------------------+---------+--------\n Frag  |  2  |  -CH3    [aliphatic carbon]                | 0.5473  |  1.0946\n Frag  |  2  |  -CH2-   [aliphatic carbon]                | 0.4911  |  0.9822\n Frag  |  5  |  Aromatic Carbon                           | 0.2940  |  1.4700\n Frag  |  1  |  Aromatic Nitrogen                         |-0.7324  | -0.7324\n Frag  |  3  |  -CL     [chlorine, aromatic attach]       | 0.6445  |  1.9335\n Frag  |  1  |  S=P     [thio=phosphorus]                 |-0.6587  | -0.6587\n Frag  |  2  |  -O-P    [aliphatic attach]                |-0.0162  | -0.0324\n Frag  |  1  |  -O-P    [aromatic attach]                 | 0.5345  |  0.5345\n Factor|  1  |  Pyridine ring (non-fused)  correction     |-0.1621  | -0.1621\n Factor|  1  |  Ring rx: S=P(O)(O)O / aromat N + halogen  | 0.4500  |  0.4500\n Const |     |  Equation Constant                         |         |  0.2290\n-------+-----+--------------------------------------------+---------+--------\n                                                         Log Kow   =   5.1082\n',
        notes: '',
        flags: {
          isOrganicAcid: false,
          isAminoAcid: false
        }
      },
      value: 5.1082000695169,
      units: '',
      valueType: 'ESTIMATED'
    },
    experimentalValues: [
      {
        author: 'SANGSTER',
        year: 1994,
        order: 1,
        value: 4.96,
        units: null,
        valueType: 'EXPERIMENTAL'
      }
    ],
    selectedValue: {
      value: 4.96,
      units: null,
      valueType: 'EXPERIMENTAL'
    }
  },
  meltingPoint: {
    estimatedValue: {
      model: {
        factors: [
          {
            type: 'Group',
            description: '-CH3',
            fragmentCount: 2,
            coefficient: -5.09999990463257,
            totalCoefficient: -10.1999998092651
          },
          {
            type: 'Group',
            description: '-CH2-',
            fragmentCount: 2,
            coefficient: 11.2700004577637,
            totalCoefficient: 22.5400009155273
          },
          {
            type: 'Group',
            description: '-O- (nonring)',
            fragmentCount: 3,
            coefficient: 22.2299995422363,
            totalCoefficient: 66.6900024414063
          },
          {
            type: 'Group',
            description: 'CH (aromatic)',
            fragmentCount: 1,
            coefficient: 8.13000011444092,
            totalCoefficient: 8.13000011444092
          },
          {
            type: 'Group',
            description: '-C (aromatic)',
            fragmentCount: 4,
            coefficient: 37.0200004577637,
            totalCoefficient: 148.080001831055
          },
          {
            type: 'Group',
            description: 'N (aromatic)',
            fragmentCount: 1,
            coefficient: 68.4000015258789,
            totalCoefficient: 68.4000015258789
          },
          {
            type: 'Group',
            description: '-Cl (to aromat)',
            fragmentCount: 3,
            coefficient: 13.5500001907349,
            totalCoefficient: 40.6500015258789
          },
          {
            type: 'Group',
            description: '\u003EP=S',
            fragmentCount: 1,
            coefficient: -70,
            totalCoefficient: -70
          },
          {
            type: 'Correction',
            description: 'Si-Chlorine',
            fragmentCount: 1,
            coefficient: 0,
            totalCoefficient: 0
          },
          {
            type: 'Correction',
            description: 'N-C(=S)-N',
            fragmentCount: 1,
            coefficient: 5,
            totalCoefficient: 5
          },
          {
            type: '*',
            description: 'Equation Constant',
            fragmentCount: 0,
            coefficient: 122.5,
            totalCoefficient: 122.5
          }
        ],
        meltingPointKelvins: 401.790008544922,
        meltingPointLimitKelvins: 348.160003662109,
        meltingPointCelsius: 75,
        meltingPointAdaptedJoback: 75,
        meltingPointGoldOgle: 133.296142578125,
        meltingPointMean: 104.148071289063,
        meltingPointSelected: 84.7160263061523
      },
      value: 84.7160263061523,
      units: 'celsius',
      valueType: 'ESTIMATED'
    },
    experimentalValues: [
      {
        author: 'Physprop calculated - based upon VP / Water Sol data',
        year: 0,
        order: 1,
        value: 42,
        units: 'celsius',
        valueType: 'EXPERIMENTAL'
      }
    ],
    selectedValue: {
      value: 42,
      units: 'celsius',
      valueType: 'EXPERIMENTAL'
    }
  },
  boilingPoint: {
    estimatedValue: {
      model: {
        factors: [
          {
            type: 'Group',
            description: '-CH3',
            fragmentCount: 2,
            coefficient: 21.9799995422363,
            totalCoefficient: 43.9599990844727
          },
          {
            type: 'Group',
            description: '-CH2-',
            fragmentCount: 2,
            coefficient: 24.2199993133545,
            totalCoefficient: 48.439998626709
          },
          {
            type: 'Group',
            description: '-O- (nonring)',
            fragmentCount: 3,
            coefficient: 25.1599998474121,
            totalCoefficient: 75.4799957275391
          },
          {
            type: 'Group',
            description: 'CH (aromatic)',
            fragmentCount: 1,
            coefficient: 28.5300006866455,
            totalCoefficient: 28.5300006866455
          },
          {
            type: 'Group',
            description: '-C (aromatic)',
            fragmentCount: 4,
            coefficient: 30.7600002288818,
            totalCoefficient: 123.040000915527
          },
          {
            type: 'Group',
            description: 'N (aromatic)',
            fragmentCount: 1,
            coefficient: 39.8800010681152,
            totalCoefficient: 39.8800010681152
          },
          {
            type: 'Group',
            description: '-Cl (to aromat)',
            fragmentCount: 3,
            coefficient: 36.7900009155273,
            totalCoefficient: 110.370002746582
          },
          {
            type: 'Group',
            description: '\u003EP=S',
            fragmentCount: 1,
            coefficient: 100,
            totalCoefficient: 100
          },
          {
            type: 'Correction',
            description: 'Si-Chlorine',
            fragmentCount: 1,
            coefficient: 25,
            totalCoefficient: 25
          },
          {
            type: 'Correction',
            description: 'N-C(=S)-N',
            fragmentCount: 1,
            coefficient: 70,
            totalCoefficient: 70
          },
          {
            type: '*',
            description: 'Equation Constant',
            fragmentCount: 0,
            coefficient: 0,
            totalCoefficient: 198.179992675781
          }
        ],
        boilingPointKelvinsUncorrected: 862.879943847656,
        boilingPointKelvinsCorrected: 696.105773925781,
        boilingPointCelsius: 422.945770263672
      },
      value: 422.945770263672,
      units: 'celsius',
      valueType: 'ESTIMATED'
    },
    experimentalValues: [],
    selectedValue: {
      value: 422.945770263672,
      units: 'celsius',
      valueType: 'ESTIMATED'
    }
  },
  vaporPressure: {
    estimatedValue: {
      model: [
        {
          type: 'Antoine',
          mmHg: 2.12683900713273e-7,
          pa: 0.000028355443010894
        },
        {
          type: 'Grain',
          mmHg: 0.000001603539632697,
          pa: 0.000213787110910529
        },
        {
          type: 'Mackay',
          mmHg: 0.000003234451439719,
          pa: 0.000431223534846281
        },
        {
          type: 'Selected',
          mmHg: 0.000001603539632697,
          pa: 0.000213787110910529
        },
        {
          type: 'SubCooled',
          mmHg: 0.000002287443294335,
          pa: 0.000304966514887382
        }
      ],
      value: 0.000001603539632697,
      units: 'mmHg',
      valueType: 'ESTIMATED'
    },
    experimentalValues: [
      {
        author: 'TOMLIN,C',
        year: 1997,
        order: 1,
        value: 0.0000203,
        units: 'mmHg',
        valueType: 'EXPERIMENTAL'
      }
    ],
    selectedValue: {
      value: 0.0000203,
      units: 'mmHg',
      valueType: 'EXPERIMENTAL'
    }
  },
  waterSolubilityFromLogKow: {
    parameters: {
      smiles: 'CCOP(=S)(OCC)OC1=NC(=C(C=C1Cl)Cl)Cl',
      cas: '002921-88-2',
      logKow: {
        value: 4.96,
        units: null,
        valueType: 'EXPERIMENTAL'
      },
      meltingPoint: {
        value: 42,
        units: 'celsius',
        valueType: 'EXPERIMENTAL'
      }
    },
    estimatedValue: {
      model: {
        waterSolubility: 1.65559935569763,
        factors: [
          {
            type: 'No Applicable Correction Factors',
            description: null,
            fragmentCount: 1,
            coefficient: 0,
            totalCoefficient: 0,
            trainingCount: 0,
            maxFragmentCount: 0
          }
        ],
        equation:
          'Log S (mol/L) = 0.693-0.96 log Kow-0.0092(Tm-25)-0.00314 MW + Correction\n Melting Pt (Tm) = 42.0 deg C (Use Tm = 25 for all liquids)\nUser Entered Melting Point: 42.0',
        notes: '',
        output:
          'MOL FOR: C9 H11 Cl3 N1 O3 P1 S1 \nMOL WT : 350.59\nLog Kow (experimental):  4.96\nLog Kow used by Water solubility estimates:  4.96 (user entered)\n\nEquation Used to Make Water Sol estimate:\n   Log S (mol/L) = 0.693-0.96 log Kow-0.0092(Tm-25)-0.00314 MW + Correction\n\n      Melting Pt (Tm) = 42.00 deg C (Use Tm = 25 for all liquids)\n\n      Correction(s):         Value\n      --------------------   -----\n       No Applicable Correction Factors\n\n   Log Water Solubility  (in moles/L) :  -5.326\n   Water Solubility at 25 deg C (mg/L):  1.656\n'
      },
      value: 1.65559935569763,
      units: 'mg/L',
      valueType: 'ESTIMATED'
    },
    experimentalValues: [],
    selectedValue: {
      value: 1.65559935569763,
      units: 'mg/L',
      valueType: 'ESTIMATED'
    }
  },
  waterSolubilityFromWaterNt: {
    parameters: {
      smiles: 'CCOP(=S)(OCC)OC1=NC(=C(C=C1Cl)Cl)Cl',
      cas: '002921-88-2'
    },
    estimatedValue: {
      model: {
        waterSolubility: 11.0108547210693,
        factors: [
          {
            type: 'Fragment',
            description: '-CH3    [aliphatic carbon]',
            fragmentCount: 2,
            coefficient: -0.321271121501923,
            totalCoefficient: -0.642542243003845,
            trainingCount: 612,
            maxFragmentCount: 6
          },
          {
            type: 'Fragment',
            description: '-CH2-   [aliphatic carbon]',
            fragmentCount: 2,
            coefficient: -0.537019193172455,
            totalCoefficient: -1.07403838634491,
            trainingCount: 416,
            maxFragmentCount: 14
          },
          {
            type: 'Fragment',
            description: 'Aromatic Carbon  (C-H type)',
            fragmentCount: 1,
            coefficient: -0.335863918066025,
            totalCoefficient: -0.335863918066025,
            trainingCount: 700,
            maxFragmentCount: 15
          },
          {
            type: 'Fragment',
            description: 'Aromatic Nitrogen [max count of 1 allowed]',
            fragmentCount: 1,
            coefficient: 1.92553496360779,
            totalCoefficient: 1.92553496360779,
            trainingCount: 62,
            maxFragmentCount: 1
          },
          {
            type: 'Fragment',
            description: '-CL     [chlorine, aromatic attach]',
            fragmentCount: 3,
            coefficient: -0.48780557513237,
            totalCoefficient: -1.46341669559479,
            trainingCount: 202,
            maxFragmentCount: 10
          },
          {
            type: 'Fragment',
            description: 'Aromatic Carbon  (C-substituent type)',
            fragmentCount: 4,
            coefficient: -0.539953649044037,
            totalCoefficient: -2.15981459617615,
            trainingCount: 718,
            maxFragmentCount: 12
          },
          {
            type: 'Fragment',
            description: 'S=P     [thio=phosphorus]',
            fragmentCount: 1,
            coefficient: 0.877404928207398,
            totalCoefficient: 0.877404928207398,
            trainingCount: 39,
            maxFragmentCount: 2
          },
          {
            type: 'Fragment',
            description: '-O-P    [aliphatic attach]',
            fragmentCount: 2,
            coefficient: -0.382661402225494,
            totalCoefficient: -0.765322804450989,
            trainingCount: 56,
            maxFragmentCount: 4
          },
          {
            type: 'Fragment',
            description: '-O-P    [aromatic attach]',
            fragmentCount: 1,
            coefficient: -0.570059835910797,
            totalCoefficient: -0.570059835910797,
            trainingCount: 29,
            maxFragmentCount: 3
          },
          {
            type: 'Factor',
            description: 'Ring rx -\u003E  Halogen ortho to arom nitrogen',
            fragmentCount: 1,
            coefficient: 1.27488827705383,
            totalCoefficient: -0.54407274723053,
            trainingCount: 10,
            maxFragmentCount: 2
          },
          {
            type: 'Constant',
            description: 'Equation Constant',
            fragmentCount: 1,
            coefficient: 0.249218225479126,
            totalCoefficient: 0.249218225479126,
            trainingCount: 0,
            maxFragmentCount: 0
          }
        ],
        equation: '',
        notes: '',
        output:
          'MOL FOR: C9 H11 CL3 N1 O3 P1 S1 \nMOL WT : 350.59\n-------+-----+--------------------------------------------+----------+---------\n TYPE  | NUM |    WATER SOLUBILITY FRAGMENT DESCRIPTION   |  COEFF   |  VALUE  \n-------+-----+--------------------------------------------+----------+---------\n Frag  |  2  |  -CH3    [aliphatic carbon]                |-0.3213   | -0.6425\n Frag  |  2  |  -CH2-   [aliphatic carbon]                |-0.5370   | -1.0740\n Frag  |  1  |  Aromatic Carbon  (C-H type)               |-0.3359   | -0.3359\n Frag  |  1  |  Aromatic Nitrogen [max count of 1 allowed]| 1.9255   |  1.9255\n Frag  |  3  |  -CL     [chlorine, aromatic attach]       |-0.4878   | -1.4634\n Frag  |  4  |  Aromatic Carbon  (C-substituent type)     |-0.5400   | -2.1598\n Frag  |  1  |  S=P     [thio=phosphorus]                 | 0.8774   |  0.8774\n Frag  |  2  |  -O-P    [aliphatic attach]                |-0.3827   | -0.7653\n Frag  |  1  |  -O-P    [aromatic attach]                 |-0.5701   | -0.5701\n Factor|  1  |  Ring rx -\u003E  Halogen ortho to arom nitrogen|-0.5441   | -0.5441\n Const |     |  Equation Constant                         |          |  0.2492\n-------+-----+--------------------------------------------+----------+---------\n                              Log Water Sol (moles/L) at 25 dec C  =   -4.5030\n                              Water Solubility (mg/L) at 25 dec C  =   11.011\n'
      },
      value: 11.0108547210693,
      units: 'mg/L',
      valueType: 'ESTIMATED'
    },
    experimentalValues: [],
    selectedValue: {
      value: 11.0108547210693,
      units: 'mg/L',
      valueType: 'ESTIMATED'
    }
  },
  henrysLawConstant: {
    parameters: {
      smiles: 'CCOP(=S)(OCC)OC1=NC(=C(C=C1Cl)Cl)Cl',
      cas: '002921-88-2',
      waterSolubility: {
        value: 1.65559935569763,
        units: 'mg/L',
        valueType: 'ESTIMATED'
      },
      vaporPressure: {
        value: 0.0000203,
        units: 'mmHg',
        valueType: 'EXPERIMENTAL'
      },
      molecularWeight: {
        value: 350.58754871051,
        units: 'g/mol',
        valueType: 'NONE'
      }
    },
    estimatedValue: {
      model: [
        {
          name: 'VP/WSOL',
          value: 0.000005657091019067,
          factors: null,
          hlcAtm: 0.000005657091019067,
          hlcUnitless: 0.0002312281901873,
          hlcPaMol: 0.573204747507046,
          notes: ''
        },
        {
          name: 'Bond',
          value: 3.98648858070374,
          factors: [
            {
              type: 'Hydrogen',
              description: 'Hydrogen to Carbon (aliphatic) Bonds',
              fragmentCount: 10,
              totalCoefficient: -1.19676995277405,
              trainingCount: 284,
              maxFragmentCount: 27
            },
            {
              type: 'Hydrogen',
              description: 'Hydrogen to Carbon (aromatic) Bonds',
              fragmentCount: 1,
              totalCoefficient: -0.15429399907589,
              trainingCount: 93,
              maxFragmentCount: 12
            },
            {
              type: 'Fragment',
              description: 'C-C',
              fragmentCount: 2,
              totalCoefficient: 0.232608005404472,
              trainingCount: 200,
              maxFragmentCount: 9
            },
            {
              type: 'Fragment',
              description: 'C-O',
              fragmentCount: 2,
              totalCoefficient: 2.17094588279724,
              trainingCount: 83,
              maxFragmentCount: 4
            },
            {
              type: 'Fragment',
              description: 'Car-Car',
              fragmentCount: 4,
              totalCoefficient: 1.05522799491882,
              trainingCount: 94,
              maxFragmentCount: 21
            },
            {
              type: 'Fragment',
              description: 'Car-CL',
              fragmentCount: 3,
              totalCoefficient: -0.0723059996962547,
              trainingCount: 11,
              maxFragmentCount: 6
            },
            {
              type: 'Fragment',
              description: 'Car-Nar',
              fragmentCount: 2,
              totalCoefficient: 3.25644207000732,
              trainingCount: 19,
              maxFragmentCount: 4
            },
            {
              type: 'Fragment',
              description: 'O-P',
              fragmentCount: 3,
              totalCoefficient: 1.17910802364349,
              trainingCount: 5,
              maxFragmentCount: 3
            },
            {
              type: 'Fragment',
              description: 'P=S',
              fragmentCount: 1,
              totalCoefficient: -1.0317360162735,
              trainingCount: 4,
              maxFragmentCount: 1
            },
            {
              type: 'Fragment',
              description: 'Car-O',
              fragmentCount: 1,
              totalCoefficient: 0.347261995077133,
              trainingCount: 8,
              maxFragmentCount: 2
            },
            {
              type: 'Factor  ',
              description: '1 Car(CL)(Nar)(Car)   group',
              fragmentCount: 1,
              totalCoefficient: -1.79999995231628,
              trainingCount: 0,
              maxFragmentCount: 0
            }
          ],
          hlcAtm: 0.00000252329414252,
          hlcUnitless: 0.000103160018625203,
          hlcPaMol: 0.255672782659531,
          notes: ''
        },
        {
          name: 'Group',
          value: 2.02999997138977,
          factors: [
            {
              type: 'NONE    ',
              description: 'CH3 (X)',
              fragmentCount: 2,
              totalCoefficient: -1.24000000953674,
              trainingCount: 0,
              maxFragmentCount: 0
            },
            {
              type: 'NONE    ',
              description: 'CH2 (C)(O)',
              fragmentCount: 2,
              totalCoefficient: -0.259999990463257,
              trainingCount: 0,
              maxFragmentCount: 0
            },
            {
              type: 'NONE    ',
              description: 'Car-H (Car)(Car)',
              fragmentCount: 1,
              totalCoefficient: 0.109999999403954,
              trainingCount: 0,
              maxFragmentCount: 0
            },
            {
              type: 'NONE    ',
              description: 'Car (Car)(Car)(CL)',
              fragmentCount: 2,
              totalCoefficient: 0.360000014305115,
              trainingCount: 0,
              maxFragmentCount: 0
            },
            {
              type: 'NONE    ',
              description: 'Nar (Car)(Car)',
              fragmentCount: 1,
              totalCoefficient: 3.05999994277954,
              trainingCount: 0,
              maxFragmentCount: 0
            },
            {
              type: 'NONE    ',
              description: 'MISSING Value for:  O (P)(C)',
              fragmentCount: 0,
              totalCoefficient: 0,
              trainingCount: 0,
              maxFragmentCount: 0
            },
            {
              type: 'NONE    ',
              description: 'MISSING Value for:  P (=S)(O)(O)(O)',
              fragmentCount: 0,
              totalCoefficient: 0,
              trainingCount: 0,
              maxFragmentCount: 0
            },
            {
              type: 'NONE    ',
              description: 'MISSING Value for:  O (C)(P)',
              fragmentCount: 0,
              totalCoefficient: 0,
              trainingCount: 0,
              maxFragmentCount: 0
            },
            {
              type: 'NONE    ',
              description: 'MISSING Value for:  O (Car)(P)',
              fragmentCount: 0,
              totalCoefficient: 0,
              trainingCount: 0,
              maxFragmentCount: 0
            },
            {
              type: 'NONE    ',
              description: 'MISSING Value for:  Car (Car)(Nar)(O)',
              fragmentCount: 0,
              totalCoefficient: 0,
              trainingCount: 0,
              maxFragmentCount: 0
            },
            {
              type: 'NONE    ',
              description: 'MISSING Value for:  Car (Car)(CL)(Nar)',
              fragmentCount: 0,
              totalCoefficient: 0,
              trainingCount: 0,
              maxFragmentCount: 0
            }
          ],
          hlcAtm: 0,
          hlcUnitless: 0,
          hlcPaMol: 0,
          notes: ''
        }
      ],
      value: 0.00000252329414252,
      units: 'atm-m3/mol',
      valueType: 'ESTIMATED'
    },
    experimentalValues: [],
    selectedValue: {
      value: 0.00000252329414252,
      units: 'atm-m3/mol',
      valueType: 'ESTIMATED'
    }
  },
  logKoa: {
    parameters: {
      smiles: 'CCOP(=S)(OCC)OC1=NC(=C(C=C1Cl)Cl)Cl',
      cas: '002921-88-2',
      logKow: {
        value: 4.96,
        units: null,
        valueType: 'EXPERIMENTAL'
      },
      henrysLawConstant: {
        value: 0.00000252329414252,
        units: 'atm-m3/mol',
        valueType: 'ESTIMATED'
      }
    },
    estimatedValue: {
      model: {
        kow: 91201.083935591,
        kaw: 0.000103137237127447,
        koa: 884269217.168313,
        logKoa: 8.94658450678984
      },
      value: 8.94658450678984,
      units: '',
      valueType: 'ESTIMATED'
    },
    experimentalValues: [],
    selectedValue: {
      value: 8.94658450678984,
      units: '',
      valueType: 'ESTIMATED'
    }
  },
  biodegradationRate: {
    parameters: {
      smiles: 'CCOP(=S)(OCC)OC1=NC(=C(C=C1Cl)Cl)Cl',
      cas: '002921-88-2',
      removeMetals: true
    },
    models: [
      {
        name: 'Linear Model Prediction',
        value: 0.192751079797745,
        factors: [
          {
            type: 'Fragment',
            description: 'Aromatic chloride   [-CL]',
            fragmentCount: 3,
            coefficient: -0.182420000433922,
            totalCoefficient: -0.547259986400604,
            trainingCount: 40,
            maxFragmentCount: 6
          },
          {
            type: 'Fragment',
            description: 'Pyridine ring',
            fragmentCount: 1,
            coefficient: -0.154569998383522,
            totalCoefficient: -0.154569998383522,
            trainingCount: 18,
            maxFragmentCount: 1
          },
          {
            type: 'Fragment',
            description: 'Phosphate ester',
            fragmentCount: 1,
            coefficient: 0.313939988613129,
            totalCoefficient: 0.313939988613129,
            trainingCount: 5,
            maxFragmentCount: 1
          },
          {
            type: 'Molecular Weight',
            description: 'Molecular Weight Parameter',
            fragmentCount: 0,
            coefficient: 0,
            totalCoefficient: -0.166904762387276,
            trainingCount: 0,
            maxFragmentCount: 0
          },
          {
            type: 'Constant',
            description: 'Equation Constant',
            fragmentCount: 0,
            coefficient: 0,
            totalCoefficient: 0.747545838356018,
            trainingCount: 0,
            maxFragmentCount: 0
          }
        ]
      },
      {
        name: 'Non-Linear Model Prediction',
        value: 0.999999999999999,
        factors: [
          {
            type: 'Fragment',
            description: 'Aromatic chloride   [-CL]',
            fragmentCount: 3,
            coefficient: -2.01550006866455,
            totalCoefficient: -6.04650020599365,
            trainingCount: 40,
            maxFragmentCount: 6
          },
          {
            type: 'Fragment',
            description: 'Pyridine ring',
            fragmentCount: 1,
            coefficient: -1.63810002803803,
            totalCoefficient: -1.63810002803803,
            trainingCount: 18,
            maxFragmentCount: 1
          },
          {
            type: 'Fragment',
            description: 'Phosphate ester',
            fragmentCount: 1,
            coefficient: 44.4086990356445,
            totalCoefficient: 44.4086990356445,
            trainingCount: 5,
            maxFragmentCount: 1
          },
          {
            type: 'Molecular Weight',
            description: 'Molecular Weight Parameter',
            fragmentCount: 0,
            coefficient: 0,
            totalCoefficient: -4.97831535339356,
            trainingCount: 0,
            maxFragmentCount: 0
          }
        ]
      },
      {
        name: 'Ultimate Biodegradation Timeframe',
        value: 1.74418230354786,
        factors: [
          {
            type: 'Fragment',
            description: 'Aromatic chloride   [-CL]',
            fragmentCount: 3,
            coefficient: -0.206599995493889,
            totalCoefficient: -0.619799971580505,
            trainingCount: 27,
            maxFragmentCount: 6
          },
          {
            type: 'Fragment',
            description: 'Pyridine ring',
            fragmentCount: 1,
            coefficient: -0.21416999399662,
            totalCoefficient: -0.21416999399662,
            trainingCount: 8,
            maxFragmentCount: 1
          },
          {
            type: 'Fragment',
            description: 'Phosphate ester',
            fragmentCount: 1,
            coefficient: 0.153730005025864,
            totalCoefficient: 0.153730005025864,
            trainingCount: 7,
            maxFragmentCount: 1
          },
          {
            type: 'Molecular Weight',
            description: 'Molecular Weight Parameter',
            fragmentCount: 0,
            coefficient: 0,
            totalCoefficient: -0.7747483253479,
            trainingCount: 0,
            maxFragmentCount: 0
          },
          {
            type: 'Constant',
            description: 'Equation Constant',
            fragmentCount: 0,
            coefficient: 0,
            totalCoefficient: 3.19917058944702,
            trainingCount: 0,
            maxFragmentCount: 0
          }
        ]
      },
      {
        name: 'Primary Biodegradation Timeframe',
        value: 3.29251751117408,
        factors: [
          {
            type: 'Fragment',
            description: 'Aromatic chloride   [-CL]',
            fragmentCount: 3,
            coefficient: -0.165340006351471,
            totalCoefficient: -0.496020019054413,
            trainingCount: 27,
            maxFragmentCount: 6
          },
          {
            type: 'Fragment',
            description: 'Pyridine ring',
            fragmentCount: 1,
            coefficient: -0.0187400002032518,
            totalCoefficient: -0.0187400002032518,
            trainingCount: 8,
            maxFragmentCount: 1
          },
          {
            type: 'Fragment',
            description: 'Phosphate ester',
            fragmentCount: 1,
            coefficient: 0.4653500020504,
            totalCoefficient: 0.4653500020504,
            trainingCount: 7,
            maxFragmentCount: 1
          },
          {
            type: 'Molecular Weight',
            description: 'Molecular Weight Parameter',
            fragmentCount: 0,
            coefficient: 0,
            totalCoefficient: -0.505809545516968,
            trainingCount: 0,
            maxFragmentCount: 0
          },
          {
            type: 'Constant',
            description: 'Equation Constant',
            fragmentCount: 0,
            coefficient: 0,
            totalCoefficient: 3.84773707389832,
            trainingCount: 0,
            maxFragmentCount: 0
          }
        ]
      },
      {
        name: 'MITI Linear Model Prediction',
        value: -0.0724665224843193,
        factors: [
          {
            type: 'Fragment',
            description: 'Aromatic chloride   [-CL]',
            fragmentCount: 3,
            coefficient: -0.0391700007021427,
            totalCoefficient: -0.117510005831718,
            trainingCount: 83,
            maxFragmentCount: 6
          },
          {
            type: 'Fragment',
            description: 'Pyridine ring',
            fragmentCount: 1,
            coefficient: -0.00884000025689602,
            totalCoefficient: -0.00884000025689602,
            trainingCount: 17,
            maxFragmentCount: 1
          },
          {
            type: 'Fragment',
            description: 'Phosphate ester',
            fragmentCount: 1,
            coefficient: -0.0789600014686585,
            totalCoefficient: -0.0789600014686585,
            trainingCount: 14,
            maxFragmentCount: 2
          },
          {
            type: 'Fragment',
            description: 'Aromatic-H',
            fragmentCount: 1,
            coefficient: 0.00040300001273863,
            totalCoefficient: 0.00040300001273863,
            trainingCount: 462,
            maxFragmentCount: 22
          },
          {
            type: 'Fragment',
            description: 'Methyl  [-CH3]',
            fragmentCount: 2,
            coefficient: 0.0399399995803833,
            totalCoefficient: 0.0798799991607666,
            trainingCount: 517,
            maxFragmentCount: 24
          },
          {
            type: 'Fragment',
            description: '-CH2-  [linear]',
            fragmentCount: 2,
            coefficient: 0.0255299992859364,
            totalCoefficient: 0.0510599985718727,
            trainingCount: 407,
            maxFragmentCount: 56
          },
          {
            type: 'Molecular Weight',
            description: 'Molecular Weight Parameter',
            fragmentCount: 0,
            coefficient: 0,
            totalCoefficient: -0.552873492240906,
            trainingCount: 0,
            maxFragmentCount: 0
          },
          {
            type: 'Constant',
            description: 'Equation Constant',
            fragmentCount: 0,
            coefficient: 0,
            totalCoefficient: 0.554373979568481,
            trainingCount: 0,
            maxFragmentCount: 0
          }
        ]
      },
      {
        name: 'MITI Non-Linear Model Prediction',
        value: 0.000803723470212917,
        factors: [
          {
            type: 'Fragment',
            description: 'Aromatic chloride   [-CL]',
            fragmentCount: 3,
            coefficient: -0.760900020599365,
            totalCoefficient: -2.2827000617981,
            trainingCount: 83,
            maxFragmentCount: 6
          },
          {
            type: 'Fragment',
            description: 'Pyridine ring',
            fragmentCount: 1,
            coefficient: -0.301569998264313,
            totalCoefficient: -0.301569998264313,
            trainingCount: 17,
            maxFragmentCount: 1
          },
          {
            type: 'Fragment',
            description: 'Phosphate ester',
            fragmentCount: 1,
            coefficient: -1.11175000667572,
            totalCoefficient: -1.11175000667572,
            trainingCount: 14,
            maxFragmentCount: 2
          },
          {
            type: 'Fragment',
            description: 'Aromatic-H',
            fragmentCount: 1,
            coefficient: 0.0341899991035461,
            totalCoefficient: 0.0341899991035461,
            trainingCount: 462,
            maxFragmentCount: 22
          },
          {
            type: 'Fragment',
            description: 'Methyl  [-CH3]',
            fragmentCount: 2,
            coefficient: 0.235109999775887,
            totalCoefficient: 0.470219999551773,
            trainingCount: 517,
            maxFragmentCount: 24
          },
          {
            type: 'Fragment',
            description: '-CH2-  [linear]',
            fragmentCount: 2,
            coefficient: 0.234500005841255,
            totalCoefficient: 0.46900001168251,
            trainingCount: 407,
            maxFragmentCount: 56
          },
          {
            type: 'Molecular Weight',
            description: 'Molecular Weight Parameter',
            fragmentCount: 0,
            coefficient: 0,
            totalCoefficient: -6.06513118743897,
            trainingCount: 0,
            maxFragmentCount: 0
          }
        ]
      },
      {
        name: 'Anaerobic Model Prediction',
        value: 0.594748351722956,
        factors: [
          {
            type: 'Fragment',
            description: 'Aromatic chloride   [-CL]',
            fragmentCount: 3,
            coefficient: -0.402272284030914,
            totalCoefficient: -1.20681691169739,
            trainingCount: 15,
            maxFragmentCount: 3
          },
          {
            type: 'Fragment',
            description: 'Pyridine ring',
            fragmentCount: 1,
            coefficient: 0.641066312789917,
            totalCoefficient: 0.641066312789917,
            trainingCount: 1,
            maxFragmentCount: 1
          },
          {
            type: 'Fragment',
            description: 'Phosphate ester',
            fragmentCount: 1,
            coefficient: 0.527009427547455,
            totalCoefficient: 0.527009427547455,
            trainingCount: 3,
            maxFragmentCount: 1
          },
          {
            type: 'Fragment',
            description: 'Aromatic-H',
            fragmentCount: 1,
            coefficient: -0.0954301357269287,
            totalCoefficient: -0.0954301357269287,
            trainingCount: 94,
            maxFragmentCount: 13
          },
          {
            type: 'Fragment',
            description: 'Methyl  [-CH3]',
            fragmentCount: 2,
            coefficient: -0.0795721858739853,
            totalCoefficient: -0.159144371747971,
            trainingCount: 86,
            maxFragmentCount: 4
          },
          {
            type: 'Fragment',
            description: '-CH2-  [linear]',
            fragmentCount: 2,
            coefficient: 0.0259898323565722,
            totalCoefficient: 0.0519796647131443,
            trainingCount: 67,
            maxFragmentCount: 44
          },
          {
            type: 'Constant',
            description: 'Equation Constant',
            fragmentCount: 0,
            coefficient: 0,
            totalCoefficient: 0.836084365844727,
            trainingCount: 0,
            maxFragmentCount: 0
          }
        ]
      }
    ],
    notes: '',
    output:
      'SMILES : CCOP(=S)(OCC)Oc1nc(c(cc1Cl)Cl)Cl\nMOL FOR: C9 H11 Cl3 N1 O3 P1 S1 \nMOL WT : 350.59\n--------------------------- BIOWIN v4.10 Results ----------------------------\n\n   Biowin1 (Linear Model Prediction)    :  Does Not Biodegrade Fast\n   Biowin2 (Non-Linear Model Prediction):  Biodegrades Fast\n   Biowin3 (Ultimate Biodegradation Timeframe):  Recalcitrant\n   Biowin4 (Primary  Biodegradation Timeframe):  Days-Weeks\n   Biowin5 (MITI Linear Model Prediction)    :  Not Readily Degradable\n   Biowin6 (MITI Non-Linear Model Prediction):  Not Readily Degradable\n   Biowin7 (Anaerobic Model Prediction):  Biodegrades Fast\n   Ready Biodegradability Prediction:  NO\n\n------+-----+--------------------------------------------+---------+---------\n TYPE | NUM |       Biowin1 FRAGMENT DESCRIPTION         |  COEFF  |  VALUE  \n------+-----+--------------------------------------------+---------+---------\n Frag |  3  |  Aromatic chloride   [-CL]                 | -0.1824 | -0.5473\n Frag |  1  |  Pyridine ring                             | -0.1546 | -0.1546\n Frag |  1  |  Phosphate ester                           |  0.3139 |  0.3139\n MolWt|  *  |  Molecular Weight Parameter                |         | -0.1669\n Const|  *  |  Equation Constant                         |         |  0.7475\n============+============================================+=========+=========\n   RESULT   |    Biowin1 (Linear Biodeg Probability)     |         |  0.1928\n============+============================================+=========+=========\n\n------+-----+--------------------------------------------+---------+---------\n TYPE | NUM |       Biowin2 FRAGMENT DESCRIPTION         |  COEFF  |  VALUE  \n------+-----+--------------------------------------------+---------+---------\n Frag |  3  |  Aromatic chloride   [-CL]                 | -2.0155 | -6.0465\n Frag |  1  |  Pyridine ring                             | -1.6381 | -1.6381\n Frag |  1  |  Phosphate ester                           | 44.4087 | 44.4087\n MolWt|  *  |  Molecular Weight Parameter                |         | -4.9783\n============+============================================+=========+=========\n   RESULT   |  Biowin2 (Non-Linear Biodeg Probability)   |         |  1.0000\n============+============================================+=========+=========\n\n A Probability Greater Than or Equal to 0.5 indicates --\u003E Biodegrades Fast\n A Probability Less Than 0.5 indicates --\u003E Does NOT Biodegrade Fast\n\n------+-----+--------------------------------------------+---------+---------\n TYPE | NUM |       Biowin3 FRAGMENT DESCRIPTION         |  COEFF  |  VALUE  \n------+-----+--------------------------------------------+---------+---------\n Frag |  3  |  Aromatic chloride   [-CL]                 | -0.2066 | -0.6198\n Frag |  1  |  Pyridine ring                             | -0.2142 | -0.2142\n Frag |  1  |  Phosphate ester                           |  0.1537 |  0.1537\n MolWt|  *  |  Molecular Weight Parameter                |         | -0.7747\n Const|  *  |  Equation Constant                         |         |  3.1992\n============+============================================+=========+=========\n   RESULT   |  Biowin3 (Survey Model - Ultimate Biodeg)  |         |  1.7442\n============+============================================+=========+=========\n\n------+-----+--------------------------------------------+---------+---------\n TYPE | NUM |       Biowin4 FRAGMENT DESCRIPTION         |  COEFF  |  VALUE  \n------+-----+--------------------------------------------+---------+---------\n Frag |  3  |  Aromatic chloride   [-CL]                 | -0.1653 | -0.4960\n Frag |  1  |  Pyridine ring                             | -0.0187 | -0.0187\n Frag |  1  |  Phosphate ester                           |  0.4654 |  0.4654\n MolWt|  *  |  Molecular Weight Parameter                |         | -0.5058\n Const|  *  |  Equation Constant                         |         |  3.8477\n============+============================================+=========+=========\n   RESULT   |   Biowin4 (Survey Model - Primary Biodeg)  |         |  3.2925\n============+============================================+=========+=========\n\n Result Classification:   5.00 -\u003E hours     4.00 -\u003E days    3.00 -\u003E weeks\n  (Primary & Ultimate)    2.00 -\u003E months    1.00 -\u003E longer\n\n------+-----+--------------------------------------------+---------+---------\n TYPE | NUM |       Biowin5 FRAGMENT DESCRIPTION         |  COEFF  |  VALUE  \n------+-----+--------------------------------------------+---------+---------\n Frag |  3  |  Aromatic chloride   [-CL]                 | -0.0392 | -0.1175\n Frag |  1  |  Pyridine ring                             | -0.0088 | -0.0088\n Frag |  1  |  Phosphate ester                           | -0.0790 | -0.0790\n Frag |  1  |  Aromatic-H                                |  0.0004 |  0.0004\n Frag |  2  |  Methyl  [-CH3]                            |  0.0399 |  0.0799\n Frag |  2  |  -CH2-  [linear]                           |  0.0255 |  0.0511\n MolWt|  *  |  Molecular Weight Parameter                |         | -0.5529\n Const|  *  |  Equation Constant                         |         |  0.5544\n============+============================================+=========+=========\n   RESULT   |  Biowin5 (MITI Linear Biodeg Probability)  |         | -0.0725\n============+============================================+=========+=========\n\n------+-----+--------------------------------------------+---------+---------\n TYPE | NUM |       Biowin6 FRAGMENT DESCRIPTION         |  COEFF  |  VALUE  \n------+-----+--------------------------------------------+---------+---------\n Frag |  3  |  Aromatic chloride   [-CL]                 | -0.7609 | -2.2827\n Frag |  1  |  Pyridine ring                             | -0.3016 | -0.3016\n Frag |  1  |  Phosphate ester                           | -1.1118 | -1.1118\n Frag |  1  |  Aromatic-H                                |  0.0342 |  0.0342\n Frag |  2  |  Methyl  [-CH3]                            |  0.2351 |  0.4702\n Frag |  2  |  -CH2-  [linear]                           |  0.2345 |  0.4690\n MolWt|  *  |  Molecular Weight Parameter                |         | -6.0651\n============+============================================+=========+=========\n   RESULT   |Biowin6 (MITI Non-Linear Biodeg Probability)|         |  0.0008\n============+============================================+=========+=========\n\n A Probability Greater Than or Equal to 0.5 indicates --\u003E Readily Degradable\n A Probability Less Than 0.5 indicates --\u003E NOT Readily Degradable\n\n\n------+-----+--------------------------------------------+---------+---------\n TYPE | NUM |       Biowin7 FRAGMENT DESCRIPTION         |  COEFF  |  VALUE  \n------+-----+--------------------------------------------+---------+---------\n Frag |  3  |  Aromatic chloride   [-CL]                 | -0.4023 | -1.2068\n Frag |  1  |  Pyridine ring                             |  0.6411 |  0.6411\n Frag |  1  |  Phosphate ester                           |  0.5270 |  0.5270\n Frag |  1  |  Aromatic-H                                | -0.0954 | -0.0954\n Frag |  2  |  Methyl  [-CH3]                            | -0.0796 | -0.1591\n Frag |  2  |  -CH2-  [linear]                           |  0.0260 |  0.0520\n Const|  *  |  Equation Constant                         |         |  0.8361\n============+============================================+=========+=========\n   RESULT   |   Biowin7 (Anaerobic Linear Biodeg Prob)   |         |  0.5947\n============+============================================+=========+=========\n\n A Probability Greater Than or Equal to 0.5 indicates --\u003E Biodegrades Fast\n A Probability Less Than 0.5 indicates --\u003E Does NOT Biodegrade Fast\n\nReady Biodegradability Prediction: (YES or NO)\n----------------------------------------------\n Criteria for the YES or NO prediction:  If the Biowin3 (ultimate survey\n model) result is "weeks" or faster (i.e. "days", "days to weeks", or\n "weeks" AND the Biowin5 (MITI linear model) probability is \u003E= 0.5, then\n the prediction is YES (readily biodegradable).  If this condition is not\n satisfied, the prediction is NO (not readily biodegradable).  This method\n is based on application of Bayesian analysis to ready biodegradation data\n (see Help).  Biowin5 and 6 also predict ready biodegradability, but for\n degradation in the OECD301C test only; using data from the Chemicals\n Evaluation and Research Institute Japan (CERIJ) database.\n\n'
  },
  hydrocarbonBiodegradationRate: {
    parameters: {
      smiles: 'CCOP(=S)(OCC)OC1=NC(=C(C=C1Cl)Cl)Cl',
      cas: '002921-88-2'
    },
    estimatedValue: {
      model: {
        halfLifeDays: null,
        logHalfLifeDays: null,
        factors: [],
        notes:
          '  NO Estimate Possible ... Structure NOT a Hydrocarbon\n    (Contains atoms other than C, H or S (-S-))\n',
        output:
          'SMILES : CCOP(=S)(OCC)Oc1nc(c(cc1Cl)Cl)Cl\nMOL FOR: C9 H11 CL3 N1 O3 P1 S1 \nMOL WT : 350.59\n-------------------------- BioHCwin v1.01 Results ---------------------------\n\n  NO Estimate Possible ... Structure NOT a Hydrocarbon\n    (Contains atoms other than C, H or S (-S-))\n'
      },
      value: null,
      units: 'days',
      valueType: 'ESTIMATED'
    },
    selectedValue: {
      value: null,
      units: 'days',
      valueType: 'ESTIMATED'
    }
  },
  aerosolAdsorptionFraction: {
    parameters: {
      logKoa: {
        value: 8.94658450678984,
        units: '',
        valueType: 'ESTIMATED'
      },
      subcooledVaporPressure: {
        value: 0.000002287443294335,
        units: '',
        valueType: 'ESTIMATED'
      }
    },
    estimatedValue: {
      model: {
        mackayParticleGasPartitionCoefficient: 0.00983630940960104,
        koaParticleGasPartitionCoefficient: 0.000217062353124888,
        mackayAdsorptionFraction: 0.440373081748814,
        koaAdsorptionFraction: 0.0170685923444852,
        jungePankowAdsorptionFraction: 0.262149172744683
      },
      value: 0.440373081748814,
      units: '',
      valueType: 'ESTIMATED'
    },
    selectedValue: {
      value: 0.440373081748814,
      units: '',
      valueType: 'ESTIMATED'
    }
  },
  atmosphericHalfLife: {
    parameters: {
      smiles: 'CCOP(=S)(OCC)OC1=NC(=C(C=C1Cl)Cl)Cl',
      cas: '002921-88-2',
      hydroxylRadicalConcentration: 1500000,
      ozoneConcentration: 700000000000,
      twelveHourDay: true
    },
    estimatedValue: {
      model: {
        models: [
          {
            type: 'Hydroxyl Radical Reaction',
            rateConstant: 9.16849060058594e-11,
            halfLifeHours: 1.39992344379425,
            factors: [
              {
                type: 'Hydrogen Abstraction',
                value: 38.6285591125488,
                unit: 'E-12 cm3/molecule-sec'
              },
              {
                type: 'Reaction with N, S and -OH',
                value: 53,
                unit: 'E-12 cm3/molecule-sec'
              },
              {
                type: 'Addition to Triple Bonds',
                value: 0,
                unit: 'E-12 cm3/molecule-sec'
              },
              {
                type: 'Addition to Olefinic Bonds',
                value: 0,
                unit: 'E-12 cm3/molecule-sec'
              },
              {
                type: 'Addition to Aromatic Rings',
                value: 0.0563533827662468,
                unit: 'E-12 cm3/molecule-sec'
              },
              {
                type: 'Addition to Fused Rings',
                value: 0,
                unit: 'E-12 cm3/molecule-sec'
              }
            ]
          },
          {
            type: 'Ozone Reaction',
            rateConstant: 0,
            halfLifeHours: 0,
            factors: null
          },
          {
            type: 'Overall Reaction',
            rateConstant: 91.6849060058594,
            halfLifeHours: 1.39992344379425,
            factors: null
          }
        ],
        notes:
          '** Designates Estimation(s) Using ASSUMED Value(s)\n               ******  NO OZONE REACTION ESTIMATION ******\n               (ONLY Olefins and Acetylenes are Estimated)',
        output:
          'SMILES : CCOP(=S)(OCC)Oc1nc(c(cc1Cl)Cl)Cl\nMOL FOR: C9 H11 Cl3 N1 O3 P1 S1 \nMOL WT : 350.59\n------------------- SUMMARY (AOP v1.93): HYDROXYL RADICALS (25 deg C) --------\nHydrogen Abstraction       =  38.6286 E-12 cm3/molecule-sec\nReaction with N, S and -OH =  53.0000 E-12 cm3/molecule-sec\nAddition to Triple Bonds   =   0.0000 E-12 cm3/molecule-sec\nAddition to Olefinic Bonds =   0.0000 E-12 cm3/molecule-sec\n**Addition to Aromatic Rings =   0.0564 E-12 cm3/molecule-sec\nAddition to Fused Rings    =   0.0000 E-12 cm3/molecule-sec\n\n   OVERALL OH Rate Constant =  91.6849 E-12 cm3/molecule-sec\n   HALF-LIFE =     0.117 Days (12-hr day; 1.500E6 OH/cm3)\n   HALF-LIFE =     1.400 Hrs\n........................  ** Designates Estimation(s) Using ASSUMED Value(s)\n------------------- SUMMARY (AOP v1.93): OZONE REACTION (25 deg C) -----------\n\n               ******  NO OZONE REACTION ESTIMATION ******\n               (ONLY Olefins and Acetylenes are Estimated)\n\n\nHydrogen Abstraction Calculation:\n Kprim = 0.136 F(-CH2-)=0.136(1.230)= 0.167\n Ksec  = 0.934 F(-OP-)F(-CH3)=0.934(20.500)(1.000)= 19.147\n Ksec  = 0.934 F(-CH3)F(-OP-)=0.934(1.000)(20.500)= 19.147\n Kprim = 0.136 F(-CH2-)=0.136(1.230)= 0.167\n H Abstraction TOTAL = 38.629 E-12 cm3/molecule-sec\n\n\nReaction Rates With Nitrogen, Sulfur and -OH:\n K(P=S) =  53.000 E-12 cm3/molecule-sec\n\n\nOH Addition to Aromatic Rings Calculation:\nEs+ = sm+(-O-P **) + sm+(-CL) + sp+(-CL) + sp+(-CL) +  = 0.727\n Most negative Es+ = 0.727\n Log Kar = -12.432 - 1.34(Es+) cm3/molecule-sec\n            where -12.432 is the measured parent value for pyridine\n  Ring #1 Kar = 0.0564 E-12 cm3/molecule-sec\n TOTAL Kar =  0.0564 E-12 cm3/molecule-sec\n   ...................................ASSUMED Values designated by: **\n'
      },
      value: 1.39992344379425,
      units: 'hours',
      valueType: 'ESTIMATED'
    },
    estimatedHydroxylRadicalReactionRateConstant: {
      model: {
        type: 'Hydroxyl Radical Reaction',
        rateConstant: 9.16849060058594e-11,
        halfLifeHours: 1.39992344379425,
        factors: [
          {
            type: 'Hydrogen Abstraction',
            value: 38.6285591125488,
            unit: 'E-12 cm3/molecule-sec'
          },
          {
            type: 'Reaction with N, S and -OH',
            value: 53,
            unit: 'E-12 cm3/molecule-sec'
          },
          {
            type: 'Addition to Triple Bonds',
            value: 0,
            unit: 'E-12 cm3/molecule-sec'
          },
          {
            type: 'Addition to Olefinic Bonds',
            value: 0,
            unit: 'E-12 cm3/molecule-sec'
          },
          {
            type: 'Addition to Aromatic Rings',
            value: 0.0563533827662468,
            unit: 'E-12 cm3/molecule-sec'
          },
          {
            type: 'Addition to Fused Rings',
            value: 0,
            unit: 'E-12 cm3/molecule-sec'
          }
        ]
      },
      value: 9.16849060058594e-11,
      units: 'cm3/molecule-sec',
      valueType: 'ESTIMATED'
    },
    estimatedOzoneReactionRateConstant: {
      model: {
        type: 'Ozone Reaction',
        rateConstant: 0,
        halfLifeHours: 0,
        factors: null
      },
      value: 0,
      units: 'cm3/molecule-sec',
      valueType: 'ESTIMATED'
    },
    experimentalHydroxylRadicalReactionRateConstantValues: [],
    experimentalOzoneReactionRateConstantValues: [],
    experimentalNitrateReactionRateConstantValues: [],
    selectedHydroxylRadicalReactionRateConstant: {
      value: 9.16849060058594e-11,
      units: 'cm3/molecule-sec',
      valueType: 'ESTIMATED'
    },
    selectedOzoneReactionRateConstantValues: {
      value: 0,
      units: 'cm3/molecule-sec',
      valueType: 'ESTIMATED'
    }
  },
  logKoc: {
    parameters: {
      smiles: 'CCOP(=S)(OCC)OC1=NC(=C(C=C1Cl)Cl)Cl',
      cas: '002921-88-2',
      logKow: {
        value: 4.96,
        units: null,
        valueType: 'EXPERIMENTAL'
      }
    },
    experimentalValues: [
      {
        author: 'Schuurmann,G et al',
        year: 2006,
        order: 1,
        value: 3.7,
        units: 'L/kg',
        valueType: 'EXPERIMENTAL'
      }
    ],
    estimatedValue: {
      model: {
        logKoc: 3.86228132247925,
        models: [
          {
            firstOrderMCI: 8.41483306884766,
            name: 'MCI',
            factors: [
              {
                fragmentCount: 1,
                trainingCount: 30,
                maxFragmentCount: 2,
                description: 'OrganoPhosphorus [P=S]  ...............',
                coefficient: -1.15991902351379,
                totalCoefficient: -1.15991902351379
              },
              {
                fragmentCount: 1,
                trainingCount: 12,
                maxFragmentCount: 1,
                description: 'Pyridine ring .........................',
                coefficient: -0.308034986257553,
                totalCoefficient: -0.308034986257553
              },
              {
                fragmentCount: 0,
                trainingCount: 42,
                maxFragmentCount: 1,
                description: 'Poly-Chlorinated Aromatic .............',
                coefficient: 0.343782693147659,
                totalCoefficient: 0.343782693147659
              }
            ],
            nonCorrectedLogKoc: 4.98645257949829,
            correctedLogKoc: 3.86228132247925,
            koc: 7282.513671875
          },
          {
            logKow: 4.96000003814697,
            name: 'Kow',
            factors: [
              {
                fragmentCount: 1,
                trainingCount: 0,
                maxFragmentCount: 0,
                description: 'OrganoPhosphorus [P=S]  ...............',
                coefficient: -0.0917249992489815,
                totalCoefficient: -0.0917249992489815
              },
              {
                fragmentCount: 1,
                trainingCount: 0,
                maxFragmentCount: 0,
                description: 'Pyridine ring .........................',
                coefficient: 0.17637200653553,
                totalCoefficient: 0.17637200653553
              },
              {
                fragmentCount: 0,
                trainingCount: 0,
                maxFragmentCount: 0,
                description: 'Poly-Chlorinated Aromatic .............',
                coefficient: 0.144393995404243,
                totalCoefficient: 0.144393995404243
              }
            ],
            nonCorrectedLogKoc: 3.66862487792969,
            correctedLogKoc: 3.89766573905945,
            koc: 7900.703125
          }
        ],
        notes: '',
        output:
          'MOL FOR: C9 H11 Cl3 N1 O3 P1 S1 \nMOL WT : 350.59\n---------------------------  KOCWIN v2.01 Results  ---------------------------\n\n  Koc Estimate from MCI:\n  ---------------------\n         First Order Molecular Connectivity Index  ........... :  8.415\n         Non-Corrected Log Koc (0.5213 MCI + 0.60)  .......... :  4.9865\n         Fragment Correction(s):\n                  1   OrganoPhosphorus [P=S]  ...............  : -1.1599\n                  1   Pyridine ring .........................  : -0.3080\n                  *   Poly-Chlorinated Aromatic .............  :  0.3438\n         Corrected Log Koc  .................................. :  3.8623\n\n                         Estimated Koc:  7283  L/kg   \u003C===========\n\n  Koc Estimate from Log Kow:\n  -------------------------\n         Log Kow  (User entered   )  ......................... :  4.96\n         Non-Corrected Log Koc (0.55313 logKow + 0.9251)  .... :  3.6686\n         Fragment Correction(s):\n                  1   OrganoPhosphorus [P=S]  ...............  : -0.0917\n                  1   Pyridine ring .........................  :  0.1764\n                  *   Poly-Chlorinated Aromatic .............  :  0.1444\n         Corrected Log Koc  .................................. :  3.8977\n\n                         Estimated Koc:  7901  L/kg   \u003C===========\n\n'
      },
      value: 3.86228132247925,
      units: 'L/kg',
      valueType: 'ESTIMATED'
    },
    selectedValue: {
      value: 3.7,
      units: 'L/kg',
      valueType: 'EXPERIMENTAL'
    }
  },
  hydrolysis: {
    halfLives: [
      {
        ph: 7,
        value: 0,
        unit: null,
        baseCatalyzed: true,
        acidCatalyzed: false,
        phosphorusEster: false,
        isomer: null
      },
      {
        ph: 7,
        value: 0,
        unit: null,
        baseCatalyzed: false,
        acidCatalyzed: true,
        phosphorusEster: false,
        isomer: null
      },
      {
        ph: 7,
        value: 0,
        unit: null,
        baseCatalyzed: false,
        acidCatalyzed: false,
        phosphorusEster: false,
        isomer: null
      },
      {
        ph: 7,
        value: 178.336303710938,
        unit: 'days',
        baseCatalyzed: false,
        acidCatalyzed: true,
        phosphorusEster: true,
        isomer: null
      },
      {
        ph: 7,
        value: 0,
        unit: null,
        baseCatalyzed: false,
        acidCatalyzed: true,
        phosphorusEster: false,
        isomer: null
      },
      {
        ph: 8,
        value: 0,
        unit: null,
        baseCatalyzed: true,
        acidCatalyzed: false,
        phosphorusEster: false,
        isomer: null
      }
    ],
    phosphorusEsterHalfLives: [
      {
        ph: 5,
        value: 178.447830200195,
        unit: 'days',
        baseCatalyzed: false,
        acidCatalyzed: false,
        phosphorusEster: true,
        isomer: null
      },
      {
        ph: 6,
        value: 178.437683105469,
        unit: 'days',
        baseCatalyzed: false,
        acidCatalyzed: false,
        phosphorusEster: true,
        isomer: null
      },
      {
        ph: 7,
        value: 178.336303710938,
        unit: 'days',
        baseCatalyzed: false,
        acidCatalyzed: false,
        phosphorusEster: true,
        isomer: null
      },
      {
        ph: 8,
        value: 177.328750610352,
        unit: 'days',
        baseCatalyzed: false,
        acidCatalyzed: false,
        phosphorusEster: true,
        isomer: null
      },
      {
        ph: 9,
        value: 167.845840454102,
        unit: 'days',
        baseCatalyzed: false,
        acidCatalyzed: false,
        phosphorusEster: true,
        isomer: null
      },
      {
        ph: 10,
        value: 109.362648010254,
        unit: 'days',
        baseCatalyzed: false,
        acidCatalyzed: false,
        phosphorusEster: true,
        isomer: null
      }
    ],
    fragments: [],
    baseCatalyzedRateConstant: 0,
    acidCatalyzedRateConstant: 0,
    acidCatalyzedRateConstantForTransIsomer: 0,
    neutralRateConstant: -7.3472318649292,
    output:
      'SMILES : CCOP(=S)(OCC)Oc1nc(c(cc1Cl)Cl)Cl\nMOL FOR: C9 H11 CL3 N1 O3 P1 S1 \nMOL WT : 350.59\n--------------------------- HYDROWIN v2.00 Results ---------------------------\n\nThiophosphate: S=P-({O,S}-R)3           \n                                           R1{-O-}: -CH2-CH3            \n                                           R1{-O-}: -Phenyl             \n                                           R1{-O-}: -CH2-CH3            \n\n Log Kn (/sec) = -7.3472\n Kn = 4.495e-08/sec = 2.697e-06/min\n    = 0.0001618/hr = 0.003884/day\n\n Log Kb (/M-sec) = -3.5467\n Kb = 0.0002840/M-sec = 0.01704/M-min\n    = 1.022/M-hr = 24.54/M-day\n\n Log Ka : ** Acid-catalyzed rates can NOT be estimated at this time.\n\n Estimated Half-Lives (for Phosphorus Ester): \n -------------------------------------------\n   pH5 :  178.4 days\n   pH6 :  178.4 days\n   pH7 :  178.3 days\n   pH8 :  177.3 days\n   pH9 :  167.8 days\n   pH10:  109.4 days\n'
  },
  bioconcentration: {
    parameters: {
      smiles: 'CCOP(=S)(OCC)OC1=NC(=C(C=C1Cl)Cl)Cl',
      cas: '002921-88-2',
      logKow: {
        value: 4.96,
        units: null,
        valueType: 'EXPERIMENTAL'
      }
    },
    bioconcentrationFactor: 870.18,
    experimentalBioconcentrationFactor: 3.18269991874695,
    experimentalBioTransformationRate: 0.773,
    logBioconcentrationFactor: 2.94,
    biotransformationHalfLife: 0.77,
    bioaccumulationFactor: 2122.48,
    logBioaccumulationFactor: 3.33,
    biotransformationFactors: [
      {
        type: 'Fragmant',
        description: 'Aromatic chloride   [-CL]',
        fragmentCount: 3,
        coefficient: 0.377846419811249,
        totalCoefficient: 1.1335391998291,
        trainingCount: 145,
        maxFragmentCount: 10
      },
      {
        type: 'Fragmant',
        description: 'Pyridine ring',
        fragmentCount: 1,
        coefficient: -0.902120113372803,
        totalCoefficient: -0.902120113372803,
        trainingCount: 3,
        maxFragmentCount: 1
      },
      {
        type: 'Fragmant',
        description: 'Phosphate ester (P=S type)',
        fragmentCount: 1,
        coefficient: 0.19779671728611,
        totalCoefficient: 0.19779671728611,
        trainingCount: 18,
        maxFragmentCount: 1
      },
      {
        type: 'Fragmant',
        description: 'Aromatic-H',
        fragmentCount: 1,
        coefficient: 0.266378074884415,
        totalCoefficient: 0.266378074884415,
        trainingCount: 305,
        maxFragmentCount: 15
      },
      {
        type: 'Fragmant',
        description: 'Methyl  [-CH3]',
        fragmentCount: 2,
        coefficient: 0.245105296373367,
        totalCoefficient: 0.490210592746735,
        trainingCount: 170,
        maxFragmentCount: 12
      },
      {
        type: 'Fragmant',
        description: '-CH2-  [linear]',
        fragmentCount: 2,
        coefficient: 0.0241870693862438,
        totalCoefficient: 0.0483741387724876,
        trainingCount: 109,
        maxFragmentCount: 28
      },
      {
        type: 'LogKow',
        description: 'Log Kow = 4.96  used for calc',
        fragmentCount: 0,
        coefficient: 0.307342141866684,
        totalCoefficient: 1.52441704273224,
        trainingCount: 0,
        maxFragmentCount: 0
      },
      {
        type: 'MolWt',
        description: 'Molecular Weight Parameter',
        fragmentCount: 0,
        coefficient: 0,
        totalCoefficient: -0.899017870426178,
        trainingCount: 0,
        maxFragmentCount: 0
      },
      {
        type: 'Constant',
        description: 'Equation Constant',
        fragmentCount: 0,
        coefficient: 0,
        totalCoefficient: -1.53706848621368,
        trainingCount: 0,
        maxFragmentCount: 0
      },
      {
        type: 'Result',
        description: 'LOG Bio Half-Life (days)',
        fragmentCount: 0,
        coefficient: 0,
        totalCoefficient: 0.322509169578552,
        trainingCount: 0,
        maxFragmentCount: 0
      },
      {
        type: 'Result',
        description: 'Bio Half-Life (days)',
        fragmentCount: 0,
        coefficient: 0,
        totalCoefficient: 2.10140204429626,
        trainingCount: 0,
        maxFragmentCount: 0
      },
      {
        type: 'Note',
        description: 'Bio Half-Life Normalized to 10 g fish at 15 deg C',
        fragmentCount: 0,
        coefficient: 0,
        totalCoefficient: 0,
        trainingCount: 0,
        maxFragmentCount: 0
      }
    ],
    biotransformationRateConstants: [
      {
        type: 'KMRateConstant',
        value: 0.329849869012833,
        unit: '/day (10 gram fish)'
      },
      {
        type: 'KMRateConstant',
        value: 0.18548820912838,
        unit: '/day (100 gram fish)'
      },
      {
        type: 'KMRateConstant',
        value: 0.104307688772678,
        unit: '/day (1 kg fish)'
      },
      {
        type: 'KMRateConstant',
        value: 0.0586565248668194,
        unit: '/day (10 kg fish)'
      }
    ],
    bioconcentrationFactors: [
      {
        type: 'Correction',
        description: 'No Applicable Correction Factors',
        fragmentCount: 1,
        coefficient: 0,
        totalCoefficient: 0,
        trainingCount: 0,
        maxFragmentCount: 0
      }
    ],
    biocontrationFactorEquation: 'Log BCF = 0.6598 * 4.96 - 0.333 + Correction',
    biocontrationFactorEquationSum: 2.93960802516937,
    arnotGobasBcfBafEstimates: [
      {
        trophicLevel: 'Upper Trophic',
        trophicLevelNote: null,
        bioconcentrationFactor: 1859.43166514565,
        logBioconcentrationFactor: 3.26938022249306,
        bioaccumulationFactor: 2122.47933136249,
        logBioaccumulationFactor: 3.32684346979047,
        unit: 'L/kg wet-wt'
      },
      {
        trophicLevel: 'Mid Trophic',
        trophicLevelNote: null,
        bioconcentrationFactor: 993.002589773812,
        logBioconcentrationFactor: 2.99695038114695,
        bioaccumulationFactor: 1117.55441345789,
        logBioaccumulationFactor: 3.04826867801354,
        unit: 'L/kg wet-wt'
      },
      {
        trophicLevel: 'Lower Trophic',
        trophicLevelNote: null,
        bioconcentrationFactor: 1051.12128930006,
        logBioconcentrationFactor: 3.02165283233129,
        bioaccumulationFactor: 1445.82236740052,
        logBioaccumulationFactor: 3.16011493915731,
        unit: 'L/kg wet-wt'
      },
      {
        trophicLevel: 'Upper Trophic',
        trophicLevelNote: 'where Km = 0',
        bioconcentrationFactor: 7361.38432356552,
        logBioconcentrationFactor: 3.8669594919942,
        bioaccumulationFactor: 92555.7332491407,
        logBioaccumulationFactor: 4.96640332575069,
        unit: 'L/kg wet-wt'
      }
    ],
    notes: '',
    output:
      'MOL FOR: C9 H11 Cl3 N1 O3 P1 S1 \nMOL WT : 350.59\n--------------------------------- BCFBAF v3.02 --------------------------------\nSummary Results:\n  Log BCF (regression-based estimate):  2.94  (BCF = 870 L/kg wet-wt)\n  Biotransformation Half-Life (days) :  2.10  (normalized to 10 g fish)\n  Log BAF (Arnot-Gobas upper trophic):  3.33  (BAF = 2.12e+03 L/kg wet-wt)\n\n=============================\nBCF (Bioconcentration Factor):\n=============================\nLog Kow  (estimated)  :  5.11\nLog Kow used by BCF estimates:  4.96\n\nEquation Used to Make BCF estimate:\n   Log BCF = 0.6598 log Kow - 0.333 + Correction\n\n      Correction(s):                    Value\n       No Applicable Correction Factors\n\n   Estimated Log BCF =  2.940  (BCF = 870.2 L/kg wet-wt)\n\n===========================================================\nWhole Body Primary Biotransformation Rate Estimate for Fish:\n===========================================================\n------+-----+--------------------------------------------+---------+---------\n TYPE | NUM | LOG BIOTRANSFORMATION FRAGMENT DESCRIPTION |  COEFF  |  VALUE  \n------+-----+--------------------------------------------+---------+---------\n Frag |  3  |  Aromatic chloride   [-CL]                 |  0.3778 |  1.1335\n Frag |  1  |  Pyridine ring                             | -0.9021 | -0.9021\n Frag |  1  |  Phosphate ester (P=S type)                |  0.1978 |  0.1978\n Frag |  1  |  Aromatic-H                                |  0.2664 |  0.2664\n Frag |  2  |  Methyl  [-CH3]                            |  0.2451 |  0.4902\n Frag |  2  |  -CH2-  [linear]                           |  0.0242 |  0.0484\n L Kow|  *  |  Log Kow =   4.96 ( used for calc )        |  0.3073 |  1.5244\n MolWt|  *  |  Molecular Weight Parameter                |         | -0.8990\n Const|  *  |  Equation Constant                         |         | -1.5371\n============+============================================+=========+=========\n   RESULT   |        LOG Bio Half-Life (days)            |         |  0.3225\n   RESULT   |            Bio Half-Life (days)            |         |   2.101\n   NOTE     |  Bio Half-Life Normalized to 10 g fish at 15 deg C   |\n============+============================================+=========+=========\n\nBiotransformation Rate Constant:\n kM (Rate Constant):  0.3298 /day (10 gram fish)   \n kM (Rate Constant):  0.1855 /day (100 gram fish)   \n kM (Rate Constant):  0.1043 /day (1 kg fish)   \n kM (Rate Constant):  0.05866 /day (10 kg fish)   \n\nArnot-Gobas BCF & BAF Methods (including biotransformation rate estimates):\n   Estimated Log BCF (upper trophic) =  3.269  (BCF = 1859 L/kg wet-wt)\n   Estimated Log BAF (upper trophic) =  3.327  (BAF = 2122 L/kg wet-wt)\n   Estimated Log BCF (mid trophic)   =  2.997  (BCF = 993.0 L/kg wet-wt)\n   Estimated Log BAF (mid trophic)   =  3.048  (BAF = 1118 L/kg wet-wt)\n   Estimated Log BCF (lower trophic) =  3.022  (BCF = 1051 L/kg wet-wt)\n   Estimated Log BAF (lower trophic) =  3.160  (BAF = 1446 L/kg wet-wt)\n\n Arnot-Gobas BCF & BAF Methods (assuming a biotransformation rate of zero):\n   Estimated Log BCF (upper trophic) =  3.867  (BCF = 7361 L/kg wet-wt)\n   Estimated Log BAF (upper trophic) =  4.966  (BAF = 9.256e+04 L/kg wet-wt)\n\n '
  },
  waterVolatilization: {
    parameters: {
      molecularWeight: 350.58754871051,
      henrysLawConstant: {
        value: 0.00000252329414252,
        units: 'atm-m3/mol',
        valueType: 'ESTIMATED'
      },
      riverWaterDepthMeters: 1,
      riverWindVelocityMetersPerSecond: 5,
      riverCurrentVelocityMetersPerSecond: 1,
      lakeWindVelocityMetersPerSecond: 0.5,
      lakeCurrentVelocityMetersPerSecond: 0.0500000007450581,
      lakeWaterDepthMeters: 1
    },
    riverHalfLifeHours: 436.490456820812,
    lakeHalfLifeHours: 4918.73449871732
  },
  sewageTreatmentModel: {
    parameters: {
      molecularWeight: {
        value: 350.58754871051,
        units: 'g/mol',
        valueType: 'NONE'
      },
      henrysLawConstant: {
        value: 0.00000252329414252,
        units: 'atm-m3/mol',
        valueType: 'ESTIMATED'
      },
      waterSolubility: {
        value: 1.65559935569763,
        units: 'mg/L',
        valueType: 'ESTIMATED'
      },
      vaporPressure: {
        value: 0.0000203,
        units: 'mmHg',
        valueType: 'EXPERIMENTAL'
      },
      logKow: {
        value: 4.96,
        units: null,
        valueType: 'EXPERIMENTAL'
      },
      biowin3: {
        value: 1.74418230354786,
        units: '',
        valueType: 'NONE'
      },
      biowin5: {
        value: -0.0724665224843193,
        units: '',
        valueType: 'NONE'
      },
      halfLifeHoursPrimaryClarifier: {
        value: 10000,
        units: 'hours',
        valueType: 'USER_PROVIDED'
      },
      halfLifeHoursAerationVessel: {
        value: 10000,
        units: 'hours',
        valueType: 'USER_PROVIDED'
      },
      halfLifeHoursSettlingTank: {
        value: 10000,
        units: 'hours',
        valueType: 'USER_PROVIDED'
      }
    },
    model: {
      Influent: {
        MassPerHour: 10,
        MolPerHour: 0.0285235457122326,
        Percent: 100
      },
      PrimarySludge: {
        MassPerHour: 4.70754018273602,
        MolPerHour: 0.0134275735590612,
        Percent: 47.0754011248422
      },
      WasteSludge: {
        MassPerHour: 2.86346440390603,
        MolPerHour: 0.00816761566012908,
        Percent: 28.6346436117384
      },
      TotalSludge: {
        MassPerHour: 7.57100458664205,
        MolPerHour: 0.0215951892191903,
        Percent: 75.7100447365805
      },
      PrimVloitilization: {
        MassPerHour: 0.000292568362819678,
        MolPerHour: 8.34508694630431e-7,
        Percent: 0.00292568362819678
      },
      SettlingVloitilization: {
        MassPerHour: 0.00070026161320598,
        MolPerHour: 0.000001997394383672,
        Percent: 0.00700261613205981
      },
      AerationOffGas: {
        MassPerHour: 0.0017432991877554,
        MolPerHour: 0.000004972507332997,
        Percent: 0.0174329916173971
      },
      TotalAir: {
        MassPerHour: 0.00273612916378106,
        MolPerHour: 0.000007804410411301,
        Percent: 0.0273612913776537
      },
      PrimBiodeg: {
        MassPerHour: 0.0141363268280977,
        MolPerHour: 0.000040321815846697,
        Percent: 0.141363268280977
      },
      SettlingBiodeg: {
        MassPerHour: 0.00371918908073217,
        MolPerHour: 0.000010608445817357,
        Percent: 0.0371918908073217
      },
      AerationBiodeg: {
        MassPerHour: 0.048973455094863,
        MolPerHour: 0.000139689656423805,
        Percent: 0.48973455094863
      },
      TotalBiodeg: {
        MassPerHour: 0.0668289710036928,
        MolPerHour: 0.00019061991808786,
        Percent: 0.668289710036928
      },
      FinalEffluent: {
        MassPerHour: 2.35943055070607,
        MolPerHour: 0.00672993241635779,
        Percent: 23.5943051549569
      },
      TotalRemoval: {
        MassPerHour: 7.64056944929394,
        MolPerHour: 0.0217936132958748,
        Percent: 76.4056944929394
      },
      PrimaryRateConstant: {
        MassPerHour: 0.000071199567173607,
        MolPerHour: 9733.205078125,
        Percent: 10000
      },
      AerationRateConstant: {
        MassPerHour: 0.000071199567173607,
        MolPerHour: 9733.205078125,
        Percent: 10000
      },
      SettlingRateConstant: {
        MassPerHour: 0.000071199567173607,
        MolPerHour: 9733.205078125,
        Percent: 10000
      },
      CalculationVariables: [
        350.587554931641, 1.65559935569763, 0.00270644412375987,
        2.67105271234414e-8, 0.000020299999960116, 0.000002523294062125,
        0.000103195226984098, 91201.09375, 4.96000003814697, 18241.01953125, 25,
        0
      ]
    },
    output:
      "\nSTP Fugacity Model:  Predicted Fate in a Wastewater Treatment Facility\n======================================================================\n   (using User entered values)\nPROPERTIES OF: \n-------------\nMolecular weight (g/mol)                               350.588 \nAqueous solubility (mg/l)                              1.65560 \nVapour pressure (Pa)                                   0.00270644 \n                (atm)                                  2.67105E-08 \n                (mm Hg)                                2.03000E-05 \nHenry 's law constant (Atm-m3/mol)                     2.52329E-06 \nAir-water partition coefficient                        0.000103195 \nOctanol-water partition coefficient (Kow)              91201.1 \nLog Kow                                                4.96000 \nBiomass to water partition coefficient                 18241.0 \nTemperature [deg C]                                    25.0000 \nBiodeg rate constants (h^-1),half life in biomass (h) and in 2000 mg/L MLSS (h):\n          -Primary tank        0.00      9733.21       10000.00\n          -Aeration tank       0.00      9733.21       10000.00\n          -Settling tank       0.00      9733.21       10000.00\n\n STP Overall Chemical Mass Balance:\n ---------------------------------\n                             g/h               mol/h          percent\n \nInfluent                     1.00E+01          2.9E-02        100.00\n \nPrimary sludge               4.71E+00          1.3E-02        47.08\nWaste sludge                 2.86E+00          8.2E-03        28.63\nPrimary volatilization       2.93E-04          8.3E-07         0.00\nSettling volatilization      7.00E-04          2.0E-06         0.01\nAeration off gas             1.74E-03          5.0E-06         0.02\n\nPrimary biodegradation       1.41E-02          4.0E-05         0.14\nSettling biodegradation      3.72E-03          1.1E-05         0.04\nAeration biodegradation      4.90E-02          1.4E-04         0.49\n \nFinal water effluent         2.36E+00          6.7E-03        23.59\n \nTotal removal                7.64E+00          2.2E-02        76.41\nTotal biodegradation         6.68E-02          1.9E-04         0.67\n\n"
  },
  fugacityModel: {
    parameters: {
      henrysLawConstant: {
        value: 0.00000252329414252,
        units: 'atm-m3/mol',
        valueType: 'ESTIMATED'
      },
      logKow: {
        value: 4.96,
        units: null,
        valueType: 'EXPERIMENTAL'
      },
      logKoc: {
        value: 3.7,
        units: 'L/kg',
        valueType: 'EXPERIMENTAL'
      },
      molecularWeight: {
        value: 350.58754871051,
        units: 'g/mol',
        valueType: 'NONE'
      },
      meltingPoint: {
        value: 42,
        units: 'celsius',
        valueType: 'EXPERIMENTAL'
      },
      vaporPressure: {
        value: 0.0000203,
        units: 'mmHg',
        valueType: 'EXPERIMENTAL'
      },
      waterSolubility: {
        value: 1.65559935569763,
        units: 'mg/L',
        valueType: 'ESTIMATED'
      },
      atmosphericHydroxylRateConstant: {
        value: 9.16849060058594e-11,
        units: 'cm3/molecule-sec',
        valueType: 'ESTIMATED'
      },
      ultimateBiodegradation: {
        value: 1.74418230354786,
        units: '',
        valueType: 'NONE'
      },
      halfLifeAir: {
        value: 0,
        units: 'hours',
        valueType: 'USER_PROVIDED'
      },
      halfLifeWater: {
        value: 0,
        units: 'hours',
        valueType: 'USER_PROVIDED'
      },
      halfLifeSoil: {
        value: 0,
        units: 'hours',
        valueType: 'USER_PROVIDED'
      },
      halfLifeSediment: {
        value: 0,
        units: 'hours',
        valueType: 'USER_PROVIDED'
      },
      emissionRateAir: {
        value: 1000,
        units: 'kg/hour',
        valueType: 'USER_PROVIDED'
      },
      emissionRateWater: {
        value: 1000,
        units: 'kg/hour',
        valueType: 'USER_PROVIDED'
      },
      emissionRateSoil: {
        value: 1000,
        units: 'kg/hour',
        valueType: 'USER_PROVIDED'
      },
      emissionRateSediment: {
        value: 0,
        units: 'kg/hour',
        valueType: 'USER_PROVIDED'
      },
      advectionTimeAir: {
        value: 100,
        units: 'hours',
        valueType: 'USER_PROVIDED'
      },
      advectionTimeWater: {
        value: 1000,
        units: 'hours',
        valueType: 'USER_PROVIDED'
      },
      advectionTimeSoil: {
        value: 0,
        units: 'hours',
        valueType: 'USER_PROVIDED'
      },
      advectionTimeSediment: {
        value: 50000,
        units: 'hours',
        valueType: 'USER_PROVIDED'
      }
    },
    model: {
      Air: [
        {
          MassAmount: 0.0295256137562782,
          HalfLife: 2.7994429819262,
          Emissions: 1000
        },
        null,
        null,
        null,
        null,
        null,
        null
      ],
      Water: [
        {
          MassAmount: 6.34954476833771,
          HalfLife: 4320,
          Emissions: 1000
        },
        null,
        null,
        null,
        null,
        null,
        null
      ],
      Soil: [
        {
          MassAmount: 90.19181218361,
          HalfLife: 8640,
          Emissions: 1000
        },
        null,
        null,
        null,
        null,
        null,
        null
      ],
      Sediment: [
        {
          MassAmount: 3.42911743429598,
          HalfLife: 38880,
          Emissions: 0
        },
        null,
        null,
        null,
        null,
        null,
        null
      ],
      Persistence: 4477.02619773351,
      aEmissionArray: [0, 0, 0, 0],
      aAdvectionTimeArray: [0, 0, 0, 0],
      aFugacities: [
        9.68837357970798e-13, 1.06791952206366e-11, 1.40825157652361e-11,
        2.39548950962953e-11
      ],
      aReaction: [
        981.683367417383, 136.805314181737, 971.622348733293, 8.2091884813228
      ],
      aAdvection: [39.6560838873055, 852.812348145891, 0, 9.2113491530687],
      aReactionPercent: [
        32.7227789139128, 4.56017713939122, 32.3874116244431, 0.273639616044093
      ],
      aAdvectionPercent: [
        1.32186946291019, 28.4270782715297, 0, 0.307044971768957
      ],
      aSums: [1051.76264613153, 69.9440072937912, 30.0559927062088],
      aTimes: [4477.02619773351, 6400.87174148933, 14895.6191249297],
      HalfLifeArray: [2.7994429819262, 4320, 8640, 38880],
      HalfLifeFactorArray: [0, 0, 0, 0],
      Emission: [1000, 1000, 1000, 0],
      AdvectionTimesArray: [100, 1000, 0, 50000],
      aNotes: []
    }
  },
  dermalPermeability: {
    parameters: {
      smiles: 'CCOP(=S)(OCC)OC1=NC(=C(C=C1Cl)Cl)Cl',
      logKow: {
        value: 4.96,
        units: null,
        valueType: 'EXPERIMENTAL'
      },
      molecularWeight: {
        value: 350.58754871051,
        units: 'g/mol',
        valueType: 'NONE'
      },
      dermalPermeabilityCoefficient: {
        value: -999,
        units: 'cm/hr',
        valueType: 'USER_PROVIDED'
      },
      waterConcentrationMgPerLiter: {
        value: 1.65559935569763,
        units: 'mg/L',
        valueType: 'ESTIMATED'
      },
      eventDurationHours: 0.58,
      fractionAbsorbedWater: 1,
      skinSurfaceAreaCm2: 18000,
      exposureEventsPerDay: 1,
      exposureDurationYears: 30,
      exposureDaysPerYear: 350,
      bodyWeightKg: 70,
      averagingTimeDays: 25550
    },
    dermalPermeabilityCoefficient: 0.0334094853076686,
    dermalAbsorbedDose: 38655.0815160135,
    dermalAbsorbedDosePerEvent: 365.79160471635,
    lagTimePerEventHours: 9.87024720315288,
    timeToReachSteadyStateHours: 23.6885932875669,
    output:
      'MOL FOR: C9 H11 CL3 N1 O3 P1 S1 \nMOL WT : 350.59\n------------------------------ Dermwin v2.02 ----------------------------------\nLog Kow  (estimated)  :  5.11\nLog Kow (User) :  4.96   (used in Kp calculations)\n\nGENERAL Equation:   log Kp = -2.80 + 0.66 log Kow - 0.0056 MW\n    Kp (predicted): 0.0334  cm/hr\n\nDermally Absorbed Dose per Event for Organic Compounds - Water Contact:\n   Water Conc (mg/cm3): 1.66e+03  (entered by user)\n   Event Duration (hr): 0.580\n   Fraction Absorbed  : 1.0000\n\n   DA(event):  366 mg/cm2-event (using eqn 3.2 & 3.3)\n                   (tau = 9.87 hr,  t* = 23.7 hr)\n\nDermally Absorbed Dose (70.00 kg Human) - Water Contact:\n   DAD:  3.87e+04 mg/kg-day (using eqn 3.1)\n      using:\n        SA: 18000.0 cm2  (skin surface area)\n        EV: 1.00 event/day  (event freq)\n        ED: 30.0 years  (exposure duration)\n        EF: 350.0 day/year  (exposure freq)\n        BW: 70.00 kg  (body weight)\n        AT: 25550.00 days  (averaging time)\n\n'
  },
  ecosar: {
    parameters: {
      smiles: 'CCOP(=S)(OCC)OC1=NC(=C(C=C1Cl)Cl)Cl',
      cas: '002921-88-2',
      logKow: {
        value: 4.96,
        units: null,
        valueType: 'EXPERIMENTAL'
      },
      waterSolubility: {
        value: 1.65559935569763,
        units: 'mg/L',
        valueType: 'ESTIMATED'
      },
      meltingPoint: {
        value: 42,
        units: 'celsius',
        valueType: 'EXPERIMENTAL'
      }
    },
    modelResults: [
      {
        qsarClass: 'Neutral Organics',
        organism: 'Fish',
        duration: '96-hr',
        endpoint: 'LC50',
        concentration: 0.632438361644745,
        maxLogKow: 5,
        flags: []
      },
      {
        qsarClass: 'Neutral Organics',
        organism: 'Daphnid',
        duration: '48-hr',
        endpoint: 'LC50',
        concentration: 0.47196951508522,
        maxLogKow: 5,
        flags: []
      },
      {
        qsarClass: 'Neutral Organics',
        organism: 'Green Algae',
        duration: '96-hr',
        endpoint: 'EC50',
        concentration: 1.08838427066803,
        maxLogKow: 6.40000009536743,
        flags: []
      },
      {
        qsarClass: 'Neutral Organics',
        organism: 'Fish',
        duration: '',
        endpoint: 'ChV',
        concentration: 0.0853347852826119,
        maxLogKow: 8,
        flags: []
      },
      {
        qsarClass: 'Neutral Organics',
        organism: 'Daphnid',
        duration: '',
        endpoint: 'ChV',
        concentration: 0.0984805002808571,
        maxLogKow: 8,
        flags: []
      },
      {
        qsarClass: 'Neutral Organics',
        organism: 'Green Algae',
        duration: '',
        endpoint: 'ChV',
        concentration: 0.523853540420532,
        maxLogKow: 8,
        flags: []
      },
      {
        qsarClass: 'Neutral Organics',
        organism: 'Fish (SW)',
        duration: '96-hr',
        endpoint: 'LC50',
        concentration: 0.810427665710449,
        maxLogKow: 5,
        flags: []
      },
      {
        qsarClass: 'Neutral Organics',
        organism: 'Mysid',
        duration: '96-hr',
        endpoint: 'LC50',
        concentration: 0.0810927078127861,
        maxLogKow: 5,
        flags: []
      },
      {
        qsarClass: 'Neutral Organics',
        organism: 'Fish (SW)',
        duration: '',
        endpoint: 'ChV',
        concentration: 0.536174535751343,
        maxLogKow: 8,
        flags: []
      },
      {
        qsarClass: 'Neutral Organics',
        organism: 'Mysid (SW)',
        duration: '',
        endpoint: 'ChV',
        concentration: 0.00291561242192984,
        maxLogKow: 8,
        flags: []
      },
      {
        qsarClass: 'Neutral Organics',
        organism: 'Earthworm',
        duration: '14-day',
        endpoint: 'LC50',
        concentration: 300.636779785156,
        maxLogKow: 6,
        flags: [
          'Chemical may not be soluble enough to measure this predicted effect. If the effect level exceeds the water solubility by 10X, typically no effects at saturation (NES) are reported.'
        ]
      },
      {
        qsarClass: 'Esters, Monothiophosphates',
        organism: 'Fish',
        duration: '96-hr',
        endpoint: 'LC50',
        concentration: 0.050741832703352,
        maxLogKow: 5,
        flags: []
      },
      {
        qsarClass: 'Esters, Monothiophosphates',
        organism: 'Daphnid',
        duration: '48-hr',
        endpoint: 'LC50',
        concentration: 0.000247191754169762,
        maxLogKow: 5,
        flags: []
      },
      {
        qsarClass: 'Esters, Monothiophosphates',
        organism: 'Green Algae',
        duration: '96-hr',
        endpoint: 'EC50',
        concentration: 0.214493542909622,
        maxLogKow: 6.40000009536743,
        flags: []
      },
      {
        qsarClass: 'Esters, Monothiophosphates',
        organism: 'Fish',
        duration: '',
        endpoint: 'ChV',
        concentration: 0.0082515012472868,
        maxLogKow: 8,
        flags: []
      },
      {
        qsarClass: 'Esters, Monothiophosphates',
        organism: 'Daphnid',
        duration: '',
        endpoint: 'ChV',
        concentration: 0.000041083370888372,
        maxLogKow: 8,
        flags: []
      },
      {
        qsarClass: 'Esters, Monothiophosphates',
        organism: 'Green Algae',
        duration: '',
        endpoint: 'ChV',
        concentration: 0.0950268059968948,
        maxLogKow: 8,
        flags: [
          'The toxicity value was estimated through application of acute-to-chronic ratios per methods outlined in the ECOSAR Methodology provided in the ECOSAR Help Documents.'
        ]
      },
      {
        qsarClass: 'Esters, Monothiophosphates',
        organism: 'Fish (SW)',
        duration: '96-hr',
        endpoint: 'LC50',
        concentration: 0.0915364548563957,
        maxLogKow: 5,
        flags: []
      },
      {
        qsarClass: 'Halopyrdines ',
        organism: 'Fish',
        duration: '96-hr',
        endpoint: 'LC50',
        concentration: 0.703198790550232,
        maxLogKow: 5,
        flags: []
      },
      {
        qsarClass: 'Halopyrdines ',
        organism: 'Daphnid',
        duration: '48-hr',
        endpoint: 'LC50',
        concentration: 0.688319385051727,
        maxLogKow: 5,
        flags: []
      },
      {
        qsarClass: 'Halopyrdines ',
        organism: 'Fish',
        duration: '',
        endpoint: 'ChV',
        concentration: 0.0153503445908427,
        maxLogKow: 8,
        flags: []
      },
      {
        qsarClass: 'Halopyrdines ',
        organism: 'Daphnid',
        duration: '',
        endpoint: 'ChV',
        concentration: 0.00704326527193189,
        maxLogKow: 8,
        flags: [
          'The toxicity value was estimated through application of acute-to-chronic ratios per methods outlined in the ECOSAR Methodology provided in the ECOSAR Help Documents.'
        ]
      }
    ],
    output:
      'SMILES : CCOP(=S)(OCC)Oc1nc(c(cc1Cl)Cl)Cl\nMOL FOR: C9 H11 CL3 N1 O3 P1 S1 \nMOL WT : 350.59\nLog Kow: 5.108      (EPISuite Kowwin v1.68 Estimate)\nLog Kow: 4.960      (User Entered)\nLog Kow: 4.96       (PhysProp DB exp value - for comparison only)\nMelt Pt: 42.00      (deg C, User Entered for Wat Sol estimate)\nMelt Pt: 42.00      (deg C, PhysProp DB exp value for Wat Sol est)\nWat Sol: 1.656      (mg/L, EPISuite WSKowwin v1.43 Estimate)\nWat Sol: 1.656      (mg/L, User Entered)\nWat Sol: 1.120      (mg/L, PhysProp DB exp value)\n\n--------------------------------------\nValues used to Generate ECOSAR Profile\n--------------------------------------\nLog Kow: 4.960      (User Entered)\nWat Sol: 1.656      (mg/L, User Entered)\n\n\n------------------------------------------------\nAvailable Measured Data from ECOSAR Training Set\n------------------------------------------------\n\n                                           Measured\nCAS No       Organism    Duration   End Pt mg/L (ppm) Ecosar Class                Reference\n===========  ==========  ========== ====== ========== =========================== =========================\n2921882      Mysid       96h         LC50  0.00003    Esters, monothiophosphate   OPP Pesticide Ecotoxicity DB\n2921882      Mysid       96h         LC50  0.00004    Esters, monothiophosphate   OPP Pesticide Ecotoxicity DB\n2921882      Daphnid                 ChV   0.00005    Esters, monothiophosphate   OPP Pesticide Ecotoxicity DB\n2921882      Daphnid     48h         LC50  0.0001     Esters, monothiophosphate   OPP Pesticide Ecotoxicity DB\n2921882      Fish (SW)   96h         LC50  0.00042    Esters, monothiophosphate   OPP Pesticide Ecotoxicity DB\n2921882      Fish (SW)   96h         LC50  0.00051    Esters, monothiophosphate   OPP Pesticide Ecotoxicity DB\n2921882      Fish                    ChV   0.0008     Esters, monothiophosphate   OPP Pesticide Ecotoxicity DB\n2921882      Fish (SW)   96h         LC50  0.0013     Esters, monothiophosphate   OPP Pesticide Ecotoxicity DB\n2921882      Daphnid     48h         LC50  0.0017     Esters, monothiophosphate   OPP Pesticide Ecotoxicity DB\n2921882      Fish (SW)   96h         LC50  0.0017     Esters, monothiophosphate   OPP Pesticide Ecotoxicity DB\n2921882      Fish (SW)   96h         LC50  0.0042     Esters, monothiophosphate   OPP Pesticide Ecotoxicity DB\n2921882      Fish        96h         LC50  0.0058     Esters, monothiophosphate   OPP Pesticide Ecotoxicity DB\n2921882      Fish        96h         LC50  0.008      Esters, monothiophosphate   OPP Pesticide Ecotoxicity DB\n2921882      Fish        96h         LC50  0.02       Esters, monothiophosphate   OPP Pesticide Ecotoxicity DB\n2921882      Fish        96h         LC50  0.2        Esters, monothiophosphate   DUL\n2921882      Fish        96h         LC50  0.2        Esters, monothiophosphate   OPP Pesticide Ecotoxicity DB\n2921882      Fish (SW)   96h         LC50  0.27       Esters, monothiophosphate   OPP Pesticide Ecotoxicity DB\n2921882      Green Algae (SW) 96h         EC50  0.3        Esters, monothiophosphate   OPP Pesticide Ecotoxicity DB\n2921882      Fish        96h         LC50  0.5        Esters, monothiophosphate   DUL;\u003ESH2O (solvent:DMF)\n2921882      Fish (SW)   96h         LC50  0.88       Esters, monothiophosphate   Zaroogian et al., 1985\n\n---------------------------------------\nECOSAR v2.20 Class-specific Estimations\n---------------------------------------\nEsters, Monothiophosphates\nHalopyrdines \n\n ******************************************************************************\n | Not Related to an Existing ECOSAR Class Definition                         |\n |                                                                            |\n | Estimates provided below use the Neutral Organics QSAR equations which     |\n | represent baseline toxicity potential (minimum toxicity) assuming a simple |\n | non-polar narcosis model.  Without empirical data on structurally similar  |\n | chemicals, it is uncertain if this substance will present significantly    |\n | higher toxicity above baseline estimates.                                  |\n ******************************************************************************\n\n                                                                    Predicted\nECOSAR Class                 Organism            Duration  End Pt   mg/L (ppm)\n===========================  ==================  ========  ======   ==========\nNeutral Organics           : Fish                96-hr     LC50        0.632\nNeutral Organics           : Daphnid             48-hr     LC50        0.472\nNeutral Organics           : Green Algae         96-hr     EC50        1.088\nNeutral Organics           : Fish                          ChV         0.085\nNeutral Organics           : Daphnid                       ChV         0.098\nNeutral Organics           : Green Algae                   ChV         0.524\nNeutral Organics           : Fish (SW)           96-hr     LC50        0.810\nNeutral Organics           : Mysid               96-hr     LC50        0.081\nNeutral Organics           : Fish (SW)                     ChV         0.536\nNeutral Organics           : Mysid (SW)                    ChV         0.003\nNeutral Organics           : Earthworm           14-day    LC50      300.637 *\n\nEsters, Monothiophosphates : Fish                96-hr     LC50        0.051\nEsters, Monothiophosphates : Daphnid             48-hr     LC50     0.000247\nEsters, Monothiophosphates : Green Algae         96-hr     EC50        0.214\nEsters, Monothiophosphates : Fish                          ChV         0.008\nEsters, Monothiophosphates : Daphnid                       ChV      4.11e-05\nEsters, Monothiophosphates : Green Algae                   ChV         0.095 !\nEsters, Monothiophosphates : Fish (SW)           96-hr     LC50        0.092\n\nHalopyrdines               : Fish                96-hr     LC50        0.703\nHalopyrdines               : Daphnid             48-hr     LC50        0.688\nHalopyrdines               : Fish                          ChV         0.015\nHalopyrdines               : Daphnid                       ChV         0.007 !\n\n Note:  * = asterisk designates: Chemical may not be soluble enough to\n        measure this predicted effect. If the effect level exceeds the\n        water solubility by 10X, typically no effects at saturation (NES)\n        are reported.\n\n NOTE:  ! = exclamation designates: The toxicity value was estimated through\n            application of acute-to-chronic ratios per methods outlined in\n            the ECOSAR Methodology Document provided in the ECOSAR Help Menu.\n \n------------------------------\nClass Specific LogKow Cut-Offs\n------------------------------\nIf the log Kow of the chemical is greater than the endpoint specific cut-offs\npresented below, then no effects at saturation are expected for those endpoints.\n\nNeutral Organics:\n----------------\nMaximum LogKow: 5.0 (Fish 96-hr LC50; Daphnid LC50, Mysid LC50)\nMaximum LogKow: 6.0 (Earthworm LC50)\nMaximum LogKow: 6.4 (Green Algae EC50)\nMaximum LogKow: 8.0 (ChV)\n\nEsters, Monothiophosphates:\n--------------------------\nMaximum LogKow: 5.0 (LC50)\nMaximum LogKow: 6.4 (EC50)\nMaximum LogKow: 8.0 (ChV)\n\nHalopyrdines :\n-------------\nMaximum LogKow: 5.0 (LC50)\nMaximum LogKow: 6.4 (EC50)\nMaximum LogKow: 8.0 (ChV)\n\n\n',
    alerts: [
      'Not Related to an existing ECOSAR class definition. Provided estimates use the neutral organics QSAR equations which represent baseline toxicity potential (minimum toxicity) assuming a simple non-polar narcosis model. Without empirical data on structurally similar chemicals, it is uncertain if this substance will present significantly higher toxicity above baseline estimates.'
    ]
  },
  logKowAnalogs: ['002921-88-2', '005598-13-0'],
  analogs: ['002921-88-2', '005598-13-0']
}
