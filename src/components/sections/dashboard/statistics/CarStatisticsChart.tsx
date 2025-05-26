import * as echarts from 'echarts/core';
import { TooltipComponent, GridComponent } from 'echarts/components';
import { LineChart } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import { MutableRefObject, useMemo } from 'react';
import EChartsReactCore from 'echarts-for-react/lib/core';
import { alpha, useTheme } from '@mui/material';
import { graphic } from 'echarts';
import ReactEchart from 'components/base/ReactEchart';
import { EChartsOption } from 'echarts-for-react';
import { CallbackDataParams } from 'echarts/types/dist/shared.js';

echarts.use([TooltipComponent, GridComponent, LineChart, CanvasRenderer, UniversalTransition]);

interface ChartProps {
  areaChartRef: MutableRefObject<EChartsReactCore | null>;
  data: number[] | null;
  xAxisLabels: string[];
  style?: {
    height?: number;
    width?: number;
  };
}

const CarStatisticsChart = ({ areaChartRef, data, xAxisLabels, style }: ChartProps) => {
  const theme = useTheme();

  const chartOption = useMemo(() => {
    const areaChartOption: EChartsOption = {
      tooltip: {
        trigger: 'axis',
        confine: true,
        axisPointer: {
          type: 'line',
        },
        backgroundColor: theme.palette.neutral.dark,
        textStyle: {
          color: theme.palette.common.white,
          fontSize: theme.typography.fontSize / 1.4,
        },
        formatter: (params: CallbackDataParams[]) => {
          const name = params[0]?.name;
          const value = params[0].value;
          const marker = `<span style="display: inline-block; border-radius: 50%; height: 0.5rem; width: 0.5rem; background:${theme.palette.warning.main}"></span>`;

          return `<div style="width: 3rem; height: 1.875rem;">
                  <strong>${name}</strong> <br/> 
                  ${marker} ${value}
               </div>`;
        },
        padding: [2, 9, 2, 8],
        extraCssText: 'border-radius: 0.3125rem;',
      },

      xAxis: {
        type: 'category',
        data: xAxisLabels, // 🔥 Aqui agora usa os labels dinâmicos
        axisTick: {
          show: true,
          inside: true,
          alignWithLabel: true,
          length: 300,
          lineStyle: {
            color: theme.palette.neutral.lighter,
          },
        },

        boundaryGap: false,
        splitLine: {
          show: false,
        },
        splitArea: {
          show: false,
        },

        axisLine: {
          show: false,
        },
        axisLabel: {
          color: theme.palette.grey.A200,
          align: 'center',
          fontFamily: theme.typography.caption.fontFamily,
          fontSize: theme.typography.fontSize,
          fontWeight: theme.typography.fontWeightRegular,
        },
      },

      yAxis: {
        splitLine: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
      },

      grid: {
        left: '-2%',
        right: '-5%',
        top: '10',
        bottom: '12%',
      },
      series: [
        {
          data: data || [],
          type: 'line',
          smooth: true,
          symbol: 'none',
          lineStyle: { width: 1, color: theme.palette.warning.main },
          areaStyle: {
            color: new graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: alpha(theme.palette.warning.main, 0.24),
              },
              {
                offset: 1,
                color: alpha(theme.palette.error.dark, 0),
              },
            ]),
          },
        },
      ],
    };
    return areaChartOption;
  }, [data, xAxisLabels, theme]);

  return <ReactEchart echarts={echarts} option={chartOption} ref={areaChartRef} style={style} />;
};

export default CarStatisticsChart;
