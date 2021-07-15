import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Tree, Switch, Popover, Button, Input } from 'antd';
import { CarryOutOutlined, FormOutlined } from '@ant-design/icons';

const Demo = () => {
  const [showLine, setShowLine] = useState(true);
  const [showIcon, setShowIcon] = useState(false);
  const [showLeafIcon, setShowLeafIcon] = useState(true);
  const treeRef = useRef();

  const onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  };

  const onSetLeafIcon = checked => {
    setShowLeafIcon(checked);
    setShowLine({
      showLeafIcon: checked
    });
  };

  const onSetShowLine = checked => {
    setShowLine(
      checked
        ? {
            showLeafIcon
          }
        : false
    );
  };

  // 全选节点
  const handleSelectAll = node => {
    console.log('handleSelectAll node:', node);
  };

  // 取消全选
  const handleUnSelectAll = node => {
    console.log('handleUnSelectAll node:', node);
  };

  // 搜索
  const handleSearch = val => {
    console.log('handleSearch val:', val);

    // 跳转至指定节点
    console.log('handleSearch treeRef:', treeRef);
    if (treeRef.current) {
      treeRef.current.scrollTo({
        key: '0-8-0'
      });
    }
  };

  const getTreeKeys = (list, targetKeys = []) => {
    list.forEach(item => {
      targetKeys.push(item.key);

      if (item.children && item.children.length > 0) {
        getTreeKeys(item.children, targetKeys);
      }
    });

    return targetKeys;
  };

  const renderTitle = title => {
    return (
      <Popover
        title={
          <span style={{ fontSize: '14px' }}>
            批量操作[
            <span style={{ color: '#ff4d4f', paddingLeft: '5px' }}>
              {title}
            </span>
            ]
          </span>
        }
        content={
          <span
            style={{
              display: 'inline-flex',
              justifyContent: 'space-between',
              width: '100%'
            }}
          >
            <Button type="primary" onClick={() => handleSelectAll({})}>
              选择节点
            </Button>
            <Button
              type="dashed"
              className="m-l-sm"
              onClick={() => handleUnSelectAll({})}
            >
              取消节点
            </Button>
          </span>
        }
      >
        <div>{title}</div>
      </Popover>
    );
  };

  const treeData = [
    {
      title: renderTitle('parent 1'),
      key: '0-0',
      icon: <CarryOutOutlined />,
      children: [
        {
          title: renderTitle('parent 1-0'),
          key: '0-0-0',
          icon: <CarryOutOutlined />,
          children: [
            {
              title: renderTitle('leaf'),
              key: '0-0-0-0',
              icon: <CarryOutOutlined />
            },
            {
              title: renderTitle('leaf'),
              key: '0-0-0-1',
              icon: <CarryOutOutlined />
            },
            {
              title: renderTitle('leaf'),
              key: '0-0-0-2',
              icon: <CarryOutOutlined />
            }
          ]
        },
        {
          title: renderTitle('parent 1-1'),
          key: '0-0-1',
          icon: <CarryOutOutlined />,
          children: [
            {
              title: renderTitle('leaf'),
              key: '0-0-1-0',
              icon: <CarryOutOutlined />
            }
          ]
        },
        {
          title: renderTitle('parent 1-2'),
          key: '0-0-2',
          icon: <CarryOutOutlined />,
          children: [
            {
              title: renderTitle('leaf'),
              key: '0-0-2-0',
              icon: <CarryOutOutlined />
            },
            {
              title: renderTitle('leaf'),
              key: '0-0-2-1',
              icon: <CarryOutOutlined />,
              switcherIcon: <FormOutlined />
            }
          ]
        }
      ]
    },
    {
      title: renderTitle('parent 2'),
      key: '0-1',
      icon: <CarryOutOutlined />,
      children: [
        {
          title: renderTitle('parent 2-0'),
          key: '0-1-0',
          icon: <CarryOutOutlined />,
          children: [
            {
              title: renderTitle('leaf'),
              key: '0-1-0-0',
              icon: <CarryOutOutlined />
            },
            {
              title: renderTitle('leaf'),
              key: '0-1-0-1',
              icon: <CarryOutOutlined />
            }
          ]
        }
      ]
    },
    {
      title: renderTitle('parent 3'),
      key: '0-2',
      icon: <CarryOutOutlined />,
      children: [
        {
          title: renderTitle('parent 3-0'),
          key: '0-2-0',
          icon: <CarryOutOutlined />,
          children: [
            {
              title: renderTitle('leaf'),
              key: '0-2-0-0',
              icon: <CarryOutOutlined />
            },
            {
              title: renderTitle('leaf'),
              key: '0-2-0-1',
              icon: <CarryOutOutlined />
            }
          ]
        }
      ]
    },
    {
      title: renderTitle('parent 4'),
      key: '0-3',
      icon: <CarryOutOutlined />,
      children: [
        {
          title: renderTitle('parent 4-0'),
          key: '0-3-0',
          icon: <CarryOutOutlined />,
          children: [
            {
              title: renderTitle('leaf'),
              key: '0-3-0-0',
              icon: <CarryOutOutlined />
            },
            {
              title: renderTitle('leaf'),
              key: '0-3-0-1',
              icon: <CarryOutOutlined />
            }
          ]
        }
      ]
    },
    {
      title: renderTitle('parent 5'),
      key: '0-4',
      icon: <CarryOutOutlined />,
      children: [
        {
          title: renderTitle('parent 5-0'),
          key: '0-4-0',
          icon: <CarryOutOutlined />,
          children: [
            {
              title: renderTitle('leaf'),
              key: '0-4-0-0',
              icon: <CarryOutOutlined />
            },
            {
              title: renderTitle('leaf'),
              key: '0-4-0-1',
              icon: <CarryOutOutlined />
            }
          ]
        }
      ]
    },
    {
      title: renderTitle('parent 6'),
      key: '0-5',
      icon: <CarryOutOutlined />,
      children: [
        {
          title: renderTitle('parent 6-0'),
          key: '0-5-0',
          icon: <CarryOutOutlined />,
          children: [
            {
              title: renderTitle('leaf'),
              key: '0-5-0-0',
              icon: <CarryOutOutlined />
            },
            {
              title: renderTitle('leaf'),
              key: '0-5-0-1',
              icon: <CarryOutOutlined />
            }
          ]
        }
      ]
    },
    {
      title: renderTitle('parent 7'),
      key: '0-6',
      icon: <CarryOutOutlined />,
      children: [
        {
          title: renderTitle('parent 7-0'),
          key: '0-6-0',
          icon: <CarryOutOutlined />,
          children: [
            {
              title: renderTitle('leaf'),
              key: '0-6-0-0',
              icon: <CarryOutOutlined />
            },
            {
              title: renderTitle('leaf'),
              key: '0-6-0-1',
              icon: <CarryOutOutlined />
            }
          ]
        }
      ]
    },
    {
      title: renderTitle('parent 8'),
      key: '0-7',
      icon: <CarryOutOutlined />,
      children: [
        {
          title: renderTitle('parent 8-0'),
          key: '0-7-0',
          icon: <CarryOutOutlined />,
          children: [
            {
              title: renderTitle('leaf'),
              key: '0-7-0-0',
              icon: <CarryOutOutlined />
            },
            {
              title: renderTitle('leaf'),
              key: '0-7-0-1',
              icon: <CarryOutOutlined />
            }
          ]
        }
      ]
    },
    {
      title: renderTitle('parent 9'),
      key: '0-8',
      icon: <CarryOutOutlined />,
      children: [
        {
          title: renderTitle('parent 8-0'),
          key: '0-8-0',
          icon: <CarryOutOutlined />,
          children: [
            {
              title: renderTitle('leaf'),
              key: '0-8-0-0',
              icon: <CarryOutOutlined />
            },
            {
              title: renderTitle('leaf'),
              key: '0-8-0-1',
              icon: <CarryOutOutlined />
            }
          ]
        }
      ]
    }
  ];

  const expandKeys = getTreeKeys(treeData);

  return (
    <div>
      <div
        style={{
          marginBottom: 16
        }}
      >
        showLine: <Switch checked={!!showLine} onChange={onSetShowLine} />
        <br />
        <br />
        showIcon: <Switch checked={showIcon} onChange={setShowIcon} />
        <br />
        <br />
        showLeafIcon: <Switch checked={showLeafIcon} onChange={onSetLeafIcon} />
        <br />
        <Input.Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="middle"
          onSearch={handleSearch}
          style={{ marginTop: '20px' }}
        />
      </div>
      <Tree
        ref={treeRef}
        checkable
        showLine={showLine}
        showIcon={showIcon}
        defaultExpandedKeys={expandKeys}
        onSelect={onSelect}
        treeData={treeData}
        height={250}
      />
    </div>
  );
};

ReactDOM.render(<Demo />, document.getElementById('container'));
