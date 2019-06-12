
class OwnCache {
    public static readonly Instance: OwnCache = new OwnCache();

    // 对象，key为string，存放的值为string
    private _items: {[key: string]: string} = {};

    // 配置构造函数私有，外部不可访问
    private OwnCache() {

    }

    set(key: string, value: string) {
        this._items[key] = value;
        console.log(`set cache with key: '${key}', value: '${value}'`);
    }

    get(key: string): string {
        let value = this._items[key];
        console.log(`get cache value: '${value}' with key: '${key}'`);
        return value;
    }
};

OwnCache.Instance.set('name', 'Tom');
OwnCache.Instance.get('name');

/**
 * 抛出问题：
 *  1、TS class 默认属性访问权限
 *
 * */
